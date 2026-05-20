import LoadingScreen    from '@/components/loading-screen'
import ScrollProgress   from '@/components/scroll-progress'
import SmoothScroll     from '@/components/smooth-scroll'
import Cursor           from '@/components/cursor'
import Nav              from '@/components/nav'
import Hero             from '@/components/hero'
import Ticker           from '@/components/ticker'
import HowItWorks       from '@/components/how-it-works'
import Showcase         from '@/components/showcase'
import BeforeAfter      from '@/components/before-after'
import Features         from '@/components/features'
import MoneyShot        from '@/components/money-shot'
import Results          from '@/components/results'
import Pricing          from '@/components/pricing'
import Contact          from '@/components/contact'
import Footer           from '@/components/footer'

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
        <HowItWorks />
        <Showcase />
        <BeforeAfter />
        <Features />
        <MoneyShot />
        <Results />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
