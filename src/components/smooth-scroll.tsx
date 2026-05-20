'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger) }

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
    lenis.on('scroll', () => ScrollTrigger.update())
    const raf = (t: number) => { lenis.raf(t); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])
  return null
}
