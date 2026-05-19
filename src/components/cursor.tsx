'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'

export default function Cursor() {
  useEffect(() => {
    const dot  = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    if (!dot || !ring) return
    if (window.matchMedia('(pointer:coarse)').matches) return // skip touch devices

    let mx = 0, my = 0
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      gsap.to(dot,  { x:mx, y:my, duration:0.05, ease:'none' })
      gsap.to(ring, { x:mx, y:my, duration:0.18, ease:'power2.out' })
    }

    const onEnter = () => gsap.to(ring, { width:56, height:56, borderColor:'var(--color-gold)', duration:0.3 })
    const onLeave = () => gsap.to(ring, { width:32, height:32, borderColor:'rgba(196,164,76,0.45)', duration:0.3 })

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a,button,.card,.pricing-card').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div id="cursor">
      <div id="cursor-dot" />
      <div id="cursor-ring" />
    </div>
  )
}
