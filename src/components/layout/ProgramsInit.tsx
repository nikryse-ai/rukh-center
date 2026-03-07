'use client'
import { useEffect } from 'react'

export default function ProgramsInit() {
  useEffect(() => {
    document.body.setAttribute('data-layout', 'programs')
    return () => document.body.removeAttribute('data-layout')
  }, [])
  return null
}
