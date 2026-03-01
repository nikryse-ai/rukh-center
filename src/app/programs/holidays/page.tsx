import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Каникулярные программы 8–14 лет | Молодёжный центр «Рух»',
  description:
    'Яркие каникулы в молодёжном центре «Рух» в Казани. Программы для детей 8–14 лет: спорт, творчество, IT, квесты, новые друзья и незабываемые впечатления.',
}

const highlights = [
  { emoji: '🤸', title: 'Спорт и движение', desc: 'Единоборства, гимнастика, подвижные игры и командные эстафеты каждый день.', bg: 'linear-gradient(135deg, #2D5140 0%, #3D6B55 100%)' },
  { emoji: '💻', title: 'IT и робототехника', desc: 'Программирование, сборка роботов, игровые проекты на реальных платформах.', bg: 'linear-gradient(135deg, #1A3A5C 0%, #2A5A8C 100%)' },
  { emoji: '🎨', title: 'Творческие мастер-классы', desc: 'Рисование, лепка, поделки, дизайн — занятия для тех, кто любит создавать.', bg: 'linear-gradient(135deg, #B8935A 0%, #D4AF7A 100%)' },
  { emoji: '🧩', title: 'Квесты и головоломки', desc: 'Командные квесты, логические задачи и настольные игры с призами.', bg: 'linear-gradient(135deg, #1D6055 0%, #2D8070 100%)' },
  { emoji: '🎬', title: 'Медиа и контент', desc: 'Создаём короткие видео, учимся монтажу и основам фотографии.', bg: 'linear-gradient(135deg, #4A2D6B 0%, #6A4D8B 100%)' },
  { emoji: '🌿', title: 'Прогулки и экскурсии', desc: 'Выезды по интересным местам Казани и активный отдых на свежем воздухе.', bg: 'linear-gradient(135deg, #3D6B2D 0%, #5A8B3D 100%)' },
]

const schedule = [
  { time: '9:00 – 9:30',  activity: 'Сбор, зарядка, приветствие' },
  { time: '9:30 – 11:00', activity: 'Блок 1 — спорт или активная игра' },
  { time: '11:00 – 11:15', activity: 'Перекус' },
  { time: '11:15 – 13:00', activity: 'Блок 2 — IT / творчество / медиа' },
  { time: '13:00 – 14:00', activity: 'Обед (столовая внутри центра)' },
  { time: '14:00 – 15:30', activity: 'Блок 3 — квест, мастер-класс или экскурсия' },
  { time: '15:30 – 16:00', activity: 'Итоги дня, награждения, общение' },
]

const faqs = [
  {
    q: 'Сколько стоит программа?',
    a: 'Стоимость зависит от длительности смены. Свяжитесь с нами для актуальных цен — мы подберём оптимальный вариант.',
  },
  {
    q: 'Нужно ли привозить еду?',
    a: 'Нет, обед организован внутри центра. Перекус лучше взять с собой — фрукты, батончики, вода.',
  },
  {
    q: 'Сколько детей в группе?',
    a: 'Группы до 15 человек — максимум внимания каждому ребёнку от нашего опытного вожатого.',
  },
  {
    q: 'Дети каких возрастов подходят?',
    a: 'Программа рассчитана на детей 8–14 лет. При необходимости мы делим на подгруппы по возрасту.',
  },
]

export default function HolidaysPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hol-hero">
        <div className="hol-hero-blob hol-hero-blob-1" />
        <div className="hol-hero-blob hol-hero-blob-2" />
        <div className="container">
          <div className="hol-hero-inner">
            <Link href="/#programs" className="hol-back-link">
              ← Назад к программам
            </Link>
            <div className="hol-hero-tag">🎉 Каникулы в РУХ</div>
            <h1 className="hol-hero-h1">
              Каникулярные программы<br />
              <em>8 – 14 лет</em>
            </h1>
            <p className="hol-hero-desc">
              Насыщенные, весёлые и полезные каникулы прямо в Казани! Спорт, IT, творчество,
              квесты и новые друзья — всё это в молодёжном центре «Рух» каждый сезон.
            </p>

            <div className="hol-hero-badges">
              <span className="hol-badge">📅 Осень · Зима · Весна · Лето</span>
              <span className="hol-badge">👦 Возраст: 8–14 лет</span>
              <span className="hol-badge">👥 До 15 чел. в группе</span>
              <span className="hol-badge">🍽️ Питание включено</span>
            </div>

            <div className="hol-hero-btns">
              <Link href="/#contact" className="btn-gold">Записать ребёнка</Link>
              <a href="tel:+79274441844" className="hol-btn-outline">📞 +7 (927) 444-18-44</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="hol-highlights">
        <div className="container">
          <div className="hol-section-header">
            <div className="hol-section-tag">⭐ Чем занимаемся</div>
            <h2 className="hol-section-h2">
              6 направлений —<br />
              <span>скучать некогда</span>
            </h2>
            <p className="hol-section-sub">
              Каждый день разный. Ребёнок попробует себя в разных активностях и найдёт то, что нравится больше всего.
            </p>
          </div>

          <div className="hol-highlights-grid">
            {highlights.map((h) => (
              <div
                className="hol-highlight-card"
                key={h.title}
                style={{ background: h.bg }}
              >
                <span className="hol-highlight-emoji">{h.emoji}</span>
                <div className="hol-highlight-title">{h.title}</div>
                <div className="hol-highlight-desc">{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHEDULE ── */}
      <section className="hol-schedule">
        <div className="container">
          <div className="hol-schedule-wrap">
            <div>
              <div className="hol-section-tag" style={{ display: 'inline-flex', marginBottom: '20px', background: 'var(--green-bg)', color: 'var(--green-dark)', border: '1.5px solid rgba(45,81,64,0.15)' }}>🕐 Расписание дня</div>
              <h2 className="hol-schedule-side-title">Как проходит один день в «Рух»?</h2>
              <p className="hol-schedule-side-desc">
                День тщательно продуман: активные блоки чередуются с творческими и умственными,
                а к вечеру дети уходят довольными и с новыми впечатлениями.
              </p>
              <div className="hol-schedule-note">
                <span>📌</span>
                <span>Расписание может меняться в зависимости от сезонной программы и выездных дней.</span>
              </div>
            </div>

            <div className="hol-timeline">
              {schedule.map((item) => (
                <div className="hol-timeline-item" key={item.time}>
                  <span className="hol-timeline-time">{item.time}</span>
                  <span className="hol-timeline-act">{item.activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="hol-faq">
        <div className="container">
          <div className="hol-section-header">
            <div className="hol-section-tag" style={{ background: 'var(--green-bg)', color: 'var(--green-dark)', border: '1.5px solid rgba(45,81,64,0.15)' }}>🤔 Частые вопросы</div>
            <h2 className="hol-section-h2" style={{ color: 'var(--text-dark)' }}>
              <span>Всё, что важно знать</span>
            </h2>
          </div>
          <div className="hol-faq-grid">
            {faqs.map((f) => (
              <div className="hol-faq-card" key={f.q}>
                <div className="hol-faq-q">{f.q}</div>
                <div className="hol-faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="hol-cta">
        <div className="hol-cta-blob hol-cta-blob-1" />
        <div className="container">
          <div className="hol-cta-inner">
            <div>
              <h2 className="hol-cta-text-h2">Готов к незабываемым каникулам? 🚀</h2>
              <p className="hol-cta-text-p">
                Запишите ребёнка прямо сейчас — количество мест ограничено.
                Мы перезвоним и расскажем о ближайших сменах и стоимости.
              </p>
            </div>
            <div className="hol-cta-right">
              <a href="tel:+79274441844" className="hol-cta-phone">+7 (927) 444-18-44</a>
              <span className="hol-cta-hint">Пн–Сб · 8:00 – 22:00</span>
              <Link href="/#contact" className="btn-gold">Оставить заявку</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
