import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quick Survey — WebCrew',
  robots: { index: false, follow: false },
}

export default function SurveyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
