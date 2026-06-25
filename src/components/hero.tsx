'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Star, Zap, Clock, TrendingUp } from 'lucide-react'

if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger) }

// ── AI Pipeline Visualization ────────────────────────────────────────────────
function AIPipelineCard() {
  const steps = [
    { id: 'scan',   label: 'Scanning Your Brand',    sub: 'Your style, services & voice captured', done: true,   color: '#2563EB' },
    { id: 'llm',    label: 'Writing Your Copy',       sub: 'Headlines, offers & local SEO',         done: true,   color: '#4F46E5' },
    { id: 'build',  label: 'Designing Your Site',     sub: 'Hero, images, layout — all custom',     done: true,   color: '#7C3AED' },
    { id: 'deploy', label: 'Going Live',              sub: 'Fast worldwide. 24/7. Always on.',       active: true,  color: '#10B981' },
  ]

  return (
    <div style={{
      background: '#FFFFFF',
      borderRadius: 20,
      border: '1.5px solid rgba(99, 102, 241, 0.15)',
      overflow: 'hidden',
      boxShadow: '0 32px 80px rgba(37, 99, 235, 0.12), 0 4px 16px rgba(0,0,0,0.06)',
    }}>
      {/* Header bar */}
      <div style={{
        background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
        padding: '16px 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Zap size={15} color="#fff" />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.82rem', color: '#fff' }}>
              WebCrew AI Pipeline
            </div>
            <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.65)', marginTop: 1 }}>
              Building your site now...
            </div>
          </div>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 5,
          background: 'rgba(16, 185, 129, 0.2)',
          border: '1px solid rgba(16, 185, 129, 0.4)',
          borderRadius: 100, padding: '4px 10px',
        }}>
          <span className="live-dot" />
          <span style={{ fontSize: '0.58rem', fontWeight: 700, color: '#6ee7b7', letterSpacing: '0.08em' }}>RUNNING</span>
        </div>
      </div>

      {/* Business input */}
      <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(99,102,241,0.08)', background: '#FAFAFF' }}>
        <div style={{ fontSize: '0.58rem', fontWeight: 700, color: 'var(--color-indigo)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8 }}>
          Target Business
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          background: '#fff', border: '1.5px solid rgba(99,102,241,0.2)',
          borderRadius: 10, padding: '10px 14px',
        }}>
          <div style={{
            width: 28, height: 28, borderRadius: 7,
            background: 'linear-gradient(135deg, #EFF6FF, #EDE9FE)',
            border: '1px solid rgba(99,102,241,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.7rem', fontWeight: 800, color: '#4F46E5',
          }}>
            T
          </div>
          <div>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-text)', fontFamily: 'var(--font-display)' }}>
              Tracy HVAC Pros
            </div>
            <div style={{ fontSize: '0.6rem', color: 'var(--color-muted)', marginTop: 1 }}>
              Tracy, CA · HVAC & Cooling
            </div>
          </div>
          <div style={{ marginLeft: 'auto', fontSize: '0.55rem', fontWeight: 600, color: '#10B981' }}>
            ✓ Queued
          </div>
        </div>
      </div>

      {/* Pipeline steps */}
      <div style={{ padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 0 }}>
        {steps.map((step, i) => (
          <div key={step.id}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '10px 0',
              borderBottom: i < steps.length - 1 ? '1px solid rgba(99,102,241,0.06)' : 'none',
            }}>
              {/* Step indicator */}
              <div style={{
                width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                background: step.done
                  ? `linear-gradient(135deg, ${step.color}22, ${step.color}11)`
                  : step.active
                    ? 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(16,185,129,0.06))'
                    : 'rgba(241,245,249,1)',
                border: step.done
                  ? `1.5px solid ${step.color}44`
                  : step.active
                    ? '1.5px solid rgba(16,185,129,0.35)'
                    : '1.5px solid rgba(226,232,240,1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {step.done && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6L5 8.5L9.5 3.5" stroke={step.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {step.active && (
                  <div style={{
                    width: 8, height: 8, borderRadius: 2,
                    background: '#10B981',
                    animation: 'pulse-ring 1.2s ease-out infinite',
                  }} />
                )}
              </div>

              {/* Step copy */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: '0.74rem', fontWeight: 600,
                  color: step.active ? '#10B981' : step.done ? 'var(--color-text)' : 'var(--color-muted)',
                  fontFamily: 'var(--font-display)',
                }}>
                  {step.label}
                </div>
                <div style={{ fontSize: '0.6rem', color: 'var(--color-muted)', marginTop: 2 }}>
                  {step.sub}
                </div>
              </div>

              {/* Status */}
              <div style={{
                fontSize: '0.58rem', fontWeight: 700,
                color: step.active ? '#10B981' : step.done ? step.color : '#CBD5E1',
                letterSpacing: '0.06em',
                whiteSpace: 'nowrap',
              }}>
                {step.active ? '●  Live' : step.done ? '✓' : '—'}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Live URL footer */}
      <div style={{
        padding: '14px 20px',
        background: 'linear-gradient(135deg, rgba(16,185,129,0.06), rgba(16,185,129,0.03))',
        borderTop: '1px solid rgba(16,185,129,0.12)',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <div style={{
          width: 8, height: 8, borderRadius: '50%',
          background: '#10B981',
          boxShadow: '0 0 8px rgba(16,185,129,0.6)',
          flexShrink: 0,
        }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 600, color: '#059669', fontFamily: 'monospace' }}>
            tracyhvacpros.pages.dev
          </div>
          <div style={{ fontSize: '0.55rem', color: 'var(--color-muted)', marginTop: 1 }}>
            PageSpeed 97/100 · Deployed in 6h
          </div>
        </div>
        <div style={{
          fontSize: '0.6rem', fontWeight: 700,
          background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>
          VIEW LIVE →
        </div>
      </div>
    </div>
  )
}

// ── Floating stat card ───────────────────────────────────────────────────────
function StatCard({ value, label, icon, gradient, style }: {
  value: string; label: string; icon: React.ReactNode
  gradient?: boolean; style?: React.CSSProperties
}) {
  return (
    <div style={{
      position: 'absolute',
      background: gradient ? 'linear-gradient(135deg, #2563EB, #7C3AED)' : '#FFFFFF',
      border: gradient ? 'none' : '1.5px solid rgba(99,102,241,0.12)',
      borderRadius: 14,
      padding: '14px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      boxShadow: gradient
        ? '0 12px 40px rgba(37,99,235,0.35)'
        : '0 8px 32px rgba(99,102,241,0.1)',
      minWidth: '155px',
      ...style,
    }}>
      <div style={{
        width: 36, height: 36, borderRadius: 10,
        background: gradient ? 'rgba(255,255,255,0.2)' : 'rgba(99,102,241,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: gradient ? '#fff' : 'var(--color-indigo)', flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800, fontSize: '1.25rem',
          color: gradient ? '#fff' : 'var(--color-text)',
          letterSpacing: '-0.02em', lineHeight: 1,
        }}>
          {value}
        </div>
        <div style={{
          fontSize: '0.68rem',
          color: gradient ? 'rgba(255,255,255,0.75)' : 'var(--color-muted)',
          marginTop: 3,
        }}>
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

  // Particle canvas — blue/purple tones
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf: number
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    const COLORS = ['rgba(37,99,235,', 'rgba(124,58,237,', 'rgba(99,102,241,']
    const dots = Array.from({ length: 60 }, () => ({
      x: Math.random() * 1000,
      y: Math.random() * 800,
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      a: Math.random() * 0.15 + 0.04,
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
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.strokeStyle = `rgba(99,102,241,${0.04 * (1 - dist / 100)})`
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

      if (rightRef.current) {
        gsap.from(rightRef.current.querySelectorAll('img'), {
          clipPath: 'inset(0 100% 0 0)',
          duration: 0.9, ease: 'power4.inOut', stagger: 0.1,
          scrollTrigger: { trigger: rightRef.current, start: 'top 85%' }
        })
      }

      gsap.to(sectionRef.current, {
        yPercent: -8, ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1.5 },
      })
    })
    return () => ctx.revert()
  }, [])

  const split = (text: string, gradient?: boolean) =>
    text.split(' ').map((w, i) => (
      <span key={i} className="word-wrap" style={{ display: 'inline-block', marginRight: '0.22em' }}>
        <span
          className="word-inner"
          style={gradient ? {
            display: 'inline-block',
            background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
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
        background: 'linear-gradient(160deg, #04040E 0%, #080820 55%, #0D0B28 100%)',
      }}
    >
      <canvas ref={canvasRef} id="hero-canvas" />
      <div className="noise-overlay" />

      {/* Aurora blobs — vivid on dark */}
      <div className="aurora-blob" style={{ width: '600px', height: '600px', background: 'rgba(37,99,235,0.18)', top: '-5%', left: '-5%', animation: 'aurora-drift 14s ease-in-out infinite' }} />
      <div className="aurora-blob" style={{ width: '500px', height: '500px', background: 'rgba(124,58,237,0.14)', bottom: '5%', right: '0%', animation: 'aurora-drift 18s ease-in-out infinite reverse' }} />
      <div className="aurora-blob" style={{ width: '300px', height: '300px', background: 'rgba(99,102,241,0.12)', top: '40%', left: '40%', animation: 'aurora-drift 22s ease-in-out infinite' }} />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)',
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
          <div ref={badgeRef} style={{ marginBottom: '28px', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              border: '1px solid rgba(16,185,129,0.3)',
              background: 'rgba(16,185,129,0.06)',
              borderRadius: '100px', padding: '7px 16px',
              fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
              color: '#059669',
            }}>
              <span className="live-dot" />
              <span ref={countRef}>847</span> businesses now getting leads
            </span>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              border: '1px solid rgba(249,115,22,0.35)',
              background: 'rgba(249,115,22,0.08)',
              borderRadius: '100px', padding: '7px 14px',
              fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
              color: '#f97316',
            }}>
              ⚡ 3 slots open tonight
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={h1Ref}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.6rem,4.5vw,4.4rem)',
              lineHeight: 0.97,
              letterSpacing: '-0.04em',
              marginBottom: '28px',
            }}
          >
            <div style={{ overflow: 'hidden', paddingBottom: '0.06em' }}>
              {split('Customers search Google.')}
            </div>
            <div style={{ overflow: 'hidden', paddingBottom: '0.06em' }}>
              {split('Competitors answer.', true)}
            </div>
            <div style={{ overflow: 'hidden', paddingBottom: '0.06em' }}>
              {split('Not anymore.')}
            </div>
          </h1>

          {/* Sub */}
          <p
            ref={subRef}
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: 'clamp(0.95rem,1.6vw,1.1rem)',
              lineHeight: 1.75,
              maxWidth: '480px',
              marginBottom: '40px',
            }}
          >
            We build a{' '}
            <span style={{ color: '#FFFFFF', fontWeight: 600 }}>cinematic, Google-ranked website</span>
            {' '}for your local business overnight — for free. Real brand. Real SEO. Real leads.{' '}
            <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>Pay only if you love it.</span>
          </p>

          {/* CTAs */}
          <div ref={ctasRef} style={{ marginBottom: '48px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); window.dispatchEvent(new CustomEvent('wc:tab', { detail: { tab: 'demo' } })); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-primary"
              style={{ fontSize: '0.95rem', padding: '15px 28px' }}
            >
              Claim My Free Slot <ArrowRight size={16} />
            </a>
            <a
              href="#showcase"
              onClick={e => { e.preventDefault(); document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-ghost"
              style={{ fontSize: '0.95rem' }}
            >
              See Real Examples
            </a>
          </div>

          {/* Trust row */}
          <div
            ref={trustRef}
            style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ display: 'flex', gap: 2 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
                <span style={{ color: '#FFFFFF', fontWeight: 600 }}>4.9</span> · 47 reviews
              </span>
            </div>
            <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.12)' }} />
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
              <span style={{ color: '#FFFFFF', fontWeight: 600 }}>$0</span> to start. Ever.
            </span>
            <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.12)' }} />
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
              <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Avg 6hr</span> delivery
            </span>
            <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.12)' }} />
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
              <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Pay only</span> if you love it
            </span>
          </div>
        </div>

        {/* ── RIGHT: AI Pipeline + floating stats ── */}
        <div ref={rightRef} className="hero-right" style={{ position: 'relative', paddingTop: '20px', paddingBottom: '20px' }}>

          {/* Stat card: top-right — gradient */}
          <StatCard
            value="847"
            label="Sites deployed"
            icon={<Zap size={16} />}
            gradient
            style={{ top: -10, right: -16, zIndex: 10 }}
          />

          {/* AI Pipeline card */}
          <div style={{ marginTop: '28px', marginBottom: '28px' }}>
            <AIPipelineCard />
          </div>

          {/* Stat card: bottom-left */}
          <StatCard
            value="6h"
            label="Avg build time"
            icon={<Clock size={16} />}
            style={{ bottom: -10, left: -16, zIndex: 10 }}
          />

          {/* Stat card: bottom-right */}
          <StatCard
            value="97/100"
            label="PageSpeed score"
            icon={<TrendingUp size={16} />}
            style={{ bottom: 60, right: -16, zIndex: 10 }}
          />

          {/* Glow behind card */}
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '70%', height: '60%',
            background: 'radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)',
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
        color: 'rgba(255,255,255,0.3)',
      }}>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)',
        }} />
      </div>
    </section>
  )
}
