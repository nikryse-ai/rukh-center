import SectionTitle from '@/components/ui/SectionTitle'

const modules = [
  { emoji: '🌟', title: 'Знакомство', desc: 'Узнаём друг друга, определяем цели и формируем команду' },
  { emoji: '🎯', title: 'Первый проект', desc: 'Ставим задачи и делаем первые шаги к результату' },
  { emoji: '🤝', title: 'Командная работа', desc: 'Учимся работать вместе и слышать друг друга' },
  { emoji: '🚀', title: 'Углублённая практика', desc: 'Отрабатываем навыки на реальных кейсах' },
  { emoji: '🎨', title: 'Творческий этап', desc: 'Реализуем творческую часть проекта' },
  { emoji: '💡', title: 'Решение проблем', desc: 'Находим нестандартные решения и преодолеваем барьеры' },
  { emoji: '🏆', title: 'Промежуточная защита', desc: 'Представляем промежуточный результат наставникам' },
  { emoji: '🎤', title: 'Подготовка к финалу', desc: 'Готовим финальную презентацию и отрабатываем выступление' },
  { emoji: '🎉', title: 'Финальная защита', desc: 'Итоговое выступление перед гостями, вручение сертификатов' },
]

export default function ProgramModules() {
  return (
    <section className="modules-section">
      <div className="container">
        <SectionTitle
          title="Программа занятий"
          subtitle="Участник шаг за шагом реализует проекты, а в финале представляет итоговую работу"
          centered
        />
        <div className="modules-grid">
          {modules.map((m) => (
            <div key={m.title} className="module-card">
              <span className="module-emoji">{m.emoji}</span>
              <div className="module-title">{m.title}</div>
              <p className="module-desc">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
