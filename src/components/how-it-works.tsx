'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, Globe, BarChart2, Zap } from 'lucide-react'

if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger) }

const STEPS = [
  {
    num: '01',
    icon: Zap,
    color: '#00C26F',
    title: 'Tell us your business',
    sub: '2 minutes. That\'s it.',
    body: 'Name, phone, niche, city. No forms, no calls, no agency pitch. Submit and go back to work. We handle everything from here.',
    detail: 'Business name · Industry · City · Phone number',
    ui: (
      <div style={{ background: '#0a0a14', borderRadius: 10, padding: '14px 12px', border: '1px solid rgba(0,194,110,0.14)' }}>
        <div style={{ fontSize: '0.56rem', color: 'rgba(0,194,110,0.55)', marginBottom: 10, letterSpacing: '0.12em', fontFamily: 'monospace' }}>
          STEP 1 — SUBMIT
        </div>
        {['Business name · Maria\'s Medspa', 'City · Tracy, CA', 'Industry · Med Spa'].map((f, i) => (
          <div key={i} style={{
            marginBottom: 6, fontSize: '0.62rem', padding: '6px 9px', borderRadius: 5,
            background: 'rgba(0,194,110,0.07)', border: '1px solid rgba(0,194,110,0.18)',
            color: '#d1fae5', fontFamily: 'var(--font-body)',
          }}>{f}</div>
        ))}
        <div style={{ marginTop: 10, padding: '7px 0', borderRadius: 6, background: '#00C26F', textAlign: 'center' }}>
          <span style={{ fontSize: '0.62rem', fontWeight: 700, color: '#06060C', fontFamily: 'var(--font-display)' }}>Build My FREE Site →</span>
        </div>
        <div style={{ marginTop: 7, display: 'flex', alignItems: 'center', gap: 6, padding: '5px 8px', borderRadius: 5, background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.15)' }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 5px #4ade80', flexShrink: 0 }} />
          <div style={{ fontSize: '0.55rem', color: '#4ade80' }}>Received · AI team spinning up now</div>
        </div>
      </div>
    ),
  },
  {
    num: '02',
    icon: Globe,
    color: '#0EA5E9',
    title: 'AI builds your site tonight',
    sub: 'While you sleep.',
    body: 'Our AI scrapes your brand, generates real images, writes your copy, and deploys a custom site — PageSpeed 97+, indexed, live. In under 8 hours. No humans required.',
    detail: 'Brand analysis · Image gen · Custom copy · Cloudflare deploy',
    ui: (
      <div style={{ background: '#0a0a14', borderRadius: 10, padding: '14px 12px', border: '1px solid rgba(14,165,233,0.14)' }}>
        <div style={{ fontSize: '0.56rem', color: 'rgba(14,165,233,0.55)', marginBottom: 10, letterSpacing: '0.12em', fontFamily: 'monospace' }}>
          STEP 2 — BUILDING
        </div>
        {[
          { label: 'Brand analysis', done: true, color: '#00C26F' },
          { label: 'Generating hero images', done: true, color: '#00C26F' },
          { label: 'Writing custom copy', done: true, color: '#00C26F' },
          { label: 'Deploying to Cloudflare', active: true, color: '#0EA5E9' },
        ].map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: s.done ? '#00C26F' : s.active ? '#0EA5E9' : 'rgba(255,255,255,0.1)', boxShadow: s.active ? '0 0 7px #0EA5E9' : 'none', flexShrink: 0 }} />
            <div style={{ fontSize: '0.6rem', color: s.done ? '#d1fae5' : s.active ? '#7dd3fc' : 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-body)' }}>{s.label}</div>
            {(s.done || s.active) && <div style={{ marginLeft: 'auto', fontSize: '0.5rem', color: s.done ? '#00C26F' : '#0EA5E9', fontWeight: 700 }}>{s.done ? '✓' : '●'}</div>}
          </div>
        ))}
      </div>
    ),
  },
  {
    num: '03',
    icon: Phone,
    color: '#8B5CF6',
    title: '7 AI agents activate',
    sub: 'Your full team is live.',
    body: 'The moment your site goes live, your AI business manager kicks in. Reception answers calls. GBP posts go out weekly. Reviews get replied to. Ads go live. All automatic.',
    detail: 'Reception · GBP posts · Review replies · Ads · Social · Reports',
    ui: (
      <div style={{ background: '#0a0a14', borderRadius: 10, padding: '14px 12px', border: '1px solid rgba(139,92,246,0.14)' }}>
        <div style={{ fontSize: '0.56rem', color: 'rgba(139,92,246,0.55)', marginBottom: 10, letterSpacing: '0.12em', fontFamily: 'monospace' }}>
          STEP 3 — LIVE
        </div>
        {[
          { label: 'AI Reception', status: 'Answering calls', color: '#00C26F' },
          { label: 'GBP Manager', status: 'Post scheduled', color: '#0EA5E9' },
          { label: 'Review Reply', status: '4★ reply sent', color: '#8B5CF6' },
          { label: 'Lead Alert', status: 'SMS → owner', color: '#F59E0B' },
        ].map((a, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: a.color, boxShadow: `0 0 6px ${a.color}80`, flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '0.6rem', fontWeight: 600, color: '#F2F1EA', fontFamily: 'var(--font-display)' }}>{a.label}</div>
              <div style={{ fontSize: '0.52rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-body)' }}>{a.status}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: '04',
    icon: BarChart2,
    color: '#F59E0B',
    title: 'Results compound monthly',
    sub: 'Better every week.',
    body: 'Rankings rise. Reviews accumulate. Calls increase. Your digital presence compounds — like interest. Month 3 is better than Month 1. Month 12 is unrecognizable from where you started.',
    detail: 'Weekly reports · Ranking growth · Review velocity · Lead volume',
    ui: (
      <div style={{ background: '#0a0a14', borderRadius: 10, padding: '14px 12px', border: '1px solid rgba(245,158,11,0.14)' }}>
        <div style={{ fontSize: '0.56rem', color: 'rgba(245,158,11,0.55)', marginBottom: 10, letterSpacing: '0.12em', fontFamily: 'monospace' }}>
          STEP 4 — GROWING
        </div>
        {[
          { label: 'Google Rank', wk1: 'p.8', wk4: 'p.3', color: '#00C26F' },
          { label: 'Monthly Calls', wk1: '12', wk4: '41', color: '#0EA5E9' },
          { label: 'Reviews', wk1: '4.2★', wk4: '4.8★', color: '#F59E0B' },
        ].map((r, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
            <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)' }}>{r.label}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace' }}>{r.wk1}</div>
              <div style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.2)' }}>→</div>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, color: r.color, fontFamily: 'monospace' }}>{r.wk4}</div>
            </div>
          </div>
        ))}
        <div style={{ marginTop: 9, padding: '6px 9px', borderRadius: 6, background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', textAlign: 'center' }}>
          <span style={{ fontSize: '0.58rem', fontWeight: 700, color: '#fbbf24' }}>Week 4 report → +240% calls vs Week 1</span>
        </div>
      </div>
    ),
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const stepsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.querySelectorAll('.word-inner') ?? [], {
        yPercent: 115, opacity: 0, stagger: 0.04, duration: 0.75, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      })
      gsap.from(stepsRef.current?.querySelectorAll('.hiw-card') ?? [], {
        y: 52, opacity: 0, stagger: 0.12, duration: 0.75, ease: 'power3.out',
        scrollTrigger: { trigger: stepsRef.current, start: 'top 82%' },
      })

      stepsRef.current?.querySelectorAll('.hiw-card').forEach(card => {
        const el = card as HTMLElement
        const setRX = gsap.quickTo(el, 'rotationX', { duration: 0.4, ease: 'power2.out' })
        const setRY = gsap.quickTo(el, 'rotationY', { duration: 0.4, ease: 'power2.out' })
        gsap.set(el, { transformPerspective: 900, transformStyle: 'preserve-3d' })
        const onMove = (e: MouseEvent) => {
          const rect = el.getBoundingClientRect()
          const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
          const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
          setRY(dx * 5); setRX(-dy * 4)
        }
        const onLeave = () => { setRX(0); setRY(0) }
        el.addEventListener('mousemove', onMove)
        el.addEventListener('mouseleave', onLeave)
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
      id="how-it-works"
      ref={sectionRef}
      style={{
        padding: 'clamp(80px,10vw,130px) clamp(24px,6vw,80px)',
        background: 'var(--color-bg)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: 20 }}>HOW IT WORKS</div>
          <div ref={headingRef}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(2rem,4.5vw,3.8rem)',
              letterSpacing: '-0.04em', lineHeight: 1.08,
            }}>
              <div style={{ overflow: 'hidden', paddingBottom: '0.1em' }}>{split('Submit tonight.')}</div>
              <div style={{ overflow: 'hidden', paddingBottom: '0.1em' }}>
                <span style={{ background: 'linear-gradient(135deg,#00C26F,#0EA5E9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {split('AI handles everything else.')}
                </span>
              </div>
            </h2>
          </div>
          <p style={{ color: 'var(--color-muted)', fontSize: '1rem', maxWidth: '480px', margin: '20px auto 0', lineHeight: 1.7 }}>
            No agency calls. No design meetings. No 6-week timelines. Two minutes from you — then your AI team runs 24/7.
          </p>
        </div>

        {/* Steps grid */}
        <div
          ref={stepsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0,1fr))',
            gap: '18px',
          }}
          className="hiw-grid"
        >
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.num}
                className="hiw-card"
                style={{
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 18,
                  padding: '26px 22px',
                  position: 'relative',
                  cursor: 'default',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.borderColor = `${step.color}40`
                  el.style.boxShadow = `0 16px 48px ${step.color}14`
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.borderColor = 'var(--color-border)'
                  el.style.boxShadow = 'none'
                }}
              >
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div style={{
                    position: 'absolute', top: 36, right: -9, width: 18, height: 1,
                    background: `linear-gradient(90deg, ${step.color}40, transparent)`,
                    zIndex: 10,
                    display: 'none',
                  }} className="step-connector" />
                )}

                {/* Step number */}
                <div style={{
                  fontSize: '0.55rem', fontWeight: 800, color: step.color,
                  letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 14,
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: 8,
                    background: `${step.color}12`,
                    border: `1.5px solid ${step.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={13} color={step.color} />
                  </div>
                  <span style={{ fontSize: '0.72rem' }}>Step {step.num}</span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: '1.05rem', letterSpacing: '-0.025em',
                  color: 'var(--color-text)', marginBottom: 4, lineHeight: 1.25,
                }}>
                  {step.title}
                </h3>
                <div style={{ fontSize: '0.7rem', fontWeight: 600, color: step.color, marginBottom: 12 }}>
                  {step.sub}
                </div>
                <p style={{ color: 'var(--color-muted)', fontSize: '0.82rem', lineHeight: 1.65, marginBottom: 18 }}>
                  {step.body}
                </p>

                {/* Mini UI */}
                {step.ui}

                {/* Detail tag */}
                <div style={{
                  marginTop: 14, fontSize: '0.6rem', color: 'var(--color-muted)',
                  lineHeight: 1.5, letterSpacing: '0.01em',
                }}>
                  {step.detail}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom trust bar */}
        <div style={{
          marginTop: 48,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 32, flexWrap: 'wrap',
        }}>
          {[
            { val: '8h', label: 'avg time to live' },
            { val: '0', label: 'setup calls required' },
            { val: '24/7', label: 'AI team active from day 1' },
            { val: '$0', label: 'to try — free forever option' },
          ].map(s => (
            <div key={s.val} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.03em', background: 'linear-gradient(135deg,#00C26F,#0EA5E9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{s.val}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-muted)', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .hiw-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 540px) {
          .hiw-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
