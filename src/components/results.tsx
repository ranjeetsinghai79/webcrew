'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { n: 847,  suffix: '+',  label: 'Sites built',          note: 'and counting' },
  { n: 6,    suffix: 'h',  label: 'Avg build time',       note: 'while you sleep' },
  { n: 299,  prefix: '$',  suffix: '', label: 'Starting price', note: 'one-time' },
  { n: 94,   suffix: '%',  label: 'Client retention',     note: 'keep hosting' },
]

const NICHES = [
  'HVAC', 'Roofing', 'Auto Detailing', 'Cleaning', 'Landscaping',
  'Handyman', 'Junk Removal', 'Remodeling', 'Dentist', 'Med Spa',
]

export default function Results() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const statsRef   = useRef<HTMLDivElement>(null)
  const nichesRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.querySelectorAll('.word-inner') ?? [], {
        yPercent: 115, opacity: 0, stagger: 0.045, duration: 0.75, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      })

      statsRef.current?.querySelectorAll('.stat-num').forEach(el => {
        const target = parseInt(el.getAttribute('data-target') ?? '0')
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target, duration: 2.2, ease: 'power2.out',
          onUpdate: () => {
            const prefix = el.getAttribute('data-prefix') ?? ''
            const suffix = el.getAttribute('data-suffix') ?? ''
            el.textContent = prefix + Math.round(obj.val).toLocaleString() + suffix
          },
          scrollTrigger: { trigger: statsRef.current, start: 'top 80%', once: true },
        })
      })

      gsap.from(statsRef.current?.querySelectorAll('.stat-card') ?? [], {
        y: 48, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: statsRef.current, start: 'top 80%' },
      })

      gsap.from(nichesRef.current?.querySelectorAll('.niche-tag') ?? [], {
        opacity: 0, scale: 0.88, stagger: 0.04, duration: 0.5, ease: 'back.out(1.3)',
        scrollTrigger: { trigger: nichesRef.current, start: 'top 88%' },
      })
    })
    return () => ctx.revert()
  }, [])

  const split = (text: string) =>
    text.split(' ').map((w, i) => (
      <span key={i} className="word-wrap" style={{ display: 'inline-block', marginRight: '0.22em' }}>
        <span className="word-inner">{w}</span>
      </span>
    ))

  return (
    <section
      id="results"
      ref={sectionRef}
      style={{ padding: 'clamp(80px,12vw,140px) 32px' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--color-gold)' }} />
            The Numbers
            <span style={{ width: '24px', height: '1px', background: 'var(--color-gold)' }} />
          </div>
          <div ref={headingRef}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(2.2rem,5.5vw,4rem)',
              letterSpacing: '-0.03em', lineHeight: 1.0,
            }}>
              {split('An agency that')}
              <span className="gradient-gold">{split(' never clocks out.')}</span>
            </h2>
          </div>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.05rem', maxWidth: '420px', margin: '20px auto 0', lineHeight: 1.65 }}>
            AI doesn't sleep. Neither does your new website.
          </p>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2px', marginBottom: '80px' }}
        >
          {STATS.map(s => (
            <div
              key={s.label}
              className="stat-card"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '14px',
                padding: '36px 28px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = 'var(--color-border-hot)'; el.style.boxShadow = '0 0 40px rgba(196,164,76,0.08)' }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'var(--color-border)'; el.style.boxShadow = 'none' }}
            >
              <div style={{
                position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                width: '60%', height: '1px',
                background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
              }} />
              <div
                className="stat-num"
                data-target={s.n}
                data-prefix={s.prefix ?? ''}
                data-suffix={s.suffix}
                style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '3rem', color: 'var(--color-gold)',
                  letterSpacing: '-0.03em', lineHeight: 1,
                  marginBottom: '10px',
                }}
              >
                {(s.prefix ?? '') + '0' + s.suffix}
              </div>
              <div style={{ color: 'var(--color-text)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '4px' }}>
                {s.label}
              </div>
              <div style={{ color: 'var(--color-muted)', fontSize: '0.75rem' }}>
                {s.note}
              </div>
            </div>
          ))}
        </div>

        {/* Niche tags */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            color: 'var(--color-muted)', fontSize: '0.72rem',
            letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '20px',
          }}>
            Industries we dominate
          </p>
          <div ref={nichesRef} style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {NICHES.map(n => (
              <span
                key={n}
                className="niche-tag"
                style={{
                  border: '1px solid var(--color-border)',
                  borderRadius: '100px',
                  padding: '8px 18px',
                  fontSize: '0.82rem',
                  color: 'var(--color-muted)',
                  background: 'var(--color-surface)',
                  transition: 'color 0.25s, border-color 0.25s, background 0.25s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.color = 'var(--color-gold)'
                  el.style.borderColor = 'var(--color-gold)'
                  el.style.background = 'rgba(196,164,76,0.07)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.color = 'var(--color-muted)'
                  el.style.borderColor = 'var(--color-border)'
                  el.style.background = 'var(--color-surface)'
                }}
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
