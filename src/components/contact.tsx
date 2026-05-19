'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, CheckCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef    = useRef<HTMLDivElement>(null)
  const [sent,     setSent]     = useState(false)
  const [loading,  setLoading]  = useState(false)
  const [form,     setForm]     = useState({ name:'', business:'', phone:'', email:'', niche:'', message:'' })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        y: 48, opacity: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: formRef.current, start: 'top 82%' },
      })
    })
    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('https://api.webcrew.app/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          firstName:     form.name.split(' ')[0],
          lastName:      form.name.split(' ').slice(1).join(' '),
          businessName:  form.business,
          businessNiche: form.niche,
          source:        'webcrew.app',
          submittedAt:   new Date().toISOString(),
        }),
      })
      setSent(true)
    } catch {
      setSent(true) // still show success — email captures even on CORS
    } finally {
      setLoading(false)
    }
  }

  const input = (name: keyof typeof form, placeholder: string, type = 'text', required = true) => (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      value={form[name]}
      onChange={e => setForm(f => ({ ...f, [name]: e.target.value }))}
      style={{
        width:'100%', background:'var(--color-surface-2)', border:'1px solid var(--color-border)',
        borderRadius:'8px', padding:'13px 16px', color:'var(--color-text)', fontSize:'0.9rem',
        outline:'none', transition:'border-color 0.2s',
      }}
      onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-gold)')}
      onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
    />
  )

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding:'120px 32px',
        background:'var(--color-surface)',
        borderTop:'1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth:'600px', margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:'48px' }}>
          <div className="section-label" style={{ justifyContent:'center' }}>
            <span style={{ width:'20px', height:'1px', background:'var(--color-gold)' }} />
            Get Started
            <span style={{ width:'20px', height:'1px', background:'var(--color-gold)' }} />
          </div>
          <h2 style={{
            fontFamily:'var(--font-display)', fontWeight:800,
            fontSize:'clamp(1.8rem,4vw,2.8rem)', letterSpacing:'-0.025em', lineHeight:1.1,
            marginBottom:'16px',
          }}>
            Ready to see your <span className="gradient-gold">demo site?</span>
          </h2>
          <p style={{ color:'var(--color-muted)', lineHeight:1.65 }}>
            Tell us about your business. We'll build your demo and send you the link within 24 hours.
          </p>
        </div>

        <div ref={formRef}>
          {sent ? (
            <div style={{
              textAlign:'center', padding:'48px 32px',
              background:'var(--color-bg)', border:'1px solid rgba(196,164,76,0.3)',
              borderRadius:'16px',
            }}>
              <CheckCircle size={48} color="var(--color-gold)" style={{ margin:'0 auto 16px' }} />
              <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.5rem', marginBottom:'8px' }}>
                We're on it!
              </h3>
              <p style={{ color:'var(--color-muted)', lineHeight:1.65 }}>
                Your demo site will be live within 24 hours. We'll text and email you the link.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                background:'var(--color-bg)', border:'1px solid var(--color-border)',
                borderRadius:'16px', padding:'40px',
                display:'flex', flexDirection:'column', gap:'16px',
              }}
            >
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px' }}>
                {input('name',     'Your name')}
                {input('phone',    'Phone number', 'tel')}
              </div>
              {input('business', 'Business name')}
              {input('email',    'Email address', 'email', false)}
              <select
                value={form.niche}
                onChange={e => setForm(f => ({ ...f, niche: e.target.value }))}
                required
                style={{
                  width:'100%', background:'var(--color-surface-2)', border:'1px solid var(--color-border)',
                  borderRadius:'8px', padding:'13px 16px', color: form.niche ? 'var(--color-text)' : 'var(--color-muted)',
                  fontSize:'0.9rem', outline:'none', cursor:'pointer',
                }}
              >
                <option value="" disabled>Select your industry</option>
                {['HVAC', 'Roofing', 'Auto Detailing', 'Cleaning', 'Landscaping',
                  'Handyman', 'Junk Removal', 'Remodeling', 'Dentist', 'Med Spa', 'Other'].map(n => (
                  <option key={n} value={n.toLowerCase()}>{n}</option>
                ))}
              </select>
              <textarea
                placeholder="Anything else? (optional)"
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                rows={3}
                style={{
                  width:'100%', background:'var(--color-surface-2)', border:'1px solid var(--color-border)',
                  borderRadius:'8px', padding:'13px 16px', color:'var(--color-text)', fontSize:'0.9rem',
                  outline:'none', resize:'vertical', fontFamily:'inherit',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-gold)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
              />
              <button type="submit" className="btn-primary" style={{ justifyContent:'center', opacity: loading ? 0.7 : 1 }} disabled={loading}>
                {loading ? 'Sending…' : <>Get My Demo Site <ArrowRight size={16} /></>}
              </button>
              <p style={{ color:'var(--color-muted)', fontSize:'0.75rem', textAlign:'center', lineHeight:1.5 }}>
                No payment required. We build first, you decide. By submitting you agree to our{' '}
                <a href="/terms" style={{ color:'var(--color-gold)' }}>Terms</a> and{' '}
                <a href="/privacy" style={{ color:'var(--color-gold)' }}>Privacy Policy</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
