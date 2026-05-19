'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Zap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef  = useRef<HTMLElement>(null)
  const canvasRef   = useRef<HTMLCanvasElement>(null)
  const badgeRef    = useRef<HTMLDivElement>(null)
  const line1Ref    = useRef<HTMLDivElement>(null)
  const line2Ref    = useRef<HTMLDivElement>(null)
  const line3Ref    = useRef<HTMLDivElement>(null)
  const paraRef     = useRef<HTMLParagraphElement>(null)
  const ctasRef     = useRef<HTMLDivElement>(null)
  const statsRef    = useRef<HTMLDivElement>(null)

  // ── Particle canvas ──────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf: number

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const GOLD = 'rgba(196,164,76,'
    const dots = Array.from({ length: 60 }, () => ({
      x:   Math.random() * canvas.width,
      y:   Math.random() * canvas.height,
      r:   Math.random() * 1.5 + 0.3,
      vx:  (Math.random() - 0.5) * 0.3,
      vy:  (Math.random() - 0.5) * 0.3,
      a:   Math.random() * 0.4 + 0.1,
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
        ctx.fillStyle = GOLD + d.a + ')'
        ctx.fill()
      }
      raf = requestAnimationFrame(tick)
    }
    tick()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  // ── Entrance timeline ────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 1.4 })

      tl.from(badgeRef.current, { opacity: 0, y: -12, duration: 0.45 })

      // Word-split each headline line
      ;[line1Ref, line2Ref, line3Ref].forEach((ref, i) => {
        const words = ref.current?.querySelectorAll('.word-inner')
        if (words?.length) {
          tl.from(words, { yPercent: 110, opacity: 0, stagger: 0.04, duration: 0.7 }, i === 0 ? '-=0.2' : '-=0.5')
        }
      })

      tl.from(paraRef.current,  { opacity: 0, y: 16, duration: 0.6 }, '-=0.4')
        .from(ctasRef.current,  { opacity: 0, y: 16, duration: 0.5 }, '-=0.4')
        .from(statsRef.current, { opacity: 0, y: 12, duration: 0.5 }, '-=0.3')

      // Parallax on scroll
      gsap.to(sectionRef.current, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1.5 },
      })
    })
    return () => ctx.revert()
  }, [])

  const splitLine = (text: string) =>
    text.split(' ').map((w, i) => (
      <span key={i} className="word-wrap" style={{ display: 'inline-block', marginRight: '0.25em' }}>
        <span className="word-inner">{w}</span>
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
        padding: '120px 32px 80px',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Canvas */}
      <canvas ref={canvasRef} id="hero-canvas" style={{ position:'absolute', inset:0, width:'100%', height:'100%' }} />

      {/* Aurora blobs */}
      <div className="aurora-blob" style={{ width:'600px', height:'600px', background:'var(--color-blob-1)', top:'5%', left:'10%', animation:'aurora-drift 12s ease-in-out infinite' }} />
      <div className="aurora-blob" style={{ width:'500px', height:'500px', background:'var(--color-blob-2)', bottom:'5%', right:'5%', animation:'aurora-drift 15s ease-in-out infinite reverse' }} />

      {/* Grid overlay */}
      <div style={{
        position:'absolute', inset:0,
        backgroundImage:'linear-gradient(rgba(196,164,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(196,164,76,0.03) 1px, transparent 1px)',
        backgroundSize:'60px 60px',
        pointerEvents:'none',
      }} />

      {/* Content */}
      <div style={{ position:'relative', zIndex:1, maxWidth:'820px', margin:'0 auto' }}>

        {/* Badge */}
        <div ref={badgeRef} style={{ display:'flex', justifyContent:'center', marginBottom:'24px' }}>
          <span style={{
            display:'inline-flex', alignItems:'center', gap:'6px',
            border:'1px solid var(--color-border)',
            borderRadius:'100px',
            padding:'6px 16px',
            fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase',
            color:'var(--color-gold)',
            background:'rgba(196,164,76,0.06)',
          }}>
            <Zap size={11} />
            AI-Powered Website Agency
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily:'var(--font-display)',
          fontWeight:800,
          fontSize:'clamp(2.8rem,8vw,6rem)',
          lineHeight:1.0,
          letterSpacing:'-0.03em',
          marginBottom:'28px',
        }}>
          <div ref={line1Ref} style={{ overflow:'hidden', paddingBottom:'0.08em' }}>
            {splitLine('Luxury websites')}
          </div>
          <div ref={line2Ref} style={{ overflow:'hidden', paddingBottom:'0.08em' }}>
            <span className="gradient-gold">{splitLine('built overnight')}</span>
          </div>
          <div ref={line3Ref} style={{ overflow:'hidden', paddingBottom:'0.08em' }}>
            {splitLine('for local businesses.')}
          </div>
        </h1>

        {/* Para */}
        <p
          ref={paraRef}
          style={{
            color:'var(--color-muted)',
            fontSize:'clamp(1rem,2vw,1.2rem)',
            lineHeight:1.65,
            maxWidth:'560px',
            margin:'0 auto 40px',
          }}
        >
          We find businesses without great websites, build them a luxury site overnight,
          and send them a demo — they only pay if they love it. Starting at <span style={{color:'var(--color-text)', fontWeight:600}}>$299</span>.
        </p>

        {/* CTAs */}
        <div ref={ctasRef} style={{ display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap', marginBottom:'64px' }}>
          <a href="#contact" className="btn-primary" style={{ fontSize:'0.95rem', padding:'16px 36px' }}>
            Get Your Site <ArrowRight size={16} />
          </a>
          <a href="#how-it-works" className="btn-ghost" style={{ fontSize:'0.95rem' }}>
            See How It Works
          </a>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          style={{
            display:'grid',
            gridTemplateColumns:'repeat(3,1fr)',
            gap:'1px',
            background:'var(--color-border)',
            borderRadius:'12px',
            overflow:'hidden',
            border:'1px solid var(--color-border)',
            maxWidth:'520px',
            margin:'0 auto',
          }}
        >
          {[
            { n:'24h',   label:'Delivery time' },
            { n:'$0',    label:'Upfront cost' },
            { n:'100%',  label:'Satisfaction or free' },
          ].map(s => (
            <div key={s.n} style={{
              background:'var(--color-surface)',
              padding:'20px 12px',
              textAlign:'center',
            }}>
              <div style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'1.5rem', color:'var(--color-gold)' }}>{s.n}</div>
              <div style={{ color:'var(--color-muted)', fontSize:'0.75rem', marginTop:'4px', letterSpacing:'0.05em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position:'absolute', bottom:'32px', left:'50%', transform:'translateX(-50%)',
        display:'flex', flexDirection:'column', alignItems:'center', gap:'6px',
        opacity:0.4,
      }}>
        <div style={{ width:'1px', height:'40px', background:'linear-gradient(to bottom, var(--color-gold), transparent)' }} />
        <span style={{ fontSize:'0.65rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--color-muted)' }}>Scroll</span>
      </div>
    </section>
  )
}
