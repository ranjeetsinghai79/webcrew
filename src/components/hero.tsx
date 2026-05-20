'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger) }

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const badgeRef   = useRef<HTMLDivElement>(null)
  const h1Ref      = useRef<HTMLHeadingElement>(null)
  const subRef     = useRef<HTMLParagraphElement>(null)
  const ctasRef    = useRef<HTMLDivElement>(null)
  const trustRef   = useRef<HTMLDivElement>(null)
  const countRef   = useRef<HTMLSpanElement>(null)

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf: number
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    const dots = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.2,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      a: Math.random() * 0.35 + 0.05,
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
        ctx.fillStyle = `rgba(196,164,76,${d.a})`
        ctx.fill()
      }
      // Draw faint connecting lines
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.strokeStyle = `rgba(196,164,76,${0.04 * (1 - dist / 100)})`
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

  // Count-up for live counter
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

  // Entrance + parallax
  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = h1Ref.current?.querySelectorAll('.word-inner')
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 1.5 })

      tl.from(badgeRef.current, { opacity: 0, y: -16, duration: 0.5 })
      if (words) tl.from(words, { yPercent: 115, opacity: 0, stagger: 0.035, duration: 0.8 }, '-=0.2')
      tl.from(subRef.current,  { opacity: 0, y: 20, duration: 0.65 }, '-=0.5')
        .from(ctasRef.current,  { opacity: 0, y: 20, duration: 0.55 }, '-=0.45')
        .from(trustRef.current, { opacity: 0, y: 12, duration: 0.5  }, '-=0.35')

      // Scroll parallax
      gsap.to(sectionRef.current, {
        yPercent: -10, ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1.5 },
      })
    })
    return () => ctx.revert()
  }, [])

  const split = (text: string, className?: string) =>
    text.split(' ').map((w, i) => (
      <span key={i} className="word-wrap" style={{ display: 'inline-block', marginRight: '0.22em' }}>
        <span className={`word-inner${className ? ' ' + className : ''}`}>{w}</span>
      </span>
    ))

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(100px,15vh,160px) 32px 80px',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      <canvas ref={canvasRef} id="hero-canvas" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />

      {/* Aurora blobs */}
      <div className="aurora-blob" style={{ width: '700px', height: '700px', background: 'rgba(196,164,76,0.05)', top: '-10%', left: '5%', animation: 'aurora-drift 14s ease-in-out infinite' }} />
      <div className="aurora-blob" style={{ width: '500px', height: '500px', background: 'rgba(90,60,200,0.07)', bottom: '0%', right: '0%', animation: 'aurora-drift 18s ease-in-out infinite reverse' }} />
      <div className="aurora-blob" style={{ width: '350px', height: '350px', background: 'rgba(196,164,76,0.04)', top: '50%', right: '15%', animation: 'aurora-drift 10s ease-in-out infinite' }} />

      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(196,164,76,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(196,164,76,0.025) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>

        {/* Live badge */}
        <div ref={badgeRef} style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            border: '1px solid rgba(74,222,128,0.25)',
            background: 'rgba(74,222,128,0.06)',
            borderRadius: '100px', padding: '8px 18px',
            fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#4ade80',
          }}>
            <span className="live-dot" />
            <span ref={countRef}>823</span> local sites built — 12 launched today
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'clamp(3rem,9vw,7rem)',
          lineHeight: 0.95,
          letterSpacing: '-0.04em',
          marginBottom: '32px',
        }}>
          <div style={{ overflow: 'hidden', paddingBottom: '0.06em' }}>
            {split('Your competitors')}
          </div>
          <div style={{ overflow: 'hidden', paddingBottom: '0.06em' }}>
            <span className="gradient-gold">{split('already hired us.')}</span>
          </div>
        </h1>

        {/* Sub */}
        <p
          ref={subRef}
          style={{
            color: 'var(--color-muted)',
            fontSize: 'clamp(1rem,2.2vw,1.22rem)',
            lineHeight: 1.7,
            maxWidth: '580px',
            margin: '0 auto 44px',
          }}
        >
          We scan Google Maps every morning. Find businesses losing money to bad — or no — websites.
          Build something{' '}
          <span style={{ color: 'var(--color-text)', fontWeight: 600 }}>stunning overnight.</span>
          {' '}Text you the link. You pay only if you're obsessed.
        </p>

        {/* CTAs */}
        <div ref={ctasRef} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '72px' }}>
          <a href="#contact" className="btn-primary" style={{ fontSize: '1rem', padding: '17px 40px' }}>
            Get My Free Demo <ArrowRight size={17} />
          </a>
          <a href="#how-it-works" className="btn-ghost" style={{ fontSize: '1rem' }}>
            How It Works
          </a>
        </div>

        {/* Trust strip */}
        <div
          ref={trustRef}
          style={{
            display: 'flex',
            gap: '0',
            justifyContent: 'center',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid var(--color-border)',
            maxWidth: '580px',
            margin: '0 auto',
          }}
        >
          {[
            { value: '$0',    sub: 'upfront cost' },
            { value: '24h',   sub: 'delivery' },
            { value: '100%',  sub: 'money-back' },
          ].map((s, i) => (
            <div
              key={s.value}
              style={{
                flex: 1,
                background: 'var(--color-surface)',
                padding: '22px 16px',
                textAlign: 'center',
                borderRight: i < 2 ? '1px solid var(--color-border)' : 'none',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.6rem',
                color: 'var(--color-gold)',
                letterSpacing: '-0.02em',
              }}>
                {s.value}
              </div>
              <div style={{ color: 'var(--color-muted)', fontSize: '0.72rem', marginTop: '4px', letterSpacing: '0.05em' }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '28px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        opacity: 0.35,
      }}>
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, var(--color-gold), transparent)' }} />
      </div>
    </section>
  )
}
