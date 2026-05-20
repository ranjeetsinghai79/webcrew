'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger) }

const SITES = [
  {
    biz: 'HVAC Heating & Cooling',
    niche: 'HVAC',
    city: 'Tracy, CA',
    img: '/showcase/hvac-real.jpg',
    result: 'Live · Day 1',
    score: 98,
    color: '#3b82f6',
    url: 'https://site-hvac-heating-cooling-llc.pages.dev',
    domain: 'site-hvac-heating-cooling-llc.pages.dev',
  },
  {
    biz: 'Clearwater Dentistry',
    niche: 'Dentistry',
    city: 'Clearwater, FL',
    img: '/showcase/dentist-real.jpg',
    result: 'Live · Day 1',
    score: 97,
    color: '#06b6d4',
    url: 'https://site-clearwater-dentistry.pages.dev',
    domain: 'site-clearwater-dentistry.pages.dev',
  },
  {
    biz: 'Happy Junk Removal',
    niche: 'Junk Removal',
    city: 'San Jose, CA',
    img: '/showcase/junk-removal-real.jpg',
    result: 'Live · Day 1',
    score: 96,
    color: '#f97316',
    url: 'https://site-happy-junk-removal.pages.dev',
    domain: 'site-happy-junk-removal.pages.dev',
  },
  {
    biz: 'San Jose Daycare',
    niche: 'Daycare',
    city: 'San Jose, CA',
    img: '/showcase/daycare-real.jpg',
    result: 'Live · Day 1',
    score: 97,
    color: '#f59e0b',
    url: 'https://site-san-jose-daycare.pages.dev',
    domain: 'site-san-jose-daycare.pages.dev',
  },
  {
    biz: 'Luxury Homes Riverside',
    niche: 'Luxury Real Estate',
    city: 'Riverside, CA',
    img: '/showcase/luxury-realestate-real.jpg',
    result: 'Live · Day 1',
    score: 98,
    color: '#c4a44c',
    url: 'https://site-luxury-homes-in-riverside.pages.dev',
    domain: 'site-luxury-homes-in-riverside.pages.dev',
  },
]

function BrowserCard({ site }: { site: (typeof SITES)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const setRX = gsap.quickTo(el, 'rotationX', { duration: 0.45, ease: 'power2.out' })
    const setRY = gsap.quickTo(el, 'rotationY', { duration: 0.45, ease: 'power2.out' })
    const setSC = gsap.quickTo(el, 'scale', { duration: 0.35, ease: 'power2.out' })
    gsap.set(el, { transformPerspective: 1000, transformStyle: 'preserve-3d' })

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
      const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
      setRY(dx * 10)
      setRX(-dy * 7)
      setSC(1.02)
      gsap.to(el, { duration: 0.3, borderColor: 'rgba(196,164,76,0.45)', boxShadow: `0 40px 100px rgba(0,0,0,0.7), 0 0 40px ${site.color}18` })
    }
    const onLeave = () => {
      setRX(0); setRY(0); setSC(1)
      gsap.to(el, { duration: 0.4, borderColor: 'rgba(196,164,76,0.15)', boxShadow: '0 24px 80px rgba(0,0,0,0.6)' })
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave) }
  }, [site.color])

  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', display: 'block' }}
    >
    <div
      ref={cardRef}
      className="showcase-card"
      style={{
        flexShrink: 0,
        width: '340px',
        background: 'linear-gradient(135deg, #1a1a28, #12121e)',
        borderRadius: '16px',
        border: '1px solid rgba(196,164,76,0.15)',
        overflow: 'hidden',
        boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
        cursor: 'pointer',
        willChange: 'transform',
      }}
    >
      {/* Browser chrome */}
      <div style={{
        background: '#0e0e1c', padding: '8px 12px',
        display: 'flex', alignItems: 'center', gap: '8px',
        borderBottom: '1px solid rgba(196,164,76,0.08)',
      }}>
        <div style={{ display: 'flex', gap: '5px' }}>
          {['#ff5f57','#febc2e','#28c840'].map((c, i) => (
            <div key={i} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c, opacity: 0.7 }} />
          ))}
        </div>
        <div style={{
          flex: 1, background: 'rgba(255,255,255,0.05)',
          borderRadius: '5px', padding: '4px 10px',
          fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)',
          fontFamily: 'monospace',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          {site.domain}
        </div>
        <ArrowUpRight size={12} color="rgba(255,255,255,0.3)" />
      </div>

      {/* Screenshot */}
      <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
        <img
          src={site.img}
          alt={site.biz}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            objectPosition: 'center top', display: 'block',
            transition: 'transform 0.6s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(160deg, rgba(6,6,12,0.6) 0%, rgba(6,6,12,0.05) 50%, transparent)',
        }} />
        {/* Nav simulation */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          padding: '10px 14px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'rgba(6,6,12,0.55)', backdropFilter: 'blur(6px)',
        }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: '0.75rem', color: 'var(--color-gold)',
          }}>
            {site.biz}
          </span>
          <div style={{
            background: `linear-gradient(135deg, ${site.color}, ${site.color}cc)`,
            color: '#fff', fontWeight: 700, fontSize: '0.6rem',
            padding: '4px 10px', borderRadius: '4px',
          }}>
            Call Now
          </div>
        </div>
      </div>

      {/* Card footer */}
      <div style={{ padding: '18px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 600,
            fontSize: '0.88rem', color: 'var(--color-text)', marginBottom: '2px',
          }}>
            {site.biz}
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--color-muted)' }}>
            {site.niche} · {site.city}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{
            fontSize: '0.72rem', fontWeight: 600, color: '#4ade80',
            background: 'rgba(74,222,128,0.1)',
            border: '1px solid rgba(74,222,128,0.2)',
            borderRadius: '100px', padding: '4px 10px',
            marginBottom: '4px',
          }}>
            ● {site.result}
          </div>
          <div style={{ fontSize: '0.68rem', color: 'var(--color-muted)' }}>
            PageSpeed: <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>{site.score}/100</span>
          </div>
        </div>
      </div>
    </div>
    </a>
  )
}

export default function Showcase() {
  const sectionRef  = useRef<HTMLElement>(null)
  const headingRef  = useRef<HTMLDivElement>(null)
  const trackRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      const words = headingRef.current?.querySelectorAll('.word-inner')
      if (words) {
        gsap.from(words, {
          yPercent: 115, opacity: 0, stagger: 0.04, duration: 0.75, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        })
      }

      // ClipPath section reveal
      gsap.from(headingRef.current, {
        opacity: 0, y: 30,
        ease: 'power3.out', duration: 0.8,
        scrollTrigger: { trigger: headingRef.current, start: 'top 88%' },
      })

      // Cards stagger
      gsap.from(trackRef.current?.querySelectorAll('.showcase-card') ?? [], {
        y: 70, opacity: 0, scale: 0.95, stagger: 0.08, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: trackRef.current, start: 'top 82%' },
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
      id="showcase"
      ref={sectionRef}
      style={{
        padding: 'clamp(80px,12vw,140px) 0',
        overflow: 'hidden',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '64px', padding: '0 32px' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>
          <span style={{ width: '24px', height: '1px', background: 'var(--color-gold)' }} />
          Real Work. Real Results.
          <span style={{ width: '24px', height: '1px', background: 'var(--color-gold)' }} />
        </div>
        <div ref={headingRef}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(2.2rem,5.5vw,4rem)',
            letterSpacing: '-0.03em', lineHeight: 1.0,
          }}>
            {split('Sites we built.')}
            <br />
            <span className="gradient-gold">{split('Revenue they earned.')}</span>
          </h2>
        </div>
        <p style={{ color: 'var(--color-muted)', fontSize: '1.05rem', maxWidth: '440px', margin: '20px auto 0', lineHeight: 1.65 }}>
          Every site built overnight. Every one live within 24 hours. Every one getting calls.
        </p>
      </div>

      {/* Horizontal scroll track */}
      <div style={{ position: 'relative' }}>
        {/* Fades */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
          background: 'linear-gradient(90deg, var(--color-bg), transparent)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
          background: 'linear-gradient(-90deg, var(--color-bg), transparent)',
          pointerEvents: 'none',
        }} />

        <div
          ref={trackRef}
          style={{
            display: 'flex', gap: '24px',
            padding: '24px 120px 48px',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {SITES.map(s => <BrowserCard key={s.biz} site={s} />)}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', marginTop: '16px', padding: '0 32px' }}>
        <a href="#contact" className="btn-primary" style={{ fontSize: '0.95rem' }}>
          Get My Site Like These <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  )
}
