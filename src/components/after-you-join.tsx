'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger) }

const JOURNEY = [
  {
    time: 'Day 1',
    event: 'Your website goes live',
    detail: 'Custom-built overnight. Live URL lands in your inbox and on your phone by morning.',
    color: '#00C26F',
  },
  {
    time: 'Day 3',
    event: 'Google starts indexing',
    detail: 'Sitemap submitted, schema live, GBP connected. Google knows you exist — and where you are.',
    color: '#0EA5E9',
  },
  {
    time: 'Week 1',
    event: 'First leads arrive',
    detail: 'Calls, form fills, texts — your phone starts buzzing. Most clients see their first inquiry within 7 days.',
    color: '#10B981',
  },
  {
    time: 'Month 1',
    event: 'Rankings improve',
    detail: 'Your GBP posts, review replies and local SEO compound. Google pushes you higher every week.',
    color: '#8B5CF6',
  },
  {
    time: 'Every Month',
    event: 'We keep improving your business automatically',
    detail: 'New content, better rankings, faster performance, more leads. Your online presence gets stronger while you run your business.',
    color: '#F59E0B',
    highlight: true,
  },
]

export default function AfterYouJoin() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const stepsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.querySelectorAll('.word-inner') ?? [], {
        yPercent: 115, opacity: 0, stagger: 0.04, duration: 0.75, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      })
      gsap.from(stepsRef.current?.querySelectorAll('.journey-step') ?? [], {
        x: -32, opacity: 0, stagger: 0.12, duration: 0.65, ease: 'power3.out',
        scrollTrigger: { trigger: stepsRef.current, start: 'top 82%' },
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
      ref={sectionRef}
      style={{
        padding: 'clamp(80px,10vw,120px) clamp(24px,6vw,80px)',
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: 16 }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--color-blue)' }} />
            Your Journey
            <span style={{ width: '24px', height: '1px', background: 'var(--color-blue)' }} />
          </div>
          <div ref={headingRef}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(2rem,4.2vw,3.4rem)',
              letterSpacing: '-0.035em', lineHeight: 1.0,
            }}>
              {split('What Happens After You Join?')}
            </h2>
          </div>
          <p style={{ color: 'var(--color-muted)', fontSize: '1rem', maxWidth: 520, margin: '20px auto 0', lineHeight: 1.7 }}>
            You&apos;re not buying a website. You&apos;re subscribing to an ongoing journey of growth — one that starts tonight.
          </p>
        </div>

        <div ref={stepsRef} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {JOURNEY.map((step, i) => (
            <div
              key={step.time}
              className="journey-step"
              style={{ display: 'flex', gap: 0, alignItems: 'stretch' }}
            >
              {/* Spine */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 56, flexShrink: 0 }}>
                <div style={{
                  width: step.highlight ? 16 : 12,
                  height: step.highlight ? 16 : 12,
                  borderRadius: '50%',
                  background: step.color,
                  boxShadow: `0 0 ${step.highlight ? 20 : 10}px ${step.color}60`,
                  marginTop: 28, flexShrink: 0,
                  border: step.highlight ? `3px solid ${step.color}40` : 'none',
                }} />
                {i < JOURNEY.length - 1 && (
                  <div style={{
                    flex: 1, width: 1.5, minHeight: 20, marginTop: 6, marginBottom: 6,
                    background: `linear-gradient(to bottom, ${step.color}50, ${JOURNEY[i+1].color}30)`,
                  }} />
                )}
              </div>

              {/* Content */}
              <div style={{
                flex: 1,
                padding: step.highlight ? '20px 24px 20px 0' : '16px 0 16px 0',
                paddingBottom: i < JOURNEY.length - 1 ? 0 : 0,
              }}>
                <div
                  style={{
                    padding: step.highlight ? '20px 24px' : '16px 20px',
                    borderRadius: 14,
                    background: step.highlight
                      ? `linear-gradient(135deg, ${step.color}10 0%, transparent 100%)`
                      : 'transparent',
                    border: step.highlight ? `1px solid ${step.color}30` : '1px solid transparent',
                    marginBottom: i < JOURNEY.length - 1 ? 8 : 0,
                  }}
                >
                  <div style={{
                    fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.18em',
                    textTransform: 'uppercase', color: step.color, marginBottom: 6,
                  }}>
                    {step.time}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: step.highlight ? '1.1rem' : '0.98rem',
                    color: 'var(--color-text)', marginBottom: 6, letterSpacing: '-0.01em',
                  }}>
                    ✓ {step.event}
                  </div>
                  <div style={{
                    fontSize: '0.84rem', color: 'var(--color-muted)', lineHeight: 1.6,
                  }}>
                    {step.detail}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a
            href="#contact"
            className="btn-primary"
            style={{ fontSize: '0.95rem' }}
          >
            Start My Journey Tonight <ArrowRight size={16} />
          </a>
          <p style={{ fontSize: '0.78rem', color: 'var(--color-muted)', marginTop: 12 }}>
            No setup fee. No contracts. Your site goes live overnight.
          </p>
        </div>

      </div>
    </section>
  )
}
