import Placeholder from '@/components/ui/Placeholder'

const values = [
  { emoji: '💪', text: 'Ответственность' },
  { emoji: '🎯', text: 'Целеустремлённость' },
  { emoji: '🤝', text: 'Толерантность' },
  { emoji: '🌱', text: 'Инициативность' },
  { emoji: '❤️', text: 'Семейные ценности' },
  { emoji: '⚡', text: 'Активность' },
]

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-bg-1">🌿</div>
      <div className="about-bg-2">⭐</div>
      <div className="about-bg-3">🏆</div>
      <div className="container">
        <div className="about-grid">
          <div className="about-img-wrap animate-left">
            <div className="about-img-inner">
              <Placeholder height="480px" label="[Фото центра]" borderRadius="0" />
            </div>
            <div className="about-decor-1" />
            <div className="about-decor-2" />
            <div className="about-img-badge">
              <span>2022</span>год основания
            </div>
          </div>

          <div className="about-content animate-right">
            <h2>О молодёжном центре «Рух» ✨</h2>
            <div className="about-title-line" />
            <p className="about-lead">
              Молодёжный центр «Рух» создан в <strong>июле 2022 г.</strong> и расположен в сердце жилого комплекса «Возрождение» Приволжского района г. Казани.
            </p>
            <p className="about-lead">
              <strong>Основная цель организации</strong> — помощь родителям в воспитании здорового молодого поколения, развитого физически, творчески и интеллектуально.
            </p>
            <div className="about-quote">
              Молодёжный центр «Рух» стремится создать сообщество энергичных людей, для которых важными являются ответственность, выдержка, готовность к активной деятельности.
            </div>
            <p className="about-body">
              Результатом деятельности центра станет развитие у молодого поколения самостоятельности, целеустремлённости, инициативности, трудолюбия, толерантного отношения к людям с ограниченными возможностями здоровья и пожилым людям, здорового образа жизни и семейных ценностей.
            </p>
            <p className="about-values-title">Наши ценности</p>
            <div className="about-values">
              {values.map((v, i) => (
                <div key={v.text} className={`about-value animate delay-${i + 1}`}>
                  <span className="about-value-emoji">{v.emoji}</span>
                  {v.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
