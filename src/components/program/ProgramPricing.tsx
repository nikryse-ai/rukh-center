import Link from 'next/link'
import SectionTitle from '@/components/ui/SectionTitle'

const plans = [
  {
    period: '1 месяц',
    price: '5 000 ₽',
    oldPrice: null,
    features: ['1 модуль = 8 занятий', 'Новый проект каждый месяц', 'Сертификат в конце', '2 раза в неделю по 1,5 часа'],
    popular: false,
  },
  {
    period: '3 месяца',
    price: '14 500 ₽',
    oldPrice: null,
    features: ['3 модуля = 24 занятия', 'Новый проект каждый месяц', '3 проекта + сертификат', '2 раза в неделю по 1,5 часа'],
    popular: false,
  },
  {
    period: '6 месяцев',
    price: '26 000 ₽',
    oldPrice: '29 000 ₽',
    features: ['6 модулей = 48 занятий', 'Новый проект каждый месяц', 'Портфолио из 6 проектов', '2 раза в неделю по 1,5 часа'],
    popular: true,
  },
  {
    period: '9 месяцев',
    price: '37 000 ₽',
    oldPrice: '42 000 ₽',
    features: ['9 модулей = 72 занятия', 'Новый проект каждый месяц', 'Большой итоговый проект', '2 раза в неделю по 1,5 часа'],
    popular: false,
  },
]

export default function ProgramPricing() {
  return (
    <section className="pricing-section">
      <div className="container">
        <SectionTitle title="Стоимость программы" centered />
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div key={plan.period} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <span className="popular-badge">Популярный выбор</span>}
              <div className="pricing-period">{plan.period}</div>
              <div className="pricing-price">{plan.price}</div>
              {plan.oldPrice ? (
                <div className="pricing-old-price">{plan.oldPrice}</div>
              ) : (
                <div style={{ marginBottom: '20px' }} />
              )}
              <ul className="pricing-features">
                {plan.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <Link href="#contact" className="pricing-btn">Записаться</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
