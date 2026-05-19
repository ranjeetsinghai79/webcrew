import LoadingScreen from '@/components/loading-screen'
import ScrollProgress from '@/components/scroll-progress'
import SmoothScroll from '@/components/smooth-scroll'
import Nav from '@/components/nav'
import Hero from '@/components/hero'
import HowItWorks from '@/components/how-it-works'
import Results from '@/components/results'
import Pricing from '@/components/pricing'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Results />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
