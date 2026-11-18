export const WHATSAPP_NUMBER = '91635066685'
export const CALENDAR_URL = ''
export const EMAIL = 'hello@createdbymohit.com'

export function whatsappLink(message = "Hi Mohit, I'd like a free Leak Check.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const LEAK_CHECK_HREF = CALENDAR_URL || '/contact?type=leak-check'

export type Offer = {
  id: string
  name: string
  price: string
  priceNote: string
  time: string
  role: string
  includes: string[]
  featured?: boolean
}

export const OFFERS: Offer[] = [
  {
    id: 'teardown',
    name: 'Leak Teardown',
    price: 'Free',
    priceNote: 'no strings',
    time: 'Within 48 hours',
    role: 'See the problem',
    includes: [
      'We message your business like a customer would',
      'One page: reply time, drop-off points, rough monthly leak',
      'The four things we would fix first',
    ],
  },
  {
    id: 'audit',
    name: 'Leak Audit',
    price: '₹15,000',
    priceNote: 'credited in full to the build if you sign within 14 days',
    time: '5 working days',
    role: 'Measure it properly',
    includes: [
      'Deep audit of your ads-to-booking flow',
      'A rupee estimate of what slow replies and no-shows cost you',
      'A 30-day fix plan you can run with or without us',
    ],
  },
  {
    id: 'build',
    name: 'Lead Recovery System',
    price: '₹75,000 – 1,25,000',
    priceNote: 'one-time · 50% to start, 50% at go-live',
    time: 'Live in 2–3 weeks',
    role: 'Fix it',
    featured: true,
    includes: [
      'Instant WhatsApp reply, in English and Hindi',
      'Qualifies the enquiry and books the appointment or visit',
      'Five-touch follow-up and appointment reminders',
      'Every lead in your CRM, with a live dashboard',
      'Always a human handoff',
    ],
  },
  {
    id: 'ops',
    name: 'Growth Ops',
    price: 'from ₹25,000',
    priceNote: 'a month · Monitor ₹25k · Optimise ₹40k · Scale ₹60k+ · 3-month minimum',
    time: 'Every month',
    role: 'Keep it working',
    includes: [
      'We watch every failure, stale answer and broken sync',
      'Answer updates, new sequences, one campaign a month',
      'One-page monthly report: rupees recovered vs. your baseline',
    ],
  },
]

export const ADD_ONS = [
  { name: 'Old-lead reactivation campaign', price: '₹15–25k' },
  { name: 'Review generation', price: 'per scope' },
  { name: 'Missed-call voice agent', price: 'per scope' },
  { name: 'Landing page or website rebuild', price: '₹1.5–4L' },
]

export const GUARANTEES = [
  { v: '< 60s', l: 'first reply, every channel' },
  { v: '5', l: 'follow-ups per enquiry' },
  { v: '3 wks', l: 'from yes to live' },
  { v: '1 page', l: 'monthly rupee report' },
]

export type FaqItem = { q: string; a: string }

export const FAQ: FaqItem[] = [
  {
    q: 'What exactly do you install?',
    a: 'A system on your own WhatsApp Business number that replies to every enquiry in under a minute, asks the right qualifying questions, books the appointment or site visit, sends reminders, follows up five times with people who go quiet, and puts every lead in your CRM. Your team sees everything and can take over any conversation.',
  },
  {
    q: 'How much does it cost?',
    a: 'The Leak Teardown is free. The Leak Audit is ₹15,000, credited in full to the build if you go ahead within 14 days. The Lead Recovery System is ₹75,000–1,25,000 one-time, depending on channels and integrations. Most clients then take Growth Ops from ₹25,000 a month. WhatsApp and platform fees are paid by you directly, at cost.',
  },
  {
    q: 'How long until it is live?',
    a: 'The audit takes 5 working days. A Lead Recovery System is live in 2–3 weeks: we record your baseline, build, test on 20 of your real past enquiries, soft-launch with a human watching, then go fully live.',
  },
  {
    q: 'Who owns the WhatsApp number, CRM and data?',
    a: 'You do. Everything is set up on accounts in your business name: the number, the CRM, the data and the content. If you ever stop working with us, it all stays with you.',
  },
  {
    q: "Can't I just use ChatGPT, Claude or Meta's WhatsApp AI?",
    a: "You can, and for basic FAQs it works. The costly part comes in week three: answers go stale, the booking calendar doesn't sync, nobody owns it when it breaks, and nobody tells you how many bookings it produced. We install it on your accounts, keep it running, and send you one page each month with the rupees recovered. If you'd rather run it yourself, ask and we'll send you our checklist free.",
  },
  {
    q: 'We already have a bot or a CRM.',
    a: "Good, that makes it faster. We don't replace it. We check whether it replies in under a minute, follows up five times and reports bookings. Usually the tool is fine and the setup is the problem.",
  },
  {
    q: 'What will the AI never do?',
    a: 'It never diagnoses or gives medical advice, never quotes a price you have not approved, and never promises an outcome. Anything outside its approved answers goes straight to a person on your team.',
  },
  {
    q: 'What do you guarantee?',
    a: 'What we control: a first reply in under 60 seconds, every enquiry followed up five times, and a monthly report against your own baseline. We do not guarantee your revenue. Anyone who does is guessing.',
  },
  {
    q: 'Who is this for?',
    a: 'Owner-run businesses that pay for leads (ads, portals, marketplaces), get 40 or more enquiries a month, and earn more than ₹20,000 per customer. Today that is mostly clinics and real estate teams. Below about 20 enquiries a month, we will tell you honestly it is not worth it yet.',
  },
  {
    q: 'Who is behind Starting Core?',
    a: "Mohit Pareek, in Jaipur. Six years designing and building products for businesses, 31 websites shipped, and now Starting Core: a small team that installs and runs lead systems. You talk to the person doing the work.",
  },
]

export type Vertical = {
  slug: string
  label: string
  hand: string
  headline: string
  emphasis: string
  sub: string
  problems: { title: string; body: string }[]
  does: string[]
  safety: string
  waMessage: string
  calc: { enquiries: number; value: number; fast: number; close: number; valueLabel: string; closeLabel: string }
  seoTitle: string
  seoDescription: string
}

export const VERTICALS: Record<string, Vertical> = {
  clinics: {
    slug: 'clinics',
    label: 'Clinics',
    hand: 'for aesthetic, dental, hair & IVF clinics —',
    headline: 'Every patient enquiry,',
    emphasis: 'answered in under a minute.',
    sub: 'Your ads bring enquiries at 10pm. We install a WhatsApp system that replies instantly, books the consultation, reminds the patient and follows up, so the leads you already pay for turn into appointments. Live in 3 weeks.',
    problems: [
      { title: 'The late-night enquiry', body: 'Someone sees your ad and asks about a treatment at night. The front desk replies the next morning. By then they have messaged two other clinics.' },
      { title: 'The empty slot', body: 'A consultation is booked, nobody sends a reminder, and the chair sits empty at 4pm.' },
      { title: 'The same ten questions', body: 'Your team spends hours a week answering price ranges, timings and "is it painful?" by hand.' },
    ],
    does: [
      'Answers treatment, price-range and timing questions from your approved sheet, in English and Hindi',
      'Asks the right questions: treatment, budget, preferred time',
      'Books the consultation straight into your calendar',
      'Sends reminders so booked patients turn up',
      'Follows up five times with people who went quiet',
      'Hands over to your team the moment a question needs a doctor',
    ],
    safety: 'The AI never diagnoses or gives medical advice, and every conversation carries consent wording your clinic approves.',
    waMessage: "Hi Mohit, I run a clinic and I'd like a free Leak Check.",
    calc: { enquiries: 150, value: 35000, fast: 30, close: 20, valueLabel: 'Average treatment value', closeLabel: 'Enquiries that become patients' },
    seoTitle: 'WhatsApp lead recovery for clinics | Starting Core',
    seoDescription: 'Reply to every patient enquiry in under a minute, book consultations and cut no-shows. WhatsApp lead-recovery systems for aesthetic, dental, hair and IVF clinics. Live in 3 weeks.',
  },
  'real-estate': {
    slug: 'real-estate',
    label: 'Real estate',
    hand: 'for brokers, developers & channel partners —',
    headline: 'Answer every property enquiry',
    emphasis: 'before your competitor does.',
    sub: 'Portal and ad leads go cold in minutes. We install a WhatsApp system that replies within a minute, qualifies budget and location, books the site visit and follows up until there is a yes or a no. Live in 3 weeks.',
    problems: [
      { title: 'The Friday-night lead', body: 'A buyer enquires on a portal at 8:30pm on Friday. The first call comes on Monday, from a number they do not recognise.' },
      { title: 'The brochure reply', body: 'They ask a direct budget question and get a PDF instead of an answer. The conversation ends there.' },
      { title: 'The "will think about it"', body: 'Warm buyers who asked for time never hear from you again, while your ad spend keeps running.' },
    ],
    does: [
      'Replies to portal, website and ad enquiries within a minute',
      'Qualifies budget, location, timeline and loan need',
      "Books site visits into your team's calendar",
      'Sends project details and visit reminders on WhatsApp',
      'Follows up five times, then hands warm buyers to a person',
      'Pushes every lead into your CRM with its source',
    ],
    safety: 'The AI only quotes prices and inventory you have approved, and hands every negotiation to your team.',
    waMessage: "Hi Mohit, I'm in real estate and I'd like a free Leak Check.",
    calc: { enquiries: 200, value: 150000, fast: 25, close: 3, valueLabel: 'Average commission per deal', closeLabel: 'Enquiries that become deals' },
    seoTitle: 'WhatsApp lead recovery for real estate | Starting Core',
    seoDescription: 'Reply to portal and ad enquiries in under a minute, qualify buyers and book site visits automatically. WhatsApp lead-recovery systems for brokers and developers. Live in 3 weeks.',
  },
}
