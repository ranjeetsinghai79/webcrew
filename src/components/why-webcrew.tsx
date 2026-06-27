'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DollarSign, RefreshCw, Package, TrendingUp, MapPin, Zap } from 'lucide-react'

if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger) }

const REASONS = [
  {
    icon: DollarSign,
    title: 'No setup fees',
    desc: 'Start completely free. We build your site overnight and you only pay to keep it live.',
  },
  {
    icon: RefreshCw,
    title: 'Cancel anytime',
    desc: 'Month-to-month. No contracts, no lock-in, no exit fees. Stay because it works — not because you\'re stuck.',
  },
  {
    icon: Package,
    title: 'Everything included',
    desc: 'Website, hosting, SEO, GBP posts, review replies, lead alerts, analytics — all in $49/mo. No hidden costs.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous improvements',
    desc: 'Your site doesn\'t sit still. We improve it every month — rankings, speed, content, lead capture.',
  },
  {
    icon: MapPin,
    title: 'Built for local businesses',
    desc: 'Not generic templates. Every site is custom-built for your niche, your city, and your customers.',
  },
  {
    icon: Zap,
    title: 'Launch in 24 hours',
    desc: 'Submit tonight. Wake up to a live, indexed, Google-ready website — not in weeks. Tomorrow.',
  },
]

export default function WhyWebcrew() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const gridRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.querySelectorAll('.word-inner') ?? [], {
        yPercent: 115, opacity: 0, stagger: 0.04, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      })
      gsap.from(gridRef.current?.querySelectorAll('.why-card') ?? [], {
        y: 44, opacity: 0, stagger: 0.08, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 82%' },
      })

      gridRef.current?.querySelectorAll('.why-card').forEach(card => {
        const el = card as HTMLElement
        const setRX = gsap.quickTo(el, 'rotationX', { duration: 0.4, ease: 'power2.out' })
        const setRY = gsap.quickTo(el, 'rotationY', { duration: 0.4, ease: 'power2.out' })
        gsap.set(el, { transformPerspective: 900, transformStyle: 'preserve-3d' })
        const onMove = (e: MouseEvent) => {
          const rect = el.getBoundingClientRect()
          setRY((e.clientX - rect.left - rect.width / 2) / (rect.width / 2) * 6)
          setRX(-(e.clientY - rect.top - rect.height / 2) / (rect.height / 2) * 4)
          el.style.borderColor = 'rgba(0,194,110,0.35)'
          el.style.boxShadow = '0 20px 60px rgba(0,194,110,0.1)'
        }
        const onLeave = () => {
          setRX(0); setRY(0)
          el.style.borderColor = 'var(--color-border)'
          el.style.boxShadow = 'none'
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
      ref={sectionRef}
      style={{
        padding: 'clamp(80px,10vw,120px) clamp(24px,6vw,80px)',
        background: 'var(--color-bg)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: 16 }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--color-blue)' }} />
            Why WebCrew
            <span style={{ width: '24px', height: '1px', background: 'var(--color-blue)' }} />
          </div>
          <div ref={headingRef}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(2rem,4.2vw,3.4rem)',
              letterSpacing: '-0.035em', lineHeight: 1.0,
            }}>
              {split('Why Businesses Choose WebCrew.')}
              <br />
              <span style={{
                background: 'linear-gradient(135deg,#00C26F,#0EA5E9)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                {split('Six reasons they never leave.')}
              </span>
            </h2>
          </div>
          <p style={{ color: 'var(--color-muted)', fontSize: '1rem', maxWidth: 480, margin: '20px auto 0', lineHeight: 1.7 }}>
            Not a website company. A business growth subscription — with no setup fee, no contracts, and a platform that keeps improving automatically.
          </p>
        </div>

        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
          className="why-grid"
        >
          {REASONS.map((r) => {
            const Icon = r.icon
            return (
              <div
                key={r.title}
                className="why-card"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 16,
                  padding: '28px 24px',
                  cursor: 'default',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(0,194,110,0.08)',
                  border: '1px solid rgba(0,194,110,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 18,
                }}>
                  <Icon size={20} color="#00C26F" />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '1.05rem', letterSpacing: '-0.02em',
                  marginBottom: 8, color: 'var(--color-text)',
                }}>
                  {r.title}
                </h3>
                <p style={{ color: 'var(--color-muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                  {r.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          .why-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  )
}
