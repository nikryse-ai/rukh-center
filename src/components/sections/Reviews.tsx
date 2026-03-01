import React from 'react'

const reviews = [
  {
    name: 'Надежда К.',
    initials: 'НК',
    bg: 'linear-gradient(145deg, #2D5140 0%, #4A7A63 100%)',
    text: 'Сюда ходит сын на занятия по каратэ. Всегда бежит с удовольствием — тренер очень нравится, за полгода уже многому научился, стал увереннее и сильнее. Помещение просторное, чистое, есть раздевалки с шкафчиками и душевыми. Огромное спасибо!',
  },
  {
    name: 'Малика Шакир',
    initials: 'МШ',
    bg: 'linear-gradient(145deg, #B8601A 0%, #E08030 100%)',
    text: 'Тренер слышит, чувствует, оценивает уровень подготовки, даёт умеренную нагрузку новичкам. Почувствовала себя лучше физически и духовно сразу после первого занятия кикбоксингом. Я в полном восторге!!!',
  },
  {
    name: 'Анастасия Ренкова',
    initials: 'АР',
    bg: 'linear-gradient(145deg, #1A5C8A 0%, #2A8EBC 100%)',
    text: 'Отличный клуб, удобное местоположение, замечательный и профессиональный тренерский состав. Мой сын занимается 3 года, ходит с большим удовольствием, участвует во всех соревнованиях. Очень советую! 👍',
  },
  {
    name: 'Рузанна Фатхуллина',
    initials: 'РФ',
    bg: 'linear-gradient(145deg, #7A2D9A 0%, #A855C8 100%)',
    text: 'Отличный зал с хорошими и добрыми тренерами, а также милые администраторы, которые ответят на все вопросы. Всё очень чисто и убрано, удобно, что рядом метро и остановка. Атмосфера огонь 🔥',
  },
  {
    name: 'Марсель М.',
    initials: 'ММ',
    bg: 'linear-gradient(145deg, #1A6B4A 0%, #2DAA72 100%)',
    text: 'Отличное место для повышения скиллов в единоборствах. Всё чётко и понятно, ощущаю прогресс. Подойдёт новичку и любителю. Хорошие удобства, есть необходимые тренажёры и чистые душевые. Как бонус — сауна!',
  },
  {
    name: 'Анна К.',
    initials: 'АК',
    bg: 'linear-gradient(145deg, #C44A2A 0%, #E8704A 100%)',
    text: 'Долго выбирала место для тренировок. Администратор Аделия очень мило встретила и всё показала. Среди многообразия единоборств выбрала ушу и не прогадала! Тренер Наргиза просто влюбила меня в этот вид спорта!',
  },
]

export default function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-glow-tl" />
      <div className="reviews-glow-br" />
      <div className="container">
        <div className="reviews-head animate">
          <h2>Отзывы участников ⭐</h2>
          <div className="reviews-head-line" />
          <p>Что говорят те, кто уже занимается с нами</p>
        </div>

        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`review-card animate delay-${(i % 3) + 1}`}
              style={{ background: r.bg }}
            >
              <span className="review-stars">★★★★★</span>
              <p className="review-text">{r.text}</p>
              <div className="review-footer">
                <div className="review-avatar">{r.initials}</div>
                <span className="review-name">{r.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
