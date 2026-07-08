'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Star, Phone, MessageSquare, BarChart2, Globe, Megaphone, Share2 } from 'lucide-react'

if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger) }

// ── AI Team Dashboard ─────────────────────────────────────────────────────────
const AGENTS = [
  { icon: Phone,         label: 'AI Reception',  status: 'AC repair booked · $450 job · 4m ago',   color: '#00C26F', dot: true  },
  { icon: Star,          label: 'Revenue Alert',  status: '$1,200 recovered · missed call returned', color: '#F59E0B', dot: true  },
  { icon: Globe,         label: 'GBP Post',       status: '"Summer AC tune-up $89 — book now"',     color: '#0EA5E9', dot: true  },
  { icon: MessageSquare, label: 'Review Reply',   status: 'Replied to 5★ · "Fast & professional"',  color: '#8B5CF6', dot: true  },
  { icon: BarChart2,     label: 'Weekly Report',  status: '9 jobs booked · $4,100 revenue this wk', color: '#00C26F', dot: false },
  { icon: Megaphone,     label: 'Ads Manager',    status: '3 HVAC campaigns live · 14 leads',       color: '#0EA5E9', dot: false },
  { icon: Share2,        label: 'Social Post',    status: '5 seasonal drafts ready · 1-click post', color: '#8B5CF6', dot: false },
]

function AITeamCard() {
  return (
    <div style={{
      background: '#FFFFFF',
      borderRadius: 16,
      border: '1.5px solid rgba(99,102,241,0.12)',
      overflow: 'hidden',
      boxShadow: '0 24px 64px rgba(37,99,235,0.08), 0 4px 12px rgba(0,0,0,0.05)',
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #00C26F 0%, #0EA5E9 100%)',
        padding: '14px 18px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 7,
            background: 'rgba(255,255,255,0.18)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: '0.7rem' }}>🤖</span>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', color: '#fff' }}>
              AI Business Manager
            </div>
            <div style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.7)', marginTop: 1 }}>
              Jake&apos;s HVAC · Dallas, TX
            </div>
          </div>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 5,
          background: 'rgba(0,0,0,0.15)', borderRadius: 100, padding: '3px 9px',
        }}>
          <span className="live-dot" />
          <span style={{ fontSize: '0.56rem', fontWeight: 700, color: '#fff', letterSpacing: '0.08em' }}>7 ACTIVE</span>
        </div>
      </div>

      <div style={{ padding: '4px 0' }}>
        {AGENTS.map((agent, i) => {
          const Icon = agent.icon
          return (
            <div key={agent.label} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '9px 16px',
              borderBottom: i < AGENTS.length - 1 ? '1px solid rgba(99,102,241,0.05)' : 'none',
            }}>
              <div style={{
                width: 26, height: 26, borderRadius: 6, flexShrink: 0,
                background: `${agent.color}12`, border: `1.5px solid ${agent.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon size={11} color={agent.color} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '0.69rem', fontWeight: 700, color: '#0A0A0A', fontFamily: 'var(--font-display)' }}>
                  {agent.label}
                </div>
                <div style={{ fontSize: '0.56rem', color: '#6B7280', marginTop: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {agent.status}
                </div>
              </div>
              <div style={{
                width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
                background: agent.dot ? agent.color : '#E5E7EB',
                boxShadow: agent.dot ? `0 0 6px ${agent.color}99` : 'none',
              }} />
            </div>
          )
        })}
      </div>

      <div style={{
        padding: '10px 16px',
        background: 'linear-gradient(135deg, rgba(0,194,110,0.04), rgba(14,165,233,0.03))',
        borderTop: '1px solid rgba(0,194,110,0.08)',
      }}>
        <div style={{ fontSize: '0.58rem', color: '#6B7280' }}>
          This week: <strong style={{ color: '#00C26F' }}>9 jobs booked · $4,100 recovered · 0 missed calls</strong>
        </div>
      </div>
    </div>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function Hero() {
  const outerRef  = useRef<HTMLDivElement>(null)
  const innerRef  = useRef<HTMLDivElement>(null)
  const bgRef     = useRef<HTMLDivElement>(null)
  const cardRef   = useRef<HTMLDivElement>(null)
  const ctaRef    = useRef<HTMLDivElement>(null)
  const b1Ref     = useRef<HTMLDivElement>(null)
  const b2Ref     = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)

  // 3D tilt
  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    gsap.set(card, { transformPerspective: 1400 })
    const sx = gsap.quickTo(card, 'rotationX', { duration: 0.55, ease: 'power2.out' })
    const sy = gsap.quickTo(card, 'rotationY', { duration: 0.55, ease: 'power2.out' })
    const onMove = (e: MouseEvent) => {
      const r = card.getBoundingClientRect()
      sx(((e.clientY - r.top  - r.height / 2) / (r.height / 2)) * -5)
      sy(((e.clientX - r.left - r.width  / 2) / (r.width  / 2)) *  5)
    }
    const onLeave = () => { sx(0); sy(0) }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  // Entrance + scroll animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial hidden states for elements that reveal on scroll
      gsap.set([b1Ref.current, b2Ref.current, ctaRef.current], { opacity: 0 })
      gsap.set(b1Ref.current, { x: -28 })
      gsap.set(b2Ref.current, { x:  28 })
      gsap.set(ctaRef.current, { y: 48 })

      // Entrance animation (fires once, for initial page load feel)
      const entrance = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 1.5 })
      entrance.from(bgRef.current,  { opacity: 0, y: 24, duration: 0.7 })
              .from(cardRef.current, { opacity: 0, scale: 0.94, duration: 0.75 }, '-=0.4')

      // Scroll-driven cinematic animation (CSS sticky + GSAP scrub)
      const co = { val: 0 }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: outerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
        },
      })

      // 0–12%: counter ticks up
      tl.to(co, {
        val: 247, duration: 0.12, ease: 'none',
        onUpdate: () => {
          if (counterRef.current) counterRef.current.textContent = Math.round(co.val).toString()
        },
      }, 0)

      // 18–70%: card expands edge-to-edge
      tl.to(cardRef.current, {
        top: '0%', right: '0%', bottom: '0%', left: '0%',
        borderRadius: 0,
        boxShadow: 'none',
        duration: 0.52,
        ease: 'power2.inOut',
      }, 0.18)

      // 32–58%: background text fades out
      tl.to(bgRef.current, {
        opacity: 0,
        y: -24,
        duration: 0.26,
        ease: 'power2.in',
      }, 0.32)

      // 68–78%: badge 1
      tl.to(b1Ref.current, { opacity: 1, x: 0, duration: 0.10, ease: 'power2.out' }, 0.68)

      // 72–82%: badge 2
      tl.to(b2Ref.current, { opacity: 1, x: 0, duration: 0.10, ease: 'power2.out' }, 0.72)

      // 84–100%: CTA overlay
      tl.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.14, ease: 'power3.out' }, 0.84)
    }, outerRef)

    return () => ctx.revert()
  }, [])

  return (
    /* Outer div provides scroll distance for CSS sticky */
    <div ref={outerRef} className="cinematic-outer" style={{ height: '5800px' }}>
      {/* Sticky viewport — stays fixed while outer scrolls */}
      <div ref={innerRef} className="cinematic-inner" style={{
        position: 'sticky', top: 0, height: '100vh',
        background: 'linear-gradient(160deg, #04040E 0%, #080820 55%, #0D0B28 100%)',
        overflow: 'hidden',
      }}>
        <div className="noise-overlay" />

        {/* Grid */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(0,194,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,194,110,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 5%, transparent 72%)',
        }} />

        {/* Aurora blobs */}
        <div className="aurora-blob" style={{ width: 620, height: 620, background: 'rgba(0,194,110,0.11)', top: '-10%', left: '-6%', animation: 'aurora-drift 16s ease-in-out infinite' }} />
        <div className="aurora-blob" style={{ width: 500, height: 500, background: 'rgba(14,165,233,0.08)', bottom: '-2%', right: '-4%', animation: 'aurora-drift 20s ease-in-out infinite reverse' }} />
        <div className="aurora-blob" style={{ width: 260, height: 260, background: 'rgba(139,92,246,0.07)', top: '42%', left: '40%', animation: 'aurora-drift 24s ease-in-out infinite' }} />

        {/* ── Background text layer (fades out during card expansion) ── */}
        <div ref={bgRef} style={{
          position: 'absolute', inset: 0, zIndex: 1,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none', textAlign: 'center',
          padding: '0 clamp(24px, 8vw, 120px)',
        }}>
          <div style={{
            fontSize: '0.65rem', letterSpacing: '0.24em', textTransform: 'uppercase',
            fontWeight: 700, color: '#00C26F', marginBottom: 28, fontFamily: 'var(--font-display)',
          }}>
            ◆ AI FRONT OFFICE
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(2.6rem, 6.5vw, 6.5rem)',
            letterSpacing: '-0.05em', lineHeight: 0.92,
            color: '#FFFFFF', marginBottom: 28,
          }}>
            Missed Calls =<br />
            <span style={{
              background: 'linear-gradient(135deg, #00C26F 0%, #0EA5E9 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Lost Revenue.</span><br />
            We Fix That.
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span ref={counterRef} style={{
              fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 900,
              color: '#fff', fontFamily: 'var(--font-display)', letterSpacing: '-0.04em',
            }}>0</span>
            <span style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1.05rem)', color: 'rgba(255,255,255,0.4)', maxWidth: 180, lineHeight: 1.4 }}>
              businesses running on autopilot
            </span>
          </div>
        </div>

        {/* ── Expanding browser-mockup card ── */}
        <div ref={cardRef} className="cinematic-card" style={{
          position: 'absolute',
          top: '17%', right: '10%', bottom: '17%', left: '10%',
          borderRadius: 20,
          background: '#0D1A2D',
          border: '1.5px solid rgba(0,194,110,0.22)',
          boxShadow: '0 40px 120px rgba(0,0,0,0.65), 0 0 80px rgba(0,194,110,0.06)',
          zIndex: 10,
          overflow: 'hidden',
          willChange: 'top, right, bottom, left, border-radius',
          display: 'flex', flexDirection: 'column',
        }}>
          {/* Browser chrome */}
          <div style={{
            height: 44, background: '#0A1420', flexShrink: 0,
            borderBottom: '1px solid rgba(0,194,110,0.1)',
            display: 'flex', alignItems: 'center', padding: '0 16px', gap: 10,
          }}>
            <div style={{ display: 'flex', gap: 6 }}>
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF5F57', display: 'inline-block' }} />
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FFBD2E', display: 'inline-block' }} />
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28C840', display: 'inline-block' }} />
            </div>
            <div style={{
              flex: 1, height: 26,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 6, display: 'flex', alignItems: 'center', paddingLeft: 12, gap: 7,
            }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#28C840', flexShrink: 0 }} />
              <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-body)' }}>
                webcrew.app / dashboard
              </span>
            </div>
          </div>

          {/* Browser content — light dashboard */}
          <div style={{
            flex: 1, background: '#F0F4F8',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 'clamp(16px, 3vw, 32px)',
            overflow: 'auto',
          }}>
            <div style={{ width: '100%', maxWidth: 660 }}>
              <AITeamCard />
            </div>
          </div>

          {/* Floating badge 1 — "Site live overnight" */}
          <div ref={b1Ref} style={{
            position: 'absolute', top: 56, left: 18, zIndex: 30,
            background: 'rgba(4,4,14,0.78)', backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 10, padding: '9px 14px',
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.73rem', color: '#fff',
            whiteSpace: 'nowrap', lineHeight: 1,
          }}>⚡ Site live overnight</div>

          {/* Floating badge 2 — stat pill */}
          <div ref={b2Ref} style={{
            position: 'absolute', top: 56, right: 18, zIndex: 30,
            background: 'linear-gradient(135deg, #00C26F, #0EA5E9)',
            borderRadius: 10, padding: '9px 14px',
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.73rem', color: '#fff',
            whiteSpace: 'nowrap', lineHeight: 1,
            boxShadow: '0 8px 24px rgba(0,194,110,0.4)',
          }}>9 jobs booked · this week 📈</div>

          {/* CTA overlay — reveals at end of scroll sequence */}
          <div ref={ctaRef} style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 30,
            background: 'linear-gradient(to top, rgba(4,4,14,0.97) 0%, rgba(4,4,14,0.82) 55%, transparent 100%)',
            padding: 'clamp(48px, 6vw, 72px) clamp(20px, 5vw, 48px) clamp(28px, 4vw, 44px)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20,
            pointerEvents: 'auto',
          }}>
            <p style={{
              color: 'rgba(255,255,255,0.7)', margin: 0, textAlign: 'center',
              fontSize: 'clamp(0.9rem, 1.6vw, 1.1rem)', lineHeight: 1.6,
            }}>
              Stop losing jobs.{' '}
              <span style={{ color: '#fff', fontWeight: 700 }}>Get started free tonight.</span>
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              <a
                href="#contact"
                onClick={e => {
                  e.preventDefault()
                  window.dispatchEvent(new CustomEvent('wc:tab', { detail: { tab: 'demo' } }))
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary"
                style={{ fontSize: 'clamp(0.85rem, 1.3vw, 0.95rem)', padding: '14px 26px' }}
              >
                Stop Losing Jobs — Get Started Free <ArrowRight size={15} />
              </a>
              <a
                href="#pricing"
                onClick={e => {
                  e.preventDefault()
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-ghost"
                style={{
                  fontSize: 'clamp(0.85rem, 1.3vw, 0.95rem)',
                  color: 'rgba(255,255,255,0.82)',
                  borderColor: 'rgba(255,255,255,0.18)',
                }}
              >
                See Pricing →
              </a>
            </div>

            {/* Trust row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" />)}
                <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', marginLeft: 2 }}>
                  <span style={{ color: '#fff', fontWeight: 600 }}>4.9</span> · 47 reviews
                </span>
              </div>
              <div style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.1)' }} />
              <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>
                <span style={{ color: '#00C26F', fontWeight: 600 }}>Starts at $49/mo</span> — cancel anytime
              </span>
              <div style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.1)' }} />
              <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>
                <span style={{ color: '#fff', fontWeight: 600 }}>$0</span> setup fee. Ever.
              </span>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute', bottom: 24, left: '50%',
          transform: 'translateX(-50%)', zIndex: 5,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          pointerEvents: 'none',
        }}>
          <div style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, rgba(255,255,255,0.28), transparent)' }} />
        </div>
      </div>
    </div>
  )
}
