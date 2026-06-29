'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Phone, Globe, Star, BarChart2, Megaphone, Share2,
  Zap, Search, MessageSquare,
} from 'lucide-react'

if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger) }

const TABS = [
  {
    id: 'reception',
    label: 'AI Reception',
    icon: <Phone size={14} />,
    badge: 'LIVE',
    badgeColor: '#00C26F',
    headline: 'Every call answered. Every lead captured.',
    sub: 'Your AI receptionist picks up instantly — 24/7, even at 2am. It answers questions, books appointments, and sends you a summary. You never lose a customer to voicemail again.',
    items: [
      'Answers calls in your business voice — feels human',
      'Books appointments and sends confirmation texts automatically',
      'Handles FAQs: hours, pricing, location, services',
      'Call summary + transcript sent to you after every call',
      'Escalates urgent calls to your cell instantly',
    ],
    metrics: ['Calls Handled', 'Missed Calls', 'Avg Response', 'Leads Captured'],
    scores: [98, 0, 99, 94],
    preview: { label: '0 missed calls', score: 100, color: '#00C26F' },
  },
  {
    id: 'website',
    label: 'AI Website',
    icon: <Zap size={14} />,
    badge: 'OVERNIGHT',
    badgeColor: '#0EA5E9',
    headline: 'Looks like a $20K agency built it.',
    sub: 'Custom hero images or video generated from your actual brand. Cinematic animations. A design so sharp, customers stop scrolling and call — live in under 8 hours.',
    items: [
      'Built overnight using your real brand, photos and voice',
      'Custom domain (yourdomain.com) included — yours permanently',
      'PageSpeed 97/100 — loads in under 2 seconds',
      'Contact form, service pages, and local SEO from day one',
      'Never a template — every site is one-of-a-kind',
    ],
    metrics: ['PageSpeed', 'Mobile Score', 'Load Time', 'Brand Match'],
    scores: [97, 96, 99, 98],
    preview: { label: 'PageSpeed 97/100', score: 97, color: '#0EA5E9' },
  },
  {
    id: 'gbp',
    label: 'GBP Posts',
    icon: <Globe size={14} />,
    badge: 'WEEKLY',
    badgeColor: '#8B5CF6',
    headline: 'Google Maps keeps your business at the top.',
    sub: 'Google rewards active businesses. Your AI posts weekly updates to your Google Business Profile — in your voice, about real events and offers — so you rank higher and get more calls from Maps.',
    items: [
      '52 posts per year — your GBP stays fresh automatically',
      'AI writes posts that match your voice and current offers',
      'Seasonal specials, service highlights, before/after posts',
      'Posts at optimal times for your local market',
      'Monthly GBP performance report included',
    ],
    metrics: ['Posts/Year', 'Profile Views', 'Map Ranking', 'Call Clicks'],
    scores: [100, 92, 87, 89],
    preview: { label: '52 posts/yr auto', score: 93, color: '#8B5CF6' },
  },
  {
    id: 'reviews',
    label: 'Review Replies',
    icon: <MessageSquare size={14} />,
    badge: 'AUTO',
    badgeColor: '#F59E0B',
    headline: 'Every review replied to. Automatically.',
    sub: 'Customers read your replies before they call. Your AI crafts personal, thoughtful responses to every Google review — 4-star, 5-star, even the tough ones — in your tone. Never leave a review unanswered.',
    items: [
      'Replies to every review within hours — not weeks',
      'Tone matches your business voice, not a generic template',
      'Handles negative reviews professionally — defuses and recovers',
      'Boosts Google ranking (fresh activity = more visibility)',
      'You approve or auto-publish — your choice per tier',
    ],
    metrics: ['Reply Rate', 'Avg Response', 'Rating Trend', 'Review Volume'],
    scores: [100, 97, 88, 85],
    preview: { label: '100% reply rate', score: 100, color: '#F59E0B' },
  },
  {
    id: 'seo',
    label: 'Local SEO',
    icon: <Search size={14} />,
    badge: 'ONGOING',
    badgeColor: '#0EA5E9',
    headline: 'Found on Google from day one.',
    sub: 'Most local businesses are invisible online. Your site launches indexed and ranking for your exact city and service — driving real calls from people searching right now.',
    items: [
      'Google knows what you do + where you are from day one',
      'Every page written for your city, service, and customers',
      'Indexed by Google within 48 hours of launch',
      'Schema markup + sitemap + robots.txt — technical SEO done',
      'Service-area pages for every neighborhood you serve',
    ],
    metrics: ['Google Rank', 'Local Visibility', 'Map Pack', 'Monthly Calls'],
    scores: [91, 94, 88, 86],
    preview: { label: 'Top 3 ranking', score: 91, color: '#0EA5E9' },
  },
  {
    id: 'ads',
    label: 'Ads Manager',
    icon: <Megaphone size={14} />,
    badge: 'READY TO LAUNCH',
    badgeColor: '#EF4444',
    headline: 'Ad campaigns drafted, compliance-checked, and ready to launch.',
    sub: 'Your AI builds complete Google and Meta ad campaigns — keywords, ad copy, audience targeting, spend caps — all compliance-checked. You review, approve with one click, and they go live. No agency needed.',
    items: [
      'Full Google Search + Meta/Instagram campaigns drafted by AI',
      'Keywords, ad copy, and audience targeting pre-built',
      'Every ad compliance-checked before you see it',
      'You approve the budget and launch with one click',
      'Weekly spend vs. leads report once campaigns are live',
    ],
    metrics: ['Campaign Ready', 'Ad Quality', 'Compliance', 'Approval'],
    scores: [100, 95, 100, 88],
    preview: { label: 'Campaigns ready · 1-click launch', score: 100, color: '#EF4444' },
  },
  {
    id: 'social',
    label: 'Social Media',
    icon: <Share2 size={14} />,
    badge: 'DRAFTED WEEKLY',
    badgeColor: '#8B5CF6',
    headline: 'Social content written for you. Posted in one click.',
    sub: 'Every week, your AI writes 3–5 posts for Instagram, Facebook, and GBP — real content about your offers, seasonal promos, tips. Review them in your dashboard, post with one click, or approve all at once.',
    items: [
      '3–5 posts per week drafted — Instagram, Facebook, GBP',
      'Content written in your voice using your real offers and services',
      'Before/after hooks, seasonal promos, and tips included',
      'Review drafts in dashboard, post with one click',
      'Monthly top-performing post report so you know what works',
    ],
    metrics: ['Posts/Week', 'Content Quality', 'Approval Speed', 'Engagement'],
    scores: [100, 94, 100, 82],
    preview: { label: '5 posts drafted · 1-click post', score: 94, color: '#8B5CF6' },
  },
  {
    id: 'reports',
    label: 'Weekly Reports',
    icon: <BarChart2 size={14} />,
    badge: 'WEEKLY',
    badgeColor: '#00C26F',
    headline: 'Know exactly how your business is growing.',
    sub: 'Every Monday morning: a clean email with traffic, calls, reviews, rankings, and ad performance. No dashboards to log into. No spreadsheets. Just the numbers that matter, delivered to your inbox.',
    items: [
      'Weekly Google Search Console: clicks, impressions, keyword rankings',
      'Call volume + AI reception summary',
      'Google review rating trend + new reviews this week',
      'Ad spend vs. leads generated',
      'Month-over-month comparison — always know your trajectory',
    ],
    metrics: ['Traffic Trend', 'Call Volume', 'Review Score', 'Ad ROAS'],
    scores: [94, 91, 96, 88],
    preview: { label: '+18% traffic wk1', score: 94, color: '#00C26F' },
  },
]

const TESTIMONIALS = [
  {
    quote: 'I almost didn\'t fill out the form — figured it was a scam. They texted me a live link at 4am. Week 1: 14 new leads. I\'ve never had 14 leads in an entire month before.',
    name: 'Carlos M.',
    role: 'HVAC · Tracy, CA',
    result: '14 leads · week 1',
  },
  {
    quote: 'Three days after my site went live, I closed an $18,000 roofing job from a Google search. My old site hadn\'t generated a single job in 2 years.',
    name: 'Derek R.',
    role: 'Roofing · Fresno, CA',
    result: '$18k closed · day 3',
  },
  {
    quote: 'Fully booked 3 weeks out now. Had to hire two more cleaners to keep up. My Wix site was getting maybe 2 calls a month. This is a different world.',
    name: 'Priya S.',
    role: 'Cleaning · Stockton, CA',
    result: 'Booked solid · 3 wks',
  },
]

function MiniPreview({ tab }: { tab: typeof TABS[0] }) {
  return (
    <div style={{
      background: '#0a0a14', borderRadius: 14,
      border: '1px solid rgba(255,255,255,0.06)',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.45)',
    }}>
      {/* Chrome bar */}
      <div style={{
        background: '#13131f', padding: '8px 12px',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ff5f57','#febc2e','#28c840'].map((c, i) => (
            <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: c, opacity: 0.7 }} />
          ))}
        </div>
        <div style={{
          flex: 1, background: 'rgba(255,255,255,0.05)',
          borderRadius: 4, padding: '3px 10px',
          fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace',
        }}>
          ai-manager.webcrew.app
        </div>
        <div style={{
          fontSize: '0.56rem', fontWeight: 700, color: tab.preview.color,
          background: `${tab.preview.color}18`,
          border: `1px solid ${tab.preview.color}40`,
          borderRadius: 100, padding: '2px 8px',
        }}>
          {tab.badge}
        </div>
      </div>
      {/* Content */}
      <div style={{ padding: 20 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.88rem', color: '#F2F1EA', marginBottom: 3 }}>
              {tab.preview.label}
            </div>
            <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)' }}>Maria&apos;s Medspa · Live now</div>
          </div>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: '2.2rem', color: tab.preview.color, letterSpacing: '-0.04em', lineHeight: 1,
          }}>
            {tab.preview.score}
          </div>
        </div>
        {tab.metrics.map((m, i) => (
          <div key={m} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 9 }}>
            <div style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.25)', width: 68, flexShrink: 0 }}>{m}</div>
            <div style={{ flex: 1, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.05)', overflow: 'hidden' }}>
              <div style={{
                height: '100%', borderRadius: 2,
                width: `${tab.scores[i]}%`,
                background: `linear-gradient(90deg, ${tab.preview.color}80, ${tab.preview.color})`,
                transition: 'width 0.6s ease',
              }} />
            </div>
            <div style={{ fontSize: '0.58rem', color: tab.preview.color, width: 26, textAlign: 'right', fontWeight: 700 }}>
              {tab.scores[i]}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Features() {
  const [active, setActive] = useState(0)
  const sectionRef  = useRef<HTMLElement>(null)
  const headingRef  = useRef<HTMLDivElement>(null)
  const contentRef  = useRef<HTMLDivElement>(null)
  const testiRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.querySelectorAll('.word-inner') ?? [], {
        yPercent: 115, opacity: 0, stagger: 0.04, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      })
      gsap.from(testiRef.current?.querySelectorAll('.testi-card') ?? [], {
        y: 40, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: testiRef.current, start: 'top 82%' },
      })

      testiRef.current?.querySelectorAll('.testi-card').forEach(card => {
        const el = card as HTMLElement
        const setRX = gsap.quickTo(el, 'rotationX', { duration: 0.4, ease: 'power2.out' })
        const setRY = gsap.quickTo(el, 'rotationY', { duration: 0.4, ease: 'power2.out' })
        gsap.set(el, { transformPerspective: 900, transformStyle: 'preserve-3d' })
        const onMove = (e: MouseEvent) => {
          const rect = el.getBoundingClientRect()
          const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
          const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
          setRY(dx * 7); setRX(-dy * 5)
        }
        const onLeave = () => { setRX(0); setRY(0) }
        el.addEventListener('mousemove', onMove)
        el.addEventListener('mouseleave', onLeave)
      })
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!contentRef.current) return
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.38, ease: 'power3.out' }
    )
  }, [active])

  const split = (text: string) =>
    text.split(' ').map((w, i) => (
      <span key={i} className="word-wrap" style={{ display: 'inline-block', marginRight: '0.22em' }}>
        <span className="word-inner">{w}{' '}</span>
      </span>
    ))

  const tab = TABS[active]

  return (
    <section
      id="features"
      ref={sectionRef}
      style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        padding: 'clamp(80px,10vw,130px) clamp(24px,6vw,80px)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 52 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>YOUR AI TEAM</div>
          <div ref={headingRef} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(2rem,4.2vw,3.6rem)',
              letterSpacing: '-0.035em', lineHeight: 1.1,
            }}>
              <div style={{ overflow: 'hidden', paddingBottom: '0.12em' }}>{split('8 AI Employees.')}</div>
              <div style={{ overflow: 'hidden', paddingBottom: '0.12em' }}>
                <span style={{ background: 'linear-gradient(135deg,#00C26F,#0EA5E9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {split('Already Hired.')}
                </span>
              </div>
            </h2>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 280, paddingBottom: 6 }}>
              One subscription. Eight AI agents running your entire business growth stack — 24/7.
            </p>
          </div>

          {/* AI team chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: '28px' }}>
            {[
              { label: 'Receptionist', color: '#00C26F' },
              { label: 'Web Designer', color: '#0EA5E9' },
              { label: 'SEO Specialist', color: '#0EA5E9' },
              { label: 'GBP Manager', color: '#8B5CF6' },
              { label: 'Review Manager', color: '#F59E0B' },
              { label: 'Ad Manager', color: '#EF4444' },
              { label: 'Social Manager', color: '#8B5CF6' },
              { label: 'Analyst', color: '#00C26F' },
            ].map(chip => (
              <div key={chip.label} style={{
                display: 'flex', alignItems: 'center', gap: 7,
                background: `${chip.color}0D`,
                border: `1px solid ${chip.color}30`,
                borderRadius: 100, padding: '6px 14px',
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: chip.color, boxShadow: `0 0 6px ${chip.color}80` }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: chip.color }}>{chip.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scrollable pill tabs */}
        <div style={{
          display: 'flex', gap: 7, flexWrap: 'wrap', marginBottom: 40,
        }}>
          {TABS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '9px 16px', borderRadius: 100,
                border: i === active ? `1.5px solid ${t.badgeColor}50` : '1px solid var(--color-border)',
                background: i === active ? `${t.badgeColor}0D` : 'transparent',
                color: i === active ? t.badgeColor : 'var(--color-muted)',
                fontSize: '0.78rem', fontWeight: i === active ? 700 : 500,
                fontFamily: 'var(--font-body)', cursor: 'pointer',
                transition: 'all 0.22s',
              }}
            >
              {t.icon}
              {t.label}
              {i === active && (
                <span style={{
                  fontSize: '0.5rem', fontWeight: 800, letterSpacing: '0.1em',
                  color: '#fff', background: t.badgeColor,
                  borderRadius: 100, padding: '2px 6px',
                }}>
                  {t.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div
          ref={contentRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1fr) minmax(0,400px)',
            gap: 48, alignItems: 'center',
          }}
          className="feat-grid"
        >
          {/* Left copy */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(1.5rem,2.5vw,2.2rem)',
              letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16,
            }}>
              {tab.headline}
            </h3>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: 28, maxWidth: 480 }}>
              {tab.sub}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {tab.items.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <div style={{
                    width: 18, height: 18, borderRadius: 5,
                    background: `${tab.badgeColor}15`,
                    border: `1px solid ${tab.badgeColor}35`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: 2,
                  }}>
                    <span style={{ fontSize: '0.55rem', color: tab.badgeColor }}>✓</span>
                  </div>
                  <span style={{ color: 'var(--color-muted)', fontSize: '0.88rem', lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right preview */}
          <div className="feat-preview">
            <MiniPreview tab={tab} />
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'var(--color-border)', margin: '80px 0 72px' }} />

        {/* Testimonials */}
        <div>
          <div className="section-label">REAL RESULTS</div>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(1.6rem,3vw,2.4rem)',
            letterSpacing: '-0.03em', marginBottom: 12,
          }}>
            They almost didn&apos;t try.{' '}
            <span style={{ background: 'linear-gradient(135deg,#00C26F,#0EA5E9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Now they can&apos;t keep up.
            </span>
          </h3>
          <p style={{ color: 'var(--color-muted)', fontSize: '0.92rem', lineHeight: 1.6, maxWidth: 480, marginBottom: 36 }}>
            Most clients see their first inquiry within 7 days. Some see it within hours.
          </p>

          <div ref={testiRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="testi-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="testi-card" style={{
                background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: 16, padding: 28,
                position: 'relative', overflow: 'hidden', cursor: 'default',
              }}>
                <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: 'linear-gradient(90deg,transparent,rgba(0,0,0,0.09),transparent)' }} />
                <div style={{ display: 'flex', gap: 2, marginBottom: 12 }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" />)}
                </div>
                <p style={{ color: 'var(--color-text)', fontSize: '0.88rem', lineHeight: 1.75, marginBottom: 20 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem' }}>{t.name}</div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--color-muted)', marginTop: 2 }}>{t.role}</div>
                  </div>
                  <div style={{
                    fontSize: '0.68rem', fontWeight: 600, color: '#00C26F',
                    background: 'rgba(0,194,110,0.08)', border: '1px solid rgba(0,194,110,0.2)',
                    borderRadius: 100, padding: '4px 10px', whiteSpace: 'nowrap',
                  }}>
                    ↑ {t.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .feat-grid { grid-template-columns: 1fr !important; }
          .feat-preview { display: none; }
          .testi-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .testi-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  )
}
