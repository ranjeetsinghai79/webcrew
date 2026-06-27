'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger) }

const SITES = [
  {
    biz: 'ProFix HVAC & Cooling',
    niche: 'HVAC',
    city: 'Tracy, CA',
    img: '/showcase/hvac-real.jpg',
    result: '+18 Calls',
    resultB: '+6 New Jobs · Week 1',
    score: 98,
    color: '#3b82f6',
    url: 'https://profix-hvac-demo.pages.dev',
    domain: 'profix-hvac-demo.pages.dev',
  },
  {
    biz: 'Elite Roofing Co.',
    niche: 'Roofing',
    city: 'Tracy, CA',
    img: '/showcase/roofing.jpg',
    result: '$18K Closed',
    resultB: 'From Google · Day 3',
    score: 97,
    color: '#ef4444',
    url: 'https://wcd-roofing.pages.dev',
    domain: 'wcd-roofing.pages.dev',
  },
  {
    biz: 'Bright Smile Dental',
    niche: 'Dentistry',
    city: 'Tracy, CA',
    img: '/showcase/dentist-real.jpg',
    result: '+24 Appts',
    resultB: 'Booked Solid · Month 1',
    score: 97,
    color: '#06b6d4',
    url: 'https://wcd-dentist.pages.dev',
    domain: 'wcd-dentist.pages.dev',
  },
  {
    biz: 'Spotless Home Cleaning',
    niche: 'Cleaning',
    city: 'Tracy, CA',
    img: '/showcase/cleaning.jpg',
    result: 'Fully Booked',
    resultB: '3 Weeks Out · Hired 2',
    score: 96,
    color: '#8b5cf6',
    url: 'https://wcd-cleaning.pages.dev',
    domain: 'wcd-cleaning.pages.dev',
  },
  {
    biz: 'GreenScape Landscaping',
    niche: 'Landscaping',
    city: 'Tracy, CA',
    img: '/showcase/landscaping.jpg',
    result: '+14 Leads',
    resultB: 'Week 1 · Google Maps',
    score: 97,
    color: '#22c55e',
    url: 'https://wcd-landscaping.pages.dev',
    domain: 'wcd-landscaping.pages.dev',
  },
  {
    biz: 'ARQ Real Estate',
    niche: 'Real Estate',
    city: 'Tracy, CA',
    img: '/showcase/luxury-realestate-real.jpg',
    result: '+$2M Pipeline',
    resultB: 'Qualified Leads · Month 1',
    score: 98,
    color: '#c4a44c',
    url: 'https://wcd-luxury-realestate.pages.dev',
    domain: 'wcd-luxury-realestate.pages.dev',
  },
]

function BrowserCard({ site }: { site: typeof SITES[0] }) {
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
      gsap.to(el, { duration: 0.3, borderColor: 'rgba(0,194,110,0.45)', boxShadow: `0 24px 60px rgba(0,0,0,0.28), 0 0 30px ${site.color}18` })
    }
    const onLeave = () => {
      setRX(0); setRY(0); setSC(1)
      gsap.to(el, { duration: 0.4, borderColor: 'rgba(0,194,110,0.15)', boxShadow: '0 12px 40px rgba(0,0,0,0.18)' })
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)

    // Clip-path image reveal on scroll
    const img = el.querySelector('img')
    if (img) {
      gsap.fromTo(img,
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'power4.inOut',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true }
        }
      )
    }

    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave) }
  }, [site.color])

  return (
    <a href={site.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
      <div
        ref={cardRef}
        className="showcase-card"
        style={{
          flexShrink: 0,
          width: '340px',
          background: 'linear-gradient(135deg, #1a1a28, #12121e)',
          borderRadius: '16px',
          border: '1px solid rgba(0,194,110,0.15)',
          overflow: 'hidden',
          boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
          cursor: 'pointer',
          willChange: 'transform',
        }}
      >
        {/* Browser chrome */}
        <div style={{
          background: '#0e0e1c', padding: '8px 12px',
          display: 'flex', alignItems: 'center', gap: '8px',
          borderBottom: '1px solid rgba(0,194,110,0.08)',
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
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(160deg, rgba(6,6,12,0.6) 0%, rgba(6,6,12,0.05) 50%, transparent)',
          }} />
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            padding: '10px 14px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: 'rgba(6,6,12,0.55)', backdropFilter: 'blur(6px)',
          }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', color: 'var(--color-blue)' }}>
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

        {/* Card footer — results focused */}
        <div style={{ padding: '16px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: '1.15rem', color: '#4ade80', letterSpacing: '-0.02em', lineHeight: 1,
            }}>
              {site.result}
            </div>
            <div style={{ fontSize: '0.68rem', color: 'var(--color-muted)', marginTop: 3 }}>
              {site.resultB}
            </div>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div style={{ fontSize: '0.68rem', color: 'var(--color-muted)', marginBottom: 2 }}>
              {site.niche}
            </div>
            <div style={{ fontSize: '0.68rem', color: 'var(--color-muted)' }}>
              PageSpeed: <span style={{ color: 'var(--color-blue)', fontWeight: 600 }}>{site.score}/100</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const trackRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = headingRef.current?.querySelectorAll('.word-inner')
      if (words) {
        gsap.from(words, {
          yPercent: 115, opacity: 0, stagger: 0.04, duration: 0.75, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        })
      }
      gsap.from(headingRef.current, {
        opacity: 0, y: 30, ease: 'power3.out', duration: 0.8,
        scrollTrigger: { trigger: headingRef.current, start: 'top 88%' },
      })
      gsap.from(trackRef.current?.querySelectorAll('.showcase-card') ?? [], {
        y: 70, opacity: 0, scale: 0.95, stagger: 0.08, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: trackRef.current, start: 'top 82%' },
      })

      // Horizontal pin — desktop only
      const mm = gsap.matchMedia()
      mm.add('(min-width: 768px)', () => {
        const track = trackRef.current
        const section = sectionRef.current
        if (!track || !section) return

        const getScrollAmount = () => -(track.scrollWidth - window.innerWidth)

        gsap.to(track, {
          x: getScrollAmount,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            pin: true,
            start: 'top top',
            end: () => `+=${Math.abs(getScrollAmount())}`,
            scrub: 1.2,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          }
        })
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
      style={{ padding: 'clamp(80px,12vw,140px) 0', overflow: 'hidden', borderTop: '1px solid var(--color-border)' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '64px', padding: '0 32px' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>
          <span style={{ width: '24px', height: '1px', background: 'var(--color-blue)' }} />
          Live Sites. Real Leads.
          <span style={{ width: '24px', height: '1px', background: 'var(--color-blue)' }} />
        </div>
        <div ref={headingRef}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(2.2rem,5.5vw,4rem)',
            letterSpacing: '-0.03em', lineHeight: 1.0,
          }}>
            {split('Real Businesses.')}
            <span className="gradient-brand">{split(' Real Growth.')}</span>
          </h2>
        </div>
        <p style={{ color: 'var(--color-muted)', fontSize: '1.05rem', maxWidth: '480px', margin: '20px auto 0', lineHeight: 1.65 }}>
          Every site built FREE overnight. All live within 24 hours. All getting calls.
          Click any site to see it live.
        </p>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden' }}>
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
          className="h-scroll-track"
        >
          {SITES.map(s => <BrowserCard key={s.biz} site={s} />)}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '16px', padding: '0 32px' }}>
        <a href="#contact" className="btn-primary" style={{ fontSize: '0.95rem' }}>
          Get My FREE Demo Site <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  )
}
