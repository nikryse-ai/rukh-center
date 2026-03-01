'use client'
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [w, setW] = useState(0)

  useEffect(() => {
    const update = () => {
      const el = document.documentElement
      const total = el.scrollHeight - el.clientHeight
      setW(total > 0 ? Math.min((window.scrollY / total) * 100, 100) : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0,
        height: '3px',
        width: `${w}%`,
        background: 'linear-gradient(to right, #B8935A, #D4AF7A, #B8935A)',
        backgroundSize: '200% 100%',
        zIndex: 9999,
        pointerEvents: 'none',
        transition: 'width 0.1s linear',
        boxShadow: '0 0 10px rgba(184,147,90,0.7)',
      }}
    />
  )
}
