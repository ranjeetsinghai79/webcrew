'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger) }

const STATS: { n: number; suffix: string; prefix?: string; label: string; note: string }[] = [
  { n: 12,   suffix: '',        label: 'Businesses live',         note: 'AI teams deployed' },
  { n: 24,   suffix: '/7',     label: 'AI team works',           note: 'never sleeps, never calls in sick' },
  { n: 62,   suffix: '%',      label: 'Calls missed without AI', note: 'industry average for local SMBs' },
  { n: 94,   suffix: '%',      label: 'Client retention',        note: 'renew every year' },
]

const NICHES = [
  'HVAC', 'Roofing', 'Auto Detailing', 'Cleaning', 'Landscaping',
  'Junk Removal', 'Remodeling', 'Dentist', 'Med Spa', 'Law Firm',
  'Plumbing', 'Barbershop', 'Salon', 'Pressure Washing', 'Daycare',
  'Epoxy Flooring', 'Foundation Repair', 'Septic Services', 'Tree Services',
  'Skin Clinic', 'IV Therapy', 'Nail Studio', 'Restaurant', 'Real Estate',
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
        <span className="word-inner">{w}{' '}</span>
      </span>
    ))

  return (
    <section
      id="results"
      ref={sectionRef}
      style={{ padding: 'clamp(80px,12vw,140px) 32px', borderTop: '1px solid var(--color-border)' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '1px', background: 'linear-gradient(135deg, #00C26F, #0EA5E9)' }} />
            The Numbers
            <span style={{ width: '24px', height: '1px', background: 'linear-gradient(135deg, #00C26F, #0EA5E9)' }} />
          </div>
          <div ref={headingRef}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(2.2rem,5.5vw,4rem)',
              letterSpacing: '-0.03em', lineHeight: 1.1,
            }}>
              {split('Numbers that prove')}
              <span className="gradient-brand">{split(' AI beats humans.')}</span>
            </h2>
          </div>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.05rem', maxWidth: '460px', margin: '20px auto 0', lineHeight: 1.65 }}>
            12 local businesses. 5 AI agents each. Real results — calls answered, reviews replied, leads closed, rankings climbing.
          </p>
        </div>

        {/* Stats — dark band */}
        <div className="stats-dark-band" ref={statsRef} style={{ marginBottom: '80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0', position: 'relative', zIndex: 1 }}>
            {STATS.map((s, idx) => (
              <div
                key={s.label}
                className="stat-card"
                style={{
                  padding: 'clamp(24px,3vw,40px) 28px',
                  textAlign: 'center',
                  borderRight: idx < STATS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  position: 'relative',
                }}
              >
                <div
                  className="stat-num"
                  data-target={s.n}
                  data-prefix={s.prefix ?? ''}
                  data-suffix={s.suffix}
                  style={{
                    fontFamily: 'var(--font-display)', fontWeight: 800,
                    fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                    letterSpacing: '-0.04em', lineHeight: 1,
                    marginBottom: '12px',
                    background: 'linear-gradient(135deg, #00C26F 0%, #0EA5E9 100%)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}
                >
                  {(s.prefix ?? '') + '0' + s.suffix}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', fontWeight: 700, marginBottom: '4px', fontFamily: 'var(--font-display)' }}>
                  {s.label}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem' }}>
                  {s.note}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials — 3 across */}
        <div style={{
          margin: '0 0 72px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
        }}>
          {[
            {
              quote: 'I got 3 calls in the first week. Didn\'t even know I was getting a site — said yes to the demo and it was live the next morning.',
              name: 'HVAC Owner', role: 'California', initial: 'H', result: '3 calls · week 1',
              color: '#00C26F',
            },
            {
              quote: 'Three days in, I closed an $18,000 roofing job from a Google search. My old site hadn\'t generated a single job in two years.',
              name: 'Roofing Contractor', role: 'California', initial: 'R', result: '$18K closed · day 3',
              color: '#0EA5E9',
            },
            {
              quote: 'Fully booked 3 weeks out. Had to hire two more cleaners. My Wix site was getting 2 calls a month. This is a completely different world.',
              name: 'Cleaning Business', role: 'California', initial: 'C', result: 'Booked solid · 3 wks',
              color: '#059669',
            },
          ].map(t => (
            <div key={t.name} style={{
              background: 'var(--color-surface)',
              border: '1px solid rgba(0,194,110,0.15)',
              borderRadius: '18px',
              padding: '28px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px',
                background: `linear-gradient(90deg, transparent, ${t.color}66, transparent)`,
              }} />
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: `${t.color}12`,
                border: `1px solid ${t.color}30`,
                borderRadius: 100, padding: '3px 10px',
                fontSize: '0.65rem', fontWeight: 700, color: t.color,
                marginBottom: 16,
              }}>
                {t.result}
              </div>
              <p style={{
                fontSize: '0.95rem', color: 'var(--color-muted)',
                fontFamily: 'Georgia, serif', lineHeight: 1.6,
                marginBottom: '20px',
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
                  background: `linear-gradient(135deg, ${t.color}, ${t.color}99)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.9rem', color: '#fff',
                }}>
                  {t.initial}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--color-text)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--color-muted)' }}>{t.role}</div>
                </div>
                <div style={{ marginLeft: 'auto', display: 'flex', gap: 1 }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Agents Live Feed */}
        <div style={{ marginBottom: '72px' }}>
          <div style={{
            fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--color-muted)',
            textAlign: 'center', marginBottom: 16,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#10B981', opacity: 0.7 }} />
            Example AI Activity — Typical Client Day
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }} className="ai-feed-grid">
            {[
              { agent: 'AI Reception', action: 'Answered call for Valley Plumbing', time: '2m ago', color: '#00C26F' },
              { agent: 'Review Agent', action: 'Replied to 4★ review for SmileDental', time: '7m ago', color: '#8B5CF6' },
              { agent: 'GBP Agent', action: 'Posted "Fall special" for GreenScape', time: '12m ago', color: '#0EA5E9' },
              { agent: 'Lead Alert', action: 'SMS sent → new inquiry for Elite Roofing', time: '18m ago', color: '#F59E0B' },
            ].map(item => (
              <div key={item.agent} style={{
                padding: '14px 16px',
                background: 'var(--color-surface)',
                border: `1px solid ${item.color}20`,
                borderRadius: 12,
                borderLeft: `3px solid ${item.color}`,
              }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, color: item.color, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>
                  {item.agent}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text)', lineHeight: 1.4, marginBottom: 6 }}>{item.action}</div>
                <div style={{ fontSize: '0.62rem', color: 'var(--color-muted)' }}>{item.time}</div>
              </div>
            ))}
          </div>
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
                  el.style.color = 'var(--color-text)'
                  el.style.borderColor = 'rgba(0,194,110,0.5)'
                  el.style.background = 'rgba(0,194,110,0.04)'
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

      <style>{`
        @media (max-width: 600px) {
          .stats-dark-band .stat-card { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .stats-dark-band .stat-card:last-child { border-bottom: none; }
        }
        @media (max-width: 860px) {
          .ai-feed-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 480px) {
          .ai-feed-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
