import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Компьютерный клуб | Молодёжный центр «Рух»',
  description: 'Мощные игровые ПК, актуальные игры, турниры и тихая зона для учёбы. Компьютерный клуб в молодёжном центре «Рух», Казань.',
}

const features = [
  { emoji: '🖥️', title: 'Мощные игровые ПК',       desc: 'Современные сборки с видеокартами последнего поколения. Все актуальные игры уже установлены.' },
  { emoji: '🏆', title: 'Турниры и киберспорт',      desc: 'CS2, Dota 2, FIFA и другие дисциплины. Регулярные внутренние соревнования с призами.' },
  { emoji: '📚', title: 'Обучение и тихая зона',     desc: 'Курсы работы с ПК, офисными программами, основы дизайна. Отдельная тихая зона для учёбы.' },
  { emoji: '⚡', title: 'Быстрый интернет',          desc: 'Оптоволоконный канал без ограничений. Пинг в игре — минимальный, комфорт — максимальный.' },
  { emoji: '🎧', title: 'Своя атмосфера',            desc: 'Хорошая акустика, удобные кресла, нет лишнего шума. Приходи с друзьями или играй в одиночку.' },
  { emoji: '🆓', title: 'Первый час — бесплатно',   desc: 'При первом посещении и записи через форму первый час игры — за счёт клуба.' },
]

const tariffs = [
  { label: 'В будни',         price: '150 ₽',  unit: '/ час', note: 'Пн – Пт, 8:00–17:00' },
  { label: 'Вечер и выходные', price: '200 ₽', unit: '/ час', note: 'Пт с 17:00, Сб, праздники', hot: true },
  { label: 'Пакет 5 часов',   price: '600 ₽',  unit: '/ блок', note: 'Действует 30 дней' },
  { label: 'Пакет 15 часов',  price: '1 500 ₽', unit: '/ блок', note: 'Действует 60 дней, выгода 25%' },
]

export default function ComputerClubPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="cc-hero">
        <div className="cc-hero-grid-bg" />
        <div className="cc-hero-glow" />
        <div className="cc-hero-glow-2" />
        <div className="container">
          <div className="cc-hero-inner">
            <Link href="/#programs" className="cc-back">← Назад к программам</Link>
            <div className="cc-tag">🎮 Компьютерный клуб РУХ</div>
            <h1 className="cc-h1">
              Играй. Учись.<br />
              <em>Побеждай.</em>
            </h1>
            <p className="cc-desc">
              Современный компьютерный клуб в самом сердце Казани. Мощные ПК, актуальные игры,
              регулярные турниры и уютная атмосфера для тех, кто любит технологии.
            </p>
            <div className="cc-badges">
              <span className="cc-badge">👾 От 10 лет</span>
              <span className="cc-badge">🕐 Пн–Сб 8:00–22:00</span>
              <span className="cc-badge">💰 от 150 ₽/час</span>
              <span className="cc-badge">🆓 1-й час бесплатно</span>
            </div>
            <div className="cc-btns">
              <Link href="/#contact" className="cc-btn-primary">Записаться бесплатно</Link>
              <a href="tel:+79274441844" className="cc-btn-outline">📞 Позвонить</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="cc-features">
        <div className="container">
          <div className="cc-sec-header">
            <div className="cc-sec-tag">⚡ Что тебя ждёт</div>
            <h2 className="cc-sec-h2">Всё для крутой игры и учёбы</h2>
          </div>
          <div className="cc-features-grid">
            {features.map((f) => (
              <div className="cc-feat-card" key={f.title}>
                <span className="cc-feat-emoji">{f.emoji}</span>
                <div className="cc-feat-title">{f.title}</div>
                <div className="cc-feat-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TARIFFS ── */}
      <section className="cc-tariffs">
        <div className="container">
          <div className="cc-sec-header">
            <div className="cc-sec-tag">💰 Тарифы</div>
            <h2 className="cc-sec-h2">Честные цены без сюрпризов</h2>
          </div>
          <div className="cc-tariffs-grid">
            {tariffs.map((t) => (
              <div className={`cc-tariff-card${t.hot ? ' hot' : ''}`} key={t.label}>
                <div className="cc-tariff-label">{t.label}</div>
                <div className="cc-tariff-price">{t.price}</div>
                <div className="cc-tariff-unit">{t.unit}</div>
                <div className="cc-tariff-note">{t.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cc-cta">
        <div className="container">
          <div className="cc-cta-inner">
            <div>
              <h2 className="cc-cta-h2">Первый час — бесплатно 🎁</h2>
              <p className="cc-cta-p">
                Запишись через форму и приходи попробовать — первый час за счёт клуба.
                Просто оставь заявку и мы забронируем для тебя место.
              </p>
            </div>
            <div className="cc-cta-right">
              <a href="tel:+79274441844" className="cc-cta-phone">+7 (927) 444-18-44</a>
              <span className="cc-cta-hint">Пн–Сб · 8:00 – 22:00</span>
              <Link href="/#contact" className="cc-btn-primary">Оставить заявку</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
