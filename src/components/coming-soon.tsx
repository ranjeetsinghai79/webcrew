'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger) }

// ── LLM Logo SVGs ────────────────────────────────────────────────────────────
function ChatGPTLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.313-4.715 10.079 10.079 0 0 0-11.970 5.198 9.964 9.964 0 0 0-6.312 4.715 10.079 10.079 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.313 4.715 10.078 10.078 0 0 0 11.971-5.199 9.956 9.956 0 0 0 6.312-4.715 10.079 10.079 0 0 0-1.241-11.817z" fill="#10a37f"/>
      <path d="M23.323 27.25a5.35 5.35 0 0 1-4.963-3.392l4.963-2.862 4.963 2.862a5.35 5.35 0 0 1-4.963 3.392zm0-10.71L18.36 13.68a5.36 5.36 0 0 1 9.926 0l-4.963 2.862zm-10.71 3.566a5.354 5.354 0 0 1 0-6.23l4.963 2.862v5.506l-4.963-2.138zm10.71 7.143a5.354 5.354 0 0 1-4.963-3.392L14.397 21v-5.496l4.963 2.862v5.506l3.963-.642-.001-.001zm5.747-7.143-4.963-2.862V11.74l4.963 2.862a5.354 5.354 0 0 1 0 6.23v-.027z" fill="#fff"/>
    </svg>
  )
}

function GeminiLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C12 2 6.5 7.5 6.5 12C6.5 16.5 12 22 12 22C12 22 17.5 16.5 17.5 12C17.5 7.5 12 2 12 2Z" fill="url(#gemini-grad1)"/>
      <path d="M2 12C2 12 7.5 6.5 12 6.5C16.5 6.5 22 12 22 12C22 12 16.5 17.5 12 17.5C7.5 17.5 2 12 2 12Z" fill="url(#gemini-grad2)"/>
      <defs>
        <linearGradient id="gemini-grad1" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4285F4"/>
          <stop offset="1" stopColor="#0F9D58"/>
        </linearGradient>
        <linearGradient id="gemini-grad2" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EA4335"/>
          <stop offset="1" stopColor="#FBBC04"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

function ClaudeLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#CC785C"/>
      <path d="M8 15.5L12 8.5L16 15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.5 13H14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function PerplexityLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#20B69E"/>
      <path d="M12 4L12 20M4 8L12 4L20 8M4 16L12 20L20 16M4 8L4 16M20 8L20 16M4 12L12 8L20 12L12 16L4 12Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const AI_CONVERSATIONS = [
  {
    llm: 'ChatGPT',
    logo: <ChatGPTLogo />,
    color: '#10a37f',
    bg: '#0d0d0d',
    query: 'Best medspa in Tracy, CA?',
    response: 'Based on Google reviews, local SEO rankings, and verified business profiles, **Maria\'s Medspa** in Tracy, CA stands out. They have a 4.9★ rating, active Google Business Profile, and consistently respond to client reviews. Their website shows clear pricing for HydraFacials, laser treatments, and memberships.',
    highlight: "Maria's Medspa",
  },
  {
    llm: 'Gemini',
    logo: <GeminiLogo />,
    color: '#4285F4',
    bg: '#0a0f1e',
    query: 'HVAC company Tracy CA with good reviews',
    response: 'For HVAC in Tracy, CA, **ProFix HVAC & Cooling** appears frequently in local searches and AI-indexed results. Their site is structured with clear service areas, pricing transparency, and a 24/7 contact option. They have 47 Google reviews averaging 4.8★.',
    highlight: 'ProFix HVAC & Cooling',
  },
  {
    llm: 'Perplexity',
    logo: <PerplexityLogo />,
    color: '#20B69E',
    bg: '#0a1210',
    query: 'Dental office Tracy CA taking new patients',
    response: 'According to local business data and web sources, **Bright Smile Dental** in Tracy, CA is currently accepting new patients. Their online presence shows available appointment slots, verified insurance information, and recent patient testimonials.',
    highlight: 'Bright Smile Dental',
  },
]

export default function ComingSoon() {
  const sectionRef  = useRef<HTMLElement>(null)
  const headingRef  = useRef<HTMLDivElement>(null)
  const leftRef     = useRef<HTMLDivElement>(null)
  const rightRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.querySelectorAll('.word-inner') ?? [], {
        yPercent: 115, opacity: 0, stagger: 0.04, duration: 0.75, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      })
      gsap.from(leftRef.current, {
        opacity: 0, x: -32, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: leftRef.current, start: 'top 82%' },
      })
      gsap.from(rightRef.current?.querySelectorAll('.aeo-card') ?? [], {
        opacity: 0, y: 36, stagger: 0.14, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: rightRef.current, start: 'top 82%' },
      })
    })
    return () => ctx.revert()
  }, [])

  const split = (text: string) =>
    text.split(' ').map((w, i) => (
      <span key={i} className="word-wrap" style={{ display: 'inline-block', marginRight: '0.22em' }}>
        <span className="word-inner">{w}{' '}</span>
      </span>
    ))

  return (
    <section
      ref={sectionRef}
      style={{
        padding: 'clamp(80px,10vw,130px) clamp(24px,6vw,80px)',
        background: 'linear-gradient(165deg, #04040E 0%, #080820 60%, #0a0b1a 100%)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle aurora */}
      <div className="aurora-blob" style={{ width: '500px', height: '500px', background: 'rgba(0,194,110,0.06)', top: '-10%', right: '-5%', animation: 'aurora-drift 20s ease-in-out infinite' }} />
      <div className="aurora-blob" style={{ width: '400px', height: '400px', background: 'rgba(66,133,244,0.05)', bottom: '-5%', left: '10%', animation: 'aurora-drift 25s ease-in-out infinite reverse' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ marginBottom: 56, textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
            <div className="section-label" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 0 }}>AI SEARCH VISIBILITY</div>
          </div>

          {/* LLM logos */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 28 }}>
            {[
              { logo: <ChatGPTLogo />, name: 'ChatGPT', color: '#10a37f' },
              { logo: <GeminiLogo />, name: 'Gemini', color: '#4285F4' },
              { logo: <ClaudeLogo />, name: 'Claude', color: '#CC785C' },
              { logo: <PerplexityLogo />, name: 'Perplexity', color: '#20B69E' },
            ].map(l => (
              <div key={l.name} style={{
                display: 'flex', alignItems: 'center', gap: 7,
                background: `${l.color}12`,
                border: `1px solid ${l.color}30`,
                borderRadius: 100, padding: '7px 14px',
              }}>
                {l.logo}
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>{l.name}</span>
              </div>
            ))}
          </div>

          <div ref={headingRef}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(2rem,4.5vw,3.8rem)',
              letterSpacing: '-0.04em', lineHeight: 1.08, color: '#FFFFFF',
            }}>
              <div style={{ overflow: 'hidden', paddingBottom: '0.1em' }}>{split('Your business gets cited')}</div>
              <div style={{ overflow: 'hidden', paddingBottom: '0.1em' }}>
                <span style={{ background: 'linear-gradient(135deg,#00C26F,#4285F4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {split('by AI search engines too.')}
                </span>
              </div>
            </h2>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', maxWidth: '560px', margin: '20px auto 0', lineHeight: 1.7 }}>
            40% of searches now go through ChatGPT, Gemini, and Perplexity — not Google. We write structured, citation-ready content so your business gets recommended by AI, not just ranked by algorithms.
          </p>
        </div>

        {/* Two-col: left = why + how, right = mock AI conversations */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)',
          gap: 56,
          alignItems: 'start',
        }} className="aeo-grid">

          {/* Left */}
          <div ref={leftRef}>
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 18, padding: '28px 26px', marginBottom: 20,
            }}>
              <div style={{ fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#00C26F', marginBottom: 14 }}>
                What we do differently
              </div>
              {[
                { label: 'Citation-ready content', desc: 'We write structured facts, specs, hours, and pricing that AI models extract and cite when answering user queries.', color: '#00C26F' },
                { label: 'LLM-structured schema', desc: 'Schema.org markup + FAQ schema tells ChatGPT, Gemini, and Perplexity exactly who you are, what you do, and where you are.', color: '#4285F4' },
                { label: 'Brand mention tracking', desc: 'We monitor how often your business appears in AI-generated answers — and optimize to increase it monthly.', color: '#CC785C' },
                { label: 'GBP posts = AI fuel', desc: 'Weekly GBP posts create fresh, indexed content that AI models scrape for local business recommendations.', color: '#20B69E' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: item.color, boxShadow: `0 0 8px ${item.color}60`, flexShrink: 0, marginTop: 6 }} />
                  <div>
                    <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#FFFFFF', marginBottom: 4, fontFamily: 'var(--font-display)' }}>{item.label}</div>
                    <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stat */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0,194,110,0.08), rgba(66,133,244,0.06))',
              border: '1px solid rgba(0,194,110,0.2)',
              borderRadius: 14, padding: '18px 22px',
              display: 'flex', alignItems: 'center', gap: 16,
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2.4rem', letterSpacing: '-0.04em', background: 'linear-gradient(135deg,#00C26F,#4285F4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', flexShrink: 0 }}>
                40%
              </div>
              <div>
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#FFFFFF', marginBottom: 3 }}>of searches now bypass Google</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>ChatGPT, Gemini, Perplexity are your new front page. We get you on all of them.</div>
              </div>
            </div>
          </div>

          {/* Right: AI chat mockups */}
          <div ref={rightRef} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {AI_CONVERSATIONS.map((conv) => (
              <div
                key={conv.llm}
                className="aeo-card"
                style={{
                  background: conv.bg,
                  border: `1px solid ${conv.color}22`,
                  borderRadius: 14, overflow: 'hidden',
                }}
              >
                {/* Chat header */}
                <div style={{
                  padding: '10px 16px',
                  borderBottom: `1px solid ${conv.color}15`,
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: `${conv.color}08`,
                }}>
                  {conv.logo}
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>{conv.llm}</span>
                  <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 5, background: `${conv.color}18`, border: `1px solid ${conv.color}35`, borderRadius: 100, padding: '3px 9px' }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: conv.color, boxShadow: `0 0 5px ${conv.color}` }} />
                    <span style={{ fontSize: '0.52rem', fontWeight: 700, color: conv.color, letterSpacing: '0.08em' }}>AI RESPONSE</span>
                  </div>
                </div>

                <div style={{ padding: '12px 16px' }}>
                  {/* User query */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
                    <div style={{
                      background: `${conv.color}18`, border: `1px solid ${conv.color}28`,
                      borderRadius: '10px 10px 2px 10px', padding: '7px 12px',
                      fontSize: '0.72rem', color: 'rgba(255,255,255,0.75)',
                      maxWidth: '70%',
                    }}>
                      {conv.query}
                    </div>
                  </div>

                  {/* AI response */}
                  <div style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '2px 10px 10px 10px', padding: '10px 12px',
                    fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65,
                  }}>
                    {conv.response.split(conv.highlight).map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <strong style={{ color: conv.color, fontWeight: 700 }}>{conv.highlight}</strong>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div style={{ textAlign: 'center', fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', marginTop: 4 }}>
              ↑ Your business appears here when AI answers local questions. We build and optimize this automatically.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .aeo-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
