'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger) }

const STEPS = [
  {
    n: '01',
    label: 'We Find You',
    headline: 'AI hunts down the opportunity',
    body: 'Every morning, our system scans Google Maps for local businesses without a great web presence. Your competitor down the street is already on the list.',
    note: 'No sign-up required. We come to you.',
  },
  {
    n: '02',
    label: 'Overnight Magic',
    headline: 'A luxury site is born while you sleep',
    body: 'Brand colors, real services, your phone number, professional photos, cinematic animations — built and live on the internet by morning.',
    note: 'Average build time: 6 hours.',
  },
  {
    n: '03',
    label: 'You Wake Up To This',
    headline: 'A text with your demo link',
    body: 'We send you a link. Tap it on your phone. Browse your new website. If it doesn\'t make you want to show it to every customer, don\'t pay a cent.',
    note: 'Pay only if you love it. Zero risk.',
  },
  {
    n: '04',
    label: 'Customers Find You',
    headline: 'Go live. Start getting calls.',
    body: 'One tap and your luxury website goes live on your domain. SEO optimized from day one. Most clients get their first lead within 72 hours.',
    note: 'No meetings. No design briefs. Done.',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const stepsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = headingRef.current?.querySelectorAll('.word-inner')
      if (words) {
        gsap.from(words, {
          yPercent: 115, opacity: 0, stagger: 0.045, duration: 0.75, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        })
      }

      const cards = stepsRef.current?.querySelectorAll('.step-card')
      if (cards) {
        gsap.from(cards, {
          y: 60, opacity: 0, stagger: 0.1, duration: 0.75, ease: 'power3.out',
          scrollTrigger: { trigger: stepsRef.current, start: 'top 80%' },
        })
      }
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
      id="how-it-works"
      ref={sectionRef}
      style={{ padding: 'clamp(80px,12vw,140px) 32px', maxWidth: '1100px', margin: '0 auto' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>
          <span style={{ width: '24px', height: '1px', background: 'var(--color-gold)' }} />
          The Process
          <span style={{ width: '24px', height: '1px', background: 'var(--color-gold)' }} />
        </div>
        <div ref={headingRef}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(2.2rem,5.5vw,4rem)',
            letterSpacing: '-0.03em', lineHeight: 1.0,
          }}>
            {split('While you were reading this,')}
            <br />
            <span className="gradient-gold">{split('someone just got a demo.')}</span>
          </h2>
        </div>
        <p style={{ color: 'var(--color-muted)', fontSize: '1.1rem', maxWidth: '460px', margin: '20px auto 0', lineHeight: 1.65 }}>
          No meetings. No briefs. No 6-week timelines. Here's what actually happens:
        </p>
      </div>

      <div
        ref={stepsRef}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2px',
          background: 'var(--color-border)',
          border: '1px solid var(--color-border)',
          borderRadius: '16px',
          overflow: 'hidden',
        }}
      >
        {STEPS.map((s, idx) => (
          <div
            key={s.n}
            className="step-card"
            style={{
              background: 'var(--color-surface)',
              padding: '40px 32px',
              position: 'relative',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-surface-2)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-surface)')}
          >
            {/* Step number watermark */}
            <div style={{
              position: 'absolute', top: '16px', right: '20px',
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '4.5rem', lineHeight: 1,
              color: 'rgba(196,164,76,0.06)',
              userSelect: 'none', letterSpacing: '-0.04em',
            }}>
              {s.n}
            </div>

            {/* Connector line — desktop only via CSS */}
            {idx < STEPS.length - 1 && (
              <div className="step-connector" style={{
                position: 'absolute', top: '50%', right: '-1px',
                width: '2px', height: '40px',
                background: 'linear-gradient(to bottom, transparent, var(--color-gold), transparent)',
                transform: 'translateY(-50%)',
              }} />
            )}

            <div style={{
              fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--color-gold)',
              marginBottom: '16px',
            }}>
              {s.label}
            </div>

            <h3 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '1.2rem', lineHeight: 1.25,
              marginBottom: '14px', letterSpacing: '-0.02em',
            }}>
              {s.headline}
            </h3>

            <p style={{
              color: 'var(--color-muted)',
              fontSize: '0.9rem', lineHeight: 1.7,
              marginBottom: '20px',
            }}>
              {s.body}
            </p>

            <div style={{
              borderTop: '1px solid var(--color-border)',
              paddingTop: '14px',
              fontSize: '0.78rem', fontWeight: 600,
              color: '#4ade80',
              letterSpacing: '0.04em',
            }}>
              ✓ {s.note}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
