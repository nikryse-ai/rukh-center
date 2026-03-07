import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Дни рождения и праздники | Молодёжный центр «Рух»',
  description: 'Незабываемый праздник в молодёжном центре «Рух» в Казани. Тематические праздники под ключ, VR-развлечения, аниматоры. Для детей любого возраста.',
}

const included = [
  { emoji: '🥊', title: 'Спортивные мастер-классы', desc: 'Бокс, акробатика или гимнастика на выбор — активное начало праздника!', photo: '/BirtD-1.jpg' },
  { emoji: '🎯', title: 'Квесты и эстафеты',         desc: 'Командные игры и весёлые конкурсы с призами для всех гостей.',          photo: '/BirtD-2.jpg' },
  { emoji: '🎨', title: 'Творческий мастер-класс',   desc: 'Каждый гость создаёт что-то своими руками и забирает с собой.',          photo: '/BirtD-3.jpg' },
  { emoji: '🍰', title: 'Торт и угощения',            desc: 'Праздничный стол, угощения и торт — всё в лучшем виде.',                 photo: '/BirtD-4.jpg' },
  { emoji: '📸', title: 'Фотозона',                   desc: 'Яркая декорированная фотозона для памятных снимков.',                    photo: '/BirtD-5.jpg' },
  { emoji: '🎁', title: 'Подарки и сувениры',         desc: 'Все гости уходят с подарком — никто не останется без сюрприза.',         photo: '/BirtD-6.jpg' },
]

const whatsNew = [
  { emoji: '🎭', title: 'Тематические праздники',       desc: 'От викингов и космических приключений до магии и супергероев — тема на любой вкус!' },
  { emoji: '✅', title: 'Полный комфорт для родителей', desc: 'Всё под ключ — от декораций и программ до подарков для гостей. Просто приходите и наслаждайтесь.' },
  { emoji: '🥽', title: 'VR и дополнения',              desc: 'VR-очки для полного погружения в мир приключений и возможность заказать кейтеринг.' },
]

const forKids = [
  'Захватывающие квесты, игры и шоу — праздник незабываем',
  'Перевоплощение в любимого героя — от костюмов до атмосферы',
  'Сувениры и подарки каждому участнику',
]

const forParents = [
  'Готовое решение без лишних хлопот',
  'Гибкие пакеты услуг: Базовый, Стандарт и Премиум',
  'Команда профессионалов берёт всё под контроль',
]

const steps = [
  { num: '1', emoji: '💬', title: 'Обсуждаем детали', desc: 'Разрабатываем концепцию и тему праздника вместе с вами' },
  { num: '2', emoji: '📦', title: 'Выбираете пакет',  desc: 'Подбираете пакет и дополнительные услуги под свой бюджет' },
  { num: '3', emoji: '🎉', title: 'Идеальный праздник', desc: 'В день праздника всё будет идеально — от улыбок детей до вкусного торта' },
]

const whyUs = [
  { emoji: '🏆', text: 'Более 3 лет опыта в организации мероприятий' },
  { emoji: '👥', text: 'Команда профессиональных аниматоров, технических специалистов и организаторов' },
  { emoji: '🥽', text: 'Современные развлечения: VR-очки, тематические программы и уникальные сценарии' },
  { emoji: '🎯', text: 'Индивидуальный подход — ваш праздник будет таким, каким вы его мечтаете видеть' },
]

const packages = [
  {
    icon: '⚡',
    name: 'Базовый',
    duration: '2 часа',
    features: ['Одна активность на выбор', 'Торт и угощения', 'Оформление зала'],
    hot: false,
  },
  {
    icon: '🌟',
    name: 'Стандарт',
    duration: '3 часа',
    features: ['Две активности', 'Торт, угощения, фотозона', 'Декор зала и музыка', 'Аниматор'],
    hot: true,
  },
  {
    icon: '🏆',
    name: 'Премиум',
    duration: '4 часа',
    features: ['Полная программа', 'Ведущий и диджей', 'Торт + фуршет', 'Полный декор зала', 'Профессиональный фотограф'],
    hot: false,
  },
]

export default function BirthdayPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bd-hero">
        <div className="bd-confetti" />
        <div className="bd-glow" />
        <div className="bd-glow-2" />
        <div className="bd-deco-1">🎉</div>
        <div className="bd-deco-2">🎂</div>
        <div className="bd-deco-3">🎊</div>
        <div className="bd-deco-4">🎈</div>
        <div className="bd-deco-5">✨</div>
        <div className="container">
          <div className="bd-hero-inner">
            <Link href="/#programs" className="bd-back">← Назад к программам</Link>
            <div className="bd-tag">🎉 Дни рождения и праздники</div>
            <h1 className="bd-h1">
              Новый уровень праздника —<br />
              <em>ваш идеальный День Рождения!</em>
            </h1>
            <p className="bd-desc">
              Мы подготовили нечто совершенно уникальное и яркое для ваших детей!
              Ваш ребёнок станет настоящим героем на своём празднике,
              а вы — расслабитесь и насладитесь моментом.
            </p>
            <div className="bd-badges">
              <span className="bd-badge">🎂 Любой возраст</span>
              <span className="bd-badge">🥽 VR-развлечения</span>
              <span className="bd-badge">✅ Всё включено</span>
            </div>
            <div className="bd-btns">
              <a href="https://t.me/BBestBirthdayBot" target="_blank" rel="noopener noreferrer" className="btn-gold">🎈 Забронировать дату</a>
              <a href="tel:+79274441844" className="bd-btn-outline">📞 Позвонить</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ЧТО НОВОГО ── */}
      <section className="bd-new">
        <div className="bd-new-glow" />
        <div className="container">
          <div className="bd-sec-header">
            <div className="bd-sec-tag bd-sec-tag--purple">💡 Что нового</div>
            <h2 className="bd-sec-h2 bd-sec-h2--light">Новый уровень возможностей</h2>
            <p className="bd-sec-sub bd-sec-sub--light">Тематические праздники под ключ с современными развлечениями</p>
          </div>
          <div className="bd-new-grid">
            {whatsNew.map((item) => (
              <div className="bd-new-card" key={item.title}>
                <span className="bd-new-emoji">{item.emoji}</span>
                <div className="bd-new-title">{item.title}</div>
                <div className="bd-new-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ДЛЯ ДЕТЕЙ И РОДИТЕЛЕЙ ── */}
      <section className="bd-for">
        <div className="container">
          <div className="bd-for-grid">
            <div className="bd-for-card bd-for-kids">
              <div className="bd-for-icon">🎭</div>
              <h3 className="bd-for-title">Для детей</h3>
              <ul className="bd-for-list">
                {forKids.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="bd-for-card bd-for-parents">
              <div className="bd-for-icon">🍰</div>
              <h3 className="bd-for-title">Для родителей</h3>
              <ul className="bd-for-list">
                {forParents.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── INCLUDED (photo cards с hover) ── */}
      <section className="bd-included">
        <div className="container">
          <div className="bd-included-grid">
            {included.map((it) => (
              <div className="bd-inc-card" key={it.title}>
                <Image src={it.photo} alt={it.title} fill sizes="(max-width: 767px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                <div className="bd-inc-overlay" />
                <div className="bd-inc-always">
                  <span className="bd-inc-emoji">{it.emoji}</span>
                  <div className="bd-inc-title">{it.title}</div>
                </div>
                <div className="bd-inc-hover">
                  <span className="bd-inc-emoji-h">{it.emoji}</span>
                  <div className="bd-inc-title-h">{it.title}</div>
                  <div className="bd-inc-desc">{it.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── КАК ПРОХОДИТ ── */}
      <section className="bd-steps">
        <div className="container">
          <div className="bd-sec-header">
            <div className="bd-sec-tag bd-sec-tag--purple">💬 Как проходит праздник</div>
            <h2 className="bd-sec-h2 bd-sec-h2--light">3 простых шага</h2>
          </div>
          <div className="bd-steps-grid">
            {steps.map((s, i) => (
              <div className="bd-step-card" key={s.num}>
                <div className="bd-step-num">{s.num}</div>
                {i < steps.length - 1 && <div className="bd-step-arrow">→</div>}
                <div className="bd-step-emoji">{s.emoji}</div>
                <div className="bd-step-title">{s.title}</div>
                <div className="bd-step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ПОЧЕМУ МЫ ── */}
      <section className="bd-why">
        <div className="container">
          <div className="bd-why-inner">
            <div>
              <div className="bd-sec-tag" style={{ display: 'inline-flex', marginBottom: '16px' }}>🎯 Почему мы?</div>
              <h2 className="bd-why-h2">Профессионалы<br />вашего праздника</h2>
              <p className="bd-why-sub">
                Добро пожаловать в команду, которая сделает ваш праздник незабываемым!
                Мы специализируемся на организации детских дней рождения, создавая волшебные
                и яркие впечатления как для детей, так и для родителей.
              </p>
            </div>
            <div className="bd-why-list">
              {whyUs.map((w) => (
                <div className="bd-why-item" key={w.text}>
                  <span className="bd-why-emoji">{w.emoji}</span>
                  <span>{w.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bd-offer-box">
            <div className="bd-offer-title">✨ Что мы предлагаем?</div>
            <ul className="bd-offer-list">
              <li>Полный цикл организации праздника: от идеи до воплощения</li>
              <li>Разнообразные пакеты услуг на любой бюджет</li>
              <li>Дополнительные опции: кейтеринг, фотосессии, VR-развлечения и многое другое</li>
            </ul>
            <p className="bd-offer-footer">
              Наша цель — создать идеальную атмосферу, где каждый момент будет наполнен радостью и счастьем.
              Доверьтесь нам, и ваш праздник превратится в событие, которое запомнится надолго!
            </p>
          </div>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section className="bd-packages">
        <div className="container">
          <div className="bd-sec-header">
            <div className="bd-sec-tag">📦 Пакеты праздника</div>
            <h2 className="bd-sec-h2" style={{ color: 'var(--text-dark)' }}>Выбери свой формат</h2>
            <p className="bd-sec-sub">Три пакета на любой вкус и размер компании</p>
          </div>
          <div className="bd-packages-grid">
            {packages.map((pkg) => (
              <div className={`bd-pkg-card${pkg.hot ? ' hot' : ''}`} key={pkg.name}>
                <span className="bd-pkg-icon">{pkg.icon}</span>
                <div className="bd-pkg-name">{pkg.name}</div>
                <div className="bd-pkg-duration">{pkg.duration}</div>
                <div className="bd-pkg-divider" />
                <ul className="bd-pkg-features">
                  {pkg.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <a href="https://t.me/BBestBirthdayBot" target="_blank" rel="noopener noreferrer" className="bd-pkg-cta">Выбрать этот пакет</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bd-cta">
        <div className="bd-cta-blob" />
        <div className="container">
          <div className="bd-cta-inner">
            <div>
              <h2 className="bd-cta-h2">Ваш ребёнок заслуживает лучшего праздника! ✨</h2>
              <p className="bd-cta-p">
                Забронируйте дату прямо сейчас через Telegram-бот или позвоните нам —
                мы обсудим детали и подберём идеальную программу.
              </p>
            </div>
            <div className="bd-cta-right">
              <a href="https://t.me/BBestBirthdayBot" target="_blank" rel="noopener noreferrer" className="btn-gold">🎈 Забронировать через Telegram</a>
              <a href="tel:+79274441844" className="bd-cta-phone">+7 (927) 444-18-44</a>
              <span className="bd-cta-hint">Пн–Вс · 8:00 – 22:00</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
