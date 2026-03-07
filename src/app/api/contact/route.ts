import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, phone, telegram } = await req.json()

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  console.log('Contact API called', { name, phone, telegram })
  console.log('Token set:', !!token, 'ChatId set:', !!chatId)

  if (!token || !chatId) {
    console.error('Missing env vars')
    return NextResponse.json({ error: 'Not configured' }, { status: 500 })
  }

  const text =
    `📩 Новая заявка с сайта РУХ\n\n` +
    `👤 Имя: ${name}\n` +
    `📞 Телефон: ${phone}\n` +
    `✈️ Telegram: ${telegram || '—'}`

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text }),
  })

  const data = await res.json()
  console.log('Telegram response:', JSON.stringify(data))

  if (!res.ok) {
    return NextResponse.json({ error: 'Telegram error', detail: data }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
