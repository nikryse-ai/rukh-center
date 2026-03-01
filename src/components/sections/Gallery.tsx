'use client'
import { useState, useEffect, useCallback } from 'react'

const slides = [
  { color: '#3D6B55', label: '[Фото 1]' },
  { color: '#2D5140', label: '[Фото 2]' },
  { color: '#4A7A63', label: '[Фото 3]' },
  { color: '#B8935A', label: '[Фото 4]' },
  { color: '#2D5140', label: '[Фото 5]' },
  { color: '#3D6B55', label: '[Фото 6]' },
  { color: '#4A7A63', label: '[Фото 7]' },
  { color: '#D4AF7A', label: '[Фото 8]' },
]

export default function Gallery() {
  const [current, setCurrent] = useState(0)
  const total = slides.length

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total])
  const prev = () => setCurrent((c) => (c - 1 + total) % total)

  useEffect(() => {
    const t = setInterval(next, 4000)
    return () => clearInterval(t)
  }, [next])

  return (
    <section className="gallery-section">
      <div className="gallery-blob-1" />
      <div className="gallery-blob-2" />
      <div className="container">
        <div className="gallery-title">
          <h2>Живые эмоции и яркие моменты 🌟</h2>
          <div className="gallery-title-line" />
          <p>Каждый день в РУХ — новые открытия, проекты и настоящая дружба</p>
        </div>

        <div className="gallery-slider">
          <button className="gallery-arrow gallery-arrow-left" onClick={prev}>‹</button>
          <div className="gallery-track-wrap">
            <div className="gallery-track" style={{ transform: `translateX(-${current * 100}%)` }}>
              {slides.map((s, i) => (
                <div key={i} className="gallery-slide" style={{ background: s.color }}>
                  {s.label}
                </div>
              ))}
            </div>
          </div>
          <button className="gallery-arrow gallery-arrow-right" onClick={next}>›</button>
        </div>

        <div className="gallery-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`gallery-dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
