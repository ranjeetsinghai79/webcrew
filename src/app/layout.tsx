import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'WebCrew — Luxury Websites for Local Businesses',
  description:
    'AI-powered luxury websites for local businesses. We find businesses without great websites, build them overnight, and handle outreach. From $299.',
  metadataBase: new URL('https://webcrew.app'),
  openGraph: {
    title: 'WebCrew — Luxury Websites for Local Businesses',
    description: 'AI-powered luxury websites delivered overnight. From $299.',
    url: 'https://webcrew.app',
    siteName: 'WebCrew',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebCrew — Luxury Websites for Local Businesses',
    description: 'AI-powered luxury websites delivered overnight. From $299.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
