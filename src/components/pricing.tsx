'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, ArrowRight } from 'lucide-react'

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger) }

const PLANS = [
  {
    name: 'New Website',
    eyebrow: 'No website yet?',
    price: '$299',
    per: 'one-time',
    hosting: '+$49/mo hosting',
    sub: 'Cancel anytime. No contracts.',
    badge: null,
    features: [
      'Professional, cinematic website',
      'Mobile-first, cinematic design',
      'Contact form → your phone instantly',
      'Google Maps SEO built-in',
      'SSL + blazing-fast hosting',
      '24-hour delivery',
      'You own it forever',
    ],
    cta: 'Get My $299 Site',
    highlight: false,
  },
  {
    name: 'Site Upgrade',
    eyebrow: 'Have a bad website?',
    price: '$599',
    per: 'one-time',
    hosting: '+$79/mo hosting',
    sub: 'Most clients see leads within 72h.',
    badge: 'Most Popular',
    features: [
      'Everything in New Website',
      'Full audit of your current site',
      'Full redesign from scratch',
      'Advanced scroll animations',
      'Google Business integration',
      'Review showcase',
      'Priority 12-hour delivery',
    ],
    cta: 'Upgrade My Website',
    highlight: true,
  },
  {
    name: 'Enterprise',
    eyebrow: 'Multi-location or franchise?',
    price: 'Custom',
    per: 'quote',
    hosting: 'Custom hosting',
    sub: 'Volume discounts available.',
    badge: null,
    features: [
      'Everything in Upgrade',
      'Multi-location setup',
      'CRM + booking integration',
      'Monthly SEO reporting',
      'Custom analytics dashboard',
      'Dedicated account manager',
      'SLA + priority support',
    ],
    cta: 'Talk to Us',
    highlight: false,
  },
]

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.querySelectorAll('.word-inner') ?? [], {
        yPercent: 115, opacity: 0, stagger: 0.045, duration: 0.75, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      })
      gsap.from(cardsRef.current?.querySelectorAll('.pricing-card') ?? [], {
        y: 56, opacity: 0, stagger: 0.12, duration: 0.75, ease: 'power3.out',
        scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' },
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
      id="pricing"
      ref={sectionRef}
      style={{
        padding: 'clamp(80px,12vw,140px) 32px',
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Launch special banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(196,164,76,0.1) 0%, rgba(196,164,76,0.04) 100%)',
          border: '1px solid rgba(196,164,76,0.35)',
          borderRadius: '12px',
          padding: '14px 24px',
          textAlign: 'center',
          marginBottom: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          flexWrap: 'wrap',
        }}>
          <span style={{
            background: 'var(--color-gold)',
            color: '#06060C',
            fontWeight: 800,
            fontSize: '0.65rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            padding: '3px 10px',
            borderRadius: '100px',
          }}>Launch Special</span>
          <span style={{ fontSize: '0.9rem', color: 'var(--color-text)', fontWeight: 600 }}>
            First 10 businesses this month — site build free.
          </span>
          <span style={{ fontSize: '0.82rem', color: 'var(--color-muted)' }}>
            Pay hosting only ($49/mo). <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>6 spots left.</span>
          </span>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--color-gold)' }} />
            Pricing
            <span style={{ width: '24px', height: '1px', background: 'var(--color-gold)' }} />
          </div>
          <div ref={headingRef}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(2.2rem,5.5vw,4rem)',
              letterSpacing: '-0.03em', lineHeight: 1.0,
            }}>
              {split('One new customer')}
              <span className="gradient-gold">{split(' pays for this.')}</span>
            </h2>
          </div>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.05rem', maxWidth: '440px', margin: '20px auto 0', lineHeight: 1.65 }}>
            No retainers. No hidden fees. Pay once, own your site forever.
          </p>
        </div>

        <div
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '24px',
            alignItems: 'start',
          }}
        >
          {PLANS.map(p => (
            <div
              key={p.name}
              className="pricing-card"
              style={{
                background: p.highlight
                  ? 'linear-gradient(160deg, rgba(196,164,76,0.06) 0%, var(--color-bg) 100%)'
                  : 'var(--color-bg)',
                border: p.highlight
                  ? '1px solid rgba(196,164,76,0.4)'
                  : '1px solid var(--color-border)',
                borderRadius: '18px',
                padding: '36px',
                position: 'relative',
                boxShadow: p.highlight ? '0 0 80px rgba(196,164,76,0.07)' : 'none',
                transition: 'transform 0.35s var(--ease-out), box-shadow 0.35s',
              }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = p.highlight ? '0 24px 80px rgba(196,164,76,0.14)' : '0 16px 48px rgba(0,0,0,0.3)' }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.transform = 'translateY(0)'; el.style.boxShadow = p.highlight ? '0 0 80px rgba(196,164,76,0.07)' : 'none' }}
            >
              {p.badge && (
                <div style={{
                  position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-light))',
                  color: '#06060C', fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.12em',
                  textTransform: 'uppercase', padding: '5px 18px', borderRadius: '100px',
                  whiteSpace: 'nowrap',
                }}>
                  ✦ {p.badge}
                </div>
              )}

              {/* Top accent line */}
              {p.highlight && (
                <div style={{
                  position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px',
                  background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
                }} />
              )}

              <div style={{
                fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: 'var(--color-muted)',
                marginBottom: '6px',
              }}>
                {p.eyebrow}
              </div>

              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: '1.1rem', marginBottom: '20px',
                color: 'var(--color-text)',
              }}>
                {p.name}
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '6px' }}>
                <span style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '3.2rem', letterSpacing: '-0.04em',
                  color: p.highlight ? 'var(--color-gold)' : 'var(--color-text)',
                }}>
                  {p.price}
                </span>
                <span style={{ color: 'var(--color-muted)', fontSize: '0.85rem' }}>{p.per}</span>
              </div>

              <div style={{ color: 'var(--color-gold)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                {p.hosting}
              </div>
              <div style={{
                color: 'var(--color-muted)', fontSize: '0.78rem',
                paddingBottom: '24px', marginBottom: '24px',
                borderBottom: '1px solid var(--color-border)',
              }}>
                {p.sub}
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '13px', marginBottom: '32px' }}>
                {p.features.map(f => (
                  <li key={f} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.88rem' }}>
                    <Check size={14} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ color: 'var(--color-muted)' }}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={p.highlight ? 'btn-primary' : 'btn-ghost'}
                style={{ width: '100%', justifyContent: 'center', textDecoration: 'none', display: 'flex' }}
              >
                {p.cta} {p.highlight && <ArrowRight size={16} />}
              </a>
            </div>
          ))}
        </div>

        <p style={{
          textAlign: 'center', color: 'var(--color-muted)',
          fontSize: '0.82rem', marginTop: '40px', lineHeight: 1.7,
        }}>
          All plans include SSL, mobile optimization, and contact form routing to your phone.
          Hosting auto-renews monthly — cancel anytime, no questions asked.
        </p>
      </div>
    </section>
  )
}
