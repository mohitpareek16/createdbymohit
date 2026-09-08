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
    id: 'clicks-to-conversions',
    title: 'From Clicks to Conversions: How a User-Friendly Website Boosts Sales',
    date: '2024',
    excerpt:
      'Most websites get traffic but fail to convert. The gap between a click and a sale is almost always a design problem — not a marketing problem.',
    linkedinUrl: 'https://www.linkedin.com/pulse/from-clicks-conversions-how-user-friendly-website-boosts-pareek-wxudc',
    category: 'UX Strategy',
  },
  {
    id: 'airbnb-story',
    title: 'The Insane Story of Airbnb',
    date: '2024',
    excerpt:
      'Airbnb was rejected by every investor. They sold cereal boxes to survive. Then design saved the company — here\'s the full story.',
    linkedinUrl: 'https://www.linkedin.com/pulse/insane-story-airbnb-mohit-pareek',
    category: 'Case Study',
  },
  {
    id: 'remote-work-uiux',
    title: 'Current and Future Trends in Remote Work — Where UI/UX Stands',
    date: '2024',
    excerpt:
      'Remote work didn\'t just change where we work — it changed what software has to do. Here\'s where design fits into the distributed future.',
    linkedinUrl: 'https://www.linkedin.com/pulse/current-future-trends-remote-work-where-ui-ux-stands-mohit-pareek',
    category: 'Industry',
  },
  {
    id: '11-things-stop-designer',
    title: '11 Things That Stop a Designer From Becoming Great',
    date: '2024',
    excerpt:
      'Skill is rarely what holds designers back. It\'s mindset, habits, and the wrong metrics. Here are the 11 patterns I see again and again.',
    linkedinUrl: 'https://www.linkedin.com/pulse/11-things-stop-designer-become-great-mohit-pareek',
    category: 'Career',
  },
  {
    id: 'design-superpowers',
    title: 'Unlocking Design Superpowers: A Journey Through the Eyes of an Experienced UI/UX Designer',
    date: '2024',
    excerpt:
      'After years of shipping products, the skills that matter most aren\'t the ones I expected. A candid look at what actually makes you dangerous as a designer.',
    linkedinUrl: 'https://www.linkedin.com/pulse/unlocking-design-superpowers-journey-through-eyes-uiux-mohit-pareek',
    category: 'Craft',
  },
  {
    id: 'threads-vs-twitter',
    title: 'Threads vs. Twitter: A Comparative Analysis of 5 Key Design Aspects',
    date: '2023',
    excerpt:
      'When Meta launched Threads, it was the first serious design challenge to Twitter in years. I broke down exactly how the two apps compare across five design dimensions.',
    linkedinUrl: 'https://www.linkedin.com/pulse/threads-from-instagram-vs-twitter-comparative-analysis-mohit-pareek',
    category: 'Analysis',
  },
]
