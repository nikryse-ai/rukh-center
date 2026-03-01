const team = [
  { name: 'Иванова Анна', role: 'Лидерство и личностный рост', initials: 'ИА', emoji: '🌟' },
  { name: 'Петров Дмитрий', role: 'Предпринимательство и проекты', initials: 'ПД', emoji: '🚀' },
  { name: 'Сидорова Камила', role: 'Волонтёрство и социальные проекты', initials: 'СК', emoji: '❤️' },
  { name: 'Козлов Никита', role: 'IT и Digital, веб-разработка', initials: 'КН', emoji: '💻' },
  { name: 'Ахметова Гузель', role: 'Творчество, медиа, дизайн', initials: 'АГ', emoji: '🎨' },
  { name: 'Фёдоров Артём', role: 'Спорт и здоровье', initials: 'ФА', emoji: '⚡' },
]

const avatarColors = [
  'linear-gradient(135deg, #B8935A 0%, #D4AF7A 100%)',
  'linear-gradient(135deg, #2D5140 0%, #4A7A63 100%)',
  'linear-gradient(135deg, #D4AF7A 0%, #A07840 100%)',
  'linear-gradient(135deg, #3D6B55 0%, #6B9E80 100%)',
  'linear-gradient(135deg, #4A7A63 0%, #3D6B55 100%)',
  'linear-gradient(135deg, #A07840 0%, #C4955E 100%)',
]

export default function Team() {
  return (
    <section className="team-section">
      <div className="container">
        <div className="team-title animate">
          <h2>Наша команда 👥</h2>
          <div className="team-title-line" />
          <p>Наставники, которые любят своё дело и умеют вдохновлять молодёжь</p>
        </div>
        <div className="team-grid">
          {team.map((m, i) => (
            <div key={m.name} className={`team-card animate delay-${i + 1}`}>
              <div className="team-avatar-wrap">
                <div className="team-avatar" style={{ background: avatarColors[i] }}>{m.initials}</div>
                <span className="team-avatar-emoji">{m.emoji}</span>
              </div>
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
