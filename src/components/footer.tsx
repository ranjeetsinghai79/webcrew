'use client'
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{
      borderTop:'1px solid var(--color-border)',
      padding:'40px 32px',
      background:'var(--color-bg)',
    }}>
      <div style={{
        maxWidth:'1100px', margin:'0 auto',
        display:'flex', flexWrap:'wrap', gap:'24px',
        alignItems:'center', justifyContent:'space-between',
      }}>
        <div>
          <span
            className="gradient-gold"
            style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'1.1rem', letterSpacing:'-0.02em' }}
          >
            WebCrew
          </span>
          <p style={{ color:'var(--color-muted)', fontSize:'0.8rem', marginTop:'4px' }}>
            Professional websites that get you more jobs. Built overnight.
          </p>
        </div>
        <div style={{ display:'flex', gap:'24px', flexWrap:'wrap' }}>
          {[
            { label:'Privacy Policy', href:'/privacy' },
            { label:'Terms of Service', href:'/terms' },
            { label:'Contact', href:'#contact' },
          ].map(l => (
            <a
              key={l.href}
              href={l.href}
              style={{ color:'var(--color-muted)', fontSize:'0.82rem', textDecoration:'none', transition:'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color='var(--color-text)')}
              onMouseLeave={e => (e.currentTarget.style.color='var(--color-muted)')}
            >
              {l.label}
            </a>
          ))}
        </div>
        <p style={{ color:'var(--color-muted)', fontSize:'0.78rem' }}>
          © {year} WebCrew. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
