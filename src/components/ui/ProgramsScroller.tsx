'use client'
import { useEffect } from 'react'

export default function ProgramsScroller() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const el = document.getElementById('programs')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  return null
}
