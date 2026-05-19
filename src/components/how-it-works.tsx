'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Search, Wand2, Send } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    n: '01',
    icon: Search,
    title: 'We Find You',
    body: 'Our AI scans Google Maps every morning finding local businesses without a great web presence. If you\'re on the list — we already know your name, phone, and what you do.',
    detail: 'No form to fill out. No consultation to book.',
  },
  {
    n: '02',
    icon: Wand2,
    title: 'We Build It',
    body: 'Overnight, our AI designs and deploys a luxury website tailored to your business. Real brand colors, real services, your phone number on every page.',
    detail: 'Built in 24 hours. Live on the internet.',
  },
  {
    n: '03',
    icon: Send,
    title: 'You See It First',
    body: 'We send you a text with a link to your live demo site. Browse it on your phone. If you love it — it\'s yours for $299. If not, we part ways, no charge.',
    detail: 'Pay only if you love it.',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const stepsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      const headWords = headingRef.current?.querySelectorAll('.word-inner')
      if (headWords) {
        gsap.from(headWords, {
          yPercent: 110, opacity: 0, stagger: 0.05, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        })
      }

      // Steps stagger
      const cards = stepsRef.current?.querySelectorAll('.step-card')
      if (cards) {
        gsap.from(cards, {
          y: 48, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: stepsRef.current, start: 'top 80%' },
        })
      }
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
    <section
      id="how-it-works"
      ref={sectionRef}
      style={{ padding:'120px 32px', maxWidth:'1100px', margin:'0 auto' }}
    >
      {/* Label + heading */}
      <div style={{ textAlign:'center', marginBottom:'72px' }}>
        <div className="section-label" style={{ justifyContent:'center' }}>
          <span style={{ width:'20px', height:'1px', background:'var(--color-gold)' }} />
          The Process
          <span style={{ width:'20px', height:'1px', background:'var(--color-gold)' }} />
        </div>
        <div ref={headingRef} style={{ overflow:'hidden' }}>
          <h2 style={{
            fontFamily:'var(--font-display)', fontWeight:800,
            fontSize:'clamp(2rem,5vw,3.5rem)', letterSpacing:'-0.025em', lineHeight:1.1,
          }}>
            {splitLine('Three steps.')}&nbsp;
            <span className="gradient-gold">{splitLine('Done.')}</span>
          </h2>
        </div>
        <p style={{ color:'var(--color-muted)', fontSize:'1.05rem', maxWidth:'480px', margin:'16px auto 0', lineHeight:1.65 }}>
          No meetings. No design briefs. No 6-week timelines.
        </p>
      </div>

      {/* Steps */}
      <div
        ref={stepsRef}
        style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'24px' }}
      >
        {STEPS.map(s => {
          const Icon = s.icon
          return (
            <div key={s.n} className="card step-card" style={{ position:'relative' }}>
              {/* Step number */}
              <span style={{
                position:'absolute', top:'24px', right:'24px',
                fontFamily:'var(--font-display)', fontWeight:800, fontSize:'3rem',
                color:'rgba(196,164,76,0.08)', lineHeight:1, userSelect:'none',
              }}>
                {s.n}
              </span>

              {/* Icon */}
              <div style={{
                width:'44px', height:'44px', borderRadius:'10px',
                background:'var(--color-gold-dim)', border:'1px solid var(--color-border)',
                display:'flex', alignItems:'center', justifyContent:'center',
                marginBottom:'20px',
              }}>
                <Icon size={20} color="var(--color-gold)" strokeWidth={1.5} />
              </div>

              <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.3rem', marginBottom:'12px' }}>
                {s.title}
              </h3>
              <p style={{ color:'var(--color-muted)', lineHeight:1.65, fontSize:'0.95rem', marginBottom:'16px' }}>
                {s.body}
              </p>
              <div style={{
                borderTop:'1px solid var(--color-border)',
                paddingTop:'16px',
                fontSize:'0.8rem', fontWeight:600,
                color:'var(--color-gold)',
                letterSpacing:'0.05em',
              }}>
                {s.detail}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
