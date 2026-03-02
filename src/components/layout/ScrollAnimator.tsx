'use client'
import { useEffect } from 'react'

const SELECTOR = '.animate, .animate-pop, .animate-left, .animate-right, .animate-scale'

export default function ScrollAnimator() {
  useEffect(() => {
    // При загрузке с якорем (#programs, #reviews и т.д.) — мгновенный прыжок без анимации
    if (window.location.hash) {
      const id = window.location.hash.slice(1)
      const el = document.getElementById(id)
      if (el) {
        document.documentElement.style.scrollBehavior = 'auto'
        el.scrollIntoView()
        requestAnimationFrame(() => {
          document.documentElement.style.scrollBehavior = ''
        })
      }
    }
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
