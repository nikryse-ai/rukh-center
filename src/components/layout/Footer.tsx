import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--footer-bg)', color: '#fff', paddingTop: '40px' }}>
      <div className="container">
        <div className="footer-grid">

          {/* Колонка 1: Лого + описание + соцсети */}
          <div>
            <div className="footer-logo">
              <Image src="/logo.png" alt="РУХ Молодёжный центр" width={160} height={48} />
            </div>
            <p className="footer-desc">
              Многопрофильный молодёжный центр в сердце ЖК «Возрождение», Приволжский район Казани. Интересные занятия для детей, подростков, взрослых и семей.
            </p>
            <div className="footer-socials">
              <Link href="https://vk.com/ruhclubkazan" target="_blank" rel="noopener noreferrer" className="footer-social" title="ВКонтакте">ВК</Link>
              <Link href="https://t.me/ruhclub" target="_blank" rel="noopener noreferrer" className="footer-social" title="Telegram">TG</Link>
            </div>
          </div>

          {/* Колонка 2: Навигация */}
          <div>
            <div className="footer-heading">Навигация</div>
            <nav className="footer-nav">
              {[
                { label: 'Направления', href: '/#programs' },
                { label: 'О центре', href: '/#about' },
                { label: 'Отзывы', href: '/#reviews' },
                { label: 'Контакты', href: '/#contact' },
              ].map((l) => (
                <Link key={l.label} href={l.href} className="footer-nav-link">{l.label}</Link>
              ))}
            </nav>
          </div>

          {/* Колонка 3: Контакты */}
          <div>
            <div className="footer-heading">Контакты</div>
            <div className="footer-contacts">
              <div className="footer-contact-row">📞 <a href="tel:+79274441844">+7 (927) 444-18-44</a></div>
              <div className="footer-contact-row">✉️ <a href="mailto:Mcruh@yandex.ru">Mcruh@yandex.ru</a></div>
              <div className="footer-contact-row">
                📍 Казань, ул. Павлюхина, 108Бк2<br />
                <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>Напротив ТЦ KazanMall, ост. «Ипподромная улица»</span>
              </div>
              <div className="footer-contact-row">🕐 Пн–Сб: 8:00 – 22:00</div>
              <div className="footer-director">
                Директор Лейсан<br />
                <a href="tel:+79872297545">+7 (987) 229-75-45</a>
                <span style={{ opacity: 0.7 }}> — личные консультации</span>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя полоска */}
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 МЦ «Рух». Все права защищены.</p>
          <div className="footer-bottom-links">
            <Link href="#" className="footer-bottom-link">Политика конфиденциальности</Link>
            <Link href="#" className="footer-bottom-link">Пользовательское соглашение</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
