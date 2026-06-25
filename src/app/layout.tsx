import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
})

const TITLE = 'WebCrew — AI Builds Your Local Business Website Overnight, Free'
const DESC  = 'No website? WebCrew AI scans your brand, builds a cinematic lead-generating website overnight, and texts you the live link — free. Pay $299 only if you love it. HVAC, Roofing, Dentist, Med Spa, Salon, Cleaning and 20+ niches.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'AI website builder for local businesses',
    'free website for small business',
    'local business website overnight',
    'HVAC website design',
    'roofing company website',
    'dental office website',
    'med spa website',
    'salon website builder',
    'AI web agency',
    'website built overnight',
    'local SEO website',
    'Cloudflare Pages website',
  ],
  metadataBase: new URL('https://webcrew.app'),
  openGraph: {
    title: TITLE,
    description: DESC,
    url: 'https://webcrew.app',
    siteName: 'WebCrew',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'WebCrew — AI builds your local business website overnight' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://webcrew.app' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://webcrew.app/#organization',
      name: 'WebCrew',
      url: 'https://webcrew.app',
      logo: 'https://webcrew.app/logo.png',
      sameAs: [],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'hello@webcrew.app',
        availableLanguage: 'English',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://webcrew.app/#website',
      url: 'https://webcrew.app',
      name: 'WebCrew',
      publisher: { '@id': 'https://webcrew.app/#organization' },
    },
    {
      '@type': 'Service',
      '@id': 'https://webcrew.app/#service',
      name: 'AI Website Building for Local Businesses',
      provider: { '@id': 'https://webcrew.app/#organization' },
      serviceType: 'Website Design and Development',
      description: 'WebCrew AI builds cinematic, lead-generating websites for local businesses overnight — for free. HVAC, Roofing, Dental, Med Spa, Cleaning, Landscaping and 20+ niches. Pay $299 only if you love it.',
      offers: {
        '@type': 'Offer',
        price: '299',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '299',
          priceCurrency: 'USD',
          unitText: 'one-time',
        },
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does WebCrew cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WebCrew builds your demo site for free. You pay $299 one-time only if you love it. Hosting is $49/month and includes AI call answering, Google Business Profile posts, review replies, and monthly SEO reports.',
          },
        },
        {
          '@type': 'Question',
          name: 'How fast does WebCrew build a website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WebCrew AI builds and deploys your website in approximately 6 hours overnight. You receive a text with the live link by morning.',
          },
        },
        {
          '@type': 'Question',
          name: 'What types of businesses does WebCrew build websites for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WebCrew builds websites for 25+ local business niches including HVAC, Roofing, Plumbing, Dentist, Med Spa, Salon, Barbershop, Cleaning, Landscaping, Junk Removal, Remodeling, Auto Detailing, Restaurant, Law Firm, Daycare, and more.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I own my website after WebCrew builds it?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. After paying the $299 one-time fee, you own the full Next.js source code forever. Cancel hosting anytime — you keep the code.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does the $49/month WebCrew hosting include?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The $49/month plan includes Cloudflare Pages global CDN hosting, SSL, AI answering every inbound call 24/7, weekly Google Business Profile posts written by AI, AI replies to every Google review, monthly Google Search Console traffic report, and instant lead alerts texted to your phone.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does WebCrew build websites using AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WebCrew uses Firecrawl to scan your web presence and extract brand signals, then Gemini AI to generate a custom config, fal.ai Flux Pro to generate hero images, and deploys a full Next.js site to Cloudflare Pages automatically — all overnight.',
          },
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to get a free website from WebCrew',
      description: 'Get a professional AI-built website for your local business in 3 steps.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Sign up in 60 seconds',
          text: 'Enter your business name, phone number, and industry at webcrew.app. No credit card required.',
          position: 1,
        },
        {
          '@type': 'HowToStep',
          name: 'AI builds while you sleep',
          text: 'WebCrew AI generates your brand colors, copy, images, and deploys a live Next.js website to Cloudflare Pages overnight.',
          position: 2,
        },
        {
          '@type': 'HowToStep',
          name: 'Wake up to a live site and leads',
          text: 'You receive a text with your live site link. Pay $299 only if you love it.',
          position: 3,
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
