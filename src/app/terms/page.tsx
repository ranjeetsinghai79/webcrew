export const metadata = {
  title: 'Terms of Service — WebCrew',
  description: 'WebCrew terms of service.',
}

const EFFECTIVE = 'May 19, 2026'

export default function Terms() {
  return (
    <div style={{ minHeight:'100vh', background:'var(--color-bg)', padding:'120px 32px 80px' }}>
      <div style={{ maxWidth:'720px', margin:'0 auto' }}>
        <a href="/" style={{ color:'var(--color-gold)', textDecoration:'none', fontSize:'0.85rem', display:'block', marginBottom:'32px' }}>
          ← Back to WebCrew
        </a>
        <h1 style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'2.5rem', letterSpacing:'-0.02em', marginBottom:'8px' }}>
          Terms of Service
        </h1>
        <p style={{ color:'var(--color-muted)', marginBottom:'48px' }}>Effective: {EFFECTIVE}</p>

        {[
          {
            title: 'Acceptance of Terms',
            body: 'By accessing webcrew.app or engaging our services, you agree to these Terms of Service. If you do not agree, do not use our services.',
          },
          {
            title: 'Services',
            body: `WebCrew provides AI-powered website design and deployment services for local businesses. Our services include:
• Custom website design and development
• Website hosting and maintenance
• SMS and email outreach on behalf of our agency
• Ongoing website updates and SEO optimization

We reserve the right to modify, suspend, or discontinue any part of our services at any time.`,
          },
          {
            title: 'Payment Terms',
            body: `Starter plan: $299 one-time setup fee plus $49/month hosting.
Premium plan: $599 one-time setup fee plus $79/month hosting.
Custom/Enterprise: as quoted.

Monthly hosting fees are billed in advance. Late payments may result in service suspension. All fees are non-refundable except as described in our satisfaction guarantee.`,
          },
          {
            title: 'Satisfaction Guarantee',
            body: 'If you are not satisfied with your demo website before making any payment, you owe us nothing. Once payment is made, we will work with you to revise the site to your satisfaction or provide a full refund within 30 days of delivery.',
          },
          {
            title: 'SMS Communications and TCPA Compliance',
            body: `By providing your phone number, you expressly consent to receive automated SMS messages from WebCrew regarding our services, your website demo, and follow-up communications.

You may opt out at any time by replying STOP. After opting out, you will receive one final confirmation message. We comply with all applicable laws including the Telephone Consumer Protection Act (TCPA).`,
          },
          {
            title: 'Intellectual Property',
            body: 'Upon full payment, you own the content of your website. WebCrew retains rights to the underlying code templates, systems, and AI-generated frameworks. We may use your website as a portfolio example unless you request otherwise.',
          },
          {
            title: 'Prohibited Use',
            body: `You may not use our services to:
• Engage in illegal activities
• Violate any third-party rights
• Transmit malware or harmful code
• Impersonate any person or entity
• Violate any applicable law or regulation`,
          },
          {
            title: 'Limitation of Liability',
            body: 'To the maximum extent permitted by law, WebCrew shall not be liable for any indirect, incidental, special, or consequential damages arising from use of our services. Our total liability shall not exceed the amount you paid us in the 3 months preceding the claim.',
          },
          {
            title: 'Indemnification',
            body: 'You agree to indemnify and hold harmless WebCrew and its officers, employees, and agents from any claims, damages, or expenses arising from your violation of these terms or misuse of our services.',
          },
          {
            title: 'Governing Law',
            body: 'These terms are governed by the laws of the United States. Any disputes shall be resolved through binding arbitration in accordance with the American Arbitration Association rules.',
          },
          {
            title: 'Changes to Terms',
            body: 'We may update these terms at any time. Continued use of our services after changes constitutes acceptance of the updated terms.',
          },
          {
            title: 'Contact',
            body: 'Questions? Email us at hello@webcrew.app.',
          },
        ].map(s => (
          <div key={s.title} style={{ marginBottom:'36px' }}>
            <h2 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.2rem', marginBottom:'10px', color:'var(--color-text)' }}>
              {s.title}
            </h2>
            <p style={{ color:'var(--color-muted)', lineHeight:1.8, whiteSpace:'pre-line', fontSize:'0.95rem' }}>
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
