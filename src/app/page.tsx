import LoadingScreen    from '@/components/loading-screen'
import ScrollProgress   from '@/components/scroll-progress'
import SmoothScroll     from '@/components/smooth-scroll'
import Cursor           from '@/components/cursor'
import Nav              from '@/components/nav'
import Hero             from '@/components/hero'
import Ticker           from '@/components/ticker'
import MoneyShot        from '@/components/money-shot'
import HowItWorks       from '@/components/how-it-works'
import TrustLogos       from '@/components/trust-logos'
import Showcase         from '@/components/showcase'
import Features         from '@/components/features'
import Results          from '@/components/results'
import ComingSoon       from '@/components/coming-soon'
import Comparison       from '@/components/comparison'
import WhyWebcrew       from '@/components/why-webcrew'
import Pricing          from '@/components/pricing'
import FAQ              from '@/components/faq'
import Contact          from '@/components/contact'
import Footer           from '@/components/footer'
import UrgencyBar       from '@/components/urgency-bar'

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
        {/* 2. Social proof motion */}
        <Ticker />
        {/* 3. Visual wow — product UI */}
        <MoneyShot />
        {/* 4. How simple it is */}
        <HowItWorks />
        {/* 5. Credibility logos */}
        <TrustLogos />
        {/* 6. Proof — live sites with results */}
        <Showcase />
        {/* 7. What the AI team does, in depth */}
        <Features />
        {/* 8. Numbers + testimonials + AI activity feed */}
        <Results />
        {/* 9. Unique differentiator — AEO / LLM visibility */}
        <ComingSoon />
        {/* 10. Pain/solution framing before price reveal */}
        <WhyWebcrew />
        {/* 11. Comparison — sets up why pricing is a no-brainer */}
        <Comparison />
        {/* 12. Ready to buy */}
        <Pricing />
        {/* 13. Convert — form before objections */}
        <Contact />
        {/* 14. Handle objections last */}
        <FAQ />
      </main>
      <Footer />
      <UrgencyBar />
    </>
  )
}
