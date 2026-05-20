'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger) }

// ── What You Get ─────────────────────────────────────────────────
const DELIVERABLES = [
  {
    n: '01',
    label: 'Cinematic Hero',
    desc: 'AI-generated video background. Scroll-scrubbed frame by frame. Feels like a Super Bowl ad for your business.',
  },
  {
    n: '02',
    label: 'Real Photos',
    desc: 'AI renders actual photos of your trade — roofing, HVAC units, cleaning crews. Not stock. Not generic.',
  },
  {
    n: '03',
    label: 'Mobile-First',
    desc: 'PageSpeed 95+ on mobile out of the box. Loads in under 2 seconds. Google rewards it.',
  },
  {
    n: '04',
    label: 'Leads To Your Phone',
    desc: 'Every contact form submission texts you instantly. Your phone rings before you check email.',
  },
  {
    n: '05',
    label: 'Local SEO Built In',
    desc: 'Schema markup, local signals, keyword-rich copy written for your city. Rank local on day one.',
  },
  {
    n: '06',
    label: 'You Own Everything',
    desc: 'No builder platform. No monthly lock-in. Full source code. Cancel hosting anytime. Yours forever.',
  },
]

// ── Comparison ───────────────────────────────────────────────────
const CMP_COLS = ['WebCrew', 'Freelancer', 'Wix / Square', 'Agency']
const CMP_ROWS = [
  { label: 'Time to live',     vals: ['24 hours',       '4–8 weeks',      '2+ weeks DIY',       '2–4 months'] },
  { label: 'Price',            vals: ['$299 one-time',  '$2k–$8k+',       '$0 + your time',     '$5k–$25k+'] },
  { label: 'Design quality',   vals: ['Luxury / unique','Varies wildly',  'Looks templated',    'High (if lucky)'] },
  { label: 'Week 1 leads',     vals: ['Common',         'Possible',       'Unlikely',           'Possible'] },
  { label: 'You own it',       vals: ['✓',              '✓',              '✗ (platform)',       'Depends'] },
  { label: 'Mobile PageSpeed', vals: ['95+',             'Varies',         '55–70',              'Varies'] },
  { label: 'Risk',             vals: ['$0 upfront',     'Full payment',   'Your time',          'Full upfront'] },
]

// ── Testimonials ──────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote: 'I was skeptical. They sent a demo link overnight. Week 1 I got 14 leads. I\'ve never had 14 leads in a month before.',
    name: 'CARLOS M.',
    role: 'HVAC · Tracy, CA',
    result: '+14 leads week 1',
  },
  {
    quote: 'Three days after going live I closed an $18,000 roofing job from Google. That never happened with my old site.',
    name: 'DEREK R.',
    role: 'Roofing · Fresno, CA',
    result: '$18k job · day 3',
  },
  {
    quote: 'Fully booked 3 weeks out. Had to hire two more cleaners. My old Wix site got maybe 2 calls a month.',
    name: 'PRIYA S.',
    role: 'Cleaning · Stockton, CA',
    result: 'Booked 3 weeks out',
  },
]

export default function Features() {
  const sectionRef  = useRef<HTMLElement>(null)
  const headingRef  = useRef<HTMLDivElement>(null)
  const gridRef     = useRef<HTMLDivElement>(null)
  const tableRef    = useRef<HTMLDivElement>(null)
  const testiRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Heading
      const words = headingRef.current?.querySelectorAll('.word-inner')
      if (words) {
        gsap.from(words, {
          yPercent: 115, opacity: 0, stagger: 0.04, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        })
      }

      // Deliverable cards
      gsap.from(gridRef.current?.querySelectorAll('.deliver-card') ?? [], {
        y: 40, opacity: 0, stagger: 0.08, duration: 0.65, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 82%' },
      })

      // Table
      gsap.from(tableRef.current, {
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: tableRef.current, start: 'top 82%' },
      })

      // Testimonials
      gsap.from(testiRef.current?.querySelectorAll('.testi-card') ?? [], {
        y: 40, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: testiRef.current, start: 'top 82%' },
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
      id="features"
      ref={sectionRef}
      style={{
        borderTop: '1px solid var(--color-border)',
        padding: 'clamp(64px,9vw,120px) clamp(24px,6vw,80px)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* ── Header ──────────────────────────────────────────── */}
        <div style={{ marginBottom: '52px' }}>
          <div className="section-label" style={{ marginBottom: '20px' }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--color-gold)' }} />
            What You Get
          </div>
          <div ref={headingRef} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(2rem,4.5vw,3.6rem)',
              letterSpacing: '-0.03em', lineHeight: 1.0,
            }}>
              <div style={{ overflow: 'hidden', paddingBottom: '0.05em' }}>
                {split('A site that works')}
              </div>
              <div style={{ overflow: 'hidden', paddingBottom: '0.05em' }}>
                <span className="gradient-gold">{split('while you work.')}</span>
              </div>
            </h2>
            <p style={{
              color: 'var(--color-muted)', fontSize: '0.95rem', lineHeight: 1.7,
              maxWidth: '280px', paddingBottom: '6px',
            }}>
              Every deliverable. Included. Done overnight.
            </p>
          </div>
        </div>

        {/* ── Deliverable cards ────────────────────────────────── */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1px',
            background: 'var(--color-border)',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '80px',
          }}
        >
          {DELIVERABLES.map((d) => (
            <div
              key={d.label}
              className="deliver-card"
              style={{
                background: 'var(--color-surface)',
                padding: '36px 32px',
                cursor: 'default',
                transition: 'background 0.25s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#14142200')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-surface)')}
            >
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '36px', height: '36px',
                border: '1px solid rgba(196,164,76,0.25)',
                borderRadius: '9px',
                background: 'rgba(196,164,76,0.06)',
                fontFamily: 'monospace', fontSize: '0.65rem', fontWeight: 700,
                color: 'var(--color-gold)', letterSpacing: '0.05em',
                marginBottom: '18px',
              }}>{d.n}</div>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: '1rem', letterSpacing: '-0.01em',
                marginBottom: '10px',
              }}>
                {d.label}
              </div>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.85rem', lineHeight: 1.7 }}>
                {d.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── Comparison ───────────────────────────────────────── */}
        <div ref={tableRef} style={{ marginBottom: '80px' }}>
          <div className="section-label" style={{ marginBottom: '20px' }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--color-gold)' }} />
            THE HONEST COMPARISON
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(1.6rem,3vw,2.4rem)',
            letterSpacing: '-0.03em',
            marginBottom: '32px',
          }}>
            Where we fit<span className="gradient-gold"> in the stack.</span>
          </h3>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '580px' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-muted)', fontWeight: 600, borderBottom: '1px solid var(--color-border)' }}>
                    Factor
                  </th>
                  {CMP_COLS.map((col, i) => (
                    <th key={col} style={{
                      padding: '12px 16px', fontSize: '0.75rem', fontWeight: 700,
                      letterSpacing: '0.05em', textTransform: 'uppercase',
                      color: i === 0 ? 'var(--color-gold)' : 'var(--color-muted)',
                      background: i === 0 ? 'rgba(196,164,76,0.04)' : 'transparent',
                      borderBottom: '1px solid var(--color-border)',
                      borderLeft: i === 0 ? '1px solid rgba(196,164,76,0.15)' : 'none',
                      borderRight: i === 0 ? '1px solid rgba(196,164,76,0.15)' : 'none',
                      textAlign: 'center',
                    }}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CMP_ROWS.map((row, ri) => (
                  <tr key={row.label} style={{ background: ri % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                    <td style={{ padding: '13px 16px', fontSize: '0.86rem', color: 'var(--color-text)', fontWeight: 500, borderBottom: '1px solid rgba(196,164,76,0.04)' }}>
                      {row.label}
                    </td>
                    {row.vals.map((val, vi) => (
                      <td key={vi} style={{
                        padding: '13px 16px', fontSize: '0.82rem', textAlign: 'center',
                        color: vi === 0 ? '#4ade80' : 'var(--color-muted)',
                        fontWeight: vi === 0 ? 600 : 400,
                        background: vi === 0 ? 'rgba(196,164,76,0.03)' : 'transparent',
                        borderLeft: vi === 0 ? '1px solid rgba(196,164,76,0.1)' : 'none',
                        borderRight: vi === 0 ? '1px solid rgba(196,164,76,0.1)' : 'none',
                        borderBottom: '1px solid rgba(196,164,76,0.04)',
                      }}>
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Testimonials ─────────────────────────────────────── */}
        <div>
          <div className="section-label" style={{ marginBottom: '20px' }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--color-gold)' }} />
            REAL RESULTS
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(1.6rem,3vw,2.4rem)',
            letterSpacing: '-0.03em',
            marginBottom: '36px',
          }}>
            Real owners.{' '}
            <span className="gradient-gold">Real revenue.</span>
          </h3>

          <div
            ref={testiRef}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}
          >
            {TESTIMONIALS.map(t => (
              <div
                key={t.name}
                className="testi-card"
                style={{
                  background: 'linear-gradient(160deg, #1a1a28, #10101c)',
                  border: '1px solid rgba(196,164,76,0.1)',
                  borderRadius: '16px',
                  padding: '28px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s, transform 0.3s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(196,164,76,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(196,164,76,0.1)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{
                  position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px',
                  background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
                }} />
                <div style={{ fontSize: '3.5rem', lineHeight: 1, color: 'rgba(196,164,76,0.12)', fontFamily: 'Georgia, serif', marginBottom: '6px' }}>"</div>
                <p style={{ color: 'var(--color-text)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '20px' }}>
                  {t.quote}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.08em' }}>{t.name}</div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--color-muted)', marginTop: '2px' }}>{t.role}</div>
                  </div>
                  <div style={{
                    fontSize: '0.7rem', fontWeight: 600, color: '#4ade80',
                    background: 'rgba(74,222,128,0.1)',
                    border: '1px solid rgba(74,222,128,0.2)',
                    borderRadius: '100px', padding: '4px 10px', whiteSpace: 'nowrap',
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
        @media (max-width: 768px) {
          .deliver-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
