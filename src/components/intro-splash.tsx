'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

// One-time logo intro on the homepage: plays /intro.mp4 (the WebCrew mark
// drawing itself in) full-screen, then fades out. Never blocks the page —
// content is already rendered underneath — and is skipped entirely for
// reduced-motion users, slow connections, and repeat visits in a session.
const SEEN_KEY = 'wc-intro-seen'
const FADE_AT_S = 4.0   // the reveal is done by ~3s; hold the last beat then fade
const FAILSAFE_MS = 7000
const FADE_MS = 500

export default function IntroSplash() {
  const [show, setShow] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const dismiss = useCallback(() => setLeaving(true), [])

  useEffect(() => {
    try {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const conn = (navigator as Navigator & { connection?: { effectiveType?: string; saveData?: boolean } }).connection
      if (conn?.saveData || conn?.effectiveType === 'slow-2g' || conn?.effectiveType === '2g') return
      if (sessionStorage.getItem(SEEN_KEY)) return
      sessionStorage.setItem(SEEN_KEY, '1')
    } catch { /* storage blocked — still fine to show once per load */ }
    setShow(true)
  }, [])

  useEffect(() => {
    if (!show) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const failsafe = window.setTimeout(dismiss, FAILSAFE_MS)
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') dismiss() }
    window.addEventListener('keydown', onKey)
    videoRef.current?.play().catch(dismiss) // autoplay blocked → don't hold the page
    return () => {
      document.body.style.overflow = prevOverflow
      window.clearTimeout(failsafe)
      window.removeEventListener('keydown', onKey)
    }
  }, [show, dismiss])

  useEffect(() => {
    if (!leaving) return
    const t = window.setTimeout(() => setShow(false), FADE_MS)
    return () => window.clearTimeout(t)
  }, [leaving])

  if (!show) return null

  return (
    <div
      role="presentation"
      onClick={dismiss}
      style={{
        position: 'fixed', inset: 0, zIndex: 10000, background: '#fdfdfd',
        opacity: leaving ? 0 : 1, transition: `opacity ${FADE_MS}ms ease`,
        pointerEvents: leaving ? 'none' : 'auto', cursor: 'pointer',
      }}
    >
      <video
        ref={videoRef}
        src="/intro.mp4"
        poster="/intro-poster.jpg"
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        onTimeUpdate={(e) => { if (e.currentTarget.currentTime >= FADE_AT_S) dismiss() }}
        onEnded={dismiss}
        onError={dismiss}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); dismiss() }}
        style={{
          position: 'absolute', right: 20, bottom: 20, padding: '8px 14px', borderRadius: 999,
          border: '1px solid rgba(15,23,42,.15)', background: 'rgba(255,255,255,.8)', color: '#475467',
          font: '600 12px var(--font-body, system-ui)', cursor: 'pointer',
        }}
      >
        Skip
      </button>
    </div>
  )
}
