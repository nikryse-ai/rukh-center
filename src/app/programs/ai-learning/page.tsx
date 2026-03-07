import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Обучение ИИ 8–16 лет | Молодёжный центр «Рух»',
  description: 'Мастер-класс по нейросетям для детей и подростков 8–16 лет. Промпты, генерация видео и аудио, российские и зарубежные ИИ. Казань, молодёжный центр «Рух».',
}

const modules = [
  { emoji: '🧠', title: 'Что такое нейросети',      desc: 'От основ до реальных кейсов — разберёмся, как ИИ устроен и почему это важно прямо сейчас.',               photo: '/AImod-1.jpg' },
  { emoji: '🍬', title: 'Пробуем на практике',       desc: 'Работаем с разными инструментами ИИ в реальном времени — каждый сам у компьютера.',                       photo: '/AImod-2.jpg' },
  { emoji: '🇷🇺', title: 'Российские разработки',  desc: 'YandexGPT, Кандинский, GigaChat и другие — отечественные нейросети, которые уже используют миллионы.',     photo: '/AImod-3.jpg' },
  { emoji: '🌍', title: 'Зарубежные технологии',     desc: 'ChatGPT, Midjourney, Sora — быстро и по делу знакомимся с лучшими мировыми инструментами.',                photo: '/AImod-4.jpg' },
  { emoji: '✍️', title: 'Пишем правильные промпты', desc: 'Именно от промпта зависит 90% результата. Учимся общаться с ИИ так, чтобы он работал на тебя.',            photo: '/AImod-5.jpg' },
  { emoji: '🎥', title: 'Генерируем видео и аудио',  desc: 'Своими руками создаём контент, который раньше требовал дней студийной работы — за несколько минут.',       photo: '/AImod-6.jpg' },
]

const workshopPoints = [
  { emoji: '🔹', title: 'База нейросетей',  desc: 'Разберёмся, как они думают и как с ними говорить на одном языке.' },
  { emoji: '🎨', title: 'AI-дизайн',        desc: 'Научимся генерировать визуал, который раньше требовал часов работы профессионального дизайнера.' },
  { emoji: '⚡', title: 'Практика',          desc: 'Никакой воды — только реальные инструменты. Каждый участник получит личный результат прямо на уроке.' },
]


export default function AiLearningPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="ai-hero">
        <div className="ai-particles" />
        <div className="ai-glow-1" />
        <div className="ai-glow-2" />
        <div className="ai-hero-deco ai-hero-deco-1">🤖</div>
        <div className="ai-hero-deco ai-hero-deco-2">🚀</div>
        <div className="ai-hero-deco ai-hero-deco-3">✨</div>
        <div className="container">
          <div className="ai-hero-inner">
            <Link href="/#programs" className="ai-back">← Назад к программам</Link>
            <div className="ai-tag">🤖 Мастер-класс по ИИ</div>
            <h1 className="ai-h1">
              Погружение в мир<br />
              <em>нейросетей</em>
            </h1>
            <p className="ai-desc">
              Искусственный интеллект уже меняет правила игры. За 1,5 часа ты разберёшься
              с нейросетями, напишешь правильные промпты и создашь видео и аудио с помощью
              ИИ — своими руками, прямо на занятии.
            </p>
            <div className="ai-badges">
              <span className="ai-badge">🍀 Возраст: 8–16 лет</span>
              <span className="ai-badge">⏳ Длительность: 1,5 часа</span>
              <span className="ai-badge">💰 1 500 ₽</span>
              <span className="ai-badge">👥 Мест ограничено</span>
            </div>
            <div className="ai-btns">
              <Link href="/#contact" className="ai-btn-main">Записаться — 1 500 ₽</Link>
              <a href="tel:+79274441844" className="ai-btn-outline">📞 Позвонить</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY ── */}
      <section className="ai-why">
        <div className="ai-why-glow" />
        <div className="container">
          <div className="ai-why-inner">
            <div className="ai-why-text">
              <div className="ai-sec-tag ai-sec-tag--accent">🔥 Почему сейчас?</div>
              <h2 className="ai-why-h2">
                Пока одни боятся — <span>другие уже используют</span>
              </h2>
              <p className="ai-why-p">
                ИИ уже меняет правила игры, а ты всё ещё думаешь, что это сложно?
                Пришло время перестать бояться и начать использовать нейросети на полную катушку!
              </p>
              <p className="ai-why-p">
                Хватит просто наблюдать, как нейросети меняют мир. Пора их возглавить!
                Пока одни боятся, что ИИ заменит людей, другие уже используют его, чтобы
                работать меньше, а создавать — больше. Хочешь быть в числе вторых?
              </p>
            </div>
            <div className="ai-why-cards">
              <div className="ai-why-card">
                <span className="ai-why-card-emoji">🤯</span>
                <div className="ai-why-card-text">Нейросети — это просто, доступно и невероятно увлекательно</div>
              </div>
              <div className="ai-why-card">
                <span className="ai-why-card-emoji">🎨</span>
                <div className="ai-why-card-text">Создавай контент, который раньше требовал дней работы</div>
              </div>
              <div className="ai-why-card">
                <span className="ai-why-card-emoji">😄</span>
                <div className="ai-why-card-text">Отлично проведёшь время в кругу единомышленников</div>
              </div>
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
            {modules.map((m) => (
              <div className="ai-mod-card" key={m.title}>
                <Image src={m.photo} alt={m.title} fill sizes="(max-width: 767px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                <div className="ai-mod-overlay" />
                <div className="ai-mod-always">
                  <span className="ai-mod-emoji">{m.emoji}</span>
                  <div className="ai-mod-title">{m.title}</div>
                </div>
                <div className="ai-mod-hover">
                  <span className="ai-mod-emoji-h">{m.emoji}</span>
                  <div className="ai-mod-title-h">{m.title}</div>
                  <div className="ai-mod-desc">{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKSHOP ── */}
      <section className="ai-workshop">
        <div className="container">
          <div className="ai-workshop-inner">
            <div className="ai-workshop-left">
              <div className="ai-sec-tag">🎓 Формат воркшопа</div>
              <h2 className="ai-workshop-h2">Это не лекция — это воркшоп</h2>
              <p className="ai-workshop-desc">
                Приглашаем на интенсивный мастер-класс по нейросетям, где мы за 2 часа пройдём
                путь от «что это такое?» до готового крутого результата. Никакой воды —
                только реальные инструменты.
              </p>
              <div className="ai-workshop-note">
                <span>🎨</span>
                <span>Главная фишка: каждый участник получит свой личный результат прямо во время урока!</span>
              </div>
            </div>
            <div className="ai-workshop-points">
              {workshopPoints.map((pt) => (
                <div className="ai-workshop-point" key={pt.title}>
                  <span className="ai-workshop-point-emoji">{pt.emoji}</span>
                  <div>
                    <div className="ai-workshop-point-title">{pt.title}</div>
                    <div className="ai-workshop-point-desc">{pt.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INFO STRIP ── */}
      <section className="ai-info">
        <div className="container">
          <div className="ai-info-grid">
            {[
              { emoji: '🍀', val: '8–16 лет',             label: 'Возраст участников' },
              { emoji: '⏳', val: '1,5 часа',             label: 'Длительность' },
              { emoji: '💰', val: '1 500 ₽',              label: 'Стоимость' },
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
                чтобы каждый мог попробовать и задать вопрос. Запись уже открыта!
                Пиши в личные сообщения или звони — забронируем тебе место. 📩
              </p>
            </div>
            <div className="ai-cta-right">
              <a href="tel:+79274441844" className="ai-cta-phone">+7 (927) 444-18-44</a>
              <span className="ai-cta-hint">Пн–Вс · 8:00 – 22:00</span>
              <Link href="/#contact" className="ai-btn-main">Записаться</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
