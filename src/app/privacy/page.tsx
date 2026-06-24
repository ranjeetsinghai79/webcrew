export const metadata = {
  title: 'Privacy Policy — WebCrew',
  description: 'WebCrew privacy policy — how we collect and use your information.',
}

const EFFECTIVE = 'May 19, 2026'

export default function Privacy() {
  return (
    <div style={{ minHeight:'100vh', background:'var(--color-bg)', padding:'120px 32px 80px' }}>
      <div style={{ maxWidth:'720px', margin:'0 auto' }}>
        <a href="/" style={{ color:'var(--color-gold)', textDecoration:'none', fontSize:'0.85rem', display:'block', marginBottom:'32px' }}>
          ← Back to WebCrew
        </a>
        <h1 style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'2.5rem', letterSpacing:'-0.02em', marginBottom:'8px' }}>
          Privacy Policy
        </h1>
        <p style={{ color:'var(--color-muted)', marginBottom:'48px' }}>Effective: {EFFECTIVE}</p>

        {[
          {
            title: 'Who We Are',
            body: 'WebCrew ("we", "us", "our") operates webcrew.app, an AI-powered website agency that builds and deploys websites for local businesses. Our contact email is hello@webcrew.app.',
          },
          {
            title: 'Information We Collect',
            body: `We collect information you provide directly (name, business name, phone number, email address, industry) when you submit our contact form or respond to our outreach.

We also collect usage data automatically (IP address, browser type, pages visited, time on site) via standard server logs and analytics tools. We do not use third-party advertising trackers.`,
          },
          {
            title: 'How We Use Your Information',
            body: `We use the information we collect to:
• Build and deliver your demo website
• Contact you about your demo site via SMS and email
• Respond to your inquiries
• Improve our services
• Comply with legal obligations

We do not sell your personal information to third parties.`,
          },
          {
            title: 'SMS Communications',
            body: `By providing your phone number, you consent to receive SMS messages from WebCrew about your website demo and related services. Message and data rates may apply. Message frequency varies.

To opt out, reply STOP to any SMS message. To get help, reply HELP. For more information, text HELP to our number or email hello@webcrew.app.

Carriers are not liable for delayed or undelivered messages.`,
          },
          {
            title: 'Data Sharing',
            body: `We share your information only with:
• Service providers who help us operate (hosting, SMS delivery via Twilio, email via Resend)
• Law enforcement when required by law

All service providers are bound by confidentiality agreements.

Mobile information, including SMS opt-in data and consent, will not be shared with third parties or affiliates for marketing or promotional purposes.`,
          },
          {
            title: 'Data Retention',
            body: 'We retain your information for as long as necessary to provide our services and as required by law. You may request deletion of your data at any time by emailing hello@webcrew.app.',
          },
          {
            title: 'Your Rights',
            body: `You have the right to:
• Access the personal information we hold about you
• Request correction of inaccurate information
• Request deletion of your information
• Opt out of SMS communications at any time by replying STOP

To exercise these rights, contact us at hello@webcrew.app.`,
          },
          {
            title: 'Security',
            body: 'We implement appropriate technical and organizational measures to protect your information. However, no internet transmission is 100% secure. We encourage you to use strong passwords and notify us immediately of any unauthorized access.',
          },
          {
            title: 'Cookies',
            body: 'Our website uses minimal cookies for basic functionality (session management). We do not use advertising or tracking cookies.',
          },
          {
            title: 'Changes to This Policy',
            body: 'We may update this policy occasionally. We will notify you of significant changes via email or prominent notice on our website.',
          },
          {
            title: 'Contact Us',
            body: 'Questions about this privacy policy? Email us at hello@webcrew.app or write to: WebCrew, United States.',
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
