'use client'
import { useState } from 'react'
import Image from 'next/image'

export interface NewsPost {
  id: number
  date: string
  text: string
  photos: string[]
  isVideo?: boolean
  tgUrl: string
}

export default function NewsCard({ post }: { post: NewsPost }) {
  const [slide, setSlide] = useState(0)
  const total = post.photos.length

  return (
    <div className="news-card">
      <div className="news-card-media">
        <div className="news-card-track" style={{ transform: `translateX(-${slide * 100}%)` }}>
          {post.photos.map((src, i) => (
            <div key={i} className="news-card-slide">
              <Image src={src} alt="" fill sizes="(max-width: 767px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>

        {post.isVideo && (
          <a href={post.tgUrl} target="_blank" rel="noopener noreferrer" className="news-card-video-overlay">
            <div className="news-card-play">▶</div>
            <span>Смотреть видео</span>
          </a>
        )}

        {total > 1 && (
          <>
            <button
              className="news-card-arrow news-card-arrow-l"
              onClick={() => setSlide(s => Math.max(0, s - 1))}
              disabled={slide === 0}
              aria-label="Назад"
            >‹</button>
            <button
              className="news-card-arrow news-card-arrow-r"
              onClick={() => setSlide(s => Math.min(total - 1, s + 1))}
              disabled={slide === total - 1}
              aria-label="Вперёд"
            >›</button>
            <div className="news-card-counter">{slide + 1} / {total}</div>
            <div className="news-card-dots">
              {post.photos.map((_, i) => (
                <button key={i} className={`news-dot${i === slide ? ' active' : ''}`} onClick={() => setSlide(i)} aria-label={`Фото ${i + 1}`} />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="news-card-body">
        <div className="news-card-date">{post.date}</div>
        <div className="news-card-text">{post.text}</div>
        <a href={post.tgUrl} target="_blank" rel="noopener noreferrer" className="news-card-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/></svg>
          Читать в Telegram
        </a>
      </div>
    </div>
  )
}
