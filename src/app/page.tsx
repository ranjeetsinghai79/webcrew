import LoadingScreen  from '@/components/loading-screen'
import ScrollProgress from '@/components/scroll-progress'
import SmoothScroll   from '@/components/smooth-scroll'
import Cursor         from '@/components/cursor'
import Nav            from '@/components/nav'
import Hero           from '@/components/hero'
import MoneyShot      from '@/components/money-shot'
import HowItWorks     from '@/components/how-it-works'
import TrustLogos     from '@/components/trust-logos'
import Showcase       from '@/components/showcase'
import Features       from '@/components/features'
import Results        from '@/components/results'
import Pricing        from '@/components/pricing'
import FAQ            from '@/components/faq'
import Contact        from '@/components/contact'
import Footer         from '@/components/footer'
import UrgencyBar     from '@/components/urgency-bar'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <SmoothScroll />
      <Cursor />
      <Nav />
      <main>
        {/* 1. Hook */}
        <Hero />
        {/* 2. The math — pain + revenue calculator */}
        <MoneyShot />
        {/* 3. How simple it is */}
        <HowItWorks />
        {/* 4. Tech stack credibility */}
        <TrustLogos />
        {/* 5. Proof — live sites */}
        <Showcase />
        {/* 6. What the AI team does */}
        <Features />
        {/* 7. Numbers + social proof */}
        <Results />
        {/* 8. Pricing */}
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <UrgencyBar />
    </>
  )
}
