'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, ArrowRight, Zap, BarChart2, Star, Globe, MessageSquare } from 'lucide-react'

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger) }

const MONTHLY_ITEMS = [
  {
    icon: Globe,
    label: 'Your site, always online',
    detail: '99.9% uptime — fast everywhere, never goes down',
    market: '$30/mo',
  },
  {
    icon: Zap,
    label: 'Weekly Google Business posts',
    detail: 'Written + published every week — stay visible on Google Maps',
    market: '$150/mo',
  },
  {
    icon: Star,
    label: 'Reply to every Google review',
    detail: 'In your voice. Prompt. Every single one.',
    market: '$150/mo',
  },
  {
    icon: BarChart2,
    label: 'Monthly SEO + traffic report',
    detail: 'Google Search Console data emailed to you — know what\'s working',
    market: '$100/mo',
  },
  {
    icon: MessageSquare,
    label: 'Every lead texted to your phone',
    detail: 'Contact form → instant SMS + email. Never miss a customer.',
    market: '$30/mo',
  },
]

const MARKET_TOTAL = 460

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
        y: 56, opacity: 0, stagger: 0.14, duration: 0.75, ease: 'power3.out',
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

        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--color-blue)' }} />
            Pricing
            <span style={{ width: '24px', height: '1px', background: 'var(--color-blue)' }} />
          </div>
          <div ref={headingRef}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(2.2rem,5.5vw,4rem)',
              letterSpacing: '-0.03em', lineHeight: 1.0,
            }}>
              {split('One job pays for this')}
              <span className="gradient-brand">{split(' forever.')}</span>
            </h2>
          </div>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.05rem', maxWidth: '520px', margin: '20px auto 0', lineHeight: 1.65 }}>
            Your average job is worth $650+. Our site costs $299 — once. The math is embarrassingly obvious. And remember: you see it live before you pay a single dollar.
          </p>
        </div>

        <div
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >

          {/* ── STANDARD CARD ── */}
          <div
            className="pricing-card"
            style={{
              background: 'linear-gradient(160deg, rgba(0,194,110,0.04) 0%, var(--color-bg) 100%)',
              border: '1px solid rgba(0,194,110,0.3)',
              borderRadius: '20px',
              padding: '40px',
              position: 'relative',
              boxShadow: '0 0 80px rgba(0,194,110,0.06)',
              transition: 'transform 0.35s var(--ease-out), box-shadow 0.35s',
              display: 'flex', flexDirection: 'column',
            }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = '0 24px 80px rgba(0,194,110,0.12)' }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 0 80px rgba(0,194,110,0.06)' }}
          >
            {/* Most Popular badge */}
            <div style={{
              position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
              background: 'linear-gradient(135deg, #00C26F, #0EA5E9)',
              color: '#fff', fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.12em',
              textTransform: 'uppercase', padding: '5px 18px', borderRadius: '100px',
              whiteSpace: 'nowrap',
            }}>
              ✦ Most Popular
            </div>

            {/* Top glow line */}
            <div style={{
              position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px',
              background: 'linear-gradient(90deg, transparent, var(--color-blue), transparent)',
            }} />

            {/* How it works — 3 steps */}
            <div style={{
              display: 'flex', gap: '0', marginBottom: '32px', marginTop: '8px',
              background: 'rgba(0,194,110,0.04)', borderRadius: '12px',
              border: '1px solid rgba(0,194,110,0.1)',
              overflow: 'hidden',
            }}>
              {[
                { step: '1', label: 'We build', sub: 'FREE demo' },
                { step: '2', label: 'You approve', sub: '$299 once' },
                { step: '3', label: 'We run it', sub: '$49/mo' },
              ].map((s, i) => (
                <div key={i} style={{
                  flex: 1, padding: '14px 12px', textAlign: 'center',
                  borderRight: i < 2 ? '1px solid rgba(0,194,110,0.1)' : 'none',
                }}>
                  <div style={{
                    width: '22px', height: '22px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #00C26F, #0EA5E9)',
                    color: '#fff', fontSize: '0.65rem', fontWeight: 800,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 6px',
                  }}>{s.step}</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text)' }}>{s.label}</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--color-blue)', fontWeight: 600, marginTop: '2px' }}>{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Price block */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '8px' }}>
                Site ownership
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
                <span style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '3.4rem', letterSpacing: '-0.04em',
                  color: 'var(--color-blue)',
                }}>$299</span>
                <span style={{ color: 'var(--color-muted)', fontSize: '0.88rem' }}>one-time · yours forever</span>
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-muted)' }}>
                $0 upfront — pay only after you see it live and love it.
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '28px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-muted)' }}>
                    Monthly plan
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: '4px' }}>
                    <span style={{
                      fontFamily: 'var(--font-display)', fontWeight: 700,
                      fontSize: '2rem', letterSpacing: '-0.03em',
                      color: 'var(--color-text)',
                    }}>$49</span>
                    <span style={{ color: 'var(--color-muted)', fontSize: '0.82rem' }}>/mo · cancel anytime</span>
                  </div>
                </div>
                {/* Value badge */}
                <div style={{
                  background: 'rgba(0,194,110,0.08)',
                  border: '1px solid rgba(0,194,110,0.2)',
                  borderRadius: '10px', padding: '8px 14px', textAlign: 'right',
                }}>
                  <div style={{ fontSize: '0.65rem', color: 'var(--color-muted)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Worth</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-blue)' }}>${MARKET_TOTAL}/mo</div>
                  <div style={{ fontSize: '0.6rem', color: 'var(--color-muted)' }}>at any agency</div>
                </div>
              </div>

              {/* Monthly items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {MONTHLY_ITEMS.map(item => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{
                        width: '32px', height: '32px', flexShrink: 0,
                        background: 'rgba(0,194,110,0.08)', borderRadius: '8px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Icon size={14} color="var(--color-blue)" />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                          <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--color-text)' }}>{item.label}</span>
                          <span style={{
                            fontSize: '0.68rem', color: 'var(--color-muted)',
                            background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                            borderRadius: '6px', padding: '1px 7px', whiteSpace: 'nowrap', flexShrink: 0,
                          }}>{item.market}</span>
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-muted)', marginTop: '2px', lineHeight: 1.4 }}>{item.detail}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <a
              href="#contact"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', textDecoration: 'none', display: 'flex' }}
            >
              Claim My Free Demo Site <ArrowRight size={16} />
            </a>
            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--color-muted)', marginTop: '14px', lineHeight: 1.6 }}>
              No card. No contract. <strong style={{ color: 'var(--color-text)' }}>See it live. Then decide.</strong> You owe us nothing if you don&apos;t love it.
            </p>
          </div>

          {/* ── CUSTOM CARD ── */}
          <div
            className="pricing-card"
            style={{
              background: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: '20px',
              padding: '40px',
              position: 'relative',
              transition: 'transform 0.35s var(--ease-out), box-shadow 0.35s',
              display: 'flex', flexDirection: 'column',
            }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.08)' }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none' }}
          >
            <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '6px' }}>
              Custom build
            </div>
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '1.4rem', marginBottom: '16px', color: 'var(--color-text)',
            }}>
              Need something bigger?
            </div>

            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '2.8rem', letterSpacing: '-0.03em',
              marginBottom: '8px', color: 'var(--color-text)',
            }}>
              Let&apos;s talk.
            </div>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '32px' }}>
              Multi-location businesses, e-commerce, booking systems, CRM integrations, custom AI workflows — we scope it and quote it.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px', marginTop: 'auto' }}>
              {[
                'Multi-location / franchise setup',
                'Online booking + payment integration',
                'E-commerce storefront',
                'CRM sync (HubSpot, Salesforce, etc.)',
                'Custom AI receptionist training',
                'Dedicated account manager + SLA',
                'Volume discounts for agency partners',
              ].map(f => (
                <div key={f} style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.86rem' }}>
                  <Check size={14} color="var(--color-blue)" style={{ flexShrink: 0 }} />
                  <span style={{ color: 'var(--color-muted)' }}>{f}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-ghost"
              style={{ width: '100%', justifyContent: 'center', textDecoration: 'none', display: 'flex' }}
            >
              Talk to Us
            </a>
            <p style={{ textAlign: 'center', fontSize: '0.72rem', color: 'var(--color-muted)', marginTop: '12px' }}>
              Usually respond within 2 hours.
            </p>
          </div>

        </div>

        {/* Bottom value bar */}
        <div style={{
          marginTop: '48px',
          padding: '24px 32px',
          background: 'linear-gradient(135deg, rgba(0,194,110,0.06) 0%, rgba(14,165,233,0.04) 100%)',
          border: '1px solid rgba(0,194,110,0.15)',
          borderRadius: '14px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ fontSize: '0.95rem', color: 'var(--color-text)', fontWeight: 700, marginBottom: 4 }}>
              The $49/mo plan replaces <span style={{ color: 'var(--color-blue)' }}>${MARKET_TOTAL}/mo</span> in agency services.
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-muted)' }}>
              Hosting · weekly GBP posts · review replies · monthly traffic report · instant lead SMS. All included.
            </div>
          </div>
          <div style={{
            flexShrink: 0,
            background: 'white',
            border: '1px solid rgba(0,194,110,0.2)',
            borderRadius: 10,
            padding: '10px 18px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '0.6rem', color: 'var(--color-muted)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>You save</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-blue)', letterSpacing: '-0.03em', lineHeight: 1 }}>${MARKET_TOTAL - 49}/mo</div>
            <div style={{ fontSize: '0.6rem', color: 'var(--color-muted)' }}>vs. hiring out</div>
          </div>
        </div>

      </div>
    </section>
  )
}
