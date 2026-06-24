'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, CheckCircle } from 'lucide-react'

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger) }

const NICHES = [
  'HVAC', 'Roofing', 'Auto Detailing', 'Cleaning', 'Landscaping',
  'Plumbing', 'Electrical', 'Handyman', 'Junk Removal', 'Remodeling',
  'Dentist', 'Med Spa', 'Salon', 'Barbershop', 'Restaurant',
  'Law Firm', 'Real Estate', 'Daycare', 'Other',
]

type Tab = 'no-site' | 'upgrade' | 'audit'

type DemoForm = {
  name: string
  phone: string
  email: string
  business: string
  niche: string
  currentUrl: string
  smsConsent: boolean
}

type AuditForm = {
  name: string
  email: string
  phone: string
  websiteUrl: string
  emailConsent: boolean
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: '#FFFFFF',
  border: '1px solid var(--color-border)',
  borderRadius: '8px',
  padding: '13px 16px',
  color: 'var(--color-text)',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.2s, background 0.2s',
  fontFamily: 'var(--font-body)',
}

const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
  e.currentTarget.style.borderColor = 'var(--color-gold)'
  e.currentTarget.style.background = 'rgba(181,136,14,0.03)'
}
const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
  e.currentTarget.style.borderColor = 'var(--color-border)'
  e.currentTarget.style.background = '#FFFFFF'
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef    = useRef<HTMLDivElement>(null)
  const [tab,     setTab]     = useState<Tab>('no-site')
  const [sent,    setSent]    = useState(false)
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState('')

  const [demo, setDemo] = useState<DemoForm>({
    name: '', phone: '', email: '', business: '', niche: '', currentUrl: '', smsConsent: false,
  })
  const [audit, setAudit] = useState<AuditForm>({
    name: '', email: '', phone: '', websiteUrl: '', emailConsent: false,
  })

  // Listen for tab events from hero CTAs
  useEffect(() => {
    const handler = (e: Event) => {
      const t = (e as CustomEvent<{ tab: string }>).detail.tab
      if (t === 'demo') setTab('no-site')
      if (t === 'audit') setTab('audit')
    }
    window.addEventListener('wc:tab', handler)

    // Legacy prefill event
    const prefill = (e: Event) => {
      const biz = (e as CustomEvent<{ business: string }>).detail.business
      if (biz) setDemo(f => ({ ...f, business: biz }))
    }
    window.addEventListener('wc:prefill', prefill)

    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        y: 56, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: formRef.current, start: 'top 82%' },
      })
    })
    return () => {
      window.removeEventListener('wc:tab', handler)
      window.removeEventListener('wc:prefill', prefill)
      ctx.revert()
    }
  }, [])

  // Reset sent state when tab changes
  useEffect(() => { setSent(false); setError('') }, [tab])

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!demo.smsConsent) { setError('Please confirm SMS consent to receive your demo link.'); return }
    setError(''); setLoading(true)
    try {
      await fetch('https://api.webcrew.app/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:          demo.name,
          firstName:     demo.name.split(' ')[0],
          lastName:      demo.name.split(' ').slice(1).join(' '),
          businessName:  demo.business,
          phone:         demo.phone,
          email:         demo.email,
          businessNiche: demo.niche,
          currentWebsite: tab === 'upgrade' ? demo.currentUrl : undefined,
          flowType:      tab === 'upgrade' ? 'upgrade' : 'no-site',
          smsConsent:    demo.smsConsent,
          source:        'webcrew.app',
          submittedAt:   new Date().toISOString(),
          consentTimestamp: new Date().toISOString(),
          consentLanguage: 'I agree to receive SMS updates about my website demo from WebCrew. Message & data rates may apply. Reply STOP to opt out.',
        }),
      })
      setSent(true)
    } catch {
      setSent(true)
    } finally {
      setLoading(false)
    }
  }

  const handleAuditSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!audit.emailConsent) { setError('Please confirm you agree to receive your audit report.'); return }
    setError(''); setLoading(true)
    try {
      await fetch('https://api.webcrew.app/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:       audit.name,
          email:      audit.email,
          phone:      audit.phone || undefined,
          websiteUrl: audit.websiteUrl,
          source:     'webcrew.app',
          submittedAt: new Date().toISOString(),
        }),
      })
      setSent(true)
    } catch {
      setSent(true)
    } finally {
      setLoading(false)
    }
  }

  const tabStyle = (active: boolean): React.CSSProperties => ({
    flex: 1,
    padding: '11px 12px',
    borderRadius: '8px',
    fontSize: '0.8rem',
    fontWeight: 700,
    fontFamily: 'var(--font-display)',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.2s',
    background: active ? 'var(--color-text)' : 'transparent',
    color: active ? '#fff' : 'var(--color-muted)',
    letterSpacing: '0.01em',
  })

  const SuccessCard = ({ msg }: { msg: string }) => (
    <div style={{
      textAlign: 'center', padding: '56px 40px',
      background: 'var(--color-surface)',
      border: '1px solid rgba(196,164,76,0.3)',
      borderRadius: '20px',
      boxShadow: '0 0 80px rgba(196,164,76,0.06)',
    }}>
      <CheckCircle size={52} color="var(--color-gold)" style={{ margin: '0 auto 20px' }} />
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.7rem', letterSpacing: '-0.02em', marginBottom: '12px' }}>
        {tab === 'audit' ? 'Audit running now.' : 'We\'re building it now.'}
      </h3>
      <p style={{ color: 'var(--color-muted)', lineHeight: 1.7, maxWidth: '380px', margin: '0 auto' }}>
        {msg}
      </p>
    </div>
  )

  const ConsentBox = ({ children }: { children: React.ReactNode }) => (
    <div style={{
      background: 'rgba(181,136,14,0.04)',
      border: '1px solid rgba(181,136,14,0.15)',
      borderRadius: '10px',
      padding: '18px',
      display: 'flex', flexDirection: 'column', gap: '12px',
    }}>
      <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)', margin: 0 }}>
        Communication Consent
      </p>
      {children}
    </div>
  )

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{ padding: 'clamp(80px,12vw,140px) 32px' }}
    >
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--color-gold)' }} />
            Get Started — Free
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
            No payment. No contract. Just a free professional website — built overnight.
          </p>
        </div>

        {/* Tab selector */}
        <div style={{
          display: 'flex', gap: '4px', padding: '5px',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '12px',
          marginBottom: '28px',
        }}>
          <button style={tabStyle(tab === 'no-site')} onClick={() => setTab('no-site')}>
            No Website
          </button>
          <button style={tabStyle(tab === 'upgrade')} onClick={() => setTab('upgrade')}>
            Upgrade My Site
          </button>
          <button style={tabStyle(tab === 'audit')} onClick={() => setTab('audit')}>
            Free Audit
          </button>
        </div>

        <div ref={formRef}>
          {sent ? (
            <SuccessCard msg={
              tab === 'audit'
                ? 'Your audit report will be in your inbox within 5 minutes. Check your email.'
                : 'Expect a text and email with your live demo site within 24 hours. Keep your phone close.'
            } />
          ) : tab === 'audit' ? (

            /* ── AUDIT FLOW ── */
            <form
              onSubmit={handleAuditSubmit}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '20px', padding: '36px',
                display: 'flex', flexDirection: 'column', gap: '16px',
              }}
            >
              <div style={{
                padding: '12px 16px',
                background: 'rgba(74,222,128,0.05)',
                border: '1px solid rgba(74,222,128,0.2)',
                borderRadius: '8px',
                fontSize: '0.82rem', color: '#16a34a', fontWeight: 600,
              }}>
                ● FREE audit report — delivered to your inbox in under 5 minutes
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <input style={inputStyle} type="text" placeholder="Your name *" required
                  value={audit.name} onChange={e => setAudit(f => ({ ...f, name: e.target.value }))}
                  onFocus={onFocus} onBlur={onBlur} />
                <input style={inputStyle} type="email" placeholder="Your email *" required
                  value={audit.email} onChange={e => setAudit(f => ({ ...f, email: e.target.value }))}
                  onFocus={onFocus} onBlur={onBlur} />
              </div>

              <input style={inputStyle} type="tel" placeholder="Phone number (optional)"
                value={audit.phone} onChange={e => setAudit(f => ({ ...f, phone: e.target.value }))}
                onFocus={onFocus} onBlur={onBlur} />

              <input style={inputStyle} type="url" placeholder="Your website URL * (e.g. https://yourbiz.com)" required
                value={audit.websiteUrl} onChange={e => setAudit(f => ({ ...f, websiteUrl: e.target.value }))}
                onFocus={onFocus} onBlur={onBlur} />

              <ConsentBox>
                <label className="tcpa-checkbox" style={{ cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={audit.emailConsent}
                    onChange={e => { setAudit(f => ({ ...f, emailConsent: e.target.checked })); setError('') }}
                    style={{ width: '18px', height: '18px', minWidth: '18px', accentColor: 'var(--color-gold)', cursor: 'pointer', marginTop: '2px' }}
                  />
                  <span style={{ fontSize: '0.82rem', lineHeight: 1.6, color: 'var(--color-text)' }}>
                    <strong>I agree to receive my free audit report</strong> and occasional follow-up from WebCrew at the email above.{' '}
                    <a href="/privacy" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>Privacy Policy</a>
                    {' '}&amp;{' '}
                    <a href="/terms" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>Terms of Service</a>.
                    <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}> (Required)</span>
                  </span>
                </label>
              </ConsentBox>

              {error && <p style={{ color: '#ff4d4d', fontSize: '0.82rem', textAlign: 'center' }}>{error}</p>}

              <button type="submit" className="btn-primary"
                style={{ justifyContent: 'center', opacity: loading ? 0.7 : 1, fontSize: '1rem', padding: '17px 36px' }}
                disabled={loading}>
                {loading ? 'Running audit…' : <>Get My FREE Audit Report <ArrowRight size={17} /></>}
              </button>

              <p style={{ color: 'var(--color-muted)', fontSize: '0.75rem', textAlign: 'center', lineHeight: 1.6 }}>
                100% free. No credit card. Results in your inbox within 5 minutes.
              </p>
            </form>

          ) : (

            /* ── DEMO FLOW (no-site + upgrade) ── */
            <form
              onSubmit={handleDemoSubmit}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '20px', padding: '36px',
                display: 'flex', flexDirection: 'column', gap: '16px',
              }}
            >
              <div style={{
                padding: '12px 16px',
                background: tab === 'upgrade' ? 'rgba(99,102,241,0.06)' : 'rgba(74,222,128,0.05)',
                border: `1px solid ${tab === 'upgrade' ? 'rgba(99,102,241,0.2)' : 'rgba(74,222,128,0.2)'}`,
                borderRadius: '8px',
                fontSize: '0.82rem',
                color: tab === 'upgrade' ? '#6366f1' : '#16a34a',
                fontWeight: 600,
              }}>
                {tab === 'upgrade'
                  ? '● FREE upgrade demo — we redesign your existing site, no strings attached'
                  : '● FREE demo site — built overnight, live URL sent to your phone by morning'}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <input style={inputStyle} type="text" placeholder="Your name *" required
                  value={demo.name} onChange={e => setDemo(f => ({ ...f, name: e.target.value }))}
                  onFocus={onFocus} onBlur={onBlur} />
                <input style={inputStyle} type="tel" placeholder="Phone number *" required
                  value={demo.phone} onChange={e => setDemo(f => ({ ...f, phone: e.target.value }))}
                  onFocus={onFocus} onBlur={onBlur} />
              </div>

              <input style={inputStyle} type="email" placeholder="Email address *" required
                value={demo.email} onChange={e => setDemo(f => ({ ...f, email: e.target.value }))}
                onFocus={onFocus} onBlur={onBlur} />

              <input style={inputStyle} type="text" placeholder="Business name *" required
                value={demo.business} onChange={e => setDemo(f => ({ ...f, business: e.target.value }))}
                onFocus={onFocus} onBlur={onBlur} />

              <select
                style={{ ...inputStyle, color: demo.niche ? 'var(--color-text)' : 'var(--color-muted)', cursor: 'pointer' }}
                value={demo.niche} onChange={e => setDemo(f => ({ ...f, niche: e.target.value }))}
                required onFocus={onFocus} onBlur={onBlur}
              >
                <option value="" disabled>What industry are you in? *</option>
                {NICHES.map(n => <option key={n} value={n.toLowerCase()} style={{ background: 'var(--color-surface)' }}>{n}</option>)}
              </select>

              {tab === 'upgrade' && (
                <input style={inputStyle} type="url" placeholder="Current website URL * (e.g. https://yourbiz.com)" required
                  value={demo.currentUrl} onChange={e => setDemo(f => ({ ...f, currentUrl: e.target.value }))}
                  onFocus={onFocus} onBlur={onBlur} />
              )}

              <ConsentBox>
                <label className="tcpa-checkbox" style={{ cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={demo.smsConsent}
                    onChange={e => { setDemo(f => ({ ...f, smsConsent: e.target.checked })); setError('') }}
                    style={{ width: '18px', height: '18px', minWidth: '18px', accentColor: 'var(--color-gold)', cursor: 'pointer', marginTop: '2px' }}
                  />
                  <span style={{ fontSize: '0.82rem', lineHeight: 1.6, color: 'var(--color-text)' }}>
                    <strong>I agree to receive SMS messages</strong> about my website demo from WebCrew
                    (webcrew.app). Message frequency varies. Message &amp; data rates may apply.
                    Reply <strong>STOP</strong> to opt out. Reply <strong>HELP</strong> for help.{' '}
                    <a href="/privacy" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>Privacy Policy</a>
                    {' '}&amp;{' '}
                    <a href="/terms" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>Terms of Service</a>.{' '}
                    <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>(Required)</span>
                  </span>
                </label>
              </ConsentBox>

              {error && <p style={{ color: '#ff4d4d', fontSize: '0.82rem', textAlign: 'center' }}>{error}</p>}

              <button type="submit" className="btn-primary"
                style={{ justifyContent: 'center', opacity: loading ? 0.7 : 1, fontSize: '1rem', padding: '17px 36px' }}
                disabled={loading}>
                {loading ? 'Building your demo…' : <>{tab === 'upgrade' ? 'Build My FREE Upgraded Site' : 'Build My FREE Demo Site'} <ArrowRight size={17} /></>}
              </button>

              <p style={{ color: 'var(--color-muted)', fontSize: '0.75rem', textAlign: 'center', lineHeight: 1.6 }}>
                No payment required. We build your site — you decide if you want it.
                SMS consent is not a condition of any purchase.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
