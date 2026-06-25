'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger) }

// ── Mini UI mockups inside each step card ────────────────────────────────────

function SignupUI() {
  return (
    <div style={{
      background: '#0a0a14', borderRadius: 10, padding: '14px 12px',
      border: '1px solid rgba(37,99,235,0.12)',
    }}>
      <div style={{ fontSize: '0.58rem', color: 'rgba(99,102,241,0.5)', marginBottom: 10, letterSpacing: '0.1em', fontFamily: 'monospace' }}>
        GET MY FREE DEMO SITE
      </div>
      {[
        { label: 'Business name', value: 'Tracy HVAC Pros', filled: true },
        { label: 'Phone number',  value: '(209) 555-0182',  filled: true },
        { label: 'Industry',      value: 'HVAC',            filled: true },
      ].map(f => (
        <div key={f.label} style={{ marginBottom: 6 }}>
          <div style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.3)', marginBottom: 2, fontFamily: 'var(--font-body)' }}>{f.label}</div>
          <div style={{
            fontSize: '0.62rem', padding: '5px 8px', borderRadius: 5, fontFamily: 'var(--font-body)',
            background: f.filled ? 'rgba(99,102,241,0.08)' : 'rgba(255,255,255,0.04)',
            border: `1px solid ${f.filled ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.06)'}`,
            color: f.filled ? '#F2F1EA' : 'rgba(255,255,255,0.2)',
          }}>
            {f.value}
          </div>
        </div>
      ))}
      <div style={{
        marginTop: 10, padding: '7px 10px', borderRadius: 6,
        background: '#4F46E5', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
      }}>
        <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#06060C', fontFamily: 'var(--font-display)' }}>
          Build My FREE Site →
        </div>
      </div>
      <div style={{
        marginTop: 8, padding: '5px 8px', borderRadius: 6,
        background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.15)',
        display: 'flex', alignItems: 'center', gap: 6,
      }}>
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 4px #4ade80', flexShrink: 0 }} />
        <div style={{ fontSize: '0.55rem', color: '#4ade80', fontFamily: 'var(--font-body)' }}>Submitted · building starts now</div>
      </div>
    </div>
  )
}

function BuildUI() {
  return (
    <div style={{
      background: '#0a0a14', borderRadius: 10, padding: '14px 12px',
      border: '1px solid rgba(37,99,235,0.12)',
    }}>
      <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
        {['#ff5f57','#febc2e','#28c840'].map((c, i) => (
          <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: c, opacity: 0.75 }} />
        ))}
      </div>
      {[
        { label: 'Brand analysis',   done: true  },
        { label: 'Generating config',done: true  },
        { label: 'Custom hero images', done: true  },
        { label: 'Cinematic video',  done: true  },
        { label: 'SEO & schema',     done: true  },
        { label: 'Deploying live',   active: true },
      ].map((t) => (
        <div key={t.label} style={{
          display: 'flex', alignItems: 'center', gap: 7,
          padding: '5px 0', borderBottom: '1px solid rgba(37,99,235,0.05)',
        }}>
          <div style={{
            width: 14, height: 14, borderRadius: '50%', flexShrink: 0,
            border: t.active ? '2px solid #4F46E5' : 'none',
            background: t.done ? '#4ade80' : 'rgba(99,102,241,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {t.done && <span style={{ fontSize: '0.5rem', color: '#06060C' }}>✓</span>}
            {t.active && <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#4F46E5', animation: 'none' }} />}
          </div>
          <div style={{
            fontSize: '0.62rem', fontFamily: 'var(--font-body)',
            color: t.active ? '#4F46E5' : t.done ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.25)',
          }}>
            {t.label}
          </div>
          {t.active && (
            <div style={{
              marginLeft: 'auto', fontSize: '0.55rem',
              color: '#4F46E5', fontFamily: 'monospace',
            }}>
              ···
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function DemoUI() {
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
      {/* Phone */}
      <div style={{
        width: 80, flexShrink: 0,
        background: '#0a0a14', borderRadius: 12,
        border: '1.5px solid rgba(37,99,235,0.2)',
        padding: '10px 6px',
        display: 'flex', flexDirection: 'column', gap: 6,
      }}>
        <div style={{ width: 20, height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.1)', margin: '0 auto' }} />
        <div style={{
          background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)',
          borderRadius: 8, padding: '6px 5px',
        }}>
          <div style={{ fontSize: '0.5rem', color: '#4ade80', marginBottom: 2, fontFamily: 'var(--font-body)' }}>WebCrew</div>
          <div style={{ fontSize: '0.48rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.4 }}>
            Your site is live 🎉 Tap to see it
          </div>
          <div style={{
            marginTop: 5, background: '#4F46E5', borderRadius: 4,
            padding: '3px 6px', fontSize: '0.46rem',
            fontWeight: 700, color: '#06060C', textAlign: 'center',
          }}>
            View My Site →
          </div>
        </div>
        <div style={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
          {[3, 4, 5].map(w => (
            <div key={w} style={{ width: `${w * 6}px`, height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.06)' }} />
          ))}
        </div>
      </div>

      {/* Result card */}
      <div style={{
        flex: 1, background: '#0a0a14', borderRadius: 10,
        border: '1px solid rgba(37,99,235,0.12)', padding: '10px',
      }}>
        <div style={{ fontSize: '0.58rem', color: 'rgba(99,102,241,0.6)', marginBottom: 6, letterSpacing: '0.08em' }}>YOUR NEW SITE</div>
        <div style={{
          background: 'linear-gradient(135deg,#1a1a28,#12121e)',
          borderRadius: 6, padding: '8px', marginBottom: 8,
          border: '1px solid rgba(37,99,235,0.08)',
        }}>
          <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#4F46E5', fontFamily: 'var(--font-display)', marginBottom: 2 }}>
            Tracy HVAC Pros
          </div>
          <div style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.35)' }}>Licensed & Insured · Tracy, CA</div>
        </div>
        <div style={{
          display: 'flex', gap: 4, alignItems: 'center',
          padding: '5px 7px', borderRadius: 6,
          background: 'rgba(74,222,128,0.05)', border: '1px solid rgba(74,222,128,0.12)',
        }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80', flexShrink: 0 }} />
          <div style={{ fontSize: '0.55rem', color: '#4ade80' }}>Live · pagespeed 97/100</div>
        </div>
      </div>
    </div>
  )
}

// ── Steps data ───────────────────────────────────────────────────────────────
const STEPS = [
  {
    n: '01',
    eyebrow: 'Step 1 — 60 seconds',
    headline: 'Tell us your business. That\'s it.',
    body: 'Name, phone, industry. No credit card. No discovery calls. No 6-week briefs. We start building the moment you hit submit — usually within minutes.',
    note: 'No payment. No card. Ever.',
    ui: <SignupUI />,
  },
  {
    n: '02',
    eyebrow: 'Step 2 — Overnight',
    headline: 'We build your site while you sleep.',
    body: 'We write city-specific copy, build your pages with custom images, and deploy everything to a live URL with a 97/100 PageSpeed score. Done before your alarm goes off.',
    note: 'Avg 6hrs · zero involvement from you',
    ui: <BuildUI />,
  },
  {
    n: '03',
    eyebrow: 'Step 3 — Your call to make',
    headline: 'Wake up to a live site. Pay if you love it.',
    body: 'You get a text with your live demo link. Google-indexed, SEO-ready, converting visitors to calls from day one. Love it? Pay $299 once to own it forever. Don\'t love it? You owe us nothing.',
    note: 'Most clients see calls in week 1',
    ui: <DemoUI />,
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.querySelectorAll('.word-inner') ?? [], {
        yPercent: 115, opacity: 0, stagger: 0.04, duration: 0.75, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      })
      gsap.from(cardsRef.current?.querySelectorAll('.hiw-card') ?? [], {
        y: 56, opacity: 0, stagger: 0.12, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' },
      })

      // 3D tilt on step cards
      cardsRef.current?.querySelectorAll('.hiw-card').forEach(card => {
        const el = card as HTMLElement
        const setRX = gsap.quickTo(el, 'rotationX', { duration: 0.4, ease: 'power2.out' })
        const setRY = gsap.quickTo(el, 'rotationY', { duration: 0.4, ease: 'power2.out' })
        gsap.set(el, { transformPerspective: 900, transformStyle: 'preserve-3d' })

        const onMove = (e: MouseEvent) => {
          const rect = el.getBoundingClientRect()
          const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
          const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
          setRY(dx * 8)
          setRX(-dy * 6)
          gsap.to(el, { duration: 0.3, borderColor: 'rgba(37,99,235,0.4)', boxShadow: '0 28px 70px rgba(37,99,235,0.14)' })
        }
        const onLeave = () => {
          setRX(0); setRY(0)
          gsap.to(el, { duration: 0.4, borderColor: 'var(--color-border)', boxShadow: 'none' })
        }
        el.addEventListener('mousemove', onMove)
        el.addEventListener('mouseleave', onLeave)
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
      id="how-it-works"
      ref={sectionRef}
      style={{
        padding: 'clamp(80px,10vw,130px) clamp(24px,6vw,80px)',
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header row */}
        <div style={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', gap: 32,
          marginBottom: 64, flexWrap: 'wrap',
        }}>
          <div>
            <div className="section-label" style={{ marginBottom: 16 }}>
              HOW IT WORKS
            </div>
            <div ref={headingRef}>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(2.2rem,4.5vw,3.8rem)',
                letterSpacing: '-0.035em', lineHeight: 1.0,
              }}>
                <div style={{ overflow: 'hidden', paddingBottom: '0.05em' }}>
                  {split('Invisible today.')}
                </div>
                <div style={{ overflow: 'hidden', paddingBottom: '0.05em' }}>
                  <span style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg,#2563EB,#7C3AED)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>
                    {split('Fully booked')}
                  </span>
                </div>
                <div style={{ overflow: 'hidden', paddingBottom: '0.05em' }}>
                  {split('by tomorrow.')}
                </div>
              </h2>
            </div>
          </div>
          <p style={{
            color: 'var(--color-muted)', fontSize: '0.95rem',
            lineHeight: 1.75, maxWidth: 280, paddingBottom: 6,
          }}>
            No meetings. No briefs. No contracts. No risk. You fill out one form — we do the rest while you sleep.
          </p>
        </div>

        {/* 3 Cards */}
        <div
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
          className="hiw-grid"
        >
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="hiw-card"
              style={{
                background: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: 20,
                padding: '28px 24px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                cursor: 'default',
              }}
            >
              {/* Step number + eyebrow */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{
                  fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em',
                  textTransform: 'uppercase', color: 'var(--color-indigo)',
                }}>
                  {s.eyebrow}
                </div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: '1.1rem', color: 'rgba(99,102,241,0.15)',
                  letterSpacing: '-0.03em',
                }}>
                  {s.n}
                </div>
              </div>

              {/* Mini UI */}
              <div>{s.ui}</div>

              {/* Copy */}
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '1.25rem', letterSpacing: '-0.02em',
                  marginBottom: 10, lineHeight: 1.2,
                }}>
                  {s.headline}
                </h3>
                <p style={{ color: 'var(--color-muted)', fontSize: '0.88rem', lineHeight: 1.72 }}>
                  {s.body}
                </p>
              </div>

              {/* Note */}
              <div style={{
                marginTop: 'auto',
                borderTop: '1px solid var(--color-border)',
                paddingTop: 14,
                fontSize: '0.75rem', fontWeight: 600,
                color: '#4ade80', display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', flexShrink: 0 }} />
                {s.note}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hiw-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .hiw-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  )
}
