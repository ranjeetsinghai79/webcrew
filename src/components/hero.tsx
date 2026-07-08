'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Star, Phone, MessageSquare, BarChart2, Globe, Megaphone, Share2 } from 'lucide-react'

if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger) }

// ── AI Team Dashboard card ───────────────────────────────────────────────────
const AGENTS = [
  { icon: Phone,        label: 'AI Reception',   status: 'AC repair booked · $450 job · 4m ago',  color: '#00C26F', dot: true  },
  { icon: Star,         label: 'Revenue Alert',  status: '$1,200 recovered · missed call returned',color: '#F59E0B', dot: true  },
  { icon: Globe,        label: 'GBP Post',        status: '"Summer AC tune-up $89 — book now"',    color: '#0EA5E9', dot: true  },
  { icon: MessageSquare,label: 'Review Reply',    status: 'Replied to 5★ · "Fast & professional"', color: '#8B5CF6', dot: true  },
  { icon: BarChart2,    label: 'Weekly Report',   status: '9 jobs booked · $4,100 revenue this wk',color: '#00C26F', dot: false },
  { icon: Megaphone,    label: 'Ads Manager',     status: '3 HVAC campaigns live · 14 leads',      color: '#0EA5E9', dot: false },
  { icon: Share2,       label: 'Social Post',     status: '5 seasonal drafts ready · 1-click post',color: '#8B5CF6', dot: false },
]

function AITeamCard() {
  return (
    <div style={{
      background: '#FFFFFF',
      borderRadius: 20,
      border: '1.5px solid rgba(99, 102, 241, 0.13)',
      overflow: 'hidden',
      boxShadow: '0 32px 80px rgba(37, 99, 235, 0.1), 0 4px 16px rgba(0,0,0,0.06)',
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #00C26F 0%, #0EA5E9 100%)',
        padding: '15px 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8,
            background: 'rgba(255,255,255,0.18)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: '0.75rem' }}>🤖</span>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.82rem', color: '#fff' }}>
              AI Business Manager
            </div>
            <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.7)', marginTop: 1 }}>
              Jake&apos;s HVAC · Dallas, TX
            </div>
          </div>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 5,
          background: 'rgba(0,0,0,0.15)',
          borderRadius: 100, padding: '4px 10px',
        }}>
          <span className="live-dot" />
          <span style={{ fontSize: '0.58rem', fontWeight: 700, color: '#fff', letterSpacing: '0.08em' }}>7 ACTIVE</span>
        </div>
      </div>

      {/* Agent rows */}
      <div style={{ padding: '6px 0' }}>
        {AGENTS.map((agent, i) => {
          const Icon = agent.icon
          return (
            <div key={agent.label} style={{
              display: 'flex', alignItems: 'center', gap: 11,
              padding: '10px 18px',
              borderBottom: i < AGENTS.length - 1 ? '1px solid rgba(99,102,241,0.055)' : 'none',
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: 7, flexShrink: 0,
                background: `${agent.color}12`,
                border: `1.5px solid ${agent.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon size={12} color={agent.color} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0A0A0A', fontFamily: 'var(--font-display)' }}>
                  {agent.label}
                </div>
                <div style={{ fontSize: '0.58rem', color: '#6B7280', marginTop: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {agent.status}
                </div>
              </div>
              <div style={{
                width: 7, height: 7, borderRadius: '50%', flexShrink: 0,
                background: agent.dot ? agent.color : '#E5E7EB',
                boxShadow: agent.dot ? `0 0 8px ${agent.color}99` : 'none',
              }} />
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div style={{
        padding: '12px 18px',
        background: 'linear-gradient(135deg, rgba(0,194,110,0.05), rgba(14,165,233,0.04))',
        borderTop: '1px solid rgba(0,194,110,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ fontSize: '0.62rem', color: '#6B7280' }}>
          This week: <strong style={{ color: '#00C26F' }}>9 jobs booked · $4,100 revenue recovered · 0 missed calls</strong>
        </div>
      </div>
    </div>
  )
}

// ── Floating stat pill ───────────────────────────────────────────────────────
function StatPill({ value, label, gradient, style }: {
  value: string; label: string; gradient?: boolean; style?: React.CSSProperties
}) {
  return (
    <div style={{
      position: 'absolute',
      background: gradient ? 'linear-gradient(135deg, #00C26F, #0EA5E9)' : '#FFFFFF',
      border: gradient ? 'none' : '1.5px solid rgba(99,102,241,0.12)',
      borderRadius: 12,
      padding: '10px 16px',
      boxShadow: gradient ? '0 10px 32px rgba(0,194,110,0.35)' : '0 8px 28px rgba(0,0,0,0.09)',
      whiteSpace: 'nowrap',
      ...style,
    }}>
      <div style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: '1.15rem', letterSpacing: '-0.02em',
        color: gradient ? '#fff' : '#0A0A0A', lineHeight: 1,
      }}>{value}</div>
      <div style={{
        fontSize: '0.6rem', marginTop: 3,
        color: gradient ? 'rgba(255,255,255,0.72)' : '#6B7280',
      }}>{label}</div>
    </div>
  )
}

// ── Main Hero ────────────────────────────────────────────────────────────────
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const badgeRef   = useRef<HTMLDivElement>(null)
  const h1Ref      = useRef<HTMLHeadingElement>(null)
  const subRef     = useRef<HTMLParagraphElement>(null)
  const ctasRef    = useRef<HTMLDivElement>(null)
  const trustRef   = useRef<HTMLDivElement>(null)
  const rightRef   = useRef<HTMLDivElement>(null)

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf: number
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    const COLORS = ['rgba(0,194,110,', 'rgba(14,165,233,', 'rgba(139,92,246,']
    const dots = Array.from({ length: 55 }, () => ({
      x: Math.random() * 1200, y: Math.random() * 900,
      r: Math.random() * 1.1 + 0.3,
      vx: (Math.random() - 0.5) * 0.16, vy: (Math.random() - 0.5) * 0.16,
      a: Math.random() * 0.13 + 0.04,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
    }))

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const d of dots) {
        d.x += d.vx; d.y += d.vy
        if (d.x < 0) d.x = canvas.width
        if (d.x > canvas.width) d.x = 0
        if (d.y < 0) d.y = canvas.height
        if (d.y > canvas.height) d.y = 0
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `${d.c}${d.a})`
        ctx.fill()
      }
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 95) {
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.strokeStyle = `rgba(0,194,110,${0.04 * (1 - dist / 95)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(tick)
    }
    tick()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  // Entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = h1Ref.current?.querySelectorAll('.word-inner')
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 1.5 })

      tl.from(badgeRef.current,  { opacity: 0, y: -14, duration: 0.5 })
      if (words) tl.from(words,  { yPercent: 115, opacity: 0, stagger: 0.03, duration: 0.75 }, '-=0.15')
      tl.from(subRef.current,    { opacity: 0, y: 16, duration: 0.55 }, '-=0.5')
        .from(ctasRef.current,   { opacity: 0, y: 14, duration: 0.45 }, '-=0.35')
        .from(trustRef.current,  { opacity: 0, y: 10, duration: 0.4  }, '-=0.25')
        .from(rightRef.current,  { opacity: 0, x: 36, duration: 0.85, ease: 'power4.out' }, '-=1.1')

      gsap.to(sectionRef.current, {
        yPercent: -7, ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1.5 },
      })
    })
    return () => ctx.revert()
  }, [])

  const split = (text: string, gradient?: boolean) =>
    text.split(' ').map((w, i) => (
      <span key={i} className="word-wrap" style={{ display: 'inline-block', marginRight: '0.22em' }}>
        <span className="word-inner" style={gradient ? {
          display: 'inline-block',
          background: 'linear-gradient(135deg, #00C26F 0%, #0EA5E9 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        } : { display: 'inline-block' }}>{w}{' '}</span>
      </span>
    ))

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        padding: 'clamp(100px,12vh,140px) clamp(24px,6vw,80px) clamp(60px,8vh,100px)',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #04040E 0%, #080820 55%, #0D0B28 100%)',
      }}
    >
      <canvas ref={canvasRef} id="hero-canvas" />
      <div className="noise-overlay" />

      {/* Aurora blobs */}
      <div className="aurora-blob" style={{ width: '620px', height: '620px', background: 'rgba(0,194,110,0.13)', top: '-8%', left: '-8%', animation: 'aurora-drift 14s ease-in-out infinite' }} />
      <div className="aurora-blob" style={{ width: '500px', height: '500px', background: 'rgba(14,165,233,0.09)', bottom: '5%', right: '-2%', animation: 'aurora-drift 18s ease-in-out infinite reverse' }} />
      <div className="aurora-blob" style={{ width: '280px', height: '280px', background: 'rgba(139,92,246,0.08)', top: '45%', left: '38%', animation: 'aurora-drift 22s ease-in-out infinite' }} />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(0,194,110,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,194,110,0.05) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 30% 50%, black 20%, transparent 75%)',
      }} />

      {/* Two-column layout */}
      <div style={{
        position: 'relative', zIndex: 1,
        width: '100%', maxWidth: '1300px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
        gap: 'clamp(40px,5vw,72px)',
        alignItems: 'center',
      }} className="hero-grid">

        {/* ── LEFT copy ── */}
        <div>
          {/* Badge row */}
          <div ref={badgeRef} style={{ marginBottom: '28px', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              border: '1px solid rgba(0,194,110,0.3)', background: 'rgba(0,194,110,0.07)',
              borderRadius: '100px', padding: '7px 16px',
              fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#059669',
            }}>
              <span className="live-dot" />
              AI Front Office
            </span>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              border: '1px solid rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.07)',
              borderRadius: '100px', padding: '7px 14px',
              fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#a78bfa',
            }}>
              Revenue Recovery · 24/7
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={h1Ref}
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(2.5rem,4.2vw,4.2rem)',
              lineHeight: 1.08, letterSpacing: '-0.04em',
              marginBottom: '28px', color: '#FFFFFF',
            }}
          >
            <div style={{ overflow: 'hidden', paddingBottom: '0.1em' }}>{split('Missed Calls =')}</div>
            <div style={{ overflow: 'hidden', paddingBottom: '0.1em' }}>{split('Lost Revenue.', true)}</div>
            <div style={{ overflow: 'hidden', paddingBottom: '0.1em' }}>{split('We Fix That.')}</div>
          </h1>

          {/* Sub */}
          <p ref={subRef} style={{
            color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.9rem,1.5vw,1.05rem)',
            lineHeight: 1.8, maxWidth: '490px', marginBottom: '38px',
          }}>
            Your AI Front Office answers every call, books jobs, posts to Google, replies to reviews, and runs your ads — while you&apos;re on the job.{' '}
            <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Zero missed calls. More booked jobs. 24/7.</span>
          </p>

          {/* CTAs */}
          <div ref={ctasRef} style={{ marginBottom: '44px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="#contact"
              onClick={e => {
                e.preventDefault()
                window.dispatchEvent(new CustomEvent('wc:tab', { detail: { tab: 'demo' } }))
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary"
              style={{ fontSize: '0.95rem', padding: '15px 28px' }}
            >
              Stop Losing Jobs — Get Started Free <ArrowRight size={16} />
            </a>
            <a
              href="#pricing"
              onClick={e => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-ghost"
              style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.82)', borderColor: 'rgba(255,255,255,0.18)' }}
            >
              See Pricing →
            </a>
          </div>

          {/* Trust row */}
          <div ref={trustRef} style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <div style={{ display: 'flex', gap: 2 }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#F59E0B" color="#F59E0B" />)}
              </div>
              <span style={{ fontSize: '0.73rem', color: 'rgba(255,255,255,0.5)' }}>
                <span style={{ color: '#fff', fontWeight: 600 }}>4.9</span> · 47 reviews
              </span>
            </div>
            <div style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.1)' }} />
            <span style={{ fontSize: '0.73rem', color: 'rgba(255,255,255,0.5)' }}>
              <span style={{ color: '#fff', fontWeight: 600 }}>Starts at $49/mo</span> — cancel anytime
            </span>
            <div style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.1)' }} />
            <span style={{ fontSize: '0.73rem', color: 'rgba(255,255,255,0.5)' }}>
              <span style={{ color: '#fff', fontWeight: 600 }}>$0</span> setup fee. Ever.
            </span>
            <div style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.1)' }} />
            <span style={{ fontSize: '0.73rem', color: 'rgba(255,255,255,0.5)' }}>
              <span style={{ color: '#00C26F', fontWeight: 600 }}>Site live overnight</span>
            </span>
          </div>
        </div>

        {/* ── RIGHT: AI Team Dashboard ── */}
        <div ref={rightRef} className="hero-right" style={{ position: 'relative', paddingTop: '24px', paddingBottom: '24px' }}>

          <StatPill value="$4,100" label="Revenue recovered" gradient style={{ top: -12, right: -14, zIndex: 10 }} />

          <div style={{ marginTop: '28px', marginBottom: '28px' }}>
            <AITeamCard />
          </div>

          <StatPill value="9 jobs" label="Booked this week" style={{ bottom: -10, left: -14, zIndex: 10 }} />
          <StatPill value="0 missed" label="Calls this week" style={{ bottom: 56, right: -14, zIndex: 10 }} />

          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '70%', height: '60%',
            background: 'radial-gradient(ellipse, rgba(0,194,110,0.06) 0%, transparent 70%)',
            pointerEvents: 'none', zIndex: 0,
          }} />
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '28px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        <div style={{ width: 1, height: 38, background: 'linear-gradient(to bottom, rgba(255,255,255,0.28), transparent)' }} />
      </div>
    </section>
  )
}
