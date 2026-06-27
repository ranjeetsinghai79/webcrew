'use client'

function encode(svg: string) {
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

// ─── Each logo: icon + wordmark in one SVG, viewBox height = 56 ──────────────

const FIRECRAWL = encode(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 56" fill="none">
<defs>
  <linearGradient id="a" x1="23" y1="3" x2="23" y2="53" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#E8441A"/>
    <stop offset="0.4" stop-color="#FF8700"/>
    <stop offset="0.75" stop-color="#FFB800"/>
    <stop offset="1" stop-color="#FFE066"/>
  </linearGradient>
  <linearGradient id="b" x1="23" y1="17" x2="23" y2="51" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#FFFAED" stop-opacity=".95"/>
    <stop offset="1" stop-color="#FFF5D4" stop-opacity=".5"/>
  </linearGradient>
</defs>
<path d="M23 3C23 3 14 15 17 24 11 20 10 12 10 12 6 20 7 32 12 40 14 46 18 53 23 53 28 53 32 46 34 40 39 32 40 20 36 12 36 12 35 20 29 24 31 15 23 3Z" fill="url(#a)"/>
<path d="M23 19C23 19 20 26 21 32 19 29 19 24 19 24 17 28 18 35 20 39 21 42 23 47 23 47 23 47 25 42 26 39 28 35 29 29 27 24 27 24 27 29 25 32 26 26 23 19Z" fill="url(#b)"/>
<text x="48" y="37" font-family="Inter,-apple-system,BlinkMacSystemFont,sans-serif" font-size="23" font-weight="600" fill="#1A1A1A" letter-spacing="-.4">Firecrawl</text>
</svg>`)

const CLOUDFLARE = encode(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255 56" fill="none">
<path d="M63 40 L16 40 C10.5 40 6 35.5 6 30 6 24.5 10.5 20 16 20 16 19.2 16 18.4 16 17.6 16 10.2 22.2 4 29.6 4 32.5 4 35.2 5 37.4 6.6 39.8 2.5 44.5 0 49.8 0 58.9 0 66.5 7.2 66.8 16.4 70.8 17.4 74 21.2 74 25.8 74 30.8 69.9 35 64.9 35 L64 35 C63.5 37 62.2 39 60.5 40Z" fill="#F38020"/>
<path d="M64 35 L60.5 40 C62.2 39 63.5 37 64 35Z" fill="#F38020"/>
<path d="M64.9 35 L66.8 16.4 C66.5 7.2 58.9 0 49.8 0 44.5 0 39.8 2.5 37.4 6.6 38.8 5.8 40.4 5.4 42.1 5.4 50.4 5.4 57.1 11.6 57.4 19.6 61 20.5 63.7 23.8 63.7 27.8 63.7 31.5 61.1 34.6 57.5 35 L64.9 35Z" fill="#FBAD41"/>
<text x="84" y="38" font-family="'Helvetica Neue',Arial,sans-serif" font-size="16.5" font-weight="800" fill="#1D1D1B" letter-spacing="1.8">CLOUDFLARE</text>
</svg>`)

const NEXTJS = encode(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 56" fill="none">
<defs>
  <linearGradient id="nl" x1="39" y1="13" x2="39" y2="43" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="white" stop-opacity="1"/>
    <stop offset="1" stop-color="white" stop-opacity="0"/>
  </linearGradient>
  <clipPath id="nc"><circle cx="28" cy="28" r="23"/></clipPath>
</defs>
<circle cx="28" cy="28" r="23" fill="#000"/>
<line x1="18" y1="15" x2="18" y2="41" stroke="white" stroke-width="3.5" stroke-linecap="round" clip-path="url(#nc)"/>
<line x1="18" y1="15" x2="39" y2="41" stroke="white" stroke-width="3.5" stroke-linecap="round" clip-path="url(#nc)"/>
<line x1="39" y1="13" x2="39" y2="43" stroke="url(#nl)" stroke-width="3.5" stroke-linecap="round"/>
<text x="60" y="37" font-family="Inter,-apple-system,BlinkMacSystemFont,sans-serif" font-size="23" font-weight="700" fill="#000" letter-spacing="-.5">Next.js</text>
</svg>`)

const GEMINI = encode(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 205 56" fill="none">
<defs>
  <linearGradient id="gs" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#4285F4"/>
    <stop offset="0.45" stop-color="#8B5CF6"/>
    <stop offset="1" stop-color="#EA4335"/>
  </linearGradient>
  <linearGradient id="gt" x1="62" y1="28" x2="190" y2="28" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#4285F4"/>
    <stop offset="0.5" stop-color="#8B5CF6"/>
    <stop offset="1" stop-color="#EA4335"/>
  </linearGradient>
</defs>
<path d="M28 4C28 17 21.5 22.5 4 28 21.5 28 28 33.5 28 52 28 33.5 34.5 28 52 28 34.5 28 28 22.5 28 4Z" fill="url(#gs)"/>
<text x="62" y="34" font-family="'Google Sans','Product Sans',Arial,sans-serif" font-size="23" font-weight="500" fill="url(#gt)" letter-spacing="-.2">Gemini AI</text>
</svg>`)

const TWILIO = encode(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 56" fill="none">
<circle cx="28" cy="28" r="24" fill="#F22F46"/>
<circle cx="21" cy="21" r="5" fill="white"/>
<circle cx="35" cy="21" r="5" fill="white"/>
<circle cx="21" cy="35" r="5" fill="white"/>
<circle cx="35" cy="35" r="5" fill="white"/>
<text x="62" y="36" font-family="Inter,-apple-system,BlinkMacSystemFont,sans-serif" font-size="23" font-weight="700" fill="#F22F46" letter-spacing="-.2">twilio</text>
</svg>`)

const NEON = encode(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155 56" fill="none">
<defs>
  <linearGradient id="ng" x1="3" y1="3" x2="51" y2="53" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#00E5BF"/>
    <stop offset="0.5" stop-color="#00D68C"/>
    <stop offset="1" stop-color="#39FF14"/>
  </linearGradient>
</defs>
<rect x="3" y="3" width="50" height="50" rx="12" fill="url(#ng)"/>
<path d="M13 41 L13 15 L41 41 L41 15" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<text x="63" y="37" font-family="Inter,-apple-system,BlinkMacSystemFont,sans-serif" font-size="23" font-weight="600" fill="#0D1117" letter-spacing="-.3">neon</text>
</svg>`)

const RESEND = encode(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 56" fill="none">
<defs>
  <linearGradient id="rg" x1="26" y1="6" x2="26" y2="50" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#111"/>
    <stop offset="1" stop-color="#555"/>
  </linearGradient>
</defs>
<path d="M6 6L6 50L19 50L19 33L30 50L45 50L31 31C38.5 29 43.5 23 43.5 15.5 43.5 9.5 38.5 6 30 6Z M19 14.5L27 14.5C31.5 14.5 33.5 17 33.5 20.5 33.5 24 31.5 26.5 27 26.5L19 26.5Z" fill="url(#rg)"/>
<text x="54" y="37" font-family="Inter,-apple-system,BlinkMacSystemFont,sans-serif" font-size="23" font-weight="600" fill="#000" letter-spacing="-.3">Resend</text>
</svg>`)

const VERCEL = encode(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162 56" fill="none">
<path d="M28 6L52 50H4L28 6Z" fill="#000"/>
<text x="62" y="37" font-family="Inter,-apple-system,BlinkMacSystemFont,sans-serif" font-size="23" font-weight="600" fill="#000" letter-spacing="-.3">Vercel</text>
</svg>`)

const GOOGLECLOUD = encode(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 56" fill="none">
<path d="M28 8 A20 20 0 0 0 8 28 A20 20 0 0 0 28 48 A20 20 0 0 0 44.5 37.8" stroke="#4285F4" stroke-width="7" fill="none" stroke-linecap="round"/>
<path d="M28 8 A20 20 0 0 1 47 24" stroke="#EA4335" stroke-width="7" fill="none" stroke-linecap="round"/>
<path d="M47 24 L28 24" stroke="#FBBC04" stroke-width="7" fill="none" stroke-linecap="round"/>
<path d="M47 24 A20 20 0 0 1 44.5 37.8" stroke="#34A853" stroke-width="7" fill="none" stroke-linecap="round"/>
<text x="58" y="24" font-family="Arial,sans-serif" font-size="15.5" font-weight="500" fill="#5F6368">Google</text>
<text x="58" y="42" font-family="Arial,sans-serif" font-size="15.5" font-weight="400" fill="#5F6368">Cloud</text>
</svg>`)

// ─── Logo list ───────────────────────────────────────────────────────────────

const LOGOS = [
  { id: 'googlecloud', src: GOOGLECLOUD, alt: 'Google Cloud' },
  { id: 'cloudflare',  src: CLOUDFLARE,  alt: 'Cloudflare'   },
  { id: 'nextjs',      src: NEXTJS,      alt: 'Next.js'      },
  { id: 'gemini',      src: GEMINI,      alt: 'Gemini AI'    },
  { id: 'twilio',      src: TWILIO,      alt: 'Twilio'       },
  { id: 'firecrawl',  src: FIRECRAWL,  alt: 'Firecrawl'   },
  { id: 'vercel',      src: VERCEL,      alt: 'Vercel'       },
  { id: 'neon',        src: NEON,        alt: 'Neon'         },
  { id: 'resend',      src: RESEND,      alt: 'Resend'       },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function TrustLogos() {
  const tripled = [...LOGOS, ...LOGOS, ...LOGOS]

  return (
    <div style={{
      padding: 'clamp(44px,6vw,72px) 0',
      borderTop: '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)',
      background: 'var(--color-surface)',
      overflow: 'hidden',
    }}>
      {/* Label */}
      <div style={{
        textAlign: 'center',
        fontSize: '0.65rem',
        fontWeight: 700,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'var(--color-muted)',
        marginBottom: 32,
      }}>
        Powered by enterprise&#8209;grade technology
      </div>

      {/* Scroll track */}
      <div style={{ position: 'relative' }}>
        {/* Fade edges */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, zIndex: 1, background: 'linear-gradient(90deg, var(--color-surface) 30%, transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, zIndex: 1, background: 'linear-gradient(-90deg, var(--color-surface) 30%, transparent)', pointerEvents: 'none' }} />

        <div className="trust-track">
          {tripled.map((logo, i) => (
            <div
              key={`${logo.id}-${i}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0 56px',
                flexShrink: 0,
                opacity: 1,
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.06)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)' }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                height={44}
                style={{ display: 'block', height: 44, width: 'auto' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
