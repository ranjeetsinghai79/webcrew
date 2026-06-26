'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, TrendingDown, TrendingUp } from 'lucide-react'

if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger) }

const BULLETS = [
  { stat: '~2,400', label: 'people search your exact trade in your city every month' },
  { stat: 'Top 3',  label: 'Google results capture 68% of all those clicks. You\'re not there.' },
  { stat: '$650',   label: 'average job value — meaning every missed lead costs you $650+' },
  { stat: '~$9.6K', label: 'per month you\'re silently handing to competitors who rank above you' },
]

function RevenueCard() {
  const badRef  = useRef<HTMLSpanElement>(null)
  const goodRef = useRef<HTMLSpanElement>(null)
  const roiRef  = useRef<HTMLSpanElement>(null)
  const triggered = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !triggered.current) {
        triggered.current = true
        const countUp = (el: HTMLSpanElement | null, target: number, prefix = '', suffix = '') => {
          if (!el) return
          const obj = { val: 0 }
          gsap.to(obj, {
            val: target, duration: 2.2, ease: 'power2.out',
            onUpdate: () => { el.textContent = prefix + Math.round(obj.val).toLocaleString() + suffix },
          })
        }
        setTimeout(() => {
          countUp(badRef.current, 9600, '-$', '/mo')
          countUp(goodRef.current, 18200, '+$', '/mo')
          countUp(roiRef.current, 60, '', 'x')
        }, 300)
      }
    }, { threshold: 0.4 })
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        background: '#FFFFFF',
        border: '1px solid rgba(0,0,0,0.09)',
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow: '0 8px 40px rgba(0,0,0,0.1)',
      }}
    >
      {/* Card header */}
      <div style={{
        padding: '20px 24px',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-blue)', marginBottom: 2 }}>
            Revenue Calculator
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--color-muted)' }}>
            Based on your local market · Tracy, CA
          </div>
        </div>
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: '#F3F4F6',
          border: '1px solid rgba(0,0,0,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <TrendingUp size={16} color="#00C26F" />
        </div>
      </div>

      {/* Bad site row */}
      <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 24, height: 24, borderRadius: 6,
            background: 'rgba(255,77,77,0.1)',
          }}>
            <TrendingDown size={13} color="#ff7070" />
          </div>
          <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#ff7070' }}>
            With your current site
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { label: 'Google rank',   val: 'Not found' },
            { label: 'Leads/month',   val: '~2' },
            { label: 'Avg job value', val: '$650' },
            { label: 'Monthly loss',  val: <span ref={badRef} style={{ color: '#ff7070' }}>-$0/mo</span> },
          ].map((r) => (
            <div key={r.label} style={{
              background: 'rgba(255,77,77,0.04)',
              border: '1px solid rgba(255,77,77,0.08)',
              borderRadius: 8, padding: '8px 10px',
            }}>
              <div style={{ fontSize: '0.58rem', color: 'var(--color-muted)', marginBottom: 2 }}>{r.label}</div>
              <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-text)' }}>{r.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Good site row */}
      <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 24, height: 24, borderRadius: 6,
            background: 'rgba(74,222,128,0.1)',
          }}>
            <TrendingUp size={13} color="#4ade80" />
          </div>
          <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#4ade80' }}>
            With WebCrew
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { label: 'Google rank',   val: 'Top 3' },
            { label: 'Leads/month',   val: '~28' },
            { label: 'Avg job value', val: '$650' },
            { label: 'Monthly rev.',  val: <span ref={goodRef} style={{ color: '#4ade80' }}>+$0/mo</span> },
          ].map((r) => (
            <div key={r.label} style={{
              background: 'rgba(74,222,128,0.04)',
              border: '1px solid rgba(74,222,128,0.1)',
              borderRadius: 8, padding: '8px 10px',
            }}>
              <div style={{ fontSize: '0.58rem', color: 'var(--color-muted)', marginBottom: 2 }}>{r.label}</div>
              <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-text)' }}>{r.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ROI footer */}
      <div style={{
        padding: '16px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: '#F9FAFB',
      }}>
        <div>
          <div style={{ fontSize: '0.65rem', color: 'var(--color-muted)', marginBottom: 2 }}>
            Your WebCrew cost
          </div>
          <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-text)' }}>
            $299 one-time
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '0.65rem', color: 'var(--color-muted)', marginBottom: 2 }}>
            Month 1 ROI
          </div>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: '1.6rem', letterSpacing: '-0.03em',
            color: 'var(--color-blue)',
          }}>
            <span ref={roiRef}>0x</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MoneyShot() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const bulletsRef = useRef<HTMLDivElement>(null)
  const cardRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.querySelectorAll('.word-inner') ?? [], {
        yPercent: 115, opacity: 0, stagger: 0.035, duration: 0.75, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      })
      gsap.from(bulletsRef.current?.querySelectorAll('.math-bullet') ?? [], {
        x: -24, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: bulletsRef.current, start: 'top 82%' },
      })
      gsap.from(cardRef.current, {
        x: 40, opacity: 0, duration: 0.9, ease: 'power4.out',
        scrollTrigger: { trigger: cardRef.current, start: 'top 82%' },
      })
    })
    return () => ctx.revert()
  }, [])

  const split = (text: string, gold?: boolean) =>
    text.split(' ').map((w, i) => (
      <span key={i} className="word-wrap" style={{ display: 'inline-block', marginRight: '0.22em' }}>
        <span
          className="word-inner"
          style={gold ? {
            display: 'inline-block',
            background: 'linear-gradient(135deg,#00C26F,#0EA5E9)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          } : undefined}
        >{w}</span>
      </span>
    ))

  return (
    <section
      ref={sectionRef}
      style={{
        padding: 'clamp(80px,10vw,130px) clamp(24px,6vw,80px)',
        borderTop: '1px solid var(--color-border)',
        overflow: 'hidden',
      }}
    >
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
        gap: 'clamp(40px,6vw,80px)',
        alignItems: 'center',
      }}
      className="math-grid"
      >
        {/* Left: copy */}
        <div>
          <div className="section-label" style={{ marginBottom: 20 }}>
            THE MATH
          </div>

          <div ref={headingRef} style={{ marginBottom: 28 }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(2.2rem,4.2vw,3.8rem)',
              letterSpacing: '-0.04em', lineHeight: 0.98,
            }}>
              <div style={{ overflow: 'hidden', paddingBottom: '0.05em' }}>
                {split('Invisible on Google')}
              </div>
              <div style={{ overflow: 'hidden', paddingBottom: '0.05em' }}>
                {split('= $9,600/month', true)}
              </div>
              <div style={{ overflow: 'hidden', paddingBottom: '0.05em' }}>
                {split('going to competitors.')}
              </div>
            </h2>
          </div>

          <p style={{
            color: 'var(--color-muted)', fontSize: '1rem',
            lineHeight: 1.75, maxWidth: 440, marginBottom: 36,
          }}>
            Right now, someone in your city is Googling your trade. They&apos;ll call whoever shows up first. If that&apos;s not you, you just lost a $650 job — silently. Here&apos;s the real math on what being invisible costs you every single month:
          </p>

          <div ref={bulletsRef} style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 44 }}>
            {BULLETS.map((b) => (
              <div
                key={b.label}
                className="math-bullet"
                style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}
              >
                <div style={{
                  flexShrink: 0, marginTop: 2,
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: '1rem', color: 'var(--color-blue)',
                  minWidth: 52,
                }}>
                  {b.stat}
                </div>
                <div style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  {b.label}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-primary">
              Get My FREE Demo Site <ArrowRight size={16} />
            </a>
            <a href="#how-it-works" className="btn-ghost">
              See How It Works
            </a>
          </div>
        </div>

        {/* Right: revenue calculator card */}
        <div ref={cardRef}>
          <RevenueCard />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .math-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
