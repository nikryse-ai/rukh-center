import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, phone, telegram } = await req.json()

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
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

  if (!res.ok) {
    return NextResponse.json({ error: 'Telegram error' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
