'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ArrowRight } from 'lucide-react'

const LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing',      href: '#pricing' },
  { label: 'Contact',      href: '#contact' },
]

export default function Nav() {
  const navRef     = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    gsap.from(navRef.current, { y: -24, opacity: 0, duration: 0.7, ease: 'power3.out', delay: 0.4 })
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
        padding: '0 40px', height: '68px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'background 0.4s, border-color 0.4s',
        background: scrolled ? 'rgba(6,6,12,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(1.5)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      }}
    >
      {/* Logo */}
      <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: '30px', height: '30px',
          background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-light))',
          borderRadius: '6px',
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: '1rem', color: '#06060C',
        }}>
          W
        </span>
        <span
          className="gradient-gold"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.02em' }}
        >
          WebCrew
        </span>
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="nav-links">
        {LINKS.map(l => (
          <a
            key={l.href}
            href={l.href}
            style={{
              color: 'var(--color-muted)', textDecoration: 'none',
              fontSize: '0.875rem', fontWeight: 500,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a href="#contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.82rem' }}>
        Get Free Demo <ArrowRight size={14} />
      </a>

      <style>{`
        @media(max-width:768px) {
          .nav-links { display:none !important; }
        }
      `}</style>
    </nav>
  )
}
