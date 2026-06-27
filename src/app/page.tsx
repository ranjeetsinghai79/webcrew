import LoadingScreen    from '@/components/loading-screen'
import ScrollProgress   from '@/components/scroll-progress'
import SmoothScroll     from '@/components/smooth-scroll'
import Cursor           from '@/components/cursor'
import Nav              from '@/components/nav'
import Hero             from '@/components/hero'
import Ticker           from '@/components/ticker'
import MoneyShot        from '@/components/money-shot'
import HowItWorks       from '@/components/how-it-works'
import Comparison       from '@/components/comparison'
import TrustLogos       from '@/components/trust-logos'
import Showcase         from '@/components/showcase'
import Features         from '@/components/features'
import Results          from '@/components/results'
import WhyWebcrew       from '@/components/why-webcrew'
import AfterYouJoin     from '@/components/after-you-join'
import ComingSoon       from '@/components/coming-soon'
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
        <Hero />
        <Ticker />
        <MoneyShot />
        <HowItWorks />
        <TrustLogos />
        <Comparison />
        <Showcase />
        <Features />
        <Results />
        <WhyWebcrew />
        <AfterYouJoin />
        <ComingSoon />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <UrgencyBar />
    </>
  )
}
