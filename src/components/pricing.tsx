'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Zap, BarChart2, Star, Globe, MessageSquare } from 'lucide-react'

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
              {split('Your growth subscription.')}
              <span className="gradient-brand">{split(' One price. Everything.')}</span>
            </h2>
          </div>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.05rem', maxWidth: '520px', margin: '20px auto 0', lineHeight: 1.65 }}>
            No setup fee. No contracts. We build your site free overnight — pay $49/mo to keep it live and growing. Cancel anytime.
          </p>
        </div>

        <div
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 560px)',
            justifyContent: 'center',
            gap: '24px',
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
            {/* Launch Pricing badge */}
            <div style={{
              position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
              background: 'linear-gradient(135deg, #00C26F, #0EA5E9)',
              color: '#fff', fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.12em',
              textTransform: 'uppercase', padding: '5px 18px', borderRadius: '100px',
              whiteSpace: 'nowrap',
            }}>
              🎉 Launch Pricing · Founding Member
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
                { step: '1', label: 'We build', sub: 'FREE overnight' },
                { step: '2', label: 'You love it', sub: 'No pressure' },
                { step: '3', label: 'We grow it', sub: '$49/mo' },
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
                Founding Member
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
                <span style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '3.8rem', letterSpacing: '-0.04em',
                  color: 'var(--color-blue)',
                }}>$49</span>
                <span style={{ color: 'var(--color-muted)', fontSize: '0.88rem' }}>/month · cancel anytime</span>
              </div>
              <div style={{
                fontSize: '0.78rem', color: '#00C26F', fontWeight: 600,
                background: 'rgba(0,194,110,0.06)', border: '1px solid rgba(0,194,110,0.15)',
                borderRadius: 8, padding: '8px 12px', lineHeight: 1.5,
              }}>
                🔒 Price locked for life — never increases.<br />
                <span style={{ color: 'var(--color-muted)', fontWeight: 400 }}>Future plans start at $99/month. Join now to lock $49 forever.</span>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '28px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: 4 }}>
                    Everything included. No setup fee. No surprises.
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-muted)' }}>
                    We build free. You see it live. Then you decide.
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
              Start Free — Build My Website <ArrowRight size={16} />
            </a>
            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--color-muted)', marginTop: '14px', lineHeight: 1.6 }}>
              No card. No setup fee. <strong style={{ color: 'var(--color-text)' }}>See it live first. Then subscribe.</strong> You owe us nothing if you don&apos;t love it.
            </p>
          </div>

        </div>

        {/* Multi-location note */}
        <p style={{
          textAlign: 'center', marginTop: '20px',
          fontSize: '0.82rem', color: 'var(--color-muted)',
        }}>
          Need multiple locations or a franchise setup?{' '}
          <a href="#contact" style={{ color: 'var(--color-blue)', fontWeight: 600, textDecoration: 'underline' }}>
            Contact us — we&apos;ll scope it.
          </a>
        </p>

        {/* ── Pricing Roadmap ── */}
        <div style={{
          marginTop: '48px',
          background: 'linear-gradient(160deg, #04040E 0%, #080820 100%)',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.07)',
          overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{
            padding: '24px 36px 20px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
          }}>
            <div>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 6 }}>
                Pricing Roadmap
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>
                Price goes up at every milestone.
              </div>
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(0,194,110,0.1)', border: '1px solid rgba(0,194,110,0.3)',
              borderRadius: 100, padding: '8px 16px',
            }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#00C26F', boxShadow: '0 0 8px rgba(0,194,110,0.8)' }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#00C26F' }}>You're in the Founding Members window</span>
            </div>
          </div>

          {/* Tiers */}
          <div style={{ padding: '0 36px 28px' }}>
            {[
              {
                phase: '1',
                label: 'Founding Members',
                price: '$49/mo',
                note: 'Price locked for life — never increases',
                current: true,
                badge: 'ACTIVE NOW',
              },
              {
                phase: '2',
                label: 'Public Launch',
                price: '$99/mo',
                note: 'Price doubles on official launch day',
                current: false,
                badge: 'NEXT',
              },
              {
                phase: '3',
                label: 'AI Receptionist Release',
                price: '$149/mo',
                note: '24/7 AI call answering added to all plans',
                current: false,
                badge: 'COMING',
              },
              {
                phase: '4',
                label: 'Business OS Release',
                price: '$199/mo',
                note: 'CRM + automations + full business dashboard',
                current: false,
                badge: 'COMING',
              },
              {
                phase: '5',
                label: 'Multi-location & Advanced AI',
                price: '$299+/mo',
                note: 'Franchise management + multi-location AI',
                current: false,
                badge: 'FUTURE',
              },
            ].map((tier, i, arr) => (
              <div
                key={tier.label}
                style={{
                  display: 'flex', alignItems: 'stretch', gap: 0,
                }}
              >
                {/* Spine */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 36, flexShrink: 0, paddingTop: 22 }}>
                  <div style={{
                    width: tier.current ? 14 : 10,
                    height: tier.current ? 14 : 10,
                    borderRadius: '50%',
                    background: tier.current
                      ? 'linear-gradient(135deg, #00C26F, #0EA5E9)'
                      : i === 1 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)',
                    border: tier.current ? 'none' : '1.5px solid rgba(255,255,255,0.12)',
                    flexShrink: 0,
                    boxShadow: tier.current ? '0 0 16px rgba(0,194,110,0.7), 0 0 32px rgba(0,194,110,0.25)' : 'none',
                  }} />
                  {i < arr.length - 1 && (
                    <div style={{
                      flex: 1, width: 1.5, minHeight: 24,
                      background: tier.current
                        ? 'linear-gradient(to bottom, rgba(0,194,110,0.4), rgba(255,255,255,0.06))'
                        : 'rgba(255,255,255,0.06)',
                    }} />
                  )}
                </div>

                {/* Row content */}
                <div style={{
                  flex: 1,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                  padding: tier.current ? '18px 20px' : '14px 20px',
                  margin: tier.current ? '10px 0 4px' : '4px 0',
                  borderRadius: 12,
                  background: tier.current
                    ? 'linear-gradient(135deg, rgba(0,194,110,0.08) 0%, rgba(14,165,233,0.05) 100%)'
                    : 'transparent',
                  border: tier.current ? '1px solid rgba(0,194,110,0.2)' : '1px solid transparent',
                }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
                      <span style={{
                        fontSize: tier.current ? '1rem' : '0.88rem',
                        fontWeight: tier.current ? 700 : 500,
                        color: tier.current ? '#FFFFFF' : i === 1 ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.3)',
                        fontFamily: 'var(--font-display)',
                      }}>
                        {tier.label}
                      </span>
                      <span style={{
                        fontSize: '0.56rem', fontWeight: 800,
                        letterSpacing: '0.14em', textTransform: 'uppercase',
                        padding: '3px 8px', borderRadius: 100,
                        background: tier.current
                          ? 'linear-gradient(135deg, #00C26F, #0EA5E9)'
                          : i === 1 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
                        color: tier.current ? '#fff' : i === 1 ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.2)',
                      }}>
                        {tier.badge}
                      </span>
                    </div>
                    <div style={{
                      fontSize: '0.74rem',
                      color: tier.current ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)',
                    }}>
                      {tier.note}
                    </div>
                  </div>

                  {/* Price */}
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{
                      fontSize: tier.current ? '1.5rem' : '1.05rem',
                      fontWeight: 800,
                      letterSpacing: '-0.03em',
                      fontFamily: 'var(--font-display)',
                      color: tier.current ? '#00C26F' : i === 1 ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.18)',
                    }}>
                      {tier.price}
                    </div>
                    {tier.current && (
                      <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>
                        locked for life
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div style={{
            padding: '20px 36px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
          }}>
            <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', margin: 0 }}>
              Founding Members keep $49/mo <strong style={{ color: 'rgba(255,255,255,0.5)' }}>forever</strong> — even after all future releases.
            </p>
            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontSize: '0.78rem', fontWeight: 700,
              background: 'linear-gradient(135deg, #00C26F, #0EA5E9)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              textDecoration: 'none',
            }}>
              Claim $49 before launch →
            </a>
          </div>
        </div>

        {/* Bottom value bar */}
        <div style={{
          marginTop: '24px',
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
