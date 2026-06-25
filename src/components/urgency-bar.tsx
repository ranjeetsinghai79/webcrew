'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ArrowRight, X } from 'lucide-react'

const SLOTS_TONIGHT = 3
const BUILT_TONIGHT = 7

export default function UrgencyBar() {
  const [visible, setVisible]   = useState(false)
  const [dismissed, setDismiss] = useState(false)
  const barRef = useRef<HTMLDivElement>(null)

  // Show after user scrolls past hero (~300px)
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 320 && !dismissed) setVisible(true)
      else if (window.scrollY < 100) setVisible(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [dismissed])

  // Animate in/out
  useEffect(() => {
    if (!barRef.current) return
    if (visible) {
      gsap.fromTo(barRef.current,
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.45, ease: 'power3.out' }
      )
    } else {
      gsap.to(barRef.current, { yPercent: 100, opacity: 0, duration: 0.3, ease: 'power2.in' })
    }
  }, [visible])

  if (dismissed) return null

  return (
    <div
      ref={barRef}
      style={{
        position: 'fixed',
        bottom: 0, left: 0, right: 0,
        zIndex: 9000,
        background: 'linear-gradient(135deg, #03030D 0%, #0D0B28 100%)',
        borderTop: '1px solid rgba(37,99,235,0.3)',
        padding: '14px clamp(20px,5vw,60px)',
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        flexWrap: 'wrap',
        justifyContent: 'center',
        boxShadow: '0 -8px 40px rgba(0,0,0,0.35)',
      }}
    >
      {/* Left: scarcity signal */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          background: 'rgba(249,115,22,0.12)',
          border: '1px solid rgba(249,115,22,0.3)',
          borderRadius: 100, padding: '4px 10px',
          fontSize: '0.65rem', fontWeight: 800,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          color: '#f97316',
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: '#f97316',
            boxShadow: '0 0 6px rgba(249,115,22,0.7)',
            flexShrink: 0,
          }} />
          Tonight&apos;s queue: {BUILT_TONIGHT}/10 built · {SLOTS_TONIGHT} remaining
        </span>
      </div>

      {/* Center: copy */}
      <div style={{ textAlign: 'center' }}>
        <span style={{
          fontSize: 'clamp(0.78rem,1.5vw,0.9rem)',
          color: 'rgba(255,255,255,0.75)',
          fontFamily: 'var(--font-display)',
        }}>
          Tonight&apos;s batch fills up fast.{' '}
          <span style={{ color: '#FFFFFF', fontWeight: 600 }}>
            We build your site free — you pay only if you love it.
          </span>
        </span>
      </div>

      {/* Right: CTA */}
      <a
        href="#contact"
        onClick={e => {
          e.preventDefault()
          window.dispatchEvent(new CustomEvent('wc:tab', { detail: { tab: 'demo' } }))
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="btn-primary"
        style={{ fontSize: '0.82rem', padding: '10px 20px', whiteSpace: 'nowrap', flexShrink: 0 }}
      >
        Get My Free Demo Site <ArrowRight size={14} />
      </a>

      {/* Dismiss */}
      <button
        onClick={() => { setDismiss(true); setVisible(false) }}
        style={{
          position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
          background: 'transparent', border: 'none', cursor: 'pointer',
          color: 'rgba(255,255,255,0.35)', padding: 4,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.75)' }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.35)' }}
        aria-label="Dismiss"
      >
        <X size={15} />
      </button>
    </div>
  )
}
