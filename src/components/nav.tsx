'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Results',      href: '#results' },
  { label: 'Pricing',      href: '#pricing' },
  { label: 'Contact',      href: '#contact' },
]

export default function Nav() {
  const navRef     = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    gsap.from(navRef.current, { y: -20, opacity: 0, duration: 0.6, ease: 'power3.out', delay: 0.5 })

    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
        padding: '0 32px',
        height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'background 0.4s, backdrop-filter 0.4s, border-color 0.4s',
        background: scrolled ? 'rgba(8,8,15,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      }}
    >
      {/* Logo */}
      <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span
          className="gradient-gold"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.02em' }}
        >
          WebCrew
        </span>
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="hidden-mobile">
        {LINKS.map(l => (
          <a
            key={l.href}
            href={l.href}
            style={{
              color: 'var(--color-muted)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: 500,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
          >
            {l.label}
          </a>
        ))}
      </div>

      <a href="#contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.8rem' }}>
        Get Your Site
      </a>

      <style>{`@media(max-width:768px){.hidden-mobile{display:none!important}}`}</style>
    </nav>
  )
}
