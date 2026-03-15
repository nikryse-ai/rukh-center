import type { NewsPost } from '@/components/sections/NewsCard'

function formatDate(datetime: string): string {
  const d = new Date(datetime)
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
}

function stripHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .trim()
}

export async function fetchTelegramPosts(channel: string, limit = 6): Promise<NewsPost[]> {
  try {
    const res = await fetch(`https://t.me/s/${channel}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      next: { revalidate: 300 }, // кэш 5 минут
    })

    if (!res.ok) return []

    const html = await res.text()

    // Разбиваем HTML на блоки по каждому сообщению
    const blocks = html.split('<div class="tgme_widget_message_wrap')
    const posts: NewsPost[] = []

    for (const block of blocks) {
      // ID поста
      const idMatch = block.match(/data-post="[^"]+\/(\d+)"/)
      if (!idMatch) continue
      const id = parseInt(idMatch[1])
      const tgUrl = `https://t.me/${channel}/${id}`

      // Фотографии — только из элементов с классом tgme_widget_message_photo
      const photoMatches = [...block.matchAll(/tgme_widget_message_photo[^>]*background-image:url\('([^']+)'\)/g)]
      const photos = photoMatches.map(m => m[1]).filter(Boolean)

      // Видео
      const isVideo = block.includes('tgme_widget_message_video_wrap') || block.includes('message_video')

      // Превью видео если нет других фото
      if (isVideo && photos.length === 0) {
        const thumbMatch = block.match(/tgme_widget_message_video_thumb[^>]*background-image:url\('([^']+)'\)/)
        if (thumbMatch) photos.push(thumbMatch[1])
      }

      // Текст
      const textMatch = block.match(/js-message_text[^>]*>([\s\S]*?)<\/div>/)
      const text = textMatch ? stripHtml(textMatch[1]) : ''

      // Дата
      const dateMatch = block.match(/<time[^>]*datetime="([^"]+)"/)
      const date = dateMatch ? formatDate(dateMatch[1]) : ''

      if (!text && photos.length === 0) continue

      posts.push({ id, date, text, photos, isVideo, tgUrl })
    }

    // Возвращаем последние N постов в обратном хронологическом порядке
    return posts.slice(-limit).reverse()
  } catch {
    return []
  }
}
