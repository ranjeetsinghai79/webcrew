import LoadingScreen    from '@/components/loading-screen'
import ScrollProgress   from '@/components/scroll-progress'
import SmoothScroll     from '@/components/smooth-scroll'
import Cursor           from '@/components/cursor'
import Nav              from '@/components/nav'
import Hero             from '@/components/hero'
import Ticker           from '@/components/ticker'
import MoneyShot        from '@/components/money-shot'
import HowItWorks       from '@/components/how-it-works'
import Showcase         from '@/components/showcase'
import Features         from '@/components/features'
import Results          from '@/components/results'
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
        <Showcase />
        <Features />
        <Results />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <UrgencyBar />
    </>
  )
}
