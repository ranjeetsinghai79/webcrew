'use client'

import { useMemo, useState } from 'react'
import { ArrowRight, PhoneCall } from 'lucide-react'

function Field({ label, value, min, max, step = 1, prefix, suffix, onChange }: {
  label: string
  value: number
  min: number
  max: number
  step?: number
  prefix?: string
  suffix?: string
  onChange: (value: number) => void
}) {
  return (
    <label style={{ display: 'grid', gap: 9 }}>
      <span style={{ color: 'rgba(255,255,255,.72)', fontSize: '.82rem', fontWeight: 650 }}>{label}</span>
      <div style={{ position: 'relative' }}>
        {prefix && <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,.48)' }}>{prefix}</span>}
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={event => onChange(Math.min(max, Math.max(min, Number(event.target.value) || 0)))}
          style={{
            width: '100%', minHeight: 48, borderRadius: 10,
            border: '1px solid rgba(255,255,255,.13)', background: 'rgba(255,255,255,.06)',
            color: '#fff', font: 'inherit', fontWeight: 750,
            padding: `0 ${suffix ? '48px' : '14px'} 0 ${prefix ? '30px' : '14px'}`,
          }}
        />
        {suffix && <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,.48)', fontSize: '.78rem' }}>{suffix}</span>}
      </div>
    </label>
  )
}

export default function MoneyShot() {
  const [calls, setCalls] = useState(40)
  const [missedRate, setMissedRate] = useState(25)
  const [closeRate, setCloseRate] = useState(35)
  const [jobValue, setJobValue] = useState(650)

  const estimate = useMemo(() => {
    const missedCalls = calls * (missedRate / 100)
    const jobs = missedCalls * (closeRate / 100)
    return { missedCalls, jobs, revenue: jobs * jobValue * 4.33 }
  }, [calls, missedRate, closeRate, jobValue])

  return (
    <section id="revenue-calculator" style={{
      padding: 'clamp(80px,10vw,130px) clamp(24px,6vw,80px)',
      background: 'linear-gradient(155deg,#04040e 0%,#080820 58%,#0d0b28 100%)',
      color: '#fff', position: 'relative', overflow: 'hidden',
    }}>
      <div className="noise-overlay" />
      <div className="missed-revenue-grid" style={{
        maxWidth: 1180, margin: '0 auto', position: 'relative', zIndex: 1,
        display: 'grid', gridTemplateColumns: 'minmax(0,.9fr) minmax(0,1.1fr)',
        gap: 'clamp(44px,7vw,88px)', alignItems: 'center',
      }}>
        <div>
          <div className="section-label" style={{ color: '#00c26f', marginBottom: 18 }}>WHAT A MISSED CALL COSTS</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.25rem,4.5vw,4rem)', lineHeight: 1.05, letterSpacing: '-.045em', marginBottom: 24 }}>
            One missed call can be worth more than one month of WebCrew.
          </h2>
          <p style={{ color: 'rgba(255,255,255,.65)', lineHeight: 1.75, maxWidth: 520 }}>
            Tuesday, 4:18 PM. You&apos;re finishing a job when the phone rings. The caller needs help, gets no answer, and keeps searching. Use your own numbers to estimate what those moments may be costing you.
          </p>
          <div style={{ marginTop: 28, padding: '18px 20px', borderLeft: '3px solid #00c26f', background: 'rgba(0,194,111,.07)', borderRadius: '0 12px 12px 0' }}>
            <strong>WebCrew changes the ending:</strong>
            <span style={{ display: 'block', color: 'rgba(255,255,255,.68)', marginTop: 6, lineHeight: 1.6 }}>The call is answered, the customer is qualified, and an appointment can be requested before you finish your current job.</span>
          </div>
        </div>

        <div style={{ background: 'rgba(255,255,255,.055)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 22, padding: 'clamp(22px,4vw,34px)', boxShadow: '0 30px 90px rgba(0,0,0,.28)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 26 }}>
            <span style={{ width: 38, height: 38, borderRadius: 10, display: 'grid', placeItems: 'center', background: 'rgba(0,194,111,.13)', color: '#4ade80' }}><PhoneCall size={18} /></span>
            <div><strong style={{ display: 'block' }}>Missed-revenue calculator</strong><span style={{ color: 'rgba(255,255,255,.48)', fontSize: '.72rem' }}>An estimate based only on the numbers you enter</span></div>
          </div>
          <div className="calculator-fields" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
            <Field label="Inbound calls per week" value={calls} min={0} max={10000} onChange={setCalls} />
            <Field label="Calls you miss" value={missedRate} min={0} max={100} suffix="%" onChange={setMissedRate} />
            <Field label="Calls that become jobs" value={closeRate} min={0} max={100} suffix="%" onChange={setCloseRate} />
            <Field label="Average job value" value={jobValue} min={0} max={1000000} prefix="$" onChange={setJobValue} />
          </div>
          <div style={{ marginTop: 26, padding: '24px', borderRadius: 15, background: 'linear-gradient(135deg,rgba(0,194,111,.14),rgba(14,165,233,.12))', border: '1px solid rgba(74,222,128,.2)' }}>
            <span style={{ color: 'rgba(255,255,255,.58)', fontSize: '.78rem' }}>Estimated revenue at risk each month</span>
            <strong style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'clamp(2.25rem,5vw,3.5rem)', letterSpacing: '-.05em', margin: '4px 0 8px', color: '#4ade80' }}>${Math.round(estimate.revenue).toLocaleString()}</strong>
            <span style={{ color: 'rgba(255,255,255,.58)', fontSize: '.76rem' }}>From about {estimate.missedCalls.toFixed(1)} missed calls and {estimate.jobs.toFixed(1)} potential jobs per week.</span>
          </div>
          <a href="#contact" className="btn-primary" style={{ marginTop: 20, width: '100%', justifyContent: 'center' }} onClick={event => {
            event.preventDefault()
            window.dispatchEvent(new CustomEvent('wc:tab', { detail: { tab: 'demo' } }))
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }}>See WebCrew Answer My Calls <ArrowRight size={16} /></a>
          <p style={{ color: 'rgba(255,255,255,.38)', fontSize: '.67rem', lineHeight: 1.5, marginTop: 12, textAlign: 'center' }}>Illustrative estimate, not a guarantee. Call answering and appointment booking are included in the $149/month Growth plan.</p>
        </div>
      </div>
      <style>{`@media(max-width:900px){.missed-revenue-grid{grid-template-columns:1fr!important}} @media(max-width:560px){.calculator-fields{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
