import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Дни рождения и праздники | Молодёжный центр «Рух»',
  description: 'Незабываемый праздник в молодёжном центре «Рух» в Казани. Спорт, квесты, творчество, торт и море веселья для детей и молодёжи.',
}

const included = [
  { emoji: '🥊', title: 'Спортивные мастер-классы', desc: 'Бокс, акробатика или гимнастика на выбор — активное начало праздника!' },
  { emoji: '🎯', title: 'Квесты и эстафеты',         desc: 'Командные игры и весёлые конкурсы с призами для всех гостей.' },
  { emoji: '🎨', title: 'Творческий мастер-класс',   desc: 'Каждый гость создаёт что-то своими руками и забирает с собой.' },
  { emoji: '🍰', title: 'Торт и угощения',            desc: 'Праздничный стол, угощения и торт — всё в лучшем виде.' },
  { emoji: '📸', title: 'Фотозона',                   desc: 'Яркая декорированная фотозона для памятных снимков.' },
  { emoji: '🎁', title: 'Подарки и сувениры',         desc: 'Все гости уходят с подарком — никто не останется без сюрприза.' },
]

const packages = [
  {
    icon: '⚡',
    name: 'Экспресс',
    duration: '2 часа',
    price: 'от 5 000 ₽',
    guests: 'до 15 гостей',
    features: ['Одна активность на выбор', 'Торт и угощения', 'Оформление зала'],
    hot: false,
  },
  {
    icon: '🌟',
    name: 'Стандарт',
    duration: '3 часа',
    price: 'от 8 000 ₽',
    guests: 'до 25 гостей',
    features: ['Две активности', 'Торт, угощения, фотозона', 'Декор зала и музыка', 'Аниматор'],
    hot: true,
  },
  {
    icon: '🏆',
    name: 'VIP',
    duration: '4 часа',
    price: 'от 12 000 ₽',
    guests: 'до 40 гостей',
    features: ['Полная программа', 'Ведущий и диджей', 'Торт + фуршет', 'Полный декор зала', 'Профессиональный фотограф'],
    hot: false,
  },
]

export default function BirthdayPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bd-hero">
        <div className="bd-confetti" />
        <div className="bd-glow" />
        <div className="bd-deco-1">🎉</div>
        <div className="bd-deco-2">🎂</div>
        <div className="bd-deco-3">🎊</div>
        <div className="container">
          <div className="bd-hero-inner">
            <Link href="/#programs" className="bd-back">← Назад к программам</Link>
            <div className="bd-tag">🎉 Дни рождения и праздники</div>
            <h1 className="bd-h1">
              Праздник, который<br />
              <em>запомнится навсегда</em>
            </h1>
            <p className="bd-desc">
              Мы берём на себя всё — от организации до угощений. Ты просто приходишь и веселишься!
              Спорт, квесты, творчество и море эмоций для детей и молодёжи.
            </p>
            <div className="bd-badges">
              <span className="bd-badge">🎂 Любой возраст</span>
              <span className="bd-badge">👥 До 40 гостей</span>
              <span className="bd-badge">⏰ 2–4 часа</span>
              <span className="bd-badge">✅ Всё включено</span>
            </div>
            <div className="bd-btns">
              <Link href="/#contact" className="btn-gold">Забронировать дату</Link>
              <a href="tel:+79274441844" className="bd-btn-outline">📞 Позвонить</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── INCLUDED ── */}
      <section className="bd-included">
        <div className="container">
          <div className="bd-sec-header">
            <div className="bd-sec-tag">✨ В программе праздника</div>
            <h2 className="bd-sec-h2">Что входит в каждый праздник</h2>
            <p className="bd-sec-sub">Весёлая программа, которую вспоминают месяцами</p>
          </div>
          <div className="bd-included-grid">
            {included.map((it) => (
              <div className="bd-inc-card" key={it.title}>
                <span className="bd-inc-emoji">{it.emoji}</span>
                <div className="bd-inc-title">{it.title}</div>
                <div className="bd-inc-desc">{it.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section className="bd-packages">
        <div className="container">
          <div className="bd-sec-header">
            <div className="bd-sec-tag">📦 Пакеты праздника</div>
            <h2 className="bd-sec-h2" style={{ color: 'var(--text-dark)' }}>Выбери свой формат</h2>
            <p className="bd-sec-sub">Три пакета на любой вкус и размер компании</p>
          </div>
          <div className="bd-packages-grid">
            {packages.map((pkg) => (
              <div className={`bd-pkg-card${pkg.hot ? ' hot' : ''}`} key={pkg.name}>
                <span className="bd-pkg-icon">{pkg.icon}</span>
                <div className="bd-pkg-name">{pkg.name}</div>
                <div className="bd-pkg-duration">{pkg.duration}</div>
                <div className="bd-pkg-price">{pkg.price}</div>
                <div className="bd-pkg-guests">{pkg.guests}</div>
                <div className="bd-pkg-divider" />
                <ul className="bd-pkg-features">
                  {pkg.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <Link href="/#contact" className="bd-pkg-cta">Выбрать этот пакет</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bd-cta">
        <div className="bd-cta-blob" />
        <div className="container">
          <div className="bd-cta-inner">
            <div>
              <h2 className="bd-cta-h2">Забронируй дату — мест немного 📅</h2>
              <p className="bd-cta-p">
                Позвони или оставь заявку — мы обсудим детали, программу
                и подберём всё идеально под твой праздник.
              </p>
            </div>
            <div className="bd-cta-right">
              <a href="tel:+79274441844" className="bd-cta-phone">+7 (927) 444-18-44</a>
              <span className="bd-cta-hint">Пн–Сб · 8:00 – 22:00</span>
              <Link href="/#contact" className="btn-gold">Оставить заявку</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
