const thoughts = [
  { emoji: '🎮', thought: 'Хочу чем-то заняться после школы', answer: 'У нас 12 направлений — найдёшь своё' },
  { emoji: '🤝', thought: 'Хочу познакомиться с крутыми ребятами', answer: 'Сотни ровесников из твоего района' },
  { emoji: '💻', thought: 'Хочу освоить IT и ИИ', answer: 'Компьютерный клуб, ROBODOM и курсы по ИИ' },
  { emoji: '🥋', thought: 'Хочу заниматься спортом', answer: 'Единоборства, гимнастика, фиджитал-центр' },
  { emoji: '🎉', thought: 'Хочу провести день рождения незабываемо', answer: 'Организуем праздник под ключ' },
  { emoji: '🚀', thought: 'Хочу развиваться и найти своё дело', answer: 'Проекты, коворкинг и поддержка наставников' },
]

export default function About() {
  return (
    <section className="youth-section" id="about">
      <style dangerouslySetInnerHTML={{ __html: `
        .youth-section {
          background: var(--green-dark);
          padding: 80px 0 90px;
          position: relative;
          overflow: hidden;
        }
        .youth-glow-1 {
          position: absolute;
          top: -80px; left: -80px;
          width: 340px; height: 340px;
          background: radial-gradient(circle, rgba(184,147,90,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .youth-glow-2 {
          position: absolute;
          bottom: -60px; right: -60px;
          width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(74,122,99,0.22) 0%, transparent 70%);
          pointer-events: none;
        }
        .youth-spark {
          position: absolute;
          font-size: 1.2rem;
          opacity: 0.35;
          pointer-events: none;
        }
        .youth-spark-1 { top: 60px; right: 12%; }
        .youth-spark-2 { bottom: 80px; left: 8%; }
        .youth-spark-3 { top: 45%; right: 5%; }
        .youth-header { text-align: center; margin-bottom: 52px; }
        .youth-tag {
          display: inline-block;
          background: rgba(184,147,90,0.18);
          color: var(--gold-light);
          border: 1px solid rgba(184,147,90,0.35);
          border-radius: 20px;
          padding: 6px 18px;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }
        .youth-h2 {
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          font-weight: 800;
          color: #fff;
          margin: 0 0 14px;
          line-height: 1.25;
        }
        .youth-line {
          width: 56px; height: 3px;
          background: var(--gold);
          border-radius: 2px;
          margin: 0 auto 18px;
        }
        .youth-sub {
          color: rgba(255,255,255,0.6);
          font-size: 1rem;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .youth-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) { .youth-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .youth-grid { grid-template-columns: 1fr; } }
        .youth-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 18px;
          padding: 28px 24px 24px;
          position: relative;
          transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
        }
        .youth-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.3);
          border-color: rgba(184,147,90,0.4);
        }
        .youth-card-emoji {
          font-size: 2rem;
          margin-bottom: 14px;
          display: block;
        }
        .youth-bubble {
          background: rgba(255,255,255,0.08);
          border-radius: 14px 14px 14px 4px;
          padding: 12px 16px;
          color: rgba(255,255,255,0.88);
          font-size: 0.95rem;
          font-weight: 600;
          line-height: 1.45;
          margin-bottom: 14px;
          position: relative;
        }
        .youth-bubble::before {
          content: '❝';
          position: absolute;
          top: -8px; left: 10px;
          font-size: 1.2rem;
          color: var(--gold);
          line-height: 1;
        }
        .youth-answer {
          color: var(--gold-light);
          font-size: 0.85rem;
          font-weight: 600;
          padding-left: 4px;
          line-height: 1.4;
        }
        .youth-answer::before {
          content: '→ ';
          opacity: 0.7;
        }
      `}} />

      <div className="youth-glow-1" />
      <div className="youth-glow-2" />
      <div className="youth-spark youth-spark-1">✦</div>
      <div className="youth-spark youth-spark-2">⭐</div>
      <div className="youth-spark youth-spark-3">✨</div>

      <div className="container">
        <div className="youth-header animate">
          <div className="youth-tag">💬 Молодёжь говорит</div>
          <h2 className="youth-h2">Мы знаем, о чём думает молодёжь 💬</h2>
          <div className="youth-line" />
          <p className="youth-sub">Слышим каждого — и знаем, как ответить делом</p>
        </div>

        <div className="youth-grid">
          {thoughts.map((t, i) => (
            <div key={i} className={`youth-card animate-zoom delay-${i + 1}`}>
              <span className="youth-card-emoji">{t.emoji}</span>
              <div className="youth-bubble">{t.thought}</div>
              <div className="youth-answer">{t.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
