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
  title: 'WebCrew — Professional Websites That Get You More Jobs',
  description:
    'We find local businesses without great websites, build one overnight, and text you the link. Pay only if you love it. From $299.',
  metadataBase: new URL('https://webcrew.app'),
  openGraph: {
    title: 'WebCrew — Professional Websites That Get You More Jobs',
    description: 'Professional websites delivered overnight. Pay only if you love it. From $299.',
    url: 'https://webcrew.app',
    siteName: 'WebCrew',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebCrew — Professional Websites That Get You More Jobs',
    description: 'Professional websites delivered overnight. Pay only if you love it. From $299.',
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
