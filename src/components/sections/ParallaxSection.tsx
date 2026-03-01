'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function ParallaxSection() {
  const wrapRef  = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = wrapRef.current?.closest('.prlx-section') as HTMLElement | null
    if (!section) return

    const handleScroll = () => {
      if (!wrapRef.current || !innerRef.current) return
      const rect = section.getBoundingClientRect()
      const wh   = window.innerHeight
      if (rect.bottom < 0 || rect.top > wh) return

      const progress = (wh - rect.top) / (wh + rect.height)
      wrapRef.current.style.transform = `translateY(${(progress - 0.5) * -130}px)`
      const peak  = 1 - Math.abs(progress - 0.5) * 2
      const scale = 1.04 + peak * 0.07
      innerRef.current.style.transform = `scale(${scale})`
      const bright = 0.82 + peak * 0.22
      innerRef.current.style.filter = `brightness(${bright})`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="prlx-section">
      <div className="prlx-photo-wrap" ref={wrapRef}>
        <div className="prlx-photo-inner" ref={innerRef} />
      </div>
      <div className="prlx-particles" />
      <div className="prlx-holo" />
      <div className="prlx-scan" />
      <div className="prlx-streak prlx-streak-1" />
      <div className="prlx-streak prlx-streak-2" />
      <div className="prlx-streak prlx-streak-3" />
      <div className="prlx-overlay" />
      <div className="prlx-deco prlx-deco-1">🌿</div>
      <div className="prlx-deco prlx-deco-2">⭐</div>
      <div className="prlx-deco prlx-deco-3">🏆</div>

      <div className="prlx-content">
        <div>
          <div className="prlx-tag">📍 Казань, ул. Павлюхина, 108Бк2</div>
          <h2 className="prlx-h2">
            Наш центр —<br /><em>место силы</em> молодёжи
          </h2>
          <p className="prlx-desc">
            Современное пространство в сердце ЖК «Возрождение». Оснащённые залы, уютные учебные кабинеты и атмосфера, в которой хочется развиваться каждый день.
          </p>
          <Link href="/#contact" className="btn-gold">Записаться на бесплатное занятие</Link>
        </div>

        <div className="prlx-stats">
          {[
            { emoji: '🎁', num: 'Бесплатное', label: 'вводное занятие' },
            { emoji: '👨‍🏫', num: '100+',      label: 'участников уже с нами' },
            { emoji: '🏋️', num: 'Современные', label: 'залы и кабинеты' },
            { emoji: '🏠', num: 'В сердце',    label: 'ЖК «Возрождение»' },
          ].map((s) => (
            <div className="prlx-stat" key={s.label}>
              <div className="prlx-stat-num" style={{ fontSize: '1.1rem' }}>{s.emoji} {s.num}</div>
              <div className="prlx-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
