'use client'
import { useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { PLAN_LIST, priceLabel, plansUnderBudget, type PlanDef } from '@/lib/plans'

const MIN_BUDGET = 0
const MAX_BUDGET = 350
const STEP = 5

export default function BudgetSlider() {
  const [budget, setBudget] = useState(200)

  const fits: PlanDef[] = useMemo(() => plansUnderBudget(budget * 100), [budget])
  const best = fits[0] ?? null

  return (
    <div style={{
      marginTop: '48px',
      background: 'var(--color-bg)',
      border: '1px solid var(--color-border)',
      borderRadius: '20px',
      padding: 'clamp(24px,4vw,40px)',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 6 }}>
          Not sure what fits?
        </div>
        <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', letterSpacing: '-0.02em', fontFamily: 'var(--font-display)' }}>
          Tell us your monthly budget — we'll show you what it unlocks.
        </div>
      </div>

      <div style={{ maxWidth: 520, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 6, marginBottom: 18 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2.6rem', letterSpacing: '-0.03em', color: 'var(--color-accent)' }}>
            ${budget}
          </span>
          <span style={{ color: 'var(--color-muted)', fontSize: '0.9rem' }}>/mo</span>
        </div>

        <input
          type="range"
          min={MIN_BUDGET}
          max={MAX_BUDGET}
          step={STEP}
          value={budget}
          onChange={e => setBudget(Number(e.target.value))}
          aria-label="Comfortable monthly budget"
          style={{ width: '100%', accentColor: 'var(--color-accent)', height: 6, cursor: 'pointer' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: 'var(--color-muted)', marginTop: 6, marginBottom: 24 }}>
          <span>${MIN_BUDGET}</span>
          <span>${MAX_BUDGET}+</span>
        </div>

        {best ? (
          <div style={{
            background: 'rgba(0,194,110,0.06)', border: '1px solid rgba(0,194,110,0.2)',
            borderRadius: 14, padding: '18px 22px', textAlign: 'center',
          }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 6 }}>
              That fits {best.name}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text)', lineHeight: 1.5, marginBottom: 4 }}>
              {best.tagline}
            </div>
            {fits.length > 1 && (
              <div style={{ fontSize: '0.72rem', color: 'var(--color-muted)' }}>
                Also within reach: {fits.slice(1).map(p => p.name).join(', ')}
              </div>
            )}
          </div>
        ) : (
          <div style={{
            background: 'rgba(0,194,110,0.06)', border: '1px solid rgba(0,194,110,0.2)',
            borderRadius: 14, padding: '18px 22px', textAlign: 'center',
          }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text)', lineHeight: 1.5 }}>
              Even at $0, talk to us — we don't say no over budget. We'll work out something that fits.
            </div>
          </div>
        )}

        <a
          href="#contact"
          onClick={e => {
            e.preventDefault()
            window.dispatchEvent(new CustomEvent('wc:tab', { detail: { tab: 'demo' } }))
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="btn-primary"
          style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 7,
            textDecoration: 'none', marginTop: 20, fontSize: '0.85rem', padding: '13px 20px',
          }}
        >
          Get this rate <ArrowRight size={14} />
        </a>
        <p style={{ textAlign: 'center', fontSize: '0.68rem', color: 'var(--color-muted)', marginTop: 10 }}>
          Not a final quote — our team confirms your exact rate on the call.
        </p>
      </div>
    </div>
  )
}
