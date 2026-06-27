'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Check, Minus, Zap, BarChart2, Star, Globe, MessageSquare } from 'lucide-react'

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger) }

const FREE_FEATURES = [
  'Site built overnight — completely custom',
  'Hosted on yourname.webcrew.app',
  'Mobile-optimized · PageSpeed 90+',
  'Contact form (leads emailed to you)',
  'Basic local SEO on-page',
  'Free forever — no credit card',
]

const GROWTH_FEATURES = [
  { icon: Globe,          label: 'Custom domain (yourdomain.com)', detail: 'Yours permanently — even if you cancel', market: '$30/mo' },
  { icon: Zap,            label: 'Weekly Google Business posts',    detail: '52 posts/year — stay visible on Maps',  market: '$150/mo' },
  { icon: Star,           label: 'Reply to every Google review',    detail: 'In your voice. Prompt. Every one.',     market: '$150/mo' },
  { icon: BarChart2,      label: 'Monthly SEO + traffic report',    detail: 'Google Search Console data emailed to you', market: '$100/mo' },
  { icon: MessageSquare,  label: 'Instant lead SMS + email alerts', detail: 'Contact form → your phone in seconds',  market: '$30/mo' },
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

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--color-blue)' }} />
            Pricing
            <span style={{ width: '24px', height: '1px', background: 'var(--color-blue)' }} />
          </div>
          <div ref={headingRef}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(2.2rem,5.5vw,4rem)',
              letterSpacing: '-0.03em', lineHeight: 1.1,
            }}>
              {split('Start free.')}
              <span className="gradient-brand">{split(' Grow for $49/mo.')}</span>
            </h2>
          </div>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.05rem', maxWidth: '500px', margin: '20px auto 0', lineHeight: 1.65 }}>
            We build your site overnight at no cost. Keep it free on a webcrew subdomain, or upgrade to your own domain + full growth stack for $49/month.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.15fr)',
            gap: '20px',
            alignItems: 'start',
          }}
          className="pricing-grid"
        >

          {/* ── FREE CARD ── */}
          <div
            className="pricing-card"
            style={{
              background: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: '20px',
              padding: '36px',
              display: 'flex', flexDirection: 'column',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.08)' }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none' }}
          >
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '10px' }}>
                Free
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '8px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '3rem', letterSpacing: '-0.04em', color: 'var(--color-text)' }}>$0</span>
                <span style={{ color: 'var(--color-muted)', fontSize: '0.88rem' }}>/forever</span>
              </div>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                Get your site live and see leads come in — no card, no commitment. Upgrade when you&apos;re ready.
              </p>
            </div>

            <a
              href="#contact"
              onClick={e => {
                e.preventDefault()
                window.dispatchEvent(new CustomEvent('wc:tab', { detail: { tab: 'demo' } }))
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-ghost"
              style={{
                display: 'flex', justifyContent: 'center',
                textDecoration: 'none', marginBottom: '28px',
                color: 'var(--color-text)', borderColor: 'var(--color-border)',
                padding: '13px 24px',
              }}
            >
              Get Free Site — No Card Needed
            </a>

            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {FREE_FEATURES.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Check size={14} color="var(--color-blue)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: '0.84rem', color: 'var(--color-muted)', lineHeight: 1.4 }}>{f}</span>
                </div>
              ))}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Minus size={14} color="rgba(0,0,0,0.2)" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: '0.84rem', color: 'rgba(0,0,0,0.3)', lineHeight: 1.4 }}>Custom domain, GBP management, lead alerts</span>
              </div>
            </div>
          </div>

          {/* ── GROWTH CARD ── */}
          <div
            className="pricing-card"
            style={{
              background: 'linear-gradient(160deg, rgba(0,194,110,0.04) 0%, var(--color-bg) 100%)',
              border: '1.5px solid rgba(0,194,110,0.3)',
              borderRadius: '20px',
              padding: '36px',
              position: 'relative',
              boxShadow: '0 0 80px rgba(0,194,110,0.07)',
              display: 'flex', flexDirection: 'column',
              transition: 'transform 0.35s var(--ease-out), box-shadow 0.35s',
            }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = '0 24px 80px rgba(0,194,110,0.14)' }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 0 80px rgba(0,194,110,0.07)' }}
          >
            {/* Badge */}
            <div style={{
              position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
              background: 'linear-gradient(135deg, #00C26F, #0EA5E9)',
              color: '#fff', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.12em',
              textTransform: 'uppercase', padding: '5px 18px', borderRadius: '100px',
              whiteSpace: 'nowrap',
            }}>
              ✦ Most Popular · Founding Member
            </div>

            {/* Top glow line */}
            <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--color-blue), transparent)' }} />

            <div style={{ marginBottom: '24px', marginTop: '8px' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '10px' }}>
                Growth
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '3.4rem', letterSpacing: '-0.04em', color: 'var(--color-blue)' }}>$49</span>
                <span style={{ color: 'var(--color-muted)', fontSize: '0.88rem' }}>/month · cancel anytime</span>
              </div>
              <div style={{
                fontSize: '0.78rem', color: '#00C26F', fontWeight: 600,
                background: 'rgba(0,194,110,0.06)', border: '1px solid rgba(0,194,110,0.15)',
                borderRadius: 8, padding: '8px 12px', lineHeight: 1.5,
              }}>
                🔒 Price locked for life — future plans start at $99/mo. Join now.
              </div>
            </div>

            <a
              href="#contact"
              onClick={e => {
                e.preventDefault()
                window.dispatchEvent(new CustomEvent('wc:tab', { detail: { tab: 'demo' } }))
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary"
              style={{ display: 'flex', justifyContent: 'center', textDecoration: 'none', marginBottom: '28px' }}
            >
              Start Free — Upgrade Later <ArrowRight size={16} />
            </a>

            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '24px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-muted)', marginBottom: '16px', letterSpacing: '0.04em' }}>
                Everything in Free, plus:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {GROWTH_FEATURES.map(item => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{
                        width: '30px', height: '30px', flexShrink: 0,
                        background: 'rgba(0,194,110,0.08)', borderRadius: '8px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Icon size={13} color="var(--color-blue)" />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                          <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--color-text)' }}>{item.label}</span>
                          <span style={{
                            fontSize: '0.65rem', color: 'var(--color-muted)',
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

            <p style={{ textAlign: 'center', fontSize: '0.74rem', color: 'var(--color-muted)', marginTop: '20px', lineHeight: 1.6, marginBottom: 0 }}>
              Worth <strong style={{ color: 'var(--color-blue)' }}>$460/mo</strong> at any agency. You pay $49.
            </p>
          </div>

        </div>

        {/* Responsive style */}
        <style>{`
          @media (max-width: 760px) {
            .pricing-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>

        {/* Multi-location note */}
        <p style={{ textAlign: 'center', marginTop: '28px', fontSize: '0.82rem', color: 'var(--color-muted)' }}>
          Multiple locations or franchise?{' '}
          <a href="#contact" style={{ color: 'var(--color-blue)', fontWeight: 600, textDecoration: 'underline' }}>
            Contact us — custom pricing available.
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
          <div style={{
            padding: '24px 36px 20px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
          }}>
            <div>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 6 }}>
                Pricing Roadmap
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>
                Price increases at every milestone. Lock $49 now.
              </div>
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(0,194,110,0.1)', border: '1px solid rgba(0,194,110,0.3)',
              borderRadius: 100, padding: '8px 16px',
            }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#00C26F', boxShadow: '0 0 8px rgba(0,194,110,0.8)' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#00C26F' }}>Founding Members window — open now</span>
            </div>
          </div>

          <div style={{ padding: '0 36px 28px' }}>
            {[
              { phase: '1', label: 'Founding Members',          price: '$49/mo',  note: 'Locked for life — never increases',              current: true,  badge: 'NOW' },
              { phase: '2', label: 'Public Launch',             price: '$99/mo',  note: 'Price doubles on launch day',                    current: false, badge: 'NEXT' },
              { phase: '3', label: 'AI Receptionist',           price: '$149/mo', note: '24/7 AI call answering added to all plans',       current: false, badge: 'Q3' },
              { phase: '4', label: 'Business OS',               price: '$199/mo', note: 'CRM + automations + full business dashboard',     current: false, badge: 'Q4' },
              { phase: '5', label: 'Multi-location & AI Suite', price: '$299+/mo',note: 'Franchise management + multi-location AI',        current: false, badge: '2026' },
            ].map((tier, i, arr) => (
              <div key={tier.label} style={{ display: 'flex', alignItems: 'stretch', gap: 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 36, flexShrink: 0, paddingTop: 22 }}>
                  <div style={{
                    width: tier.current ? 14 : 10,
                    height: tier.current ? 14 : 10,
                    borderRadius: '50%',
                    background: tier.current ? 'linear-gradient(135deg, #00C26F, #0EA5E9)' : i === 1 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)',
                    border: tier.current ? 'none' : '1.5px solid rgba(255,255,255,0.12)',
                    flexShrink: 0,
                    boxShadow: tier.current ? '0 0 16px rgba(0,194,110,0.7), 0 0 32px rgba(0,194,110,0.25)' : 'none',
                  }} />
                  {i < arr.length - 1 && (
                    <div style={{ flex: 1, width: 1.5, minHeight: 24, background: tier.current ? 'linear-gradient(to bottom, rgba(0,194,110,0.4), rgba(255,255,255,0.06))' : 'rgba(255,255,255,0.06)' }} />
                  )}
                </div>
                <div style={{
                  flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                  padding: tier.current ? '18px 20px' : '14px 20px',
                  margin: tier.current ? '10px 0 4px' : '4px 0',
                  borderRadius: 12,
                  background: tier.current ? 'linear-gradient(135deg, rgba(0,194,110,0.08) 0%, rgba(14,165,233,0.05) 100%)' : 'transparent',
                  border: tier.current ? '1px solid rgba(0,194,110,0.2)' : '1px solid transparent',
                }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: tier.current ? '1rem' : '0.88rem', fontWeight: tier.current ? 700 : 500, color: tier.current ? '#FFFFFF' : i === 1 ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-display)' }}>
                        {tier.label}
                      </span>
                      <span style={{ fontSize: '0.56rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: 100, background: tier.current ? 'linear-gradient(135deg, #00C26F, #0EA5E9)' : i === 1 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)', color: tier.current ? '#fff' : i === 1 ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.2)' }}>
                        {tier.badge}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.74rem', color: tier.current ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)' }}>{tier.note}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontSize: tier.current ? '1.5rem' : '1.05rem', fontWeight: 800, letterSpacing: '-0.03em', fontFamily: 'var(--font-display)', color: tier.current ? '#00C26F' : i === 1 ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.18)' }}>
                      {tier.price}
                    </div>
                    {tier.current && <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>locked for life</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ padding: '20px 36px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', margin: 0 }}>
              Founding Members keep $49/mo <strong style={{ color: 'rgba(255,255,255,0.5)' }}>forever</strong> — regardless of future releases.
            </p>
            <a
              href="#contact"
              onClick={e => {
                e.preventDefault()
                window.dispatchEvent(new CustomEvent('wc:tab', { detail: { tab: 'demo' } }))
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.78rem', fontWeight: 700, background: 'linear-gradient(135deg, #00C26F, #0EA5E9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textDecoration: 'none' }}
            >
              Lock $49 before launch →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
