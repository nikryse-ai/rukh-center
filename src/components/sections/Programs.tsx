import Link from 'next/link'

type ExternalLink = { type: 'external'; url: string }
type PageLink     = { type: 'page'; path: string }
type ProgLink     = ExternalLink | PageLink

interface Prog {
  title: string
  short: string
  emoji: string
  iconBg: string
  link: ProgLink
}

const programs: Prog[] = [
  { title: 'Клуб единоборств «Рух»', short: 'Профессиональные тренировки: Бокс, ММА, Ушу, Кикбоксинг, Каратэ, Тайский Бокс, Дзюдо, Джиу-Джитсу, Грепплинг, Йога, Стретчинг, Кроссфит. 2 ринга, тренажёрная зона.', emoji: '🥊', iconBg: 'linear-gradient(135deg, #C44A2A 0%, #E06040 100%)', link: { type: 'external', url: 'https://ruhclubkazan.ru' } },
  { title: 'Центр гимнастики «Активные дети»', short: 'Развивающая гимнастика с акробатикой и хореографией. Актёрское мастерство, развитие речи и рисование для детей.', emoji: '🤸', iconBg: 'linear-gradient(135deg, #8B4AAF 0%, #A867C8 100%)', link: { type: 'external', url: 'https://activekids.ru/' } },
  { title: 'IT-центр «ROBODOM»', short: 'Лаборатория робототехники и программирования. Подготовка к олимпиадам и IT-компетенции на каждом уровне обучения.', emoji: '🤖', iconBg: 'linear-gradient(135deg, #2A6EA8 0%, #4A8EC8 100%)', link: { type: 'external', url: 'http://robodomkzn.ru/' } },
  { title: 'КЭМП', short: 'Клуб Эффективного Мужского Прогресса. БДЖ, Кикбоксинг, ОФП, выездные испытания, закаливание и самооборона.', emoji: '💪', iconBg: 'linear-gradient(135deg, #2D5140 0%, #4A7A63 100%)', link: { type: 'external', url: 'https://kempclub.pro/' } },
  { title: 'Компьютерный клуб', short: 'Мощные игровые ПК, актуальные игры и турниры. Обучение работе с компьютером и тихая зона для учёбы.', emoji: '🎮', iconBg: 'linear-gradient(135deg, #B8935A 0%, #D4AF7A 100%)', link: { type: 'external', url: 'https://ruhcyber.ru/loading.html' } },
  { title: 'Казанский институт Ближнего Востока и Африки', short: 'Казанский международный институт сотрудничества с Африкой и Ближним Востоком. Спортивные сборы и образовательные программы.', emoji: '🌍', iconBg: 'linear-gradient(135deg, #3D6B55 0%, #6B9E80 100%)', link: { type: 'external', url: 'https://kazafme.ru' } },
  { title: 'Каникулярные программы 8–14 лет', short: 'Насыщенные каникулы: спорт, IT, творчество и командные приключения каждый день. Для детей 8–14 лет.', emoji: '🏕️', iconBg: 'linear-gradient(135deg, #C4751A 0%, #E09040 100%)', link: { type: 'page', path: '/programs/holidays' } },
  { title: 'Обучение ИИ 8–16 лет', short: 'Мастер-класс по нейросетям: промпты, генерация видео и аудио за 1,5 часа. Только 1 500 ₽. Места ограничены!', emoji: '🧠', iconBg: 'linear-gradient(135deg, #1A6B8A 0%, #2A8EAA 100%)', link: { type: 'page', path: '/programs/ai-learning' } },
  { title: 'Дни рождения и праздники', short: 'Незабываемый праздник в РУХ! Спорт, квесты, творчество, торт и море веселья. Для детей и молодёжи.', emoji: '🎉', iconBg: 'linear-gradient(135deg, #C44A8A 0%, #E067A8 100%)', link: { type: 'page', path: '/programs/birthday' } },
  { title: 'Сердце Йоги', short: 'Сердце йоги — это место для йоги, пространство для души. Для нас практика йоги — это не лечебная физкультура и не мистический ритуал.', emoji: '🧘', iconBg: 'linear-gradient(135deg, #7B4FA6 0%, #A06DC8 100%)', link: { type: 'external', url: 'https://yogaheart.ru/?ysclid=mmfa8cin0307076595' } },
  { title: 'Коворкинг', short: 'Коворкинг в молодёжном центре «Рух»: продуктивная работа без лишних затрат. Аренда рабочего места на час, день или месяц.', emoji: '💼', iconBg: 'linear-gradient(135deg, #2D5140 0%, #5A8B6A 100%)', link: { type: 'page', path: '/programs/coworking' } },
  { title: 'Фиджитал центр', short: 'Уникальный формат: реальные тренировки по MMA + кибер-бои на симуляторах + VR-турниры. Спорт и технологии в одном пространстве.', emoji: '🎮', iconBg: 'linear-gradient(135deg, #4A1080 0%, #7B2FBE 100%)', link: { type: 'page', path: '/programs/phygital' } },
]

export default function Programs() {
  return (
    <section className="programs-section" id="programs">
      <div className="programs-glow" />
      <div className="prog-spark prog-spark-1">✦</div>
      <div className="prog-spark prog-spark-2">⭐</div>
      <div className="prog-spark prog-spark-3">✨</div>
      <div className="prog-spark prog-spark-4">💫</div>

      <div className="container">
        <div className="programs-title-block animate">
          <div className="programs-tag">🎓 12 направлений</div>
          <h2>Наши <em>программы</em> 🎯</h2>
          <div className="programs-title-line" />
          <p>Выбери своё направление — мы подберём программу именно для тебя</p>
        </div>

        <div className="programs-grid-all">
          {programs.map((p, i) => (
            <div key={p.title} className={`prog-card animate delay-${(i % 3) + 1}`}>
              <div className="prog-card-icon" style={{ background: p.iconBg }}>{p.emoji}</div>
              <div className="prog-card-title">{p.title}</div>
              <div className="prog-card-desc">{p.short}</div>
              {p.link.type === 'external' ? (
                <a href={p.link.url} target="_blank" rel="noopener noreferrer" className="prog-card-btn">Узнать подробнее →</a>
              ) : (
                <Link href={p.link.path} className="prog-card-btn">Узнать подробнее →</Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
