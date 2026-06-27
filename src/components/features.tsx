'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, Smartphone, Search, Phone, Server, Shield, Star } from 'lucide-react'

if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger) }

const TABS = [
  {
    id: 'design',
    label: 'Stunning Design',
    icon: <Zap size={14} />,
    headline: 'Looks like a $20K agency built it.',
    sub: 'Custom hero images or video built from your actual brand. Animations that hold attention. A design so sharp, customers stop scrolling and call.',
    items: [
      'Hero image or video — built from your brand, not stock photos',
      'Your exact colors, fonts, and voice — never looks like a template',
      'Animations that make visitors stop, read, and take action',
      'Mobile menu, service cards, contact form — all pixel-perfect',
      'Every design is one-of-a-kind — no two sites look the same',
    ],
    metrics: ['Visual Quality', 'Brand Match', 'First Impression', 'Mobile Look'],
    preview: {
      label: 'Tracy HVAC Pros',
      score: 98,
      color: '#3b82f6',
    },
  },
  {
    id: 'mobile',
    label: 'Blazing Fast',
    icon: <Smartphone size={14} />,
    headline: 'Loads in 2 seconds. On any phone.',
    sub: 'Over 70% of local searches happen on phones. Your site loads instantly, looks perfect on every screen, and turns mobile visitors into phone calls — not bounces.',
    items: [
      'Loads in under 2 seconds — even on slow connections',
      'Fast in Miami, fast in LA, fast everywhere in the US',
      'Photos crisp and instant — never slows the page',
      'Smooth, flicker-free loading — nothing jumps or shifts',
      'Google rewards fast sites with higher rankings',
    ],
    metrics: ['Page Speed', 'Mobile Score', 'Load Time', 'Reliability'],
    preview: { label: 'PageSpeed 97', score: 97, color: '#4ade80' },
  },
  {
    id: 'seo',
    label: 'Ranks on Google',
    icon: <Search size={14} />,
    headline: 'Found on Google from day one.',
    sub: 'Most local businesses are invisible online. Your site launches ready for Google — indexed within 48 hours, ranking for your exact city and service, driving real calls.',
    items: [
      'Google knows what you do + where you are from day one',
      'Every page written for your city, your service, your customers',
      'Indexed by Google within 48 hours of launch',
      'Your Google Business Profile posts itself weekly — zero effort',
      'Pages for every neighborhood you serve — more calls, more jobs',
    ],
    metrics: ['Google Rank', 'Local Visibility', 'Map Pack', 'Monthly Calls'],
    preview: { label: 'Rank: Top 3', score: 95, color: '#0EA5E9' },
  },
  {
    id: 'leads',
    label: 'Instant Leads',
    icon: <Phone size={14} />,
    headline: 'New lead? Your phone buzzes in 30 seconds.',
    sub: 'A customer fills out your form at 9pm — you know about it at 9:01pm. Text + email, instantly. Every lead saved. Nothing ever slips through the cracks.',
    items: [
      'Form filled → your phone buzzes in under 30 seconds',
      'Every lead saved and tracked — nothing slips through',
      'Full lead details in your email — name, phone, message, all of it',
      'Smart reply suggestions so you close faster (coming soon)',
      'Dashboard for businesses with multiple locations',
    ],
    metrics: ['Lead Alerts', 'Response Time', 'Lead Tracking', 'Conversion'],
    preview: { label: '+14 leads wk 1', score: 92, color: '#4ade80' },
  },
  {
    id: 'hosting',
    label: 'You Own It',
    icon: <Server size={14} />,
    headline: 'Your site. Your asset. Forever.',
    sub: 'Not a Wix template. Not locked to a platform. Cancel hosting anytime — the website is yours to keep, move, or host anywhere. Pay for value, not hostage fees.',
    items: [
      'You own the site outright — no platform, no middleman',
      '99.9% uptime — your site is always on, always taking calls',
      'Fast everywhere in the world — not just your city',
      'Your own custom domain — we set it all up for you',
      'Cancel hosting anytime — the site is yours forever. Period.',
    ],
    metrics: ['Site Uptime', 'Global Speed', 'Ownership', 'Security'],
    preview: { label: '99.9% uptime', score: 99, color: '#00C26F' },
  },
]

const TESTIMONIALS = [
  {
    quote: 'I almost didn\'t fill out the form — figured it was a scam. They texted me a live link at 4am. Week 1: 14 new leads. I\'ve never had 14 leads in an entire month before.',
    name: 'Carlos M.',
    role: 'HVAC · Tracy, CA',
    result: '14 leads · week 1',
  },
  {
    quote: 'Three days after my site went live, I closed an $18,000 roofing job from a Google search. My old site hadn\'t generated a single job in 2 years.',
    name: 'Derek R.',
    role: 'Roofing · Fresno, CA',
    result: '$18k closed · day 3',
  },
  {
    quote: 'Fully booked 3 weeks out now. Had to hire two more cleaners to keep up. My Wix site was getting maybe 2 calls a month. This is a different world.',
    name: 'Priya S.',
    role: 'Cleaning · Stockton, CA',
    result: 'Booked solid · 3 wks',
  },
]

function MiniPreview({ tab }: { tab: typeof TABS[0] & { metrics?: string[] } }) {
  return (
    <div style={{
      background: '#0a0a14',
      borderRadius: 14,
      border: '1px solid rgba(0,0,0,0.1)',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
    }}>
      {/* Chrome */}
      <div style={{
        background: '#13131f', padding: '8px 12px',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ff5f57','#febc2e','#28c840'].map((c, i) => (
            <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: c, opacity: 0.7 }} />
          ))}
        </div>
        <div style={{
          flex: 1, background: 'rgba(255,255,255,0.05)',
          borderRadius: 4, padding: '3px 10px',
          fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace',
        }}>
          webcrew.app/preview
        </div>
      </div>
      {/* Content area */}
      <div style={{ padding: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: '#F2F1EA', marginBottom: 2 }}>
              {tab.preview.label}
            </div>
            <div style={{ fontSize: '0.62rem', color: 'var(--color-muted)' }}>{tab.id === 'mobile' || tab.id === 'hosting' ? 'Performance score' : 'Live results'}</div>
          </div>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: '2rem', color: tab.preview.color,
            letterSpacing: '-0.03em',
          }}>
            {tab.preview.score}
          </div>
        </div>
        {/* Fake bars */}
        {(tab.metrics ?? ['Speed', 'Mobile', 'SEO', 'Leads']).map((m, i) => (
          <div key={m} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <div style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.3)', width: 32, flexShrink: 0 }}>{m}</div>
            <div style={{
              flex: 1, height: 4, borderRadius: 2,
              background: 'rgba(255,255,255,0.05)', overflow: 'hidden',
            }}>
              <div style={{
                height: '100%', borderRadius: 2,
                width: `${[92, 88, 95, 97][i]}%`,
                background: `linear-gradient(90deg, ${tab.preview.color}99, ${tab.preview.color})`,
              }} />
            </div>
            <div style={{ fontSize: '0.58rem', color: tab.preview.color, width: 28, textAlign: 'right' }}>
              {[92, 88, 95, 97][i]}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Features() {
  const [active, setActive] = useState(0)
  const sectionRef  = useRef<HTMLElement>(null)
  const headingRef  = useRef<HTMLDivElement>(null)
  const contentRef  = useRef<HTMLDivElement>(null)
  const testiRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.querySelectorAll('.word-inner') ?? [], {
        yPercent: 115, opacity: 0, stagger: 0.04, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      })
      gsap.from(testiRef.current?.querySelectorAll('.testi-card') ?? [], {
        y: 40, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: testiRef.current, start: 'top 82%' },
      })

      // 3D tilt on testimonial cards
      testiRef.current?.querySelectorAll('.testi-card').forEach(card => {
        const el = card as HTMLElement
        const setRX = gsap.quickTo(el, 'rotationX', { duration: 0.4, ease: 'power2.out' })
        const setRY = gsap.quickTo(el, 'rotationY', { duration: 0.4, ease: 'power2.out' })
        gsap.set(el, { transformPerspective: 900, transformStyle: 'preserve-3d' })
        const onMove = (e: MouseEvent) => {
          const rect = el.getBoundingClientRect()
          const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
          const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
          setRY(dx * 7); setRX(-dy * 5)
        }
        const onLeave = () => { setRX(0); setRY(0) }
        el.addEventListener('mousemove', onMove)
        el.addEventListener('mouseleave', onLeave)
      })
    })
    return () => ctx.revert()
  }, [])

  // Animate tab content swap
  useEffect(() => {
    if (!contentRef.current) return
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
    )
  }, [active])

  const split = (text: string) =>
    text.split(' ').map((w, i) => (
      <span key={i} className="word-wrap" style={{ display: 'inline-block', marginRight: '0.22em' }}>
        <span className="word-inner">{w}</span>
      </span>
    ))

  const tab = TABS[active]

  return (
    <section
      id="features"
      ref={sectionRef}
      style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        padding: 'clamp(80px,10vw,130px) clamp(24px,6vw,80px)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 52 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>EVERYTHING INCLUDED</div>
          <div ref={headingRef} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(2rem,4.2vw,3.6rem)',
              letterSpacing: '-0.035em', lineHeight: 1.1,
            }}>
              <div style={{ overflow: 'hidden', paddingBottom: '0.12em' }}>
                {split('Everything Your Business Needs.')}
              </div>
              <div style={{ overflow: 'hidden', paddingBottom: '0.12em' }}>
                <span style={{
                  background: 'linear-gradient(135deg,#00C26F,#0EA5E9)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  {split('Already Included.')}
                </span>
              </div>
            </h2>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 280, paddingBottom: 6 }}>
              No add-ons. No upgrades. No setup fee. Every feature included from day one.
            </p>
          </div>

          {/* Grouped inclusion grid */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: '28px' }}>
            {[
              {
                group: 'Online Presence',
                color: '#00C26F',
                items: ['Website', 'Hosting', 'SSL', 'Analytics'],
              },
              {
                group: 'Visibility',
                color: '#0EA5E9',
                items: ['SEO', 'Local SEO', 'GBP Posts', 'Schema'],
              },
              {
                group: 'Growth',
                color: '#8B5CF6',
                items: ['Lead Alerts', 'Traffic Reports', 'Monthly Updates', 'Performance'],
              },
            ].map(g => (
              <div
                key={g.group}
                style={{
                  background: 'var(--color-surface)',
                  border: `1px solid ${g.color}22`,
                  borderRadius: 12,
                  padding: '14px 18px',
                  minWidth: 180,
                }}
              >
                <div style={{
                  fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.16em',
                  textTransform: 'uppercase', color: g.color, marginBottom: 10,
                }}>
                  {g.group}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {g.items.map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                      <span style={{ fontSize: '0.6rem', color: g.color }}>✓</span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--color-text)', fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pill tabs */}
        <div style={{
          display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40,
        }}>
          {TABS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '9px 18px',
                borderRadius: 100,
                border: i === active ? '1.5px solid rgba(0,194,110,0.4)' : '1px solid var(--color-border)',
                background: i === active ? 'rgba(0,194,110,0.06)' : 'transparent',
                color: i === active ? 'var(--color-blue)' : 'var(--color-muted)',
                fontSize: '0.8rem', fontWeight: i === active ? 600 : 500,
                fontFamily: 'var(--font-body)',
                cursor: 'pointer',
                transition: 'all 0.25s',
              }}
            >
              {t.icon}
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div
          ref={contentRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1fr) minmax(0,420px)',
            gap: 48,
            alignItems: 'center',
          }}
          className="feat-grid"
        >
          {/* Left: copy */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(1.5rem,2.5vw,2.2rem)',
              letterSpacing: '-0.03em', lineHeight: 1.1,
              marginBottom: 16,
            }}>
              {tab.headline}
            </h3>
            <p style={{
              color: 'var(--color-muted)', fontSize: '0.95rem',
              lineHeight: 1.8, marginBottom: 28, maxWidth: 480,
            }}>
              {tab.sub}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {tab.items.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <div style={{
                    width: 18, height: 18, borderRadius: 5,
                    background: 'rgba(74,222,128,0.1)',
                    border: '1px solid rgba(74,222,128,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: 2,
                  }}>
                    <span style={{ fontSize: '0.55rem', color: '#4ade80' }}>✓</span>
                  </div>
                  <span style={{ color: 'var(--color-muted)', fontSize: '0.88rem', lineHeight: 1.55 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: preview */}
          <div className="feat-preview">
            <MiniPreview tab={tab} />
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'var(--color-border)', margin: '80px 0 72px' }} />

        {/* Testimonials */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <div className="section-label">REAL RESULTS</div>
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(1.6rem,3vw,2.4rem)',
            letterSpacing: '-0.03em', marginBottom: 12,
          }}>
            They almost didn't try.{' '}
            <span style={{
              background: 'linear-gradient(135deg,#00C26F,#0EA5E9)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Now they can't keep up.
            </span>
          </h3>
          <p style={{ color: 'var(--color-muted)', fontSize: '0.92rem', lineHeight: 1.6, maxWidth: 480, marginBottom: 36 }}>
            Most clients see their first inquiry within 7 days. Some see it within hours.
          </p>

          <div
            ref={testiRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 20,
            }}
            className="testi-grid"
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="testi-card"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(0,0,0,0.07)',
                  borderRadius: 16, padding: 28,
                  position: 'relative', overflow: 'hidden',
                  cursor: 'default',
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: 'linear-gradient(90deg,transparent,rgba(0,0,0,0.1),transparent)' }} />
                <div style={{ display: 'flex', gap: 2, marginBottom: 12 }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" />)}
                </div>
                <p style={{ color: 'var(--color-text)', fontSize: '0.88rem', lineHeight: 1.75, marginBottom: 20 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem' }}>{t.name}</div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--color-muted)', marginTop: 2 }}>{t.role}</div>
                  </div>
                  <div style={{
                    fontSize: '0.68rem', fontWeight: 600, color: '#4ade80',
                    background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.2)',
                    borderRadius: 100, padding: '4px 10px', whiteSpace: 'nowrap',
                  }}>
                    ↑ {t.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .feat-grid { grid-template-columns: 1fr !important; }
          .feat-preview { display: none; }
          .testi-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .testi-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  )
}
