'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', telegram: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch {}
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-ring-1" />
      <div className="contact-ring-2" />
      <div className="contact-ring-3" />
      <div className="contact-glow-1" />
      <div className="contact-glow-2" />
      <div className="contact-bg-icon contact-bg-1">📞</div>
      <div className="contact-bg-icon contact-bg-2">📍</div>
      <div className="contact-bg-icon contact-bg-3">✉️</div>
      <div className="container">
        <div className="contact-layout">
          <div className="contact-info animate-left">
            <h2>Свяжитесь с нами</h2>
            <div className="contact-title-line" />
            <p>Приходите на бесплатное вводное занятие и получите подарок! Мы расскажем про все направления и подберём программу именно для вас.</p>
            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-detail-icon">📞</span>
                <div className="contact-detail-text"><a href="tel:+79274441844">+7 (927) 444-18-44</a></div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail-icon">👩‍💼</span>
                <div className="contact-detail-text">
                  Директор Лейсан<br />
                  <a href="tel:+79872297545">+7 (987) 229-75-45</a>
                  <span className="contact-detail-sub">личные консультации</span>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail-icon">✉️</span>
                <div className="contact-detail-text"><a href="mailto:Mcruh@yandex.ru">Mcruh@yandex.ru</a></div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail-icon">📍</span>
                <div className="contact-detail-text">
                  Казань, ул. Павлюхина, 108Бк2
                  <span className="contact-detail-sub">Напротив ТЦ KazanMall · ост. «Ипподромная улица»</span>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail-icon">🕐</span>
                <div className="contact-detail-text">Пн–Вс: 8:00 – 22:00</div>
              </div>
            </div>
            <div className="contact-socials">
              <Link href="https://vk.com/ruhclubkazan" target="_blank" rel="noopener noreferrer" className="contact-social-btn contact-social-vk">ВКонтакте</Link>
              <Link href="https://t.me/ruhclub" target="_blank" rel="noopener noreferrer" className="contact-social-btn contact-social-tg">Telegram</Link>
            </div>
          </div>

          <div className="contact-form-wrap animate-right">
            <h3>Оставьте заявку</h3>
            {submitted ? (
              <div className="contact-success">✅ Спасибо! Мы свяжемся с вами в ближайшее время</div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input className="contact-input" type="text" placeholder="Ваше имя" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                <input className="contact-input" type="tel" placeholder="Телефон" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                <input className="contact-input" type="text" placeholder="Telegram (необязательно)" value={form.telegram} onChange={(e) => setForm({ ...form, telegram: e.target.value })} />
                <button type="submit" className="btn-green" disabled={loading} style={{ width: '100%', padding: '16px', fontSize: '1.05rem', borderRadius: '14px', opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'Отправляем...' : 'Записаться на бесплатное занятие'}
                </button>
                <p className="contact-consent">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
