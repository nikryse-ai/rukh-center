const cards = [
  {
    q: '🤔 Как найти своё место?',
    a: 'Наши наставники помогут определить интересы и подобрать программу под твои цели — индивидуальный подход для каждого',
    bg: '#B8935A',
    rotate: '-4deg',
  },
  {
    q: '🛡️ А что с безопасностью?',
    a: 'Контроль доступа на территории, ежедневная обратная связь и опытные кураторы всегда рядом',
    bg: '#4A7A63',
    rotate: '4deg',
  },
  {
    q: '💡 Какая польза от занятий?',
    a: 'Реальные навыки: лидерство, коммуникация, проектное мышление и личное портфолио с реальными работами',
    bg: '#D4AF7A',
    rotate: '-2deg',
  },
  {
    q: '🤝 Найду ли я друзей?',
    a: 'Командная атмосфера, где каждый находит единомышленников и строит настоящую дружбу',
    bg: '#3D6B55',
    rotate: '3deg',
  },
  {
    q: '🔥 Будет ли интересно?',
    a: 'Живые проекты, хакатоны, выезды, фестивали и реальные достижения — скучно точно не будет!',
    bg: '#1A2E24',
    rotate: '-2deg',
  },
]

export default function Objections() {
  return (
    <section className="obj-section" id="about">
      <div className="obj-blob-1" />
      <div className="obj-blob-2" />
      <div className="obj-spark obj-spark-1">💭</div>
      <div className="obj-spark obj-spark-2">✨</div>
      <div className="container">
        <div className="obj-title-block animate">
          <h2>Мы знаем, о чём думает молодёжь 💬</h2>
          <div className="obj-title-line" />
          <p>Отвечаем на главные вопросы честно и по делу</p>
        </div>

        <div className="obj-grid">
          {cards.slice(0, 3).map((c, i) => (
            <div
              key={i}
              className={`obj-card animate delay-${i + 1}`}
              style={{ background: c.bg }}
            >
              <div className="obj-card-q">{c.q}</div>
              <div className="obj-card-a">{c.a}</div>
            </div>
          ))}
        </div>

        <div className="obj-row2">
          {cards.slice(3, 5).map((c, i) => (
            <div
              key={i}
              className={`obj-card animate delay-${i + 4}`}
              style={{ background: c.bg }}
            >
              <div className="obj-card-q">{c.q}</div>
              <div className="obj-card-a">{c.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
