'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { n: 1000,  suffix: '+',  label: 'Leads scraped daily' },
  { n: 24,    suffix: 'h',  label: 'From scan to live site' },
  { n: 299,   prefix: '$', suffix: '', label: 'Starting price' },
  { n: 100,   suffix: '%', label: 'Satisfaction guarantee' },
]

const NICHES = [
  'HVAC', 'Roofing', 'Auto Detailing', 'Cleaning', 'Landscaping',
  'Handyman', 'Junk Removal', 'Remodeling', 'Dentist', 'Med Spa',
]

export default function Results() {
  const sectionRef  = useRef<HTMLElement>(null)
  const headingRef  = useRef<HTMLDivElement>(null)
  const statsRef    = useRef<HTMLDivElement>(null)
  const nichesRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
      gsap.from(headingRef.current?.querySelectorAll('.word-inner') ?? [], {
        yPercent: 110, opacity: 0, stagger: 0.05, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      })

      // Counter animation
      statsRef.current?.querySelectorAll('.stat-num').forEach(el => {
        const target = parseInt(el.getAttribute('data-target') ?? '0')
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            const prefix = el.getAttribute('data-prefix') ?? ''
            const suffix = el.getAttribute('data-suffix') ?? ''
            el.textContent = prefix + Math.round(obj.val).toLocaleString() + suffix
          },
          scrollTrigger: { trigger: statsRef.current, start: 'top 80%', once: true },
        })
      })

      // Stats cards stagger
      gsap.from(statsRef.current?.querySelectorAll('.stat-card') ?? [], {
        y: 40, opacity: 0, stagger: 0.1, duration: 0.65, ease: 'power3.out',
        scrollTrigger: { trigger: statsRef.current, start: 'top 80%' },
      })

      // Niches
      gsap.from(nichesRef.current?.querySelectorAll('.niche-tag') ?? [], {
        opacity: 0, scale: 0.9, stagger: 0.05, duration: 0.4, ease: 'back.out(1.2)',
        scrollTrigger: { trigger: nichesRef.current, start: 'top 85%' },
      })
    })
    return () => ctx.revert()
  }, [])

  const splitLine = (text: string) =>
    text.split(' ').map((w, i) => (
      <span key={i} className="word-wrap" style={{ display:'inline-block', marginRight:'0.25em' }}>
        <span className="word-inner">{w}</span>
      </span>
    ))

  return (
    <section
      id="results"
      ref={sectionRef}
      style={{
        padding:'120px 32px',
        background:'var(--color-surface)',
        borderTop:'1px solid var(--color-border)',
        borderBottom:'1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:'72px' }}>
          <div className="section-label" style={{ justifyContent:'center' }}>
            <span style={{ width:'20px', height:'1px', background:'var(--color-gold)' }} />
            By The Numbers
            <span style={{ width:'20px', height:'1px', background:'var(--color-gold)' }} />
          </div>
          <div ref={headingRef} style={{ overflow:'hidden' }}>
            <h2 style={{
              fontFamily:'var(--font-display)', fontWeight:800,
              fontSize:'clamp(2rem,5vw,3.5rem)', letterSpacing:'-0.025em', lineHeight:1.1,
            }}>
              {splitLine('The system that never')}
              <br />
              <span className="gradient-gold">{splitLine('stops working.')}</span>
            </h2>
          </div>
        </div>

        {/* Stats grid */}
        <div
          ref={statsRef}
          style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'16px', marginBottom:'64px' }}
        >
          {STATS.map(s => (
            <div
              key={s.label}
              className="stat-card"
              style={{
                background:'var(--color-bg)',
                border:'1px solid var(--color-border)',
                borderRadius:'12px',
                padding:'32px 24px',
                textAlign:'center',
              }}
            >
              <div
                className="stat-num"
                data-target={s.n}
                data-prefix={s.prefix ?? ''}
                data-suffix={s.suffix}
                style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'2.5rem', color:'var(--color-gold)' }}
              >
                {(s.prefix ?? '') + '0' + s.suffix}
              </div>
              <div style={{ color:'var(--color-muted)', fontSize:'0.85rem', marginTop:'8px' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Niche tags */}
        <div style={{ textAlign:'center' }}>
          <p style={{ color:'var(--color-muted)', fontSize:'0.8rem', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'20px' }}>
            Industries we serve
          </p>
          <div ref={nichesRef} style={{ display:'flex', flexWrap:'wrap', gap:'10px', justifyContent:'center' }}>
            {NICHES.map(n => (
              <span
                key={n}
                className="niche-tag"
                style={{
                  border:'1px solid var(--color-border)',
                  borderRadius:'100px',
                  padding:'7px 16px',
                  fontSize:'0.8rem',
                  color:'var(--color-muted)',
                  background:'var(--color-surface-2)',
                  transition:'color 0.2s, border-color 0.2s',
                  cursor:'default',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color='var(--color-gold)'; (e.currentTarget as HTMLElement).style.borderColor='var(--color-gold)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color='var(--color-muted)'; (e.currentTarget as HTMLElement).style.borderColor='var(--color-border)' }}
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
