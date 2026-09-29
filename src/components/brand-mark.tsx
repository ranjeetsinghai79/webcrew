'use client'

// Animated brand mark — the WebCrew smiley (black disc, white eyes, orange
// smile), same artwork as public/logo.png + app/icon.png, drawn as SVG so it
// stays sharp at any size and can blink/breathe. Used as the logo everywhere
// a static image used to sit.
export default function BrandMark({ size = 32, id, className }: { size?: number; id?: string; className?: string }) {
  return (
    <div
      id={id}
      className={className}
      style={{ width: size, height: size, borderRadius: '50%', position: 'relative', flexShrink: 0, background: '#000' }}
    >
      <style>{`
        @keyframes wc-mark-blink { 0%, 92%, 100% { transform: scaleY(1); } 96% { transform: scaleY(0.1); } }
        @keyframes wc-mark-breathe { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.04); } }
        .wc-mark-eye { transform-box: fill-box; transform-origin: center; animation: wc-mark-blink 4.5s ease-in-out infinite; }
        .wc-mark-idle { animation: wc-mark-breathe 3.2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .wc-mark-eye, .wc-mark-idle { animation: none; } }
      `}</style>
      <svg className="wc-mark-idle" viewBox="0 0 100 100" width={size} height={size} role="img" aria-label="WebCrew" style={{ display: 'block' }}>
        <circle className="wc-mark-eye" cx="32.2" cy="45.8" r="7.1" fill="#fff" />
        <circle className="wc-mark-eye" cx="68" cy="45.8" r="7.1" fill="#fff" />
        <path d="M32 64.6 Q50 81.6 68 64.6" fill="none" stroke="var(--wc-orange, #ff6b1a)" strokeWidth="5.2" strokeLinecap="round" />
      </svg>
    </div>
  )
}
