'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger) }

const COMING = [
  { label: 'AI Receptionist',      sub: '24/7 call answering in your voice',           soon: true  },
  { label: 'SMS Follow-up',        sub: 'Auto-text every new lead within 60 seconds',  soon: true  },
  { label: 'Google Review Replies', sub: 'AI replies to every review, in your voice',  soon: true  },
  { label: 'Voice Search',         sub: 'Optimized for Siri, Google, Alexa queries',   soon: false },
  { label: 'Booking Automation',   sub: 'Let customers book jobs directly from your site', soon: false },
  { label: 'Business Dashboard',   sub: 'Leads, calls, revenue, rankings — one screen', soon: false },
  { label: 'Video Outreach',       sub: 'Personalized video emails to cold prospects', soon: false },
  { label: 'Multi-location AI',    sub: 'One subscription, all your locations',        soon: false },
]

export default function ComingSoon() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const gridRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.querySelectorAll('.word-inner') ?? [], {
        yPercent: 115, opacity: 0, stagger: 0.04, duration: 0.75, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      })
      gsap.from(gridRef.current?.querySelectorAll('.cs-item') ?? [], {
        y: 32, opacity: 0, stagger: 0.07, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 82%' },
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
        padding: 'clamp(80px,12vw,140px) 32px',
        background: 'linear-gradient(160deg, #04040E 0%, #080820 55%, #0D0B28 100%)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Aurora blobs */}
      <div className="aurora-blob" style={{ width: '500px', height: '500px', background: 'rgba(0,194,110,0.08)', top: '-10%', right: '-5%', animation: 'aurora-drift 16s ease-in-out infinite' }} />
      <div className="aurora-blob" style={{ width: '400px', height: '400px', background: 'rgba(14,165,233,0.07)', bottom: '0%', left: '5%', animation: 'aurora-drift 20s ease-in-out infinite reverse' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>What&apos;s Included &amp; Coming</span>
            <span style={{ width: '24px', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
          </div>
          <div ref={headingRef}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(2.2rem,5.5vw,4rem)',
              letterSpacing: '-0.03em', lineHeight: 1.1, color: '#FFFFFF',
            }}>
              {split('Your Business Gets')}
              <span style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #00C26F 0%, #0EA5E9 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                {split(' Better Every Month.')}
              </span>
            </h2>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1.05rem', maxWidth: '520px', margin: '20px auto 0', lineHeight: 1.65 }}>
            Subscribe today and every new feature unlocks automatically — no extra charge, no plan upgrade ever.
          </p>
        </div>

        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '14px',
            marginBottom: '56px',
          }}
        >
          {COMING.map((item) => (
            <div
              key={item.label}
              className="cs-item"
              style={{
                display: 'flex', alignItems: 'flex-start', gap: 14,
                padding: '18px 20px',
                background: item.soon
                  ? 'linear-gradient(135deg, rgba(0,194,110,0.08) 0%, rgba(14,165,233,0.05) 100%)'
                  : 'rgba(255,255,255,0.03)',
                border: item.soon
                  ? '1px solid rgba(0,194,110,0.25)'
                  : '1px solid rgba(255,255,255,0.07)',
                borderRadius: '12px',
                transition: 'border-color 0.25s, background 0.25s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(0,194,110,0.4)'
                el.style.background = 'linear-gradient(135deg, rgba(0,194,110,0.1) 0%, rgba(14,165,233,0.07) 100%)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderColor = item.soon ? 'rgba(0,194,110,0.25)' : 'rgba(255,255,255,0.07)'
                el.style.background = item.soon
                  ? 'linear-gradient(135deg, rgba(0,194,110,0.08) 0%, rgba(14,165,233,0.05) 100%)'
                  : 'rgba(255,255,255,0.03)'
              }}
            >
              <div style={{
                width: 20, height: 20, borderRadius: 6, flexShrink: 0, marginTop: 1,
                background: item.soon ? 'rgba(0,194,110,0.15)' : 'rgba(255,255,255,0.06)',
                border: item.soon ? '1px solid rgba(0,194,110,0.3)' : '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: '0.55rem', color: item.soon ? '#00C26F' : 'rgba(255,255,255,0.3)' }}>✓</span>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.86rem', fontWeight: 600, color: item.soon ? '#FFFFFF' : 'rgba(255,255,255,0.55)' }}>
                    {item.label}
                  </span>
                  {item.soon && (
                    <span style={{
                      fontSize: '0.55rem', fontWeight: 800, letterSpacing: '0.12em',
                      textTransform: 'uppercase', padding: '2px 7px', borderRadius: 100,
                      background: 'linear-gradient(135deg, #00C26F, #0EA5E9)', color: '#fff',
                    }}>SOON</span>
                  )}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.45 }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)', marginBottom: '24px' }}>
            Active subscribers get every future feature automatically. Lock in $49/mo today.
          </p>
          <a
            href="#contact"
            className="btn-primary"
            style={{ fontSize: '0.95rem' }}
          >
            Start Free — No Setup Fee <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
