"use client"

import { useState } from "react"

const NICHES = [
  "HVAC / Air Conditioning",
  "Plumbing",
  "Roofing",
  "Landscaping",
  "Cleaning",
  "Junk Removal",
  "Auto Detailing",
  "Pressure Washing",
  "Remodeling",
  "Dentist / Dental",
  "Med Spa / Aesthetics",
  "Daycare / Childcare",
  "Other",
]

const PAIN_POINTS = [
  "Answering the same customer questions all day",
  "Missing calls when I'm on a job",
  "No-shows and last-minute cancellations",
  "Hard to get Google reviews",
  "No website or bad website",
  "Chasing leads that go cold",
]

const BUDGET = [
  "Not right now",
  "$49–99/mo",
  "$100–199/mo",
  "$200+/mo or one-time",
]

export default function SurveyPage() {
  const [step,    setStep]    = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
  const [phone,   setPhone]   = useState("")
  const [name,    setName]    = useState("")
  const [biz,     setBiz]     = useState("")
  const [done,    setDone]    = useState(false)
  const [sending, setSending] = useState(false)

  function pick(key: string, val: string) {
    setAnswers(a => ({ ...a, [key]: val }))
  }

  function toggleMulti(key: string, val: string) {
    setAnswers(a => {
      const cur = (a[key] as string[]) ?? []
      return { ...a, [key]: cur.includes(val) ? cur.filter(v => v !== val) : [...cur, val] }
    })
  }

  const steps = [
    // 0 — intro
    null,
    // 1 — business type
    {
      q: "What type of business do you run?",
      type: "single",
      key: "niche",
      options: NICHES,
    },
    // 2 — pain points
    {
      q: "What's your biggest headache running the business?",
      type: "multi",
      key: "pain",
      options: PAIN_POINTS,
    },
    // 3 — website
    {
      q: "Do you currently have a website?",
      type: "single",
      key: "has_website",
      options: ["No, I don't have one", "Yes, but it's outdated / not great", "Yes, it's fine"],
    },
    // 4 — AI interest
    {
      q: "If AI could handle one thing for your business, what would it be?",
      type: "single",
      key: "ai_want",
      options: [
        "Answer calls + texts 24/7 when I'm busy",
        "Get more Google reviews automatically",
        "A modern website that actually brings in calls",
        "Follow up with leads so they don't go cold",
        "Post to social media for me",
      ],
    },
    // 5 — budget
    {
      q: "What would you pay per month for that?",
      type: "single",
      key: "budget",
      options: BUDGET,
    },
    // 6 — contact
    null,
  ]

  async function submit() {
    setSending(true)
    try {
      const api = process.env.NEXT_PUBLIC_API_URL ?? "https://api.webcrew.app"
      await fetch(`${api}/survey`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, biz, phone, ...answers }),
      })
    } catch { /* non-blocking */ }
    setDone(true)
    setSending(false)
  }

  const btn = {
    display: "inline-block",
    padding: "14px 32px",
    borderRadius: 10,
    background: "linear-gradient(135deg,#6366f1,#4f46e5)",
    color: "#fff",
    fontSize: 15,
    fontWeight: 700,
    border: "none",
    cursor: "pointer",
    marginTop: 24,
  } as const

  const optBtn = (active: boolean) => ({
    display: "block",
    width: "100%",
    textAlign: "left" as const,
    padding: "14px 18px",
    borderRadius: 10,
    border: `1.5px solid ${active ? "#6366f1" : "rgba(255,255,255,0.1)"}`,
    background: active ? "rgba(99,102,241,0.15)" : "rgba(255,255,255,0.03)",
    color: active ? "#a5b4fc" : "rgba(255,255,255,0.7)",
    fontSize: 15,
    cursor: "pointer",
    marginBottom: 8,
    fontWeight: active ? 600 : 400,
    transition: "all 0.12s",
  })

  const inp = {
    display: "block",
    width: "100%",
    padding: "13px 16px",
    borderRadius: 10,
    border: "1.5px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.05)",
    color: "#fff",
    fontSize: 15,
    outline: "none",
    marginBottom: 12,
    boxSizing: "border-box" as const,
  }

  const total = steps.length - 1

  if (done) {
    return (
      <main style={{ minHeight: "100vh", background: "#080b14", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <div style={{ maxWidth: 480, textAlign: "center" }}>
          <div style={{ fontSize: 56, marginBottom: 20 }}>🎉</div>
          <h1 style={{ color: "#fff", fontSize: 28, fontWeight: 800, margin: "0 0 12px" }}>Thanks, {name || "friend"}!</h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, lineHeight: 1.6 }}>
            We'll review your answers and reach out within 24 hours with a free demo built specifically for your business.
          </p>
          <p style={{ color: "#6366f1", fontSize: 14, marginTop: 24 }}>webcrew.app</p>
        </div>
      </main>
    )
  }

  return (
    <main style={{ minHeight: "100vh", background: "#080b14", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ maxWidth: 520, width: "100%" }}>

        {/* Header */}
        <div style={{ marginBottom: 36, textAlign: "center" }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", color: "#6366f1", textTransform: "uppercase", marginBottom: 10 }}>
            WebCrew · 2 min survey
          </div>
          <h1 style={{ color: "#fff", fontSize: 26, fontWeight: 800, margin: 0, lineHeight: 1.25 }}>
            Help us build the right tools for your business
          </h1>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, marginTop: 8 }}>
            We build AI tools for local businesses. Tell us what you actually need.
          </p>
        </div>

        {/* Progress */}
        {step > 0 && step < total && (
          <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 99, height: 4, marginBottom: 32 }}>
            <div style={{ background: "#6366f1", borderRadius: 99, height: 4, width: `${(step / (total - 1)) * 100}%`, transition: "width 0.3s" }} />
          </div>
        )}

        {/* Step 0 — Intro */}
        {step === 0 && (
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
              {[
                ["⚡", "90 seconds", "Super quick"],
                ["🎁", "Free website demo", "We'll build one for you based on your answers"],
                ["🚫", "No spam, no sales calls", "Unless you want one"],
              ].map(([icon, title, sub]) => (
                <div key={title} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 16px", background: "rgba(255,255,255,0.03)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.07)" }}>
                  <span style={{ fontSize: 22 }}>{icon}</span>
                  <div>
                    <div style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>{title}</div>
                    <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 13 }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <button style={btn} onClick={() => setStep(1)}>Start Survey →</button>
          </div>
        )}

        {/* Steps 1-5 — questions */}
        {step >= 1 && step <= 5 && (() => {
          const s = steps[step]!
          const cur = answers[s.key]
          return (
            <div>
              <h2 style={{ color: "#fff", fontSize: 20, fontWeight: 700, margin: "0 0 22px" }}>{s.q}</h2>
              {s.options.map(opt => {
                const active = s.type === "multi"
                  ? ((cur as string[]) ?? []).includes(opt)
                  : cur === opt
                return (
                  <button
                    key={opt}
                    style={optBtn(active)}
                    onClick={() => s.type === "multi" ? toggleMulti(s.key, opt) : pick(s.key, opt)}
                  >
                    {active ? "✓ " : ""}{opt}
                  </button>
                )
              })}
              <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
                <button
                  onClick={() => setStep(s => s - 1)}
                  style={{ ...btn, background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)", padding: "14px 20px" }}
                >
                  ←
                </button>
                <button
                  onClick={() => setStep(s => s + 1)}
                  disabled={s.type === "single" ? !cur : false}
                  style={{ ...btn, opacity: (s.type === "single" && !cur) ? 0.4 : 1, flex: 1 }}
                >
                  {step === 5 ? "Almost done →" : "Next →"}
                </button>
              </div>
            </div>
          )
        })()}

        {/* Step 6 — contact */}
        {step === 6 && (
          <div>
            <h2 style={{ color: "#fff", fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}>
              Last step — where should we send your free demo?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, marginBottom: 24 }}>
              We'll build a free website preview for your business and text/call you.
            </p>
            <input
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
              style={inp}
            />
            <input
              placeholder="Business name"
              value={biz}
              onChange={e => setBiz(e.target.value)}
              style={inp}
            />
            <input
              placeholder="Phone number (we'll text you the demo)"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              type="tel"
              style={inp}
            />
            <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
              <button
                onClick={() => setStep(5)}
                style={{ ...btn, background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)", padding: "14px 20px" }}
              >
                ←
              </button>
              <button
                onClick={submit}
                disabled={sending || !name || !phone}
                style={{ ...btn, flex: 1, opacity: (!name || !phone) ? 0.4 : 1 }}
              >
                {sending ? "Sending…" : "Get My Free Demo →"}
              </button>
            </div>
            <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 12, marginTop: 16, textAlign: "center" }}>
              No spam. No monthly fees. Reply STOP anytime.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
