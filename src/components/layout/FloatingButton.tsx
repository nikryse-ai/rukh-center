'use client'
import { useState } from 'react'

export default function FloatingButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fab-wrapper">
      <a
        href="https://t.me/ruhclub"
        target="_blank"
        rel="noopener noreferrer"
        className={`fab-sub fab-sub-tg ${open ? 'visible' : 'hidden'}`}
      >
        Telegram
      </a>
      <a
        href="tel:+79274441844"
        className={`fab-sub fab-sub-call ${open ? 'visible' : 'hidden'}`}
      >
        +7 (927) 444-18-44
      </a>
      <button className="fab-main" onClick={() => setOpen((v) => !v)}>
        {open ? 'Закрыть ✕' : 'Связаться'}
      </button>
    </div>
  )
}
