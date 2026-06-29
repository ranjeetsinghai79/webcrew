'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, Minus, ArrowRight } from 'lucide-react'

if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger) }

const ROWS = [
  { feature: 'Time to launch',             diy: '6–12 weeks',       agency: '2–4 months',        webcrew: 'Overnight' },
  { feature: 'Upfront cost',               diy: '$2,000+',           agency: '$8,000–$20,000',    webcrew: '$0 to start' },
  { feature: 'Site ownership',             diy: 'Template/sub lock', agency: 'Agency owns it',    webcrew: 'Yes — included' },
  { feature: 'Monthly cost',               diy: '$25–$50/mo sub',   agency: '$300–$1,000+/mo',   webcrew: '$49/mo' },
  { feature: 'Local SEO',                  diy: false,               agency: 'Extra fee',         webcrew: true },
  { feature: 'Google Business Profile',    diy: false,               agency: 'Extra fee',         webcrew: true },
  { feature: 'Review management',          diy: false,               agency: 'Extra fee',         webcrew: true },
  { feature: 'Monthly traffic report',     diy: false,               agency: 'Extra fee',         webcrew: true },
  { feature: 'Instant lead SMS alerts',    diy: false,               agency: false,               webcrew: true },
  { feature: 'Pay only if you love it',    diy: false,               agency: false,               webcrew: true },
]

function Cell({ value, highlight }: { value: string | boolean; highlight?: boolean }) {
  if (value === true) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{
          width: 24, height: 24, borderRadius: 6, flexShrink: 0,
          background: highlight ? 'rgba(0,194,110,0.12)' : 'rgba(74,222,128,0.1)',
          border: highlight ? '1.5px solid rgba(0,194,110,0.3)' : '1px solid rgba(74,222,128,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Check size={13} color={highlight ? '#00C26F' : '#4ade80'} strokeWidth={2.5} />
        </div>
      </div>
    )
  }
  if (value === false) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Minus size={15} color="rgba(0,0,0,0.2)" />
      </div>
    )
  }
  return (
    <div style={{
      fontSize: '0.82rem',
      color: highlight ? 'var(--color-blue)' : 'var(--color-muted)',
      fontWeight: highlight ? 700 : 500,
      textAlign: 'center',
      lineHeight: 1.35,
    }}>
      {value}
    </div>
  )
}

export default function Comparison() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const tableRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.querySelectorAll('.word-inner') ?? [], {
        yPercent: 115, opacity: 0, stagger: 0.04, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      })
      gsap.from(tableRef.current, {
        y: 40, opacity: 0, duration: 0.75, ease: 'power3.out',
        scrollTrigger: { trigger: tableRef.current, start: 'top 82%' },
      })
    })
    return () => ctx.revert()
  }, [])

  const split = (text: string) =>
    text.split(' ').map((w, i) => (
      <span key={i} className="word-wrap" style={{ display: 'inline-block', marginRight: '0.22em' }}>
        <span className="word-inner">{w}{' '}</span>
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
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 52 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>WHY WEBCREW</div>
          <div ref={headingRef}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(2rem,4.2vw,3.2rem)',
              letterSpacing: '-0.035em', lineHeight: 1.12,
              marginBottom: 16,
            }}>
              <div style={{ overflow: 'hidden', paddingBottom: '0.12em' }}>
                {split('DIY. Agency. WebCrew.')}
              </div>
              <div style={{ overflow: 'hidden', paddingBottom: '0.12em' }}>
                <span style={{
                  background: 'linear-gradient(135deg,#00C26F,#0EA5E9)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  {split('You decide.')}
                </span>
              </div>
            </h2>
            <p style={{ color: 'var(--color-muted)', fontSize: '1rem', lineHeight: 1.7, maxWidth: 480 }}>
              Most website options make you choose between fast, affordable, or actually working. WebCrew is built so you don&apos;t have to.
            </p>
          </div>
        </div>

        {/* Table */}
        <div ref={tableRef} style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%', borderCollapse: 'separate', borderSpacing: 0,
            fontSize: '0.88rem',
          }}>
            <thead>
              <tr>
                <th style={{
                  padding: '14px 20px', textAlign: 'left',
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '0.78rem', color: 'var(--color-muted)',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  borderBottom: '2px solid var(--color-border)',
                  width: '30%',
                }}>
                  Feature
                </th>
                {['DIY / Wix', 'Agency', 'WebCrew'].map((col, i) => (
                  <th key={col} style={{
                    padding: '14px 20px', textAlign: 'center',
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: i === 2 ? '0.9rem' : '0.78rem',
                    color: i === 2 ? 'var(--color-blue)' : 'var(--color-muted)',
                    letterSpacing: i === 2 ? '-0.01em' : '0.08em',
                    textTransform: i === 2 ? 'none' : 'uppercase',
                    borderBottom: '2px solid var(--color-border)',
                    background: i === 2 ? 'rgba(0,194,110,0.03)' : 'transparent',
                    borderRadius: i === 2 ? '12px 12px 0 0' : 0,
                  }}>
                    {i === 2 && (
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        background: 'linear-gradient(135deg,#00C26F,#0EA5E9)',
                        color: '#fff', fontSize: '0.6rem', fontWeight: 800,
                        letterSpacing: '0.1em', textTransform: 'uppercase',
                        padding: '3px 10px', borderRadius: 100, marginBottom: 6,
                      }}>
                        ✦ Recommended
                      </div>
                    )}
                    <div>{col}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, rowIdx) => (
                <tr key={row.feature} style={{
                  background: rowIdx % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.015)',
                }}>
                  <td style={{
                    padding: '14px 20px',
                    color: 'var(--color-text)',
                    fontWeight: 600,
                    fontSize: '0.86rem',
                    borderBottom: rowIdx < ROWS.length - 1 ? '1px solid var(--color-border)' : 'none',
                  }}>
                    {row.feature}
                  </td>
                  {([
                    { val: row.diy,     hl: false },
                    { val: row.agency,  hl: false },
                    { val: row.webcrew, hl: true  },
                  ] as { val: string | boolean; hl: boolean }[]).map(({ val, hl }, ci) => (
                    <td key={ci} style={{
                      padding: '14px 20px',
                      borderBottom: rowIdx < ROWS.length - 1 ? '1px solid var(--color-border)' : 'none',
                      background: hl ? 'rgba(0,194,110,0.03)' : 'transparent',
                    }}>
                      <Cell value={val} highlight={hl} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <a
            href="#contact"
            className="btn-primary"
            style={{ display: 'inline-flex', fontSize: '0.95rem', padding: '15px 32px' }}
          >
            Start Free — No Card Needed <ArrowRight size={16} />
          </a>
          <p style={{ marginTop: 14, fontSize: '0.78rem', color: 'var(--color-muted)' }}>
            See your site live before you pay a single dollar.
          </p>
        </div>


      </div>
    </section>
  )
}
