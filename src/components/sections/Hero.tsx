import Link from 'next/link'
import Image from 'next/image'

const stats = [
  { value: '2022', label: 'год основания', emoji: '📅', bg: '#B8935A', color: '#fff' },
  { value: '9',    label: 'направлений',   emoji: '🎯', bg: '#3D6B55', color: '#fff' },
  { value: 'Казань', label: 'ул. Павлюхина', emoji: '📍', bg: '#F5ECD9', color: '#2D5140' },
  { value: 'Пн–Сб', label: '8:00 – 22:00',  emoji: '🕐', bg: '#EAF2EC', color: '#2D5140' },
]

export default function Hero() {
  return (
    <section className="hero-section">
        <div className="hero-ring hero-ring-1" />
        <div className="hero-ring hero-ring-2" />
        <div className="hero-ring hero-ring-3" />
        <div className="hero-blob-gold" />
        <div className="hero-blob-green" />
        <div className="hero-deco hd-1">⭐</div>
        <div className="hero-deco hd-2">✨</div>
        <div className="hero-deco hd-3">🌿</div>
        <div className="hero-deco hd-4">💛</div>
        <div className="hero-deco hd-5">✦</div>

        <div className="container">
          <div className="hero-grid">

            {/* Левая колонка — текст */}
            <div className="animate-left visible">
              <span className="hero-tag">Многопрофильный молодёжный центр</span>
              <h1 className="hero-h1">
                Молодёжный центр<br />
                <span className="name">«Рух» 🚀</span>
              </h1>
              <p className="hero-desc">
                Интересные занятия для детей, подростков, взрослых и семей. Расположены в сердце ЖК «Возрождение» Приволжского района Казани.
              </p>
              <div className="hero-btns">
                <Link href="/#programs" className="btn-green">Выбрать направление</Link>
                <Link href="/#contact" className="hero-btn-sec">Записаться</Link>
              </div>
            </div>

            {/* Правая колонка — наклонный коллаж 3 фото */}
            <div className="hero-gallery animate-right visible">

              {/* Фото 1 — большое, верхний левый */}
              <div className="hero-photo hero-photo-1">
                <Image
                  src="/ruh-1.jpg"
                  alt="Молодёжный центр Рух"
                  width={600} height={290}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Фото 2 — меньше, правый верх */}
              <div className="hero-photo hero-photo-2">
                <Image
                  src="/ruh-2.jpg"
                  alt="Занятия в центре Рух"
                  width={400} height={215}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Фото 3 — нижнее, поверх обоих */}
              <div className="hero-photo hero-photo-3">
                <Image
                  src="/ruh-3.jpg"
                  alt="Активности в центре Рух"
                  width={600} height={205}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Бейдж поверх коллажа */}
              <div className="hero-gal-badge">
                <span>2022</span>год основания
              </div>

            </div>
          </div>

          <div className="hero-stats">
            {stats.map((s) => (
              <div
                key={s.label}
                className="hero-stat-card"
                style={{ background: s.bg, color: s.color }}
              >
                <span className="hero-stat-emoji">{s.emoji}</span>
                <div className="hero-stat-value">{s.value}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
