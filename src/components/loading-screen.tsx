'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function LoadingScreen() {
  const screenRef  = useRef<HTMLDivElement>(null)
  const logoRef    = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)
  const barRef     = useRef<HTMLDivElement>(null)
  const barFillRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(screenRef.current, {
            yPercent: -100,
            duration: 0.75,
            ease: 'power4.inOut',
            onComplete: () => {
              if (screenRef.current) screenRef.current.style.display = 'none'
              document.body.style.overflow = ''
            },
          })
        },
      })

      document.body.style.overflow = 'hidden'

      tl.from(logoRef.current, { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' })
        .from(taglineRef.current, { opacity: 0, y: 12, duration: 0.5, ease: 'power3.out' }, '-=0.2')
        .from(barRef.current, { opacity: 0, duration: 0.3 }, '-=0.1')
        .to(barFillRef.current, { width: '100%', duration: 1.0, ease: 'power2.inOut' })
        .to({}, { duration: 0.15 })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div ref={screenRef} id="loading-screen">
      {/* Aurora blobs */}
      <div
        className="aurora-blob"
        style={{
          width: '500px', height: '500px',
          background: 'var(--color-blob-1)',
          top: '10%', left: '20%',
          animation: 'aurora-drift 8s ease-in-out infinite',
        }}
      />
      <div
        className="aurora-blob"
        style={{
          width: '400px', height: '400px',
          background: 'var(--color-blob-2)',
          bottom: '15%', right: '15%',
          animation: 'aurora-drift 10s ease-in-out infinite reverse',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div ref={logoRef} style={{ marginBottom: '20px' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2.5rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}
            className="gradient-gold"
          >
            WebCrew
          </span>
        </div>
        <div
          ref={taglineRef}
          style={{
            color: 'var(--color-muted)',
            fontSize: '0.8rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: '40px',
          }}
        >
          Luxury websites. Overnight.
        </div>
        <div ref={barRef} style={{ width: '200px', height: '1px', background: 'var(--color-border)', margin: '0 auto' }}>
          <div
            ref={barFillRef}
            style={{
              width: '0%',
              height: '100%',
              background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))',
              boxShadow: '0 0 8px var(--color-gold)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
