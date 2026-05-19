'use client'
import { useEffect } from 'react'

export default function ScrollProgress() {
  useEffect(() => {
    const handler = () => {
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      document.documentElement.style.setProperty('--scroll-pct', String(Math.min(pct, 1)))
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
  return <div id="scroll-progress" />
}
