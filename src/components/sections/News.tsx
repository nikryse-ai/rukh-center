import NewsCard from './NewsCard'
import { fetchTelegramPosts } from '@/lib/telegram'

export default async function News() {
  const posts = await fetchTelegramPosts('ruhclub', 6)

  if (posts.length === 0) return null

  return (
    <section className="news-section" id="news">
      <div className="container">
        <div className="news-title-block animate">
          <h2>Новости 📰</h2>
          <div className="news-title-line" />
          <p>Следи за жизнью центра — события, победы, анонсы</p>
        </div>

        <div className="news-grid">
          {posts.map((post, i) => (
            <div key={post.id} className={`animate delay-${(i % 3) + 1}`}>
              <NewsCard post={post} />
            </div>
          ))}
        </div>

        <div className="news-footer animate">
          <a href="https://t.me/ruhclub" target="_blank" rel="noopener noreferrer" className="news-footer-btn news-footer-btn--tg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/></svg>
            Все новости в Telegram
          </a>
          <a href="https://vk.com/ruhclubkazan" target="_blank" rel="noopener noreferrer" className="news-footer-btn news-footer-btn--vk">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.713-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.254.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.372 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.474-.085.716-.576.716z"/></svg>
            Все новости ВКонтакте
          </a>
        </div>
      </div>
    </section>
  )
}
