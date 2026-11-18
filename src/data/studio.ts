export const EMAIL = 'hello@createdbymohit.com'
export const WHATSAPP_NUMBER = '916350666858'
export const WEB3FORMS_KEY = ''

export function whatsappLink(message = "Hi Mohit, I'd like to talk about a problem in my business.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const SOCIALS = [
  { label: 'Instagram', handle: '@createdbymohit', href: 'https://www.instagram.com/createdbymohit/' },
  { label: 'LinkedIn',  handle: 'Mohit Pareek',    href: 'https://www.linkedin.com/in/mohit-pareek-b8a676204' },
  { label: 'YouTube',   handle: '@createdbymohit', href: 'https://www.youtube.com/@createdbymohit' },
  { label: 'Dribbble',  handle: 'mohit_pareek16',  href: 'https://dribbble.com/mohit_pareek16' },
]

export const CAPABILITIES = ['Problem Solving', 'Product Design', 'AI & Automation', 'Custom Development']

export const PILLARS = [
  {
    key: 'Think',
    title: 'Understand the problem.',
    body: 'We map how the business actually runs, find the bottlenecks and decide what is worth solving before anything gets designed or built.',
    items: ['Business analysis', 'Process mapping', 'Product thinking'],
  },
  {
    key: 'Design',
    title: 'Make it simple to use.',
    body: 'We turn complex processes into interfaces and experiences people understand on the first try, from internal tools to customer-facing products.',
    items: ['UI/UX design', 'Digital experiences', 'Design systems'],
  },
  {
    key: 'Build',
    title: 'Make it work.',
    body: 'We develop the product, connect the tools you already use and automate the repetitive work, with AI where it genuinely helps.',
    items: ['Custom development', 'AI integrations', 'Workflow automation'],
  },
]

export const APPROACH = [
  { n: '01', title: 'Discover', line: 'Understand the problem.', body: 'Conversations with the founder and the team, a look at the tools and the data, and a clear picture of where time and money are being lost.' },
  { n: '02', title: 'Define', line: 'Identify the right opportunity.', body: 'Not every problem needs software. We separate symptoms from causes and agree on the one thing that will make the biggest difference.' },
  { n: '03', title: 'Design', line: 'Plan the solution and the experience.', body: 'Flows, interfaces and system architecture, tested with the people who will use it before a line of production code is written.' },
  { n: '04', title: 'Build', line: 'Develop, integrate and automate.', body: 'We build in small, working increments, connect the existing stack and automate the steps that should never have been manual.' },
  { n: '05', title: 'Improve', line: 'Measure, learn and refine.', body: 'After launch we watch how it is used, fix what gets in the way and improve the process as the business grows.' },
]

export const PROBLEMS = [
  'Repetitive tasks that eat hours every day',
  'Tools that do not talk to each other',
  'Manual operations that could run themselves',
  'A product that is hard to understand or use',
  'An idea that needs to become a working product',
  'A business that depends on the founder for everything',
]

export const FEATURED_SLUGS = ['kiventures', 'cipherschools', 'kasbahagafay', 'yolotrips', 'infumarket', 'agrivia']
export const SUPPORTING_SLUGS = ['ops-kontentmedia', 'kontentmedia', 'growumedia', 'multiphasedigital', 'daamji', 'brocode', 'aepgroup', 'thesoulroot']

export const CREDIBILITY = [
  { v: '31', l: 'websites and products shipped' },
  { v: '40K+', l: 'people following on Instagram' },
  { v: '2 + 1', l: 'workshops and a live session' },
  { v: 'Host', l: 'and guest on design podcasts' },
]

export const COMMUNITY = {
  hosted: {
    title: "Conversations I've hosted",
    body: 'My own interview series with designers, creators and founders about how they think, build and work.',
    href: 'https://www.youtube.com/@createdbymohit',
    cta: 'Watch on YouTube',
  },
  guest: {
    title: "Conversations I've been part of",
    body: 'Invited as a guest to talk about design, building products and the journey from designer to problem solver.',
  },
  teaching: {
    title: 'Workshops & live sessions',
    body: 'Two workshops and a live session on design and building digital products, plus the content I share every week.',
  },
}

export const ARTICLE_CATEGORIES = ['AI & Automation', 'Design & Digital Products', 'Business Problem Solving'] as const
