import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Коворкинг | Молодёжный центр «Рух»',
  description: 'Коворкинг в молодёжном центре «Рух» в Казани. Аренда рабочего места на час, день или месяц. Высокоскоростной Wi-Fi, оргтехника, переговорные комнаты.',
}

const features = [
  { emoji: '🪑', title: 'Рабочее место',          desc: 'Современные мощные компьютеры, удобные кресла и столы. Аренда на час, день или месяц.' },
  { emoji: '📶', title: 'Высокоскоростной Wi-Fi', desc: 'Стабильный и быстрый интернет без ограничений — для работы, видеозвонков и презентаций.' },
  { emoji: '🖨️', title: 'Оргтехника',             desc: 'Принтер и сканер в свободном доступе. Всё необходимое для офисной работы.' },
  { emoji: '☕', title: 'Зона отдыха и кухня',    desc: 'Комфортная зона для перерывов с кухней. Восстановите силы и вернитесь к задачам.' },
  { emoji: '🤝', title: 'Переговорные комнаты',   desc: 'Отдельные комнаты для встреч, переговоров и презентаций. По предварительной записи.' },
  { emoji: '🎯', title: 'Мероприятия центра',     desc: 'Участие в профильных мероприятиях молодёжного центра: нетворкинг, лекции, воркшопы.' },
]

const gallery = [
  { src: '/CW-1.jpg', label: 'Рабочая зона',       rotate: '-3deg',   mt: '0px' },
  { src: '/CW-2.jpg', label: 'Переговорная',        rotate: '2deg',    mt: '32px' },
  { src: '/CW-3.jpg', label: 'Зона отдыха',         rotate: '-1.5deg', mt: '0px' },
  { src: '/CW-4.jpg', label: 'Рецепция',            rotate: '2.5deg',  mt: '-16px' },
  { src: '/CW-5.jpg', label: 'Рабочие места',       rotate: '-2deg',   mt: '24px' },
  { src: '/CW-6.jpg', label: 'Наше пространство',   rotate: '1.5deg',  mt: '8px' },
]

const pricing = [
  { label: 'Час',    price: '130 ₽',    unit: '/ час',    note: 'Оптимально для разовых задач',          hot: false },
  { label: 'День',   price: '1 200 ₽',  unit: '/ день',   note: '8:00 – 22:00, полный рабочий день',     hot: true },
  { label: 'Месяц',  price: '15 000 ₽', unit: '/ месяц',  note: '30 дней, максимальная экономия',        hot: false },
]

export default function CoworkingPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="cw-hero">
        <div className="cw-hero-grid" />
        <div className="cw-hero-orb cw-hero-orb-1" />
        <div className="cw-hero-orb cw-hero-orb-2" />
        <div className="cw-hero-orb cw-hero-orb-3" />
        <div className="cw-hero-deco cw-hero-deco-1">💼</div>
        <div className="cw-hero-deco cw-hero-deco-2">✨</div>
        <div className="cw-hero-deco cw-hero-deco-3">🚀</div>
        <div className="container">
          <div className="cw-hero-inner">
            <Link href="/#programs" className="cw-back-link">← Назад к программам</Link>
            <div className="cw-hero-tag">💼 Коворкинг РУХ</div>
            <h1 className="cw-hero-h1">
              Продуктивная работа<br />
              <em>без лишних затрат</em>
            </h1>
            <p className="cw-hero-desc">
              Ищете комфортное рабочее пространство без долгосрочных обязательств?
              Коворкинг молодёжного центра «Рух» — идеальное решение для фрилансеров,
              стартаперов и удалённых сотрудников.
            </p>
            <div className="cw-hero-badges">
              <span className="cw-badge">🕐 8:00 – 22:00</span>
              <span className="cw-badge">💻 Мощные ПК</span>
              <span className="cw-badge">📶 Быстрый Wi-Fi</span>
              <span className="cw-badge">📍 ЖК «Возрождение»</span>
            </div>
            <div className="cw-hero-btns">
              <Link href="/#contact" className="cw-btn-main">Забронировать место</Link>
              <a href="tel:+79274441844" className="cw-btn-outline">📞 +7 (927) 444-18-44</a>
            </div>
          </div>
        </div>
        <div className="cw-hero-wave">
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,35 C360,70 720,0 1080,35 C1260,52 1380,18 1440,35 L1440,70 L0,70 Z" fill="#0F1240" />
          </svg>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="cw-features">
        <div className="cw-features-glow" />
        <div className="container">
          <div className="cw-sec-header">
            <div className="cw-sec-tag">⚡ Что мы предлагаем</div>
            <h2 className="cw-sec-h2">Всё для эффективной работы</h2>
            <p className="cw-sec-sub">Удобное расположение, современная обстановка и атмосфера созидания — всё, что нужно для результата</p>
          </div>
          <div className="cw-features-grid">
            {features.map((f) => (
              <div className="cw-feat-card" key={f.title}>
                <div className="cw-feat-icon">{f.emoji}</div>
                <div className="cw-feat-title">{f.title}</div>
                <div className="cw-feat-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="cw-gallery">
        <div className="cw-gallery-orb" />
        <div className="container">
          <div className="cw-sec-header">
            <div className="cw-sec-tag cw-sec-tag--pink">📸 Наше пространство</div>
            <h2 className="cw-sec-h2">Загляни к нам</h2>
          </div>
          <div className="cw-gallery-grid">
            {gallery.map((g) => (
              <div
                className="cw-gallery-card"
                key={g.src}
                style={{ '--rot': g.rotate, '--mt': g.mt } as React.CSSProperties}
              >
                <div className="cw-gallery-img-wrap">
                  <Image src={g.src} alt={g.label} fill sizes="(max-width: 767px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                </div>
                <div className="cw-gallery-label">{g.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="cw-pricing">
        <div className="cw-pricing-orb-1" />
        <div className="cw-pricing-orb-2" />
        <div className="container">
          <div className="cw-sec-header">
            <div className="cw-sec-tag cw-sec-tag--pink">💰 Стоимость</div>
            <h2 className="cw-sec-h2">Прозрачные тарифы</h2>
          </div>
          <div className="cw-price-grid">
            {pricing.map((p) => (
              <div className={`cw-price-card${p.hot ? ' cw-price-hot' : ''}`} key={p.label}>
                {p.hot && <div className="cw-price-badge">Популярный</div>}
                <div className="cw-price-label">{p.label}</div>
                <div className="cw-price-value">{p.price}</div>
                <div className="cw-price-unit">{p.unit}</div>
                <div className="cw-price-note">{p.note}</div>
                <Link href="/#contact" className="cw-price-cta">Забронировать</Link>
              </div>
            ))}
          </div>
          <div className="cw-pricing-note">
            <span>📌</span>
            <span>Сдаётся в действующем молодёжном центре офисное помещение под коворкинг. Помещение оборудовано современными мощными компьютерами, быстрым интернетом, принтером, сканером. Зоной питания, ресепцией. Дополнительные услуги рассчитываются отдельно.</span>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cw-cta">
        <div className="cw-cta-blob-1" />
        <div className="cw-cta-blob-2" />
        <div className="container">
          <div className="cw-cta-inner">
            <div>
              <h2 className="cw-cta-h2">Готовы начать работать? 🚀</h2>
              <p className="cw-cta-p">
                Оставьте заявку — мы свяжемся и подберём удобное время. Приходите и убедитесь,
                что коворкинг в «Рух» — это именно то, что вам нужно.
              </p>
            </div>
            <div className="cw-cta-right">
              <a href="tel:+79274441844" className="cw-cta-phone">+7 (927) 444-18-44</a>
              <span className="cw-cta-hint">Пн–Вс · 8:00 – 22:00</span>
              <Link href="/#contact" className="cw-btn-main">Оставить заявку</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
