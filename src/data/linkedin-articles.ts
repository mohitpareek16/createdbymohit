export interface LinkedInArticle {
  id: string
  title: string
  date: string
  excerpt: string
  linkedinUrl: string
  category: string
}

export const LINKEDIN_ARTICLES: LinkedInArticle[] = [
  {
    id: 'indian-startups-design',
    title: 'Why Indian Startups Underinvest in Design',
    date: 'Aug 2026',
    excerpt:
      'Most Indian founders treat design as decoration — something you do after the product "works." This is why their products don\'t convert, retain, or raise.',
    linkedinUrl: '#',
    category: 'Design Strategy',
  },
  {
    id: 'portfolio-review-method',
    title: 'The Portfolio Review Method That Actually Works',
    date: 'Jul 2026',
    excerpt:
      'After reviewing 300+ designer portfolios I noticed the same mistake. It\'s not about how many projects you have — it\'s about how you frame the thinking.',
    linkedinUrl: '#',
    category: 'Career',
  },
  {
    id: 'stop-charging-hour',
    title: 'Stop Charging by the Hour',
    date: 'Jun 2026',
    excerpt:
      'Hourly billing punishes expertise and rewards inefficiency. Here\'s the pricing model that changed how I run my studio — and why it works better for clients too.',
    linkedinUrl: '#',
    category: 'Business',
  },
  {
    id: 'design-systems-when-why',
    title: 'Design Systems: When and Why',
    date: 'May 2026',
    excerpt:
      'A design system is a multiplier — but only if you\'re already shipping at scale. Here\'s the honest framework for deciding if you actually need one.',
    linkedinUrl: '#',
    category: 'Systems',
  },
]
