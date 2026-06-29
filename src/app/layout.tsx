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
      description: 'WebCrew builds AI-powered websites for local businesses overnight — free demo, $299 to own, $49/mo to grow with a full AI team.',
      foundingDate: '2024',
      logo: {
        '@type': 'ImageObject',
        url: 'https://webcrew.app/logo.png',
        width: 512,
        height: 512,
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'hello@webcrew.app',
        availableLanguage: 'English',
        url: 'https://webcrew.app/#contact',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://webcrew.app/#website',
      url: 'https://webcrew.app',
      name: 'WebCrew',
      inLanguage: 'en-US',
      publisher: { '@id': 'https://webcrew.app/#organization' },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://webcrew.app/#webpage',
      url: 'https://webcrew.app',
      name: 'WebCrew — AI Builds Your Local Business Website Overnight, Free',
      description: 'No website? WebCrew AI scans your brand, builds a cinematic lead-generating website overnight, and texts you the live link — free. Pay $299 only if you love it.',
      isPartOf: { '@id': 'https://webcrew.app/#website' },
      about: { '@id': 'https://webcrew.app/#service' },
      publisher: { '@id': 'https://webcrew.app/#organization' },
      inLanguage: 'en-US',
      dateModified: new Date().toISOString().split('T')[0],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://webcrew.app/#app',
      name: 'WebCrew',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: 'AI-powered website builder that creates custom local business websites overnight using Gemini AI, fal.ai, and Cloudflare Pages.',
      provider: { '@id': 'https://webcrew.app/#organization' },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: 'Free demo site — pay $299 only if you love it.',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '47',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://webcrew.app/#service',
      name: 'AI Website Building for Local Businesses',
      provider: { '@id': 'https://webcrew.app/#organization' },
      serviceType: 'Website Design and Development',
      category: 'Digital Marketing Services',
      description: 'WebCrew AI builds cinematic, lead-generating websites for local businesses overnight — for free. HVAC, Roofing, Dental, Med Spa, Cleaning, Landscaping and 25+ niches. Pay $299 one-time only if you love it.',
      areaServed: {
        '@type': 'Country',
        name: 'United States',
        sameAs: 'https://www.wikidata.org/wiki/Q30',
      },
      offers: [
        {
          '@type': 'Offer',
          name: 'Website Ownership — One-Time',
          price: '299',
          priceCurrency: 'USD',
          description: 'One-time payment to own the full Next.js source code of your AI-built website forever.',
          url: 'https://webcrew.app/#pricing',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Hosting + AI Team',
          price: '49',
          priceCurrency: 'USD',
          description: 'Monthly plan including Cloudflare CDN hosting, AI call answering 24/7, weekly GBP posts, automated review replies, monthly SEO reports, and instant lead alerts.',
          url: 'https://webcrew.app/#pricing',
          availability: 'https://schema.org/InStock',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is this actually free? What\'s the catch?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, completely free to start. Here\'s exactly how it works: WebCrew builds your demo site at no cost — no credit card, no deposit, no commitment. If you see it live and love it, subscribe for $49/month, which covers Cloudflare CDN hosting, AI call answering 24/7, weekly Google Business Profile posts, automated review replies, monthly SEO reports, and instant lead alerts via SMS. Your website is yours the moment you pay. If you don\'t love it — for any reason — you pay nothing and we part ways with no invoices, no follow-up sales calls, and no guilt trips. WebCrew only makes money when clients love what was built, so the incentive to get it right is extremely high. The $299 one-time fee unlocks full Next.js source code ownership, meaning you can host it anywhere and cancel the $49/mo plan whenever you want while keeping your site.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this just a template with my name swapped in?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Every WebCrew site is built from scratch for your specific trade, city, and brand. A plumber in Dallas gets a completely different site from a plumber in Chicago — different design, different copy, different images, different color palette. Two HVAC companies in the same city receive different layouts, different headline angles, and different photography. WebCrew\'s AI pipeline uses Firecrawl to scan your existing web presence and extract real brand signals, then Gemini AI to generate city-specific copy and a custom configuration unique to your business. Fal.ai Flux Pro generates custom hero images. Nothing is copy-pasted. The result is a site that reflects your actual business — not a generic template with your name dropped in.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it actually take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WebCrew builds and deploys a complete custom website in approximately 6 hours. The process starts the moment you submit the form — no discovery calls, no briefs, no waiting on a human. WebCrew\'s AI pipeline scans your existing web presence using Firecrawl, generates city-specific copy and brand colors using Gemini AI, creates custom hero images using fal.ai Flux Pro, and deploys a live Next.js site to Cloudflare Pages, all without human involvement. Most builds complete overnight so you wake up to a text message with your live link. The deployed site typically scores 97/100 on Google PageSpeed. In cases where a business has a particularly complex niche, builds can take up to 12 hours. No client has waited longer than 24 hours since WebCrew launched.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I already have a website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use the "Upgrade My Site" tab in the contact form. WebCrew builds a complete redesign as a free demo while your current site stays live — zero risk, zero downtime, no DNS changes. You get to compare your existing site against the WebCrew-built version. If the new site is better, you switch. If not, you keep yours and pay nothing. Most clients who use this path switch to the WebCrew site. The redesign process uses the same AI pipeline: Firecrawl scans your current site to extract brand signals, colors, and services, then builds a new version that preserves your identity while dramatically improving design quality, PageSpeed score, and local SEO signals.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I hate it?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Then you don\'t pay. WebCrew deletes the demo. No hard feelings, no invoices, no follow-up guilt trips, no passive-aggressive emails. It\'s that simple. WebCrew only makes money when clients love what was built — so there is a very strong incentive to get it right the first time. If the first build misses the mark, WebCrew will rebuild. The free demo model only works if the output is genuinely impressive, which is why the AI pipeline is continuously improved based on client feedback. No client has ever been charged for a site they didn\'t approve.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will this actually rank on Google?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Every WebCrew site launches with city-specific keyword copy, schema markup (LocalBusiness, Service, FAQPage, AggregateRating), a sitemap.xml, and a robots.txt optimized for Google indexing. The $49/month plan includes weekly Google Business Profile posts that keep your GBP active and signal consistent local relevance to Google. Automated review replies increase review velocity, which is one of the strongest local ranking factors. Monthly Google Search Console reports show exactly which search terms are driving traffic. Most clients see their first Google-sourced inquiry within 7 days of going live. Sites average a 97/100 Google PageSpeed score, which directly supports Core Web Vitals rankings.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does the $49/month actually include?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The $49/month WebCrew plan includes Cloudflare Pages global CDN hosting with 99.9% uptime and automatic SSL, AI answering every inbound call 24/7 with a trained voice agent that knows your services, hours, and pricing, weekly Google Business Profile posts written by AI to keep your GBP active, automated AI replies to every Google review (positive and negative) to show responsiveness, a monthly Google Search Console traffic report showing impressions, clicks, and keyword rankings, and instant SMS alerts every time a new lead submits your contact form. The equivalent stack from a traditional agency — hosting, receptionist, GBP management, review management, and SEO reporting — runs $460 or more per month. The $49/mo founding member rate is locked for life.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I own the site if I pay?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Completely. After paying the $299 one-time fee, you receive the full Next.js source code for your website. You can host it anywhere — Vercel, Netlify, your own server, or stay on Cloudflare Pages with the $49/mo plan. Cancel the monthly plan at any time and keep the code. There is no lock-in, no platform dependency, and no "your site disappears if you cancel" clause. The source code is your asset, not WebCrew\'s. This is a deliberate design decision: WebCrew only makes money on the ongoing value it delivers (calls answered, reviews replied, GBP posts, traffic reports), not by holding your site hostage.',
          },
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
