'use client'

const ITEMS = [
  { biz: 'Tracy HVAC Pro',        city: 'Tracy, CA',      action: '14 leads · week 1' },
  { biz: 'Elite Roofing Co.',     city: 'Fresno, CA',     action: '8 quote requests · 3 days' },
  { biz: 'Spotless Cleaning',     city: 'Stockton, CA',   action: 'Booked out 3 weeks' },
  { biz: 'Green Thumb Landscape', city: 'Modesto, CA',    action: '$4,200 closed · first week' },
  { biz: 'Apex Auto Detail',      city: 'Bakersfield, CA',action: 'Phone won\'t stop ringing' },
  { biz: 'Handy Home Repair',     city: 'Sacramento, CA', action: '22 calls · first month' },
  { biz: 'Clear Junk Removal',    city: 'San Jose, CA',   action: 'Google page 1 · 2 weeks' },
  { biz: 'Modern Remodeling',     city: 'Oakland, CA',    action: '$18k project closed' },
  { biz: 'Smile Dental Group',    city: 'Tracy, CA',      action: '31 new patients' },
  { biz: 'Glow Med Spa',          city: 'Livermore, CA',  action: 'Waitlist in 30 days' },
]

function Item({ biz, city, action }: { biz: string; city: string; action: string }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      padding: '0 40px',
      borderRight: '1px solid var(--color-border)',
      whiteSpace: 'nowrap',
    }}>
      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-gold)', flexShrink: 0 }} />
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.88rem', color: 'var(--color-text)' }}>
        {biz}
      </span>
      <span style={{ fontSize: '0.78rem', color: 'var(--color-muted)' }}>
        {city}
      </span>
      <span style={{
        fontSize: '0.75rem',
        color: '#4ade80',
        fontWeight: 600,
        background: 'rgba(74,222,128,0.08)',
        border: '1px solid rgba(74,222,128,0.2)',
        borderRadius: '100px',
        padding: '3px 10px',
      }}>
        ↑ {action}
      </span>
    </div>
  )
}

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS] // duplicate for seamless loop

  return (
    <div style={{
      borderTop: '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)',
      overflow: 'hidden',
      padding: '18px 0',
      background: 'var(--color-surface)',
      position: 'relative',
    }}>
      {/* Left fade */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', zIndex: 1,
        background: 'linear-gradient(90deg, var(--color-surface), transparent)',
        pointerEvents: 'none',
      }} />
      {/* Right fade */}
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', zIndex: 1,
        background: 'linear-gradient(-90deg, var(--color-surface), transparent)',
        pointerEvents: 'none',
      }} />

      <div className="ticker-track">
        {doubled.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </div>
    </div>
  )
}
