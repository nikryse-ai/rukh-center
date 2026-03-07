const values = [
  { emoji: '💪', text: 'Ответственность',    sub: 'Берём на себя и выполняем',       grad: 'linear-gradient(135deg, #C44A2A 0%, #E06040 100%)' },
  { emoji: '🎯', text: 'Целеустремлённость', sub: 'Идём к цели несмотря ни на что',  grad: 'linear-gradient(135deg, #1A3A5C 0%, #2A6AAC 100%)' },
  { emoji: '🤝', text: 'Толерантность',      sub: 'Уважаем каждого человека',        grad: 'linear-gradient(135deg, #1D6055 0%, #2DA080 100%)' },
  { emoji: '🌱', text: 'Инициативность',     sub: 'Предлагаем, действуем, творим',   grad: 'linear-gradient(135deg, #2D5140 0%, #4A8A60 100%)' },
  { emoji: '❤️', text: 'Семейные ценности',  sub: 'Семья — главная опора в жизни',   grad: 'linear-gradient(135deg, #8B1A5C 0%, #C44A8A 100%)' },
  { emoji: '⚡', text: 'Активность',          sub: 'Движение — это жизнь и развитие', grad: 'linear-gradient(135deg, #8B6914 0%, #C4A030 100%)' },
]

export default function About() {
  return (
    <section className="values-section" id="about">
      <div className="values-glow values-glow-1" />
      <div className="values-glow values-glow-2" />
      <div className="values-spark values-spark-1">✦</div>
      <div className="values-spark values-spark-2">⭐</div>
      <div className="values-spark values-spark-3">✨</div>
      <div className="container">
        <div className="values-header animate">
          <div className="values-tag">✨ Наши ценности</div>
          <h2 className="values-h2">Что важно для нас</h2>
          <div className="values-line" />
          <p className="values-sub">Принципы, на которых строится всё, что мы делаем</p>
        </div>
        <div className="about-values">
          {values.map((v, i) => (
            <div
              key={v.text}
              className={`about-value animate-zoom delay-${i + 1}`}
              style={{ background: v.grad }}
            >
              <span className="about-value-emoji">{v.emoji}</span>
              <div className="about-value-text">{v.text}</div>
              <div className="about-value-sub">{v.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
