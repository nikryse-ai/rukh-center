'use client'
import { useEffect } from 'react'

const SELECTOR = '.animate, .animate-pop, .animate-left, .animate-right, .animate-scale'

export default function ScrollAnimator() {
  // Мгновенно открываем страницу на разделе #programs
  useEffect(() => {
    const el = document.getElementById('programs')
    if (el) el.scrollIntoView({ behavior: 'instant' as ScrollBehavior })
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08 }
    )

    const observe = () => {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        // Skip elements that are already visible (hardcoded)
        if (!el.classList.contains('visible')) {
          observer.observe(el)
        }
      })
    }

    observe()

    const mutation = new MutationObserver(observe)
    mutation.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutation.disconnect()
    }
  }, [])

  return null
}
