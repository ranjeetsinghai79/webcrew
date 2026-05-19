'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, Zap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const PLANS = [
  {
    name: 'Starter',
    price: '$299',
    per: 'one-time',
    hosting: '$49/mo hosting',
    tag: 'For businesses with no website',
    badge: null,
    features: [
      'Luxury custom website',
      'Mobile-first design',
      'Contact form → your phone',
      'Google Maps SEO setup',
      '1 year free hosting included',
      '24-hour delivery',
      'Lifetime ownership',
    ],
    cta: 'Claim Starter Site',
    highlight: false,
  },
  {
    name: 'Premium',
    price: '$599',
    per: 'one-time',
    hosting: '$79/mo hosting',
    tag: 'For businesses with a bad website',
    badge: 'Most Popular',
    features: [
      'Everything in Starter',
      'Full site audit + rebuild',
      'Advanced GSAP animations',
      'Google Business integration',
      'Review showcase section',
      'Before/after comparison',
      'Priority 12-hour delivery',
    ],
    cta: 'Get Premium Upgrade',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    per: 'quote',
    hosting: 'Custom hosting plan',
    tag: 'Multi-location or franchise',
    badge: null,
    features: [
      'Everything in Premium',
      'Multi-location setup',
      'Custom integrations',
      'CRM + booking system',
      'Monthly SEO reports',
      'Dedicated account manager',
      'Priority support',
    ],
    cta: 'Contact Us',
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
        yPercent: 110, opacity: 0, stagger: 0.05, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      })
      gsap.from(cardsRef.current?.querySelectorAll('.pricing-card') ?? [], {
        y: 48, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' },
      })
    })
    return () => ctx.revert()
  }, [])

  const splitLine = (text: string) =>
    text.split(' ').map((w, i) => (
      <span key={i} className="word-wrap" style={{ display:'inline-block', marginRight:'0.25em' }}>
        <span className="word-inner">{w}</span>
      </span>
    ))

  return (
    <section id="pricing" ref={sectionRef} style={{ padding:'120px 32px', maxWidth:'1100px', margin:'0 auto' }}>
      <div style={{ textAlign:'center', marginBottom:'72px' }}>
        <div className="section-label" style={{ justifyContent:'center' }}>
          <span style={{ width:'20px', height:'1px', background:'var(--color-gold)' }} />
          Pricing
          <span style={{ width:'20px', height:'1px', background:'var(--color-gold)' }} />
        </div>
        <div ref={headingRef} style={{ overflow:'hidden' }}>
          <h2 style={{
            fontFamily:'var(--font-display)', fontWeight:800,
            fontSize:'clamp(2rem,5vw,3.5rem)', letterSpacing:'-0.025em', lineHeight:1.1,
          }}>
            {splitLine('One new customer')}&nbsp;
            <span className="gradient-gold">{splitLine('pays for it.')}</span>
          </h2>
        </div>
        <p style={{ color:'var(--color-muted)', fontSize:'1.05rem', maxWidth:'440px', margin:'16px auto 0', lineHeight:1.65 }}>
          No retainers. No surprises. Pay once, own it forever.
        </p>
      </div>

      <div
        ref={cardsRef}
        style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'24px', alignItems:'start' }}
      >
        {PLANS.map(p => (
          <div
            key={p.name}
            className="pricing-card"
            style={{
              background: p.highlight ? 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-2) 100%)' : 'var(--color-surface)',
              border: p.highlight ? '1px solid rgba(196,164,76,0.4)' : '1px solid var(--color-border)',
              borderRadius:'16px',
              padding:'32px',
              position:'relative',
              boxShadow: p.highlight ? '0 0 60px rgba(196,164,76,0.08)' : 'none',
            }}
          >
            {p.badge && (
              <div style={{
                position:'absolute', top:'-12px', left:'50%', transform:'translateX(-50%)',
                background:'linear-gradient(135deg, var(--color-gold), var(--color-gold-light))',
                color:'#08080F', fontWeight:700, fontSize:'0.7rem', letterSpacing:'0.1em',
                textTransform:'uppercase', padding:'4px 16px', borderRadius:'100px',
                display:'flex', alignItems:'center', gap:'4px',
              }}>
                <Zap size={10} /> {p.badge}
              </div>
            )}

            <div style={{ marginBottom:'8px' }}>
              <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1rem', color:'var(--color-muted)', letterSpacing:'0.05em' }}>
                {p.name}
              </span>
            </div>
            <div style={{ display:'flex', alignItems:'baseline', gap:'4px', marginBottom:'4px' }}>
              <span style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'2.8rem', color:'var(--color-text)' }}>
                {p.price}
              </span>
              <span style={{ color:'var(--color-muted)', fontSize:'0.85rem' }}>{p.per}</span>
            </div>
            <div style={{ color:'var(--color-gold)', fontSize:'0.82rem', fontWeight:600, marginBottom:'4px' }}>
              {p.hosting}
            </div>
            <div style={{ color:'var(--color-muted)', fontSize:'0.78rem', marginBottom:'28px', paddingBottom:'20px', borderBottom:'1px solid var(--color-border)' }}>
              {p.tag}
            </div>

            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'12px', marginBottom:'32px' }}>
              {p.features.map(f => (
                <li key={f} style={{ display:'flex', gap:'10px', alignItems:'flex-start', fontSize:'0.9rem', color:'var(--color-muted)' }}>
                  <Check size={15} color="var(--color-gold)" style={{ flexShrink:0, marginTop:'2px' }} />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={p.highlight ? 'btn-primary' : 'btn-ghost'}
              style={{ width:'100%', justifyContent:'center', textDecoration:'none' }}
            >
              {p.cta}
            </a>
          </div>
        ))}
      </div>

      <p style={{ textAlign:'center', color:'var(--color-muted)', fontSize:'0.82rem', marginTop:'32px' }}>
        All plans include SSL, mobile optimization, and contact form routing to your phone.
        Hosting renews monthly — cancel anytime.
      </p>
    </section>
  )
}
