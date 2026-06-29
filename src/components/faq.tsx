'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Plus, Minus } from 'lucide-react'

if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger) }

const FAQS = [
  {
    q: 'Is this actually free? What\'s the catch?',
    a: 'Yes, completely free to start. Here\'s exactly how it works: we build your demo at no cost. If you see it live and love it, subscribe for $49/month — that covers hosting, SEO, GBP posts, review replies, lead alerts, and everything else. Your website is yours. If you don\'t love it — for any reason — you pay nothing and we part ways. No card on file. No surprise charges. No follow-up sales calls. We only make money when clients love what we built.',
  },
  {
    q: 'Is this just a template with my name swapped in?',
    a: 'No. Every site is built from scratch for your specific trade and city. A plumber in Dallas gets a completely different site than a plumber in Chicago. Two HVAC companies in the same city get different designs, different copy, and different images. Nothing is copy-pasted.',
  },
  {
    q: 'How long does it actually take?',
    a: 'We begin building within minutes of your form submission. Most sites are live and texted to you within 6 hours. Complex niches can take up to 12 hours. Nobody has ever waited more than 24 hours. You\'ll get a text and email with your live link — usually before breakfast.',
  },
  {
    q: 'What if I already have a website?',
    a: 'Use the "Upgrade My Site" tab in the form. We build a complete redesign as a free demo while your current site stays live — zero risk, zero downtime. You compare the two. If ours is better, you switch. If not, you keep yours. Most clients who use this path switch.',
  },
  {
    q: 'What if I hate it?',
    a: 'Then you don\'t pay. We delete the demo. No hard feelings, no invoices, no follow-up guilt trips. Simple as that. We only make money when you love what we built — so we\'re extremely motivated to get it right.',
  },
  {
    q: 'Will this actually rank on Google?',
    a: 'Every site launches optimized for your exact city and trade — schema markup, city-specific keyword copy, and proper indexing signals. Your Google Business Profile automatically stays active with fresh posts. Most clients see their first Google-sourced call within 7 days of going live.',
  },
  {
    q: 'What does the $49/month actually include?',
    a: 'Everything your site needs to stay ranked and converting: Cloudflare CDN hosting (99.9% uptime), weekly Google Business Profile posts, reply management for every Google review, monthly SEO + traffic report, and instant SMS alerts for every new lead. That same stack from a traditional agency runs $460+/month.',
  },
  {
    q: 'Do I own the site if I pay?',
    a: 'Completely. You get the full Next.js source code. You can host it anywhere — Vercel, Netlify, your own server, or stay on Cloudflare Pages. Cancel the $49/mo plan anytime and keep the code. No lock-in. No platform dependency. It\'s your asset, not ours.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const listRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.querySelectorAll('.word-inner') ?? [], {
        yPercent: 115, opacity: 0, stagger: 0.04, duration: 0.75, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      })
      gsap.from(listRef.current?.querySelectorAll('.faq-item') ?? [], {
        y: 32, opacity: 0, stagger: 0.07, duration: 0.65, ease: 'power3.out',
        scrollTrigger: { trigger: listRef.current, start: 'top 82%' },
      })
    })
    return () => ctx.revert()
  }, [])

  const split = (text: string, gradient?: boolean) =>
    text.split(' ').map((w, i) => (
      <span key={i} className="word-wrap" style={{ display: 'inline-block', marginRight: '0.22em' }}>
        <span
          className="word-inner"
          style={gradient ? {
            display: 'inline-block',
            background: 'linear-gradient(135deg, #00C26F 0%, #0EA5E9 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          } : undefined}
        >{w}{' '}</span>
      </span>
    ))

  const toggle = (i: number) => setOpen(prev => prev === i ? null : i)

  return (
    <section
      id="faq"
      ref={sectionRef}
      style={{
        padding: 'clamp(80px,10vw,130px) clamp(24px,6vw,80px)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 60, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 16 }}>
          <div className="section-label">FAQ</div>
          <div ref={headingRef}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(2rem,4.5vw,3.6rem)',
              letterSpacing: '-0.035em', lineHeight: 1.1,
            }}>
              <div style={{ overflow: 'hidden', paddingBottom: '0.12em' }}>
                {split('Everything you\'re')}
              </div>
              <div style={{ overflow: 'hidden', paddingBottom: '0.12em' }}>
                {split('skeptical about.', true)}
                {' '}
                <span className="word-wrap" style={{ display: 'inline-block' }}>
                  <span className="word-inner">Answered.</span>
                </span>
              </div>
            </h2>
          </div>
          <p style={{ color: 'var(--color-muted)', fontSize: '1rem', lineHeight: 1.7, maxWidth: 440 }}>
            If you&apos;re thinking it, someone else has already asked it. Here&apos;s the unfiltered truth.
          </p>
        </div>

        {/* FAQ list */}
        <div ref={listRef} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className="faq-item"
                style={{
                  borderTop: i === 0 ? '1px solid var(--color-border)' : 'none',
                  borderBottom: '1px solid var(--color-border)',
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width: '100%', textAlign: 'left',
                    display: 'flex', alignItems: 'center', gap: 16,
                    justifyContent: 'space-between',
                    padding: '22px 0',
                    background: 'transparent', border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 'clamp(0.95rem,1.5vw,1.05rem)',
                    color: isOpen ? 'var(--color-blue)' : 'var(--color-text)',
                    transition: 'color 0.2s',
                  }}
                >
                  <span style={{ flex: 1, lineHeight: 1.35 }}>{faq.q}</span>
                  <span style={{
                    flexShrink: 0,
                    width: 28, height: 28,
                    borderRadius: 8,
                    background: isOpen ? 'rgba(0,194,110,0.08)' : 'var(--color-surface)',
                    border: `1px solid ${isOpen ? 'rgba(0,194,110,0.25)' : 'var(--color-border)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.2s',
                    color: isOpen ? 'var(--color-blue)' : 'var(--color-muted)',
                  }}>
                    {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                  </span>
                </button>

                <div style={{
                  overflow: 'hidden',
                  maxHeight: isOpen ? '400px' : '0px',
                  transition: 'max-height 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}>
                  <p style={{
                    color: 'var(--color-muted)',
                    fontSize: '0.93rem',
                    lineHeight: 1.78,
                    paddingBottom: 22,
                    maxWidth: 720,
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA nudge */}
        <div style={{
          marginTop: 56,
          padding: '28px 32px',
          background: 'linear-gradient(135deg, rgba(0,194,110,0.05) 0%, rgba(14,165,233,0.04) 100%)',
          border: '1px solid rgba(0,194,110,0.15)',
          borderRadius: 16,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 20, flexWrap: 'wrap',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '1.1rem', color: 'var(--color-text)',
              marginBottom: 4,
            }}>
              Still have a question?
            </div>
            <div style={{ color: 'var(--color-muted)', fontSize: '0.88rem' }}>
              Text or email us directly — we reply within 2 hours.
            </div>
          </div>
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary"
            style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
          >
            Get My Free Site
          </a>
        </div>

      </div>
    </section>
  )
}
