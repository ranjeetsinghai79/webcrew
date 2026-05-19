'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BEFORE_PROBLEMS = [
  'Built in 2011 on Wix',
  'Not mobile-friendly',
  'No call-to-action',
  'Broken contact form',
  'Zero SEO',
  'Drives customers away',
]

const AFTER_WINS = [
  'Luxury, cinematic design',
  'Perfect on every screen',
  'Phone rings on page load',
  'Contact form → your phone',
  'Google page 1 in weeks',
  'Converts strangers to customers',
]

export default function BeforeAfter() {
  const sectionRef  = useRef<HTMLElement>(null)
  const headingRef  = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = headingRef.current?.querySelectorAll('.word-inner')
      if (words) {
        gsap.from(words, {
          yPercent: 115, opacity: 0, stagger: 0.045, duration: 0.75, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        })
      }
      gsap.from('.ba-side', {
        y: 50, opacity: 0, stagger: 0.15, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
      })
    })
    return () => ctx.revert()
  }, [])

  const updatePos = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = Math.max(10, Math.min(90, ((clientX - rect.left) / rect.width) * 100))
    setPos(pct)
  }

  const onMouseDown = () => { isDragging.current = true }
  const onMouseMove = (e: React.MouseEvent) => { if (isDragging.current) updatePos(e.clientX) }
  const onMouseUp   = () => { isDragging.current = false }
  const onTouchMove = (e: React.TouchEvent) => updatePos(e.touches[0].clientX)

  const split = (text: string) =>
    text.split(' ').map((w, i) => (
      <span key={i} className="word-wrap" style={{ display: 'inline-block', marginRight: '0.22em' }}>
        <span className="word-inner">{w}</span>
      </span>
    ))

  return (
    <section
      ref={sectionRef}
      style={{
        padding: 'clamp(80px,12vw,140px) 32px',
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--color-gold)' }} />
            The Transformation
            <span style={{ width: '24px', height: '1px', background: 'var(--color-gold)' }} />
          </div>
          <div ref={headingRef}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(2.2rem,5.5vw,4rem)',
              letterSpacing: '-0.03em', lineHeight: 1.0,
            }}>
              {split('This is what')}
              <span className="gradient-gold">{split(' losing money')}</span>
              <br />
              {split('looks like.')}
            </h2>
          </div>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.05rem', maxWidth: '480px', margin: '20px auto 0', lineHeight: 1.65 }}>
            A bad website isn't just ugly — it's a broken sales machine running 24/7 against you.
          </p>
        </div>

        {/* Side-by-side comparison */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="ba-side">

          {/* BEFORE */}
          <div className="ba-side" style={{
            background: 'var(--color-bg)',
            border: '1px solid rgba(255,77,77,0.2)',
            borderRadius: '16px',
            overflow: 'hidden',
          }}>
            {/* Header */}
            <div style={{
              background: 'rgba(255,77,77,0.08)',
              borderBottom: '1px solid rgba(255,77,77,0.15)',
              padding: '16px 24px',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <div style={{
                background: 'rgba(255,77,77,0.2)',
                border: '1px solid rgba(255,77,77,0.3)',
                borderRadius: '6px',
                padding: '4px 12px',
                fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em',
                textTransform: 'uppercase', color: '#ff4d4d',
              }}>
                ✕  Before WebCrew
              </div>
            </div>

            {/* Fake bad website mockup */}
            <div style={{ padding: '24px', minHeight: '240px', position: 'relative' }}>
              {/* Fake nav */}
              <div style={{
                background: '#1a1a2e', borderRadius: '6px', padding: '10px 16px',
                display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px',
              }}>
                <div style={{ width: '80px', height: '10px', background: '#2d2d42', borderRadius: '4px' }} />
                <div style={{ flex: 1 }} />
                {[60, 50, 55].map((w, i) => (
                  <div key={i} style={{ width: `${w}px`, height: '8px', background: '#2d2d42', borderRadius: '4px' }} />
                ))}
              </div>
              {/* Fake hero — bad */}
              <div style={{
                background: 'linear-gradient(135deg, #1a1a2e, #12122a)',
                borderRadius: '8px', padding: '20px', marginBottom: '12px',
                border: '1px solid #2d2d42',
              }}>
                <div style={{ width: '55%', height: '14px', background: '#2d2d42', borderRadius: '4px', marginBottom: '8px' }} />
                <div style={{ width: '40%', height: '10px', background: '#252538', borderRadius: '4px', marginBottom: '16px' }} />
                <div style={{ width: '90px', height: '30px', background: '#2d2d42', borderRadius: '4px' }} />
              </div>
              {/* Ugly sections */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                {[70, 55, 65].map((w, i) => (
                  <div key={i} style={{
                    background: '#12122a', border: '1px solid #1e1e35',
                    borderRadius: '6px', padding: '12px',
                  }}>
                    <div style={{ width: `${w}%`, height: '8px', background: '#2d2d42', borderRadius: '3px', marginBottom: '6px' }} />
                    <div style={{ width: '90%', height: '6px', background: '#1e1e35', borderRadius: '3px', marginBottom: '4px' }} />
                    <div style={{ width: '75%', height: '6px', background: '#1e1e35', borderRadius: '3px' }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Problems list */}
            <div style={{ padding: '0 24px 24px' }}>
              {BEFORE_PROBLEMS.map(p => (
                <div key={p} style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(255,77,77,0.08)',
                  fontSize: '0.88rem', color: '#ff4d4d',
                }}>
                  <span style={{ opacity: 0.7 }}>✕</span>
                  <span style={{ color: 'var(--color-muted)' }}>{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AFTER */}
          <div className="ba-side" style={{
            background: 'var(--color-bg)',
            border: '1px solid rgba(196,164,76,0.3)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 0 60px rgba(196,164,76,0.06)',
          }}>
            {/* Header */}
            <div style={{
              background: 'rgba(196,164,76,0.06)',
              borderBottom: '1px solid rgba(196,164,76,0.15)',
              padding: '16px 24px',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <div style={{
                background: 'rgba(196,164,76,0.15)',
                border: '1px solid rgba(196,164,76,0.3)',
                borderRadius: '6px',
                padding: '4px 12px',
                fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em',
                textTransform: 'uppercase', color: 'var(--color-gold)',
              }}>
                ✦  After WebCrew
              </div>
            </div>

            {/* Luxury mockup */}
            <div style={{ padding: '24px', minHeight: '240px', position: 'relative' }}>
              {/* Luxury nav */}
              <div style={{
                background: 'rgba(196,164,76,0.04)',
                border: '1px solid rgba(196,164,76,0.1)',
                borderRadius: '6px', padding: '10px 16px',
                display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px',
              }}>
                <div style={{ width: '90px', height: '10px', background: 'linear-gradient(90deg, #C4A44C, #E8CC7A)', borderRadius: '4px', opacity: 0.7 }} />
                <div style={{ flex: 1 }} />
                {[60, 50, 55].map((w, i) => (
                  <div key={i} style={{ width: `${w}px`, height: '8px', background: 'rgba(196,164,76,0.2)', borderRadius: '4px' }} />
                ))}
              </div>
              {/* Luxury hero */}
              <div style={{
                background: 'linear-gradient(135deg, #0a0a14, #0e0e1e)',
                borderRadius: '8px', padding: '20px', marginBottom: '12px',
                border: '1px solid rgba(196,164,76,0.12)',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: '-30px', right: '-30px',
                  width: '120px', height: '120px', borderRadius: '50%',
                  background: 'rgba(196,164,76,0.05)',
                  filter: 'blur(30px)',
                }} />
                <div style={{ width: '75%', height: '16px', background: 'linear-gradient(90deg, #C4A44C44, #E8CC7A44)', borderRadius: '4px', marginBottom: '8px' }} />
                <div style={{ width: '55%', height: '10px', background: 'rgba(196,164,76,0.15)', borderRadius: '4px', marginBottom: '18px' }} />
                <div style={{
                  width: '110px', height: '32px',
                  background: 'linear-gradient(135deg, #C4A44C, #E8CC7A)',
                  borderRadius: '6px', opacity: 0.9,
                }} />
              </div>
              {/* Premium sections */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                {[75, 60, 70].map((w, i) => (
                  <div key={i} style={{
                    background: 'rgba(196,164,76,0.03)',
                    border: '1px solid rgba(196,164,76,0.1)',
                    borderRadius: '8px', padding: '12px',
                    boxShadow: '0 4px 16px rgba(196,164,76,0.04)',
                  }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(196,164,76,0.1)', marginBottom: '8px' }} />
                    <div style={{ width: `${w}%`, height: '8px', background: 'rgba(196,164,76,0.2)', borderRadius: '3px', marginBottom: '5px' }} />
                    <div style={{ width: '90%', height: '5px', background: 'rgba(196,164,76,0.08)', borderRadius: '3px' }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Wins list */}
            <div style={{ padding: '0 24px 24px' }}>
              {AFTER_WINS.map(w => (
                <div key={w} style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(196,164,76,0.06)',
                  fontSize: '0.88rem',
                }}>
                  <span style={{ color: '#4ade80', opacity: 0.8 }}>✓</span>
                  <span style={{ color: 'var(--color-text)' }}>{w}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ color: 'var(--color-muted)', marginBottom: '24px', fontSize: '1rem' }}>
            Which column is your current website in?
          </p>
          <a href="#contact" className="btn-primary" style={{ fontSize: '0.95rem' }}>
            Get the right-column version
          </a>
        </div>
      </div>
    </section>
  )
}
