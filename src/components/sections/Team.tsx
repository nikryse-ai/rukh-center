import Image from 'next/image'

interface Member {
  name: string
  role: string
  desc: string
  photo: string
}

const team: Member[] = [
  {
    name: 'Мифтахов Марсель Ринадович',
    role: 'Основатель клуба «Рух»',
    desc: 'Секретарь Олимпийского совета РТ. Председатель комитета МФ тхэквондо ГТФ. Член Общественного совета Минспорта РТ. Спикер Российского международного олимпийского университета. Отличник физической культуры и спорта РТ.',
    photo: '/Team-3.jpg',
  },
  {
    name: 'Валеев Али Мухаметович',
    role: 'Инструктор по кроссфиту и ниндзя-спорту',
    desc: 'Сертифицированный фитнес-инструктор, тренер по кроссфиту и гонкам с препятствиями. Финишер IRONMAN, ультрамарафонец (100 км). Участник «Суперниндзя» 3 и 4 сезонов. Неоднократный победитель соревнований. Гвардии рядовой ВДВ.',
    photo: '/Team-1.jpg',
  },
  {
    name: 'Шакирзянов Дмитрий Сергеевич',
    role: 'Бизнес-тренер · Трекер',
    desc: 'Сертифицированный бизнес-наставник Сколково. Более 50 федеральных и республиканских проектов. Специализация: тренинги для топ-менеджмента, командообразование и внедрение ТРИЗ.',
    photo: '/Team-2.jpg',
  },
  {
    name: 'Абдуллин Ранис',
    role: 'Тьютор · ИИ-наставник',
    desc: 'Тьютор, организатор фиджитал мероприятий и ИИ-наставник центра «Рух».',
    photo: '/Team-4.jpg',
  },
]

export default function Team() {
  return (
    <section className="team-section" id="team">
      <div className="container">
        <div className="team-title animate">
          <h2>Наша команда 👥</h2>
          <div className="team-title-line" />
          <p>Наставники, которые любят своё дело и умеют вдохновлять молодёжь</p>
        </div>
        <div className="team-photo-grid">
          {team.map((m, i) => (
            <div key={m.name} className={`prog-card animate delay-${(i % 4) + 1}`} style={{ height: '520px' }}>
              <div className="prog-card-photo">
                <Image src={m.photo} alt={m.name} fill sizes="(max-width: 767px) 100vw, 25vw" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
              </div>
              <div className="prog-card-overlay" />
              <div className="prog-card-content">
                <div className="team-card-role">{m.role}</div>
                <div className="prog-card-reveal">
                  <div className="team-card-name">{m.name}</div>
                  <div className="prog-card-desc">{m.desc}</div>
                </div>
              </div>
            </div>
          ))}
          <div className="prog-card animate delay-1 team-card-empty" style={{ height: '520px' }}>
            <div className="team-card-empty-inner">
              <span>+</span>
              <p>Скоро</p>
            </div>
          </div>
          <div className="prog-card animate delay-2 team-card-empty" style={{ height: '520px' }}>
            <div className="team-card-empty-inner">
              <span>+</span>
              <p>Скоро</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
