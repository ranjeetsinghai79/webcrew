'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Star, Zap, Clock, DollarSign, Search } from 'lucide-react'

if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger) }

// ── Browser mockup inside right column ──────────────────────────────────────
function BrowserMockup() {
  return (
    <div style={{
      background: '#0E0E1A',
      border: '1px solid rgba(196,164,76,0.2)',
      borderRadius: '14px',
      overflow: 'hidden',
      boxShadow: '0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(196,164,76,0.08), inset 0 1px 0 rgba(255,255,255,0.05)',
    }}>
      {/* Chrome bar */}
      <div style={{
        background: '#13131F',
        borderBottom: '1px solid rgba(196,164,76,0.1)',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          {['#FF5F57','#FEBC2E','#28C840'].map((c, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.85 }} />
          ))}
        </div>
        <div style={{
          flex: 1,
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '6px',
          padding: '5px 12px',
          fontSize: '0.68rem',
          color: 'rgba(255,255,255,0.3)',
          fontFamily: 'monospace',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80' }} />
          peaksroofingtracy.com
        </div>
      </div>

      {/* Site preview */}
      <div style={{ padding: '0', position: 'relative' }}>
        {/* Hero section mock */}
        <div style={{
          background: 'linear-gradient(160deg, #0a0a14 0%, #111124 100%)',
          padding: '28px 24px 24px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Blobs */}
          <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'rgba(196,164,76,0.06)', borderRadius: '50%', filter: 'blur(60px)' }} />
          <div style={{ position: 'absolute', bottom: -20, left: 0, width: 150, height: 150, background: 'rgba(90,60,200,0.08)', borderRadius: '50%', filter: 'blur(50px)' }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              background: 'rgba(196,164,76,0.1)', border: '1px solid rgba(196,164,76,0.2)',
              borderRadius: 100, padding: '3px 10px',
              fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.12em',
              color: '#C4A44C', marginBottom: 10, textTransform: 'uppercase',
            }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#C4A44C', boxShadow: '0 0 4px #C4A44C' }} />
              Tracy, CA · Est. 2008
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 8 }}>
              Peaks Roofing
              <br />
              <span style={{ color: '#C4A44C' }}>& Gutters</span>
            </div>
            <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5, maxWidth: 200, marginBottom: 14 }}>
              Licensed contractor serving Tri-Valley since 2008. Free inspections, same-week estimates.
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <div style={{ background: '#C4A44C', borderRadius: 5, padding: '6px 14px', fontSize: '0.6rem', fontWeight: 700, color: '#06060C' }}>
                Free Estimate
              </div>
              <div style={{ border: '1px solid rgba(196,164,76,0.3)', borderRadius: 5, padding: '6px 14px', fontSize: '0.6rem', color: 'rgba(255,255,255,0.6)' }}>
                Our Work
              </div>
            </div>
          </div>
        </div>

        {/* Services row */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
          borderTop: '1px solid rgba(196,164,76,0.08)',
        }}>
          {['Roof Repair', 'New Install', 'Gutters'].map((s, i) => (
            <div key={s} style={{
              padding: '12px 10px',
              borderRight: i < 2 ? '1px solid rgba(196,164,76,0.08)' : 'none',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '0.58rem', fontWeight: 700, color: '#C4A44C', marginBottom: 2 }}>{s}</div>
              <div style={{ fontSize: '0.52rem', color: 'rgba(255,255,255,0.3)' }}>Licensed & Insured</div>
            </div>
          ))}
        </div>

        {/* Review strip */}
        <div style={{
          padding: '10px 16px',
          borderTop: '1px solid rgba(196,164,76,0.08)',
          display: 'flex', alignItems: 'center', gap: 8,
          background: 'rgba(196,164,76,0.02)',
        }}>
          <div style={{ display: 'flex', gap: 1 }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={9} fill="#C4A44C" color="#C4A44C" />
            ))}
          </div>
          <div style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.5)' }}>
            <span style={{ color: '#fff', fontWeight: 600 }}>4.9</span> · 138 Google reviews
          </div>
          <div style={{ marginLeft: 'auto', fontSize: '0.52rem', color: '#4ade80', fontWeight: 600 }}>● Live</div>
        </div>
      </div>
    </div>
  )
}

// ── Floating stat card ───────────────────────────────────────────────────────
function StatCard({ value, label, icon, style }: {
  value: string
  label: string
  icon: React.ReactNode
  style?: React.CSSProperties
}) {
  return (
    <div style={{
      position: 'absolute',
      background: '#FFFFFF',
      border: '1px solid rgba(0,0,0,0.08)',
      borderRadius: '12px',
      padding: '14px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      minWidth: '160px',
      ...style,
    }}>
      <div style={{
        width: 36, height: 36, borderRadius: '10px',
        background: '#F3F4F6',
        border: '1px solid rgba(0,0,0,0.06)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#111827', flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800, fontSize: '1.25rem',
          color: '#111827', letterSpacing: '-0.02em', lineHeight: 1,
        }}>
          {value}
        </div>
        <div style={{ fontSize: '0.68rem', color: 'var(--color-muted)', marginTop: 3 }}>
          {label}
        </div>
      </div>
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
  const countRef   = useRef<HTMLSpanElement>(null)
  const [bizName, setBizName] = useState('')

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf: number
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    const dots = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.0 + 0.2,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      a: Math.random() * 0.12 + 0.03,
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
        ctx.fillStyle = `rgba(0,0,0,${d.a})`
        ctx.fill()
      }
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 90) {
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.strokeStyle = `rgba(0,0,0,${0.03 * (1 - dist / 90)})`
            ctx.lineWidth = 0.4
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(tick)
    }
    tick()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  // Counter animation
  useEffect(() => {
    if (!countRef.current) return
    const target = 847
    const obj = { val: target - 24 }
    setTimeout(() => {
      gsap.to(obj, {
        val: target, duration: 2.5, ease: 'power2.out', delay: 1.8,
        onUpdate: () => { if (countRef.current) countRef.current.textContent = Math.round(obj.val).toString() },
      })
    }, 100)
  }, [])

  // Entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = h1Ref.current?.querySelectorAll('.word-inner')
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 1.5 })

      tl.from(badgeRef.current, { opacity: 0, y: -14, duration: 0.5 })
      if (words) tl.from(words, { yPercent: 115, opacity: 0, stagger: 0.032, duration: 0.78 }, '-=0.15')
      tl.from(subRef.current,   { opacity: 0, y: 18, duration: 0.6  }, '-=0.5')
        .from(ctasRef.current,  { opacity: 0, y: 16, duration: 0.5  }, '-=0.4')
        .from(trustRef.current, { opacity: 0, y: 10, duration: 0.45 }, '-=0.3')
        .from(rightRef.current, { opacity: 0, x: 40, duration: 0.9, ease: 'power4.out' }, '-=1.2')

      // Scroll parallax on left content
      gsap.to(sectionRef.current, {
        yPercent: -8, ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1.5 },
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
            background: 'linear-gradient(135deg, #C4A44C 0%, #E8CC7A 50%, #C4A44C 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          } : undefined}
        >{w}</span>
      </span>
    ))

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(100px,12vh,140px) clamp(24px,6vw,80px) clamp(60px,8vh,100px)',
        overflow: 'hidden',
      }}
    >
      <canvas ref={canvasRef} id="hero-canvas" />

      {/* Aurora blobs */}
      <div className="aurora-blob" style={{ width: '600px', height: '600px', background: 'rgba(181,136,14,0.07)', top: '-5%', left: '-5%', animation: 'aurora-drift 14s ease-in-out infinite' }} />
      <div className="aurora-blob" style={{ width: '450px', height: '450px', background: 'rgba(99,102,241,0.06)', bottom: '5%', right: '5%', animation: 'aurora-drift 18s ease-in-out infinite reverse' }} />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 30% 50%, black 20%, transparent 75%)',
      }} />

      {/* Two-column grid */}
      <div style={{
        position: 'relative', zIndex: 1,
        width: '100%', maxWidth: '1280px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
        gap: 'clamp(40px,6vw,80px)',
        alignItems: 'center',
      }}
      className="hero-grid">

        {/* ── LEFT: Copy ── */}
        <div>
          {/* Badge */}
          <div ref={badgeRef} style={{ marginBottom: '28px' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              border: '1px solid rgba(22,163,74,0.25)',
              background: 'rgba(22,163,74,0.06)',
              borderRadius: '100px', padding: '7px 16px',
              fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#16A34A',
            }}>
              <span className="live-dot" />
              <span ref={countRef}>823</span> local sites built — 12 launched today
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={h1Ref}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.4rem,4.2vw,4rem)',
              lineHeight: 0.97,
              letterSpacing: '-0.04em',
              marginBottom: '28px',
            }}
          >
            <div style={{ overflow: 'hidden', paddingBottom: '0.06em' }}>
              {split('Your competitors')}
            </div>
            <div style={{ overflow: 'hidden', paddingBottom: '0.06em' }}>
              {split('already hired us.', true)}
            </div>
          </h1>

          {/* Sub */}
          <p
            ref={subRef}
            style={{
              color: 'var(--color-muted)',
              fontSize: 'clamp(0.95rem,1.6vw,1.1rem)',
              lineHeight: 1.75,
              maxWidth: '480px',
              marginBottom: '40px',
            }}
          >
            We scan Google Maps every morning. Find businesses losing money to bad — or no — websites.
            Build something{' '}
            <span style={{ color: 'var(--color-text)', fontWeight: 600 }}>stunning overnight.</span>
            {' '}Text you the link. You pay only if you&apos;re obsessed.
          </p>

          {/* Business name input → CTA */}
          <div ref={ctasRef} style={{ marginBottom: '48px' }}>
            <form
              onSubmit={e => {
                e.preventDefault()
                if (bizName.trim()) {
                  window.dispatchEvent(new CustomEvent('wc:prefill', { detail: { business: bizName.trim() } }))
                }
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              style={{
                display: 'flex', gap: '10px', flexWrap: 'wrap',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(196,164,76,0.22)',
                borderRadius: '14px',
                padding: '8px 8px 8px 16px',
                maxWidth: '500px',
              }}
            >
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px', minWidth: '180px' }}>
                <Search size={15} color="var(--color-muted)" style={{ flexShrink: 0 }} />
                <input
                  type="text"
                  placeholder="Your business name…"
                  value={bizName}
                  onChange={e => setBizName(e.target.value)}
                  style={{
                    flex: 1, background: 'transparent', border: 'none', outline: 'none',
                    color: 'var(--color-text)', fontSize: '0.92rem',
                    fontFamily: 'var(--font-body)',
                  }}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ fontSize: '0.88rem', padding: '12px 22px', whiteSpace: 'nowrap' }}>
                See My Demo <ArrowRight size={14} />
              </button>
            </form>
            <a href="#how-it-works" style={{
              display: 'inline-block', marginTop: '14px',
              fontSize: '0.82rem', color: 'var(--color-muted)',
              textDecoration: 'underline', textUnderlineOffset: '3px',
            }}>
              How does this work?
            </a>
          </div>

          {/* Trust row */}
          <div
            ref={trustRef}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ display: 'flex', gap: 2 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#C4A44C" color="#C4A44C" />
                ))}
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>
                <span style={{ color: 'var(--color-text)', fontWeight: 600 }}>4.9</span> · 47 client reviews
              </span>
            </div>
            <div style={{ width: 1, height: 16, background: 'var(--color-border)' }} />
            <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>
              <span style={{ color: 'var(--color-text)', fontWeight: 600 }}>$0</span> upfront
            </span>
            <div style={{ width: 1, height: 16, background: 'var(--color-border)' }} />
            <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>
              <span style={{ color: 'var(--color-text)', fontWeight: 600 }}>100%</span> money-back
            </span>
          </div>
        </div>

        {/* ── RIGHT: Mockup + floating stats ── */}
        <div ref={rightRef} className="hero-right" style={{ position: 'relative', paddingTop: '20px', paddingBottom: '20px' }}>

          {/* Stat card: top-right */}
          <StatCard
            value="847"
            label="Local sites live"
            icon={<Zap size={16} />}
            style={{ top: -10, right: -16, zIndex: 10 }}
          />

          {/* Browser mockup */}
          <div style={{ marginTop: '28px', marginBottom: '28px' }}>
            <BrowserMockup />
          </div>

          {/* Stat card: bottom-left */}
          <StatCard
            value="24h"
            label="Avg. delivery"
            icon={<Clock size={16} />}
            style={{ bottom: -10, left: -16, zIndex: 10 }}
          />

          {/* Stat card: bottom-right (slightly inset) */}
          <StatCard
            value="$0"
            label="Upfront cost"
            icon={<DollarSign size={16} />}
            style={{ bottom: 60, right: -16, zIndex: 10 }}
          />

          {/* Glow behind mockup */}
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60%', height: '60%',
            background: 'rgba(181,136,14,0.06)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            pointerEvents: 'none',
            zIndex: 0,
          }} />
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '28px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        opacity: 0.3,
      }}>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--color-gold), transparent)' }} />
      </div>
    </section>
  )
}
