import NicheLanding, { NicheContent } from '@/components/niche-landing'

export const metadata = {
  title: 'AI Receptionist & Virtual Receptionist for Electricians | WebCrew',
  description: 'Electrician answering service and virtual receptionist. Answers every call 24/7, flags sparking outlets and power outages, books routine jobs to Google Calendar. $0 setup, 30-day free trial.',
  alternates: { canonical: 'https://webcrew.app/electricians' },
  keywords: ['electrician virtual receptionist', 'electrician answering service', 'virtual receptionist for electricians', 'answering service for electricians', 'electrical contractor answering service', '24/7 electrician call answering', 'AI receptionist for electricians', 'electrician AI answering service', 'remote receptionist for electricians', 'emergency electrical call answering'],
}

const N: NicheContent = {
  slug: 'electricians',
  formValue: 'Electricians',
  label: 'Electrical',
  adj: 'electrical',
  headline: <>A sparking outlet doesn&rsquo;t go<br />on your callback list.<br /><em>It goes to the front.</em></>,
  sub: 'WebCrew answers your electrical calls 24/7, tells a safety-critical call apart from a routine install request, and books the appointment — so a power-out or sparking-outlet call doesn’t sit unanswered.',
  emergencyLabel: 'Built for safety-first triage',
  triage: [
    { title: 'Flags what needs a faster response', body: 'Sparking outlet, burning smell, total power loss, exposed wiring — these get treated differently than a routine "add an outlet" request.' },
    { title: 'Collects what your electrician needs', body: 'Panel type, whether breakers are tripping, what’s affected — captured before the truck rolls, not figured out standing in the driveway.' },
    { title: 'Never lets a safety call sit', body: 'A power-out call at midnight gets answered at midnight and flagged — you get the summary the moment you’re up, not a guess at what came in overnight.' },
  ],
  answer: "WebCrew is a virtual receptionist and answering service for electricians. It answers every call 24/7, flags safety issues like sparking outlets or burning smells, collects panel and breaker details, and books routine jobs into Google Calendar. $99/month for founding clients, 30-day free trial.",
  aka: ["electrician virtual receptionist", "electrician answering service", "virtual receptionist for electricians", "answering service for electricians", "answering service for electrician", "remote receptionist for electricians", "electrical contractor answering service", "24/7 electrician call answering"],
  faq: [
    ['What does an electrician answering service do?', 'An electrician answering service answers your business calls 24/7, qualifies each caller, flags emergencies like power outages or sparking outlets, and books routine jobs into your calendar. It is cheaper than a full-time receptionist and does not take nights off.'],
    ['Is a virtual receptionist for electricians different from a live answering service?', 'A virtual receptionist is always available, always consistent, and costs a fraction of a live answering service. It can handle scheduling and triage the same way — the difference is that it never puts a caller on hold because another call is coming in.'],
    ['Can it tell a safety issue from a routine job request?', 'Yes — configured on your service list and escalation rules before going live, including exactly what counts as urgent for your business.'],
    ['Can it tell someone to shut off their breaker?', 'It can relay your standard safety guidance if you want that configured — the goal is reducing risk while help is on the way, not replacing your judgment on-site.'],
    ['Does it replace my dispatcher?', 'No — it answers, qualifies, and captures what your electrician needs. You stay in control of scheduling and who gets sent.'],
    ['How fast can I go live?', 'Usually within a few days. We load your services, hours and booking rules, you test-call the AI yourself, then forward your business line to it. Nothing goes live until you approve it.'],
  ],
}

export default function ElectriciansPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              '@id': 'https://webcrew.app/electricians#service',
              name: 'AI Receptionist & Website for Electricians',
              provider: { '@id': 'https://webcrew.app/#organization' },
              serviceType: 'AI Answering Service',
              category: 'Electrical Business Services',
              description: 'WebCrew answers electrical company calls 24/7, prioritizes power outages and safety-critical calls, books appointments, and builds a custom website overnight.',
              areaServed: { '@type': 'Country', name: 'United States' },
            },
            {
              '@type': 'FAQPage',
              mainEntity: N.faq.map(([q, a]) => ({
                '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a },
              })),
            },
          ],
        }) }}
      />
      <NicheLanding n={N} />
    </>
  )
}
