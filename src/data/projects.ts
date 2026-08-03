export interface ProcessStep {
  phase: string
  description: string
}

export interface Metric {
  value: string
  label: string
}

export interface Project {
  id: string
  slug: string
  title: string
  tagline: string
  year: string
  role: string
  client: string
  category: string
  duration: string
  gif: string
  accent: string    // project-specific hero accent hex
  overview: string
  problem: string
  problemBullets: string[]
  process: ProcessStep[]
  solution: string
  metrics: Metric[]
  tags: string[]
  published: boolean
}

const PROJECTS: Project[] = [
  {
    id: 'evr',
    slug: 'evr',
    title: 'evr',
    tagline: 'From idea to millions raised — redesigning a Web3 AI venture platform.',
    year: '2023',
    role: 'Lead Product Designer',
    client: 'evr Ventures',
    category: 'Product Design · Branding',
    duration: '3 months',
    gif: 'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
    accent: '#2D1B8B',
    overview:
      'evr is a Web3 AI venture fund based in Singapore, building a platform to connect early-stage founders with institutional investors through AI-powered matching. When they came to us, the technology was impressive. The design was not.',
    problem:
      'Investors couldn\'t tell what the product did in the first 30 seconds. The onboarding flow had 14 steps. The dashboard showed everything and communicated nothing. The visual language mixed three inconsistent design directions.',
    problemBullets: [
      '14-step onboarding with a 23% completion rate',
      'Dashboard surfaced 40+ data points with no hierarchy',
      'No design system — every screen was a one-off',
      'Zero investor demo conversion over 8 weeks',
    ],
    process: [
      {
        phase: 'Discovery',
        description:
          'Interviewed 3 institutional investors, 5 founders, and the full founding team. Goal: understand what information actually drives a decision to connect, invest, or join.',
      },
      {
        phase: 'Competitive audit',
        description:
          'Analysed AngelList, Republic, Carta, and Coinbase Ventures. Identified the patterns that created trust with financial-grade users and the ones that broke it.',
      },
      {
        phase: 'Information architecture',
        description:
          'Rebuilt the product\'s IA from scratch. Collapsed 14 onboarding steps to 5 meaningful moments. Reorganised the dashboard around one question: what does the user need to act on right now?',
      },
      {
        phase: 'Design system',
        description:
          'Built a component library covering typography, colour, spacing, icons, and interactive states — before touching a single screen. This prevented the "one-off" problem in future.',
      },
      {
        phase: 'High-fidelity design + prototype',
        description:
          'Produced all core screens plus an interactive prototype used in investor demos. Three rounds of internal testing, two with external investors.',
      },
    ],
    solution:
      'The redesign reduced onboarding to 5 steps and rebuilt the dashboard around signal, not data. A new visual system communicated premium without being inaccessible. The product now earned investor trust before a single word of the pitch.',
    metrics: [
      { value: '$2.4M', label: 'Seed round raised within 90 days' },
      { value: '68%', label: 'Improvement in onboarding completion' },
      { value: '3.2×', label: 'Investor demo conversion rate' },
      { value: '0', label: 'Design meetings needed to adopt the system' },
    ],
    tags: ['Web3', 'Fintech', 'Product Design', 'Design System'],
    published: true,
  },
  {
    id: 'automation-machines',
    slug: 'automation-machines',
    title: 'Automation Machines',
    tagline: 'Redesigning industrial control software for operators, not engineers.',
    year: '2022',
    role: 'Lead Designer',
    client: 'Automation Machines',
    category: 'B2B SaaS · Industrial UX',
    duration: '4 months',
    gif: 'https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif',
    accent: '#0C4A2E',
    overview:
      'Automation Machines builds industrial control software for manufacturing facilities across South Asia. Their legacy interface, designed in 2015, hadn\'t been touched since. Operators were making errors — not from lack of training, but from a design that fought them.',
    problem:
      'The interface was designed for desktop mice and was running on touchscreen tablets in loud, gloved factory environments. Critical alerts were buried 3 levels deep. The most-used controls required 5 taps. Night mode didn\'t exist.',
    problemBullets: [
      'Critical alert acknowledgment: 6 taps average (should be 1)',
      'Most-used controls buried under navigation menus',
      'White-background UI unusable under factory floor lighting',
      'New operator training averaged 3 full working days',
    ],
    process: [
      {
        phase: 'On-site observation',
        description:
          'Spent 3 days at two manufacturing facilities watching operators use the product. Documented every workaround, every hesitation, every error. Patterns became obvious immediately.',
      },
      {
        phase: 'Operator interviews',
        description:
          'Eight structured interviews across three experience levels: first-week operators, 1-year veterans, and shift supervisors. Each group had different needs and different failure modes.',
      },
      {
        phase: 'Error log analysis',
        description:
          'Analysed 6 months of error logs against the UI flow. Correlated every critical error with a specific UI decision. The data confirmed what the interviews suggested.',
      },
      {
        phase: 'Touch-first redesign',
        description:
          'Rebuilt the interface from scratch for touch input — larger tap targets, gesture-based controls, persistent control strip for most-used actions, one-tap alert acknowledgment.',
      },
      {
        phase: 'Testing in context',
        description:
          'Two rounds of usability testing at the facility, not in a lab. Operators wore gloves. The floor was loud. We designed for that, not for a quiet office.',
      },
    ],
    solution:
      'A touch-first interface with a clear visual hierarchy. Critical alerts surface immediately at the top of every screen. The persistent control strip means common actions never require navigation. Night mode ships standard. The product now works with operators, not against them.',
    metrics: [
      { value: '41%', label: 'Reduction in operator error rate' },
      { value: '4hrs', label: 'New operator training time (was 3 days)' },
      { value: '4×', label: 'Facility expansion after deployment' },
      { value: '0', label: 'Critical incidents in 8 months post-launch' },
    ],
    tags: ['Industrial', 'B2B SaaS', 'UX Research', 'Touch Design'],
    published: true,
  },
  {
    id: 'xportfolio',
    slug: 'xportfolio',
    title: 'xPortfolio',
    tagline: 'A portfolio tracker that thinks the way retail investors do.',
    year: '2022 – 23',
    role: 'Lead Product Designer',
    client: 'xPortfolio',
    category: 'Fintech · Mobile Design',
    duration: '5 months',
    gif: 'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
    accent: '#0F3172',
    overview:
      'xPortfolio is a multi-asset portfolio tracker targeting retail investors in India who manage equities, mutual funds, and crypto in one place. The product needed to handle complexity without feeling complex.',
    problem:
      'Every existing portfolio tracker made one of two mistakes: too simple (showing only current value) or too complex (overwhelming with data). Retail investors managing mixed portfolios had no tool that fit how they actually thought about their money.',
    problemBullets: [
      'Users checking 3+ apps to get a complete picture of their portfolio',
      'Crypto and traditional assets shown in incompatible formats',
      'Performance charts with no context — numbers without meaning',
      'Notification overload causing users to disable alerts entirely',
    ],
    process: [
      {
        phase: 'User research',
        description:
          'Twelve structured interviews with retail investors (mixed experience levels) and 2 professional advisors. Used jobs-to-be-done framework to understand what people actually wanted to know, not what they said they wanted to see.',
      },
      {
        phase: 'Mental model mapping',
        description:
          'Mapped how each user type thought about their portfolio. Three distinct mental models emerged: the tracker (daily checker), the strategist (monthly reviewer), and the rebalancer (event-driven). Product had to serve all three.',
      },
      {
        phase: 'Data architecture',
        description:
          'Designed the underlying data model before touching visual design — how assets relate, how performance is calculated across asset classes, how currency conversion affects display.',
      },
      {
        phase: 'Visualization system',
        description:
          'Built a chart and visualization system that worked across asset classes with a consistent visual language. Sparklines, area charts, allocation pies — all using the same grid and colour rules.',
      },
      {
        phase: 'Usability testing',
        description:
          'Two rounds with 8 participants each. First round uncovered navigation confusion. Second round validated the fixed flows. App Store launch followed immediately after.',
      },
    ],
    solution:
      'Built around three moments that match how investors actually use a portfolio tracker: Overview (how am I doing today?), Performance (what drove that?), and Action (what should I do next?). Asset classes normalized to a unified format. Notifications only for meaningful events.',
    metrics: [
      { value: '4.8', label: 'App Store rating (first 3 months)' },
      { value: '62%', label: 'Day-7 retention (category avg: 31%)' },
      { value: '2.4×', label: 'Daily opens per active user' },
      { value: '0', label: 'Navigation-related support tickets' },
    ],
    tags: ['Fintech', 'Mobile', 'Data Visualization', 'iOS · Android'],
    published: true,
  },
]

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find(p => p.slug === slug && p.published)
}

export function getAllProjects(): Project[] {
  return PROJECTS.filter(p => p.published)
}

export function getNextProject(currentSlug: string): Project | undefined {
  const published = getAllProjects()
  const idx = published.findIndex(p => p.slug === currentSlug)
  return published[(idx + 1) % published.length]
}
