import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Обучение ИИ 8–16 лет | Молодёжный центр «Рух»',
  description: 'Мастер-класс по нейросетям для детей и подростков 8–16 лет. Промпты, генерация видео и аудио, российские и зарубежные ИИ. Казань, молодёжный центр «Рух».',
}

const modules = [
  { emoji: '🧠', title: 'Что такое нейросети',       desc: 'От основ до реальных кейсов — разберёмся, как ИИ устроен и почему это важно прямо сейчас.' },
  { emoji: '🍬', title: 'Пробуем на практике',        desc: 'Работаем с разными инструментами ИИ в реальном времени — каждый сам у компьютера.' },
  { emoji: '🇷🇺', title: 'Российские разработки',   desc: 'YandexGPT, Кандинский, GigaChat и другие — отечественные нейросети, которые уже используют миллионы.' },
  { emoji: '🌍', title: 'Зарубежные технологии',      desc: 'ChatGPT, Midjourney, Sora — быстро и по делу знакомимся с лучшими мировыми инструментами.' },
  { emoji: '✍️', title: 'Пишем правильные промпты',  desc: 'Именно от промпта зависит 90% результата. Учимся общаться с ИИ так, чтобы он работал на тебя.' },
  { emoji: '🎥', title: 'Генерируем видео и аудио',   desc: 'Своими руками создаём контент, который раньше требовал дней студийной работы — за несколько минут.' },
]

export default function AiLearningPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="ai-hero">
        <div className="ai-particles" />
        <div className="ai-glow-1" />
        <div className="ai-glow-2" />
        <div className="container">
          <div className="ai-hero-inner">
            <Link href="/#programs" className="ai-back">← Назад к программам</Link>
            <div className="ai-tag">🤖 Мастер-класс по ИИ</div>
            <h1 className="ai-h1">
              Нейросети — это<br />
              <em>просто и мощно</em>
            </h1>
            <p className="ai-desc">
              За 1,5 часа ты разберёшься с нейросетями, напишешь правильные промпты
              и создашь видео и аудио с помощью ИИ — своими руками, прямо на занятии.
            </p>
            <div className="ai-badges">
              <span className="ai-badge">🎯 Возраст: 8–16 лет</span>
              <span className="ai-badge">⏳ Длительность: 1,5 часа</span>
              <span className="ai-badge">💰 1 500 ₽</span>
              <span className="ai-badge">👥 Мест ограниченно</span>
            </div>
            <div className="ai-btns">
              <Link href="/#contact" className="ai-btn-main">Записаться — 1 500 ₽</Link>
              <a href="tel:+79274441844" className="ai-btn-outline">📞 Позвонить</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODULES ── */}
      <section className="ai-modules">
        <div className="container">
          <div className="ai-sec-header">
            <div className="ai-sec-tag">✨ Программа мастер-класса</div>
            <h2 className="ai-sec-h2">Что ты узнаешь за 1,5 часа</h2>
            <p className="ai-sec-sub">6 блоков — от теории до реального создания контента с помощью ИИ</p>
          </div>
          <div className="ai-modules-grid">
            {modules.map((m, i) => (
              <div className="ai-mod-card" key={m.title}>
                <div className="ai-mod-num">0{i + 1}</div>
                <span className="ai-mod-emoji">{m.emoji}</span>
                <div className="ai-mod-title">{m.title}</div>
                <div className="ai-mod-desc">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INFO STRIP ── */}
      <section className="ai-info">
        <div className="container">
          <div className="ai-info-grid">
            {[
              { emoji: '🎯', val: '8–16 лет',  label: 'Возраст участников' },
              { emoji: '⏳', val: '1,5 часа',  label: 'Длительность' },
              { emoji: '💰', val: '1 500 ₽',   label: 'Стоимость' },
              { emoji: '📍', val: 'ул. Павлюхина, 108Бк2', label: 'Казань, МЦ «Рух»' },
            ].map((it) => (
              <div className="ai-info-item" key={it.label}>
                <span className="ai-info-emoji">{it.emoji}</span>
                <div className="ai-info-val">{it.val}</div>
                <div className="ai-info-label">{it.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ai-cta">
        <div className="container">
          <div className="ai-cta-inner">
            <div>
              <h2 className="ai-cta-h2">Мест мало — записывайся сейчас 🔔</h2>
              <p className="ai-cta-p">
                Мастер-класс проходит в формате живого общения — небольшая группа,
                чтобы каждый мог попробовать и задать вопрос. Не откладывай!
              </p>
            </div>
            <div className="ai-cta-right">
              <a href="tel:+79274441844" className="ai-cta-phone">+7 (927) 444-18-44</a>
              <span className="ai-cta-hint">Пн–Сб · 8:00 – 22:00</span>
              <Link href="/#contact" className="ai-btn-main">Записаться</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
