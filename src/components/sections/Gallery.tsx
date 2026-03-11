'use client'
import { useRef } from 'react'
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
  '/Moments-13.jpg',
  '/Moments-14.jpg',
  '/Moments-15.jpg',
]

export default function Gallery() {
  const stripRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    stripRef.current?.scrollBy({ left: dir === 'right' ? 580 : -580, behavior: 'smooth' })
  }

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
      </div>

      <div className="gallery-strip-wrap">
        <button className="gallery-arrow gallery-arrow-left" onClick={() => scroll('left')}>‹</button>
        <div className="gallery-strip" ref={stripRef}>
          {slides.map((src, i) => (
            <div key={i} className="gallery-strip-item">
              <Image src={src} alt={`Момент ${i + 1}`} fill sizes="420px" style={{ objectFit: 'cover' }} priority={i < 4} />
            </div>
          ))}
        </div>
        <button className="gallery-arrow gallery-arrow-right" onClick={() => scroll('right')}>›</button>
      </div>
    </section>
  )
}
