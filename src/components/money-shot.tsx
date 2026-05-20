'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger) }

export default function MoneyShot() {
  const sectionRef = useRef<HTMLElement>(null)
  const line1Ref   = useRef<HTMLDivElement>(null)
  const line2Ref   = useRef<HTMLDivElement>(null)
  const ctaRef     = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        defaults: { ease: 'power3.out' },
      })

      tl.from(line1Ref.current?.querySelectorAll('.word-inner') ?? [], {
        yPercent: 115, opacity: 0, stagger: 0.04, duration: 0.8,
      })
      .from(line2Ref.current?.querySelectorAll('.word-inner') ?? [], {
        yPercent: 115, opacity: 0, stagger: 0.04, duration: 0.8,
      }, '-=0.5')
      .from(ctaRef.current, { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')

      // Subtle parallax on the glow
      gsap.to('.ms-glow', {
        scale: 1.3, ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 },
      })
    })
    return () => ctx.revert()
  }, [])

  const split = (text: string, gold?: boolean) =>
    text.split(' ').map((w, i) => (
      <span key={i} className="word-wrap" style={{ display: 'inline-block', marginRight: '0.22em' }}>
        <span className={`word-inner${gold ? ' gradient-gold' : ''}`}>{w}</span>
      </span>
    ))

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        textAlign: 'center',
        padding: 'clamp(80px,11vw,130px) 32px',
        borderTop: '1px solid var(--color-border)',
        overflow: 'hidden',
      }}
    >
      {/* Glow */}
      <div className="ms-glow" style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '300px',
        background: 'radial-gradient(ellipse at center, rgba(196,164,76,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        borderRadius: '50%',
      }} />

      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(196,164,76,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(196,164,76,0.018) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div ref={line1Ref} style={{ overflow: 'hidden', paddingBottom: '0.04em' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(3.5rem,8vw,7.5rem)',
            letterSpacing: '-0.045em', lineHeight: 0.95,
            display: 'inline',
          }}>
            {split('Your site.')}
          </h2>
        </div>
        <div ref={line2Ref} style={{ overflow: 'hidden', paddingBottom: '0.06em' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(3.5rem,8vw,7.5rem)',
            letterSpacing: '-0.045em', lineHeight: 0.95,
            display: 'inline',
          }}>
            {split('Live. Tomorrow.', true)}
          </h2>
        </div>

        <p style={{
          color: 'var(--color-muted)', fontSize: 'clamp(0.9rem,1.5vw,1.1rem)',
          maxWidth: '400px', margin: '28px auto 0', lineHeight: 1.65,
        }}>
          No meetings. No waiting. No excuses.
        </p>

        <div ref={ctaRef} style={{ marginTop: '40px' }}>
          <a href="#contact" className="btn-primary" style={{ fontSize: '1rem', padding: '17px 40px' }}>
            Get My Free Demo <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
