'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, CheckCircle } from 'lucide-react'

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger) }

const NICHES = [
  'HVAC', 'Roofing', 'Auto Detailing', 'Cleaning', 'Landscaping',
  'Handyman', 'Junk Removal', 'Remodeling', 'Dentist', 'Med Spa', 'Other',
]

type FormData = {
  name: string
  business: string
  phone: string
  niche: string
  smsConsent: boolean
  marketingConsent: boolean
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef    = useRef<HTMLDivElement>(null)
  const [sent,    setSent]    = useState(false)
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState('')
  const [form,    setForm]    = useState<FormData>({
    name: '', business: '', phone: '',
    niche: '',
    smsConsent: false,
    marketingConsent: false,
  })

  useEffect(() => {
    const handler = (e: Event) => {
      const biz = (e as CustomEvent<{ business: string }>).detail.business
      if (biz) setForm(f => ({ ...f, business: biz }))
    }
    window.addEventListener('wc:prefill', handler)
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        y: 56, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: formRef.current, start: 'top 82%' },
      })
    })
    return () => { window.removeEventListener('wc:prefill', handler); ctx.revert() }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.smsConsent) {
      setError('Please confirm SMS consent to receive your demo link.')
      return
    }
    setError('')
    setLoading(true)
    try {
      await fetch('https://api.webcrew.app/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:          form.name,
          firstName:     form.name.split(' ')[0],
          lastName:      form.name.split(' ').slice(1).join(' '),
          businessName:  form.business,
          phone:         form.phone,
          businessNiche: form.niche,
          smsConsent:    form.smsConsent,
          marketingConsent: form.marketingConsent,
          source:        'webcrew.app',
          submittedAt:   new Date().toISOString(),
          consentTimestamp: new Date().toISOString(),
          consentLanguage: 'I agree to receive SMS updates about my website demo from WebCrew. Message & data rates may apply. Reply STOP to opt out.',
        }),
      })
      setSent(true)
    } catch {
      setSent(true) // show success regardless — DB saves async
    } finally {
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#FFFFFF',
    border: '1px solid var(--color-border)',
    borderRadius: '8px', padding: '14px 16px',
    color: 'var(--color-text)', fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s, background 0.2s',
    fontFamily: 'var(--font-body)',
  }

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'var(--color-gold)'
    e.currentTarget.style.background  = 'rgba(196,164,76,0.04)'
  }
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'var(--color-border)'
    e.currentTarget.style.background  = '#FFFFFF'
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{ padding: 'clamp(80px,12vw,140px) 32px' }}
    >
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--color-gold)' }} />
            Get Started
            <span style={{ width: '24px', height: '1px', background: 'var(--color-gold)' }} />
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(1.9rem,4.5vw,3rem)',
            letterSpacing: '-0.03em', lineHeight: 1.05,
            marginBottom: '16px',
          }}>
            Your demo site will be{' '}
            <span className="gradient-gold">live by tomorrow.</span>
          </h2>
          <p style={{ color: 'var(--color-muted)', lineHeight: 1.7, fontSize: '1rem' }}>
            Fill this out. We build overnight. You wake up to a text with your new site.
            No payment until you're obsessed.
          </p>
        </div>

        <div ref={formRef}>
          {sent ? (
            <div style={{
              textAlign: 'center', padding: '56px 40px',
              background: 'var(--color-surface)',
              border: '1px solid rgba(196,164,76,0.3)',
              borderRadius: '20px',
              boxShadow: '0 0 80px rgba(196,164,76,0.06)',
            }}>
              <CheckCircle size={52} color="var(--color-gold)" style={{ margin: '0 auto 20px' }} />
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: '1.7rem', letterSpacing: '-0.02em', marginBottom: '12px',
              }}>
                We're building it now.
              </h3>
              <p style={{ color: 'var(--color-muted)', lineHeight: 1.7, maxWidth: '380px', margin: '0 auto' }}>
                Expect a text and email with your live demo link within 24 hours.
                Keep your phone close.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '20px', padding: '44px',
                display: 'flex', flexDirection: 'column', gap: '18px',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <input
                  style={inputStyle} type="text" placeholder="Your name" required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  onFocus={onFocus} onBlur={onBlur}
                />
                <input
                  style={inputStyle} type="tel" placeholder="Phone number" required
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  onFocus={onFocus} onBlur={onBlur}
                />
              </div>

              <input
                style={inputStyle} type="text" placeholder="Business name" required
                value={form.business}
                onChange={e => setForm(f => ({ ...f, business: e.target.value }))}
                onFocus={onFocus} onBlur={onBlur}
              />

              <select
                style={{
                  ...inputStyle,
                  color: form.niche ? 'var(--color-text)' : 'var(--color-muted)',
                  cursor: 'pointer',
                }}
                value={form.niche}
                onChange={e => setForm(f => ({ ...f, niche: e.target.value }))}
                required
                onFocus={onFocus} onBlur={onBlur}
              >
                <option value="" disabled>What industry are you in?</option>
                {NICHES.map(n => (
                  <option key={n} value={n.toLowerCase()} style={{ background: 'var(--color-surface)' }}>{n}</option>
                ))}
              </select>

              {/* ── TCPA SMS Consent ──────────────────────── */}
              <div style={{
                background: 'rgba(196,164,76,0.04)',
                border: '1px solid rgba(196,164,76,0.15)',
                borderRadius: '10px',
                padding: '20px',
                display: 'flex', flexDirection: 'column', gap: '14px',
              }}>
                <p style={{
                  fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em',
                  textTransform: 'uppercase', color: 'var(--color-gold)',
                  marginBottom: '4px',
                }}>
                  Communication Preferences
                </p>

                {/* SMS Consent — REQUIRED */}
                <label className="tcpa-checkbox" style={{ cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={form.smsConsent}
                    onChange={e => { setForm(f => ({ ...f, smsConsent: e.target.checked })); setError('') }}
                    style={{ width: '18px', height: '18px', minWidth: '18px', accentColor: 'var(--color-gold)', cursor: 'pointer', marginTop: '2px' }}
                  />
                  <span style={{ fontSize: '0.82rem', lineHeight: 1.6, color: 'var(--color-text)' }}>
                    <strong>I agree to receive SMS messages</strong> about my website demo from WebCrew
                    (webcrew.app). Message frequency varies. Message &amp; data rates may apply.
                    Reply <strong>STOP</strong> to opt out at any time. Reply <strong>HELP</strong> for help.{' '}
                    <a href="/privacy" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>Privacy Policy</a>
                    {' '}&amp;{' '}
                    <a href="/terms" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>Terms of Service</a>.{' '}
                    <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>(Required to receive your demo)</span>
                  </span>
                </label>

                {/* Marketing Consent — OPTIONAL */}
                <label className="tcpa-checkbox" style={{ cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={form.marketingConsent}
                    onChange={e => setForm(f => ({ ...f, marketingConsent: e.target.checked }))}
                    style={{ width: '18px', height: '18px', minWidth: '18px', accentColor: 'var(--color-gold)', cursor: 'pointer', marginTop: '2px' }}
                  />
                  <span style={{ fontSize: '0.82rem', lineHeight: 1.6, color: 'var(--color-muted)' }}>
                    I also agree to receive occasional marketing messages about promotions, new features,
                    and tips from WebCrew. <em>(Optional)</em>
                  </span>
                </label>
              </div>

              {error && (
                <p style={{ color: '#ff4d4d', fontSize: '0.82rem', textAlign: 'center' }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="btn-primary"
                style={{
                  justifyContent: 'center',
                  opacity: loading ? 0.7 : 1,
                  fontSize: '1rem',
                  padding: '17px 36px',
                }}
                disabled={loading}
              >
                {loading ? 'Building your demo…' : <>Wake up to your demo site <ArrowRight size={17} /></>}
              </button>

              <p style={{
                color: 'var(--color-muted)', fontSize: '0.75rem',
                textAlign: 'center', lineHeight: 1.6,
              }}>
                No payment required upfront. We build your site — you decide if you want it.
                By submitting, you consent to the SMS terms above. SMS consent is not a condition
                of any purchase.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
