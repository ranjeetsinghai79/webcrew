import type { BlogPost } from '@/lib/blog/types'

export const post: BlogPost = {
  slug: 'missed-call-text-back',
  title: 'Missed Call Text Back: How It Works, Message Examples, and Is It Legal?',
  description: 'Missed call text back explained: how it works, 8 text message examples you can copy, the US texting rules (TCPA, A2P 10DLC), and when to answer instead.',
  date: '2026-10-18',
  category: 'Follow-up & reviews',
  imageQuery: 'texting smartphone',
  keywords: ['missed call text back', 'miss call text back', 'missed call text message', 'text message for missed calls', 'is missed call text back legal', 'auto text missed calls', 'TCPA texting rules small business'],
  body: `
> **Short answer:** Missed call text back (also called "missed call text" or "miss call text back") is an automatic text a business sends when it can't answer a call. It works because many callers won't leave a voicemail but will reply to a text. In the US it is legal only when you follow the texting rules: the person agreed to get texts, your number is registered for business texting, and every text includes a way to opt out.

## What missed call text back is

When a call to your business goes unanswered, your phone system sends the caller a text a few seconds later, for example: "Sorry we missed your call, this is Smith Plumbing. How can we help?" The caller can reply right away instead of calling a competitor.

It is popular with home service businesses, salons, clinics and restaurants because the owner is often busy when the phone rings: on a roof, under a sink, with a client, or in the middle of a dinner rush.

## How missed call text back works

1. **A call comes in and nobody answers.** It rings out, goes to voicemail, or the line is busy.
2. **Your phone provider reports the missed call** to your texting tool.
3. **The tool checks if it is allowed to text that number** (more on this below).
4. **An automatic text goes out** from your business number.
5. **The caller replies by text,** and the reply goes to you or to an assistant that can answer and book.

The texting tool has to send from a number that is registered for business texting. Texts from unregistered numbers are often blocked by carriers before they reach the caller.

## Missed call text message examples

Keep it short, name your business, give one clear next step, and include opt-out wording. Copy and adjust these:

- **General:** "Hi, this is [Business]. Sorry we missed your call. How can we help? Reply here and we will get back to you. Reply STOP to opt out."
- **Home services (HVAC, plumbing, electrical):** "This is [Business]. We are on a job and missed your call. Is this an emergency or can we schedule a visit? Reply STOP to opt out."
- **Booking focused:** "Thanks for calling [Business]. Reply with a day and time that works and we will confirm your appointment. Reply STOP to opt out."
- **After hours:** "You reached [Business] after hours. We open at [time]. Reply with what you need and we will reach out first thing. Reply STOP to opt out."
- **Restaurants:** "Thanks for calling [Restaurant]. We could not pick up during service. For tables reply with party size and time, or order online at [link]. Reply STOP to opt out."
- **Salons and spas:** "Hi from [Salon]! We are with a client right now. Which service and day are you looking for? Reply STOP to opt out."
- **Clinics:** "You called [Clinic]. Please reply with your name and the best time to call you back. Do not text medical details. Reply STOP to opt out."
- **Call me back request:** "Sorry we missed you. Want us to call you back? Reply YES with a good time. Reply STOP to opt out."

## Is missed call text back legal?

It can be, if you follow the rules. This is general information, not legal advice; talk to your attorney about your situation.

| Rule | What it means for missed call text back |
| --- | --- |
| Consent (TCPA) | Text people who have agreed to get texts from your business. A missed call alone is not clear permission, and fines for unwanted texts can be steep. |
| Business texting registration (A2P 10DLC) | US carriers require businesses to register the number and describe what they will send. Texts that don't match can be blocked. |
| Opt out | Every text should say how to stop (for example "Reply STOP to opt out") and STOP must be honored right away. |
| Quiet hours | Don't text late at night or early morning in the caller's time zone. Some states are stricter than federal rules. |
| Content | Stick to what the person asked for, like a callback or appointment details, not promotions. |

The safest pattern: get permission during a real conversation ("Can we text you a confirmation at this number?") and keep a record of when and how the person agreed.

## Text back or answer the call?

A text back is a backup, not the goal. A caller with a burst pipe or no heat usually wants a person (or something that sounds like one) right now.

| | Missed call text back | AI receptionist that answers |
| --- | --- | --- |
| Caller experience | Gets a text, has to type | Talks to someone right away |
| Emergencies | Delayed until someone reads it | Urgent calls flagged or transferred |
| Booking | Back and forth by text | Books on your calendar during the call |
| Consent for texts | Often unclear | Asked for on the call and recorded |

For most service businesses the best setup is both: answer every call, and use text only for confirmations and reminders the caller said yes to.

## What WebCrew does

WebCrew answers your calls 24/7 with an AI receptionist, so very few callers are ever "missed." During the call it asks whether the caller wants a confirmation text and records the answer. When someone does hang up before talking, WebCrew sends a text back only if that caller has already agreed to texts from your business. Everyone else is handled by phone or email. We would rather skip a text than put your business at risk.

STOP and HELP replies are handled automatically, and that number gets no more texts.

Related reading: [how much missed calls cost a home service business](/blog/missed-calls-cost-home-service-business), [speed to lead for contractors](/blog/speed-to-lead-contractors) and [a simple lead follow-up system](/blog/lead-follow-up-system-local-business).
`,
  faq: [
    ['What is missed call text back?', 'An automatic text a business sends to a caller when it could not answer the phone, so the caller can reply by text instead of leaving a voicemail or calling someone else.'],
    ['Is missed call text back legal?', 'It can be. In the US you should only text people who agreed to get texts from your business, send from a number registered for business texting (A2P 10DLC), include opt-out wording, and avoid late-night texts. Talk to an attorney about your situation.'],
    ['What should a missed call text say?', 'Name your business, apologize briefly, give one next step (reply with what you need, a time, or YES for a callback), and include "Reply STOP to opt out."'],
    ['Does missed call text back work for restaurants?', 'Yes. Restaurants miss calls during busy service. A short text pointing callers to reservations or online ordering keeps them from going elsewhere, as long as texting rules are followed.'],
    ['Is it better to text back or answer the call?', 'Answering is better, especially for urgent jobs. A text back is a backup. Many businesses now use an AI receptionist to answer every call and send texts only to callers who agree.'],
  ],
}
