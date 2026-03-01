import Link from 'next/link'

const cells = [
  {
    emoji: '🥊',
    label: 'Единоборства',
    sub: 'Бокс, ММА, Каратэ, Кикбоксинг, Ушу, Дзюдо и другие',
    tag: 'Спорт',
    bg: 'linear-gradient(145deg, #C44A2A 0%, #E8704A 100%)',
  },
  {
    emoji: '🤸',
    label: 'Гимнастика и акробатика',
    sub: 'Растяжка, хореография, акробатика для детей',
    tag: 'Развитие',
    bg: 'linear-gradient(145deg, #8B4AAF 0%, #B06ED4 100%)',
  },
  {
    emoji: '💪',
    label: 'КЭМП',
    sub: 'БДЖ, ОФП, выездные испытания и закаливание',
    tag: 'Для мужчин',
    bg: 'linear-gradient(145deg, #1A6B4A 0%, #2DAA72 100%)',
  },
  {
    emoji: '🏆',
    label: 'Турниры и соревнования',
    sub: 'Городские, республиканские и внутриклубные',
    tag: 'Достижения',
    bg: 'linear-gradient(145deg, #B8601A 0%, #E08030 100%)',
  },
  {
    emoji: '🏕️',
    label: 'Каникулы и лагерь',
    sub: 'Насыщенные смены для детей 8–14 лет',
    tag: 'Отдых',
    bg: 'linear-gradient(145deg, #1A5C8A 0%, #2A8EBC 100%)',
  },
  {
    emoji: '🎉',
    label: 'Праздники и события',
    sub: 'Дни рождения, мастер-классы и командные мероприятия',
    tag: 'События',
    bg: 'linear-gradient(145deg, #7A2D9A 0%, #A855C8 100%)',
  },
]

export default function Projects() {
  return (
    <section className="proj-section">
      <div className="proj-glow-top" />
      <div className="proj-glow-bot" />
      <div className="proj-spark proj-spark-1">✦</div>
      <div className="proj-spark proj-spark-2">⭐</div>
      <div className="proj-spark proj-spark-3">💫</div>
      <div className="proj-spark proj-spark-4">✨</div>

      <div className="container">
        <div className="proj-title animate">
          <div className="proj-title-tag">🏅 6 направлений</div>
          <h2>Чем живёт <em>РУХ?</em> 🔥</h2>
          <div className="proj-title-line" />
          <p>Спорт, творчество и незабываемые события — каждый найдёт своё!</p>
        </div>

        <div className="proj-grid">
          {cells.map((c, i) => (
            <div
              key={c.label}
              className={`proj-cell animate delay-${(i % 3) + 1}`}
              style={{ background: c.bg }}
            >
              <span className="proj-cell-tag">{c.tag}</span>
              <span className="proj-cell-emoji">{c.emoji}</span>
              <span className="proj-cell-label">{c.label}</span>
              <span className="proj-cell-sub">{c.sub}</span>
            </div>
          ))}
        </div>

        <div className="proj-cta animate">
          <p>Хочешь узнать подробнее о каком-то направлении?</p>
          <Link href="/#programs" className="btn-gold">Смотреть все программы</Link>
        </div>
      </div>
    </section>
  )
}
