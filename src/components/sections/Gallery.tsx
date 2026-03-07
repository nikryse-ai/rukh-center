'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const slides = [
  '/Moments-1.jpg',
  '/Moments-2.jpg',
  '/Moments-3.jpg',
  '/Moments-4.jpg',
  '/Moments-5.jpg',
  '/Moments-6.jpg',
  '/Moments-7.jpg',
  '/Moments-8.jpg',
  '/Moments-9.jpg',
  '/Moments-10.jpg',
  '/Moments-11.jpg',
  '/Moments-12.jpg',
]

export default function Gallery() {
  const [current, setCurrent] = useState(0)
  const total = slides.length - 2


  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total])
  const prev = () => setCurrent((c) => (c - 1 + total) % total)

  useEffect(() => {
    const t = setInterval(next, 4000)
    return () => clearInterval(t)
  }, [next])

  return (
    <section className="gallery-section" id="gallery">
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
            <div className="gallery-track" style={{ transform: `translateX(-${current * (100 / 3)}%)` }}>
              {slides.map((src, i) => (
                <div key={i} className="gallery-slide">
                  <Image src={src} alt={`Момент ${i + 1}`} fill sizes="33vw" style={{ objectFit: 'cover' }} priority={i < 3} />
                </div>
              ))}
            </div>
          </div>
          <button className="gallery-arrow gallery-arrow-right" onClick={next}>›</button>
        </div>

        <div className="gallery-dots">
          {Array.from({ length: total }).map((_, i) => (
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
