import LoadingScreen    from '@/components/loading-screen'
import ScrollProgress   from '@/components/scroll-progress'
import SmoothScroll     from '@/components/smooth-scroll'
import Cursor           from '@/components/cursor'
import Nav              from '@/components/nav'
import Hero             from '@/components/hero'
import Ticker           from '@/components/ticker'
import HowItWorks       from '@/components/how-it-works'
import BeforeAfter      from '@/components/before-after'
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
        <BeforeAfter />
        <Results />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
