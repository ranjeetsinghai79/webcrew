import MissedCallLanding from '@/components/missed-call-landing'
import Pricing from '@/components/pricing'
import { SHOW_PUBLIC_PRICING } from '@/lib/features'

export default function Home() {
  return (
    <>
      <MissedCallLanding showPricing={SHOW_PUBLIC_PRICING} />
      {SHOW_PUBLIC_PRICING && <Pricing />}
    </>
  )
}
