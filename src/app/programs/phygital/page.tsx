import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Фиджитал центр | Молодёжный центр «Рух»',
  description: 'Фиджитал центр РУХ — уникальный формат: реальные тренировки по MMA + кибер-бои на симуляторах + VR-турниры. Кибер-арена и клуб единоборств в одном месте.',
}

const program = [
  { icon: '🥊', text: 'Обучение основам MMA' },
  { icon: '🕹️', text: 'Тренировки на игровых симуляторах' },
  { icon: '🎮', text: 'Подготовка в файтингах: MK11, UFC 4, Tekken 7' },
  { icon: '🥽', text: 'Итоговый VR-турнир и спарринг' },
]

const links = [
  { emoji: '🎲', label: 'Бронь ПК',   url: 'https://vk.link/phygitalruh',          color: '#4C75A3' },
  { emoji: '💵', label: 'Прайс-лист', url: 'https://vk.com/@phygitalruh-prais',    color: '#4C75A3' },
  { emoji: '📱', label: 'Группа ВК',  url: 'https://vk.com/phygitalruh',           color: '#4C75A3' },
  { emoji: '✈️', label: 'Telegram',   url: 'https://t.me/ruhcyber',                color: '#229ED9' },
]

const videos = ['/PHYV-1.mov', '/PHYV-2.mov']

const photos = [
  { src: '/PHY-3.jpg', alt: 'Кибер-арена' },
  { src: '/PHY-4.jpg', alt: 'Тренировка MMA' },
  { src: '/PHY-5.jpg', alt: 'VR-турнир' },
  { src: '/PHY-6.jpg', alt: 'Игровые симуляторы' },
]

export default function PhygitalPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="phy-hero">
        <div className="phy-hero-glow phy-hero-glow-1" />
        <div className="phy-hero-glow phy-hero-glow-2" />
        <div className="phy-hero-grid" />
        <div className="container">
          <div className="phy-hero-inner">
            <Link href="/#programs" className="phy-back-link">← Назад к программам</Link>
            <div className="phy-hero-tag">🎮 🥊 Фиджитал центр РУХ</div>
            <h1 className="phy-hero-h1">
              Кибер арена<br />
              <em>× Клуб единоборств</em>
            </h1>
            <p className="phy-hero-desc">
              Мы объединили спортивную подготовку и кибер-тренировки в одном курсе по дисциплине «Кибер-арена: единоборства». Новый формат тренировок: реальные бои + кибер-бои + VR.
            </p>
            <div className="phy-hero-badges">
              <span className="phy-badge">🏆 Подходит для начинающих</span>
              <span className="phy-badge">🥽 VR-турниры</span>
              <span className="phy-badge">🤜 MMA + файтинги</span>
              <span className="phy-badge">📍 Казань, ул. Павлюхина</span>
            </div>
            <div className="phy-hero-btns">
              <a href="https://vk.link/phygitalruh" target="_blank" rel="noopener noreferrer" className="phy-btn-primary">🎲 Забронировать ПК</a>
              <a href="tel:+79274441844" className="phy-btn-outline">📞 +7 (927) 444-18-44</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAM ── */}
      <section className="phy-program">
        <div className="container">
          <div className="phy-program-inner">
            <div>
              <div className="phy-section-tag">🔴 Программа</div>
              <h2 className="phy-section-h2">Что включает курс</h2>
              <p className="phy-section-sub">Подходит для начинающих и тех, кто хочет попробовать новый формат тренировок</p>
              <div className="phy-program-list">
                {program.map((item) => (
                  <div className="phy-program-item" key={item.text}>
                    <span className="phy-program-icon">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="phy-highlight-box">
                <strong>‼️ Новый формат тренировок</strong><br />
                Реальные тренировки + кибер-бои + VR. Напишите нам, если заинтересованы 😎
              </div>
            </div>

            {/* Two photos overlapping */}
            <div className="phy-program-photos">
              <div className="phy-prog-photo-1">
                <Image src="/PHY-1.jpg" alt="Фиджитал центр РУХ" fill sizes="(max-width: 900px) 80vw, 40vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className="phy-prog-photo-2">
                <Image src="/PHY-2.jpg" alt="Тренировки в центре РУХ" fill sizes="(max-width: 900px) 60vw, 30vw" style={{ objectFit: 'cover' }} />
                <div className="phy-prog-photo-badge">🥊 Live</div>
              </div>
              <div className="phy-prog-photo-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* ── MEDIA: фото + видео рядом ── */}
      <section className="phy-media-section">
        <div className="phy-videos-scanline" />
        <div className="container">
          <div className="phy-sec-header">
            <div className="phy-section-tag">📸 Медиа</div>
            <h2 className="phy-section-h2">Атмосфера Фиджитал</h2>
          </div>
          <div className="phy-media-row">
            {/* Видео 1 — слева */}
            <div className="phy-video-card" key={0}>
              <div className="phy-video-glow" />
              <video className="phy-video-el" src={videos[0]} controls playsInline preload="metadata" />
            </div>

            {/* Фото — по центру 2×2 */}
            <div className="phy-photos-grid2">
              {photos.map((p) => (
                <div className="phy-photos-grid2-cell" key={p.src}>
                  <Image src={p.src} alt={p.alt} fill sizes="30vw" style={{ objectFit: 'cover' }} />
                </div>
              ))}
            </div>

            {/* Видео 2 — справа */}
            <div className="phy-video-card" key={1}>
              <div className="phy-video-glow" />
              <video className="phy-video-el" src={videos[1]} controls playsInline preload="metadata" />
            </div>
          </div>
        </div>
      </section>

      {/* ── LINKS ── */}
      <section className="phy-links">
        <div className="container">
          <div className="phy-links-inner">
            <div>
              <h2 className="phy-links-h2">Присоединяйся к нам</h2>
              <p className="phy-links-sub">Следи за новостями, бронируй ПК и смотри прайс-лист в наших соцсетях</p>
            </div>
            <div className="phy-links-btns">
              {links.map((l) => (
                <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer"
                  className="phy-link-btn" style={{ background: l.color }}>
                  {l.emoji} {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="phy-cta">
        <div className="phy-cta-glow" />
        <div className="container">
          <div className="phy-cta-inner">
            <div className="phy-cta-emoji">🥊🎮</div>
            <h2 className="phy-cta-h2">Готов к новому формату?</h2>
            <p className="phy-cta-p">
              Напиши нам или позвони — расскажем о расписании, ценах и ближайших турнирах.
            </p>
            <div className="phy-cta-btns">
              <a href="https://t.me/ruhcyber" target="_blank" rel="noopener noreferrer" className="phy-btn-primary">✈️ Написать в Telegram</a>
              <a href="tel:+79274441844" className="phy-btn-outline">📞 +7 (927) 444-18-44</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
