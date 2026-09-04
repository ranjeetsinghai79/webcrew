'use client'
import { useEffect, useState } from 'react'
import { Clock } from 'lucide-react'

// Real deadline, not manufactured urgency: AI Reception currently runs on
// free Vertex AI credits that expire in late September — this is the window
// it's actually free-to-serve for WebCrew, not just free to the customer.
// Keep in sync by hand with PROMO_DEADLINE in api/src/index.ts and the date
// mentioned in pipeline/src/reception/webcrew-prompt.ts.
const DEADLINE = new Date('2026-09-25T23:59:59-05:00')

function timeLeft() {
  const diff = DEADLINE.getTime() - Date.now()
  if (diff <= 0) return null
  const days = Math.floor(diff / 86400000)
  const hours = Math.floor((diff % 86400000) / 3600000)
  const minutes = Math.floor((diff % 3600000) / 60000)
  return { days, hours, minutes }
}

export default function CountdownBanner() {
  const [left, setLeft] = useState<ReturnType<typeof timeLeft>>(null)

  useEffect(() => {
    setLeft(timeLeft())
    const id = setInterval(() => setLeft(timeLeft()), 60_000)
    return () => clearInterval(id)
  }, [])

  if (!left) return null // deadline passed — banner just disappears, no stale countdown

  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
      flexWrap: 'wrap', margin: '0 auto 32px', maxWidth: 720,
      background: 'linear-gradient(135deg, rgba(0,194,110,0.1), rgba(14,165,233,0.08))',
      border: '1px solid rgba(0,194,110,0.25)', borderRadius: 100,
      padding: '12px 22px',
    }}>
      <Clock size={15} color="#00C26F" />
      <span style={{ fontSize: '0.82rem', color: 'var(--color-text)', fontWeight: 600 }}>
        Founding free-trial window closes in{' '}
        <span style={{ color: '#00C26F', fontWeight: 800 }}>
          {left.days}d {left.hours}h {left.minutes}m
        </span>
      </span>
    </div>
  )
}
