// ─────────────────────────────────────────────────────────────
// COURSE DATA  —  edit this file to add / update courses
//
// To add a new course: copy an existing course object, change the
// fields, set published: true, and it appears on /courses.
// ─────────────────────────────────────────────────────────────

export interface Lesson {
  id: string
  title: string
  duration: string
  type: 'video' | 'article' | 'quiz'
  preview?: boolean
}

export interface Module {
  title: string
  lessons: Lesson[]
}

export interface Course {
  id: string
  slug: string
  title: string
  tagline: string
  description: string
  price: number
  originalPrice?: number
  currency: 'INR' | 'USD'
  thumbnail: string
  previewVideoId?: string     // YouTube video ID for embed
  category: string
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'
  duration: string
  lessonsCount: number
  studentsCount: number
  rating: number
  reviewsCount: number
  language: string
  lastUpdated: string
  outcomes: string[]          // "What you'll learn" bullets
  features: string[]          // "This course includes" bullets
  modules: Module[]
  paymentLink?: string        // Razorpay / any payment URL
  enrollmentOpen: boolean
  comingSoon: boolean
  badge?: 'New' | 'Bestseller' | 'Most Popular'
  published: boolean
}

export const courses: Course[] = [
  {
    id: 'uiux-masterclass-2026',
    slug: 'ui-ux-design-masterclass',
    title: 'The Complete UI/UX Design Masterclass',
    tagline: 'From zero to job-ready designer — the psychology, principles, and process that get you hired.',
    description:
      'A complete UI/UX course built from six years of shipping products and 5,000+ designs. No fluff — just the psychology, principles and process that separate designers who get hired from designers who get scrolled past.',
    price: 4999,
    originalPrice: 9999,
    currency: 'INR',
    thumbnail: 'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
    previewVideoId: undefined,              // e.g. 'dQw4w9WgXcQ'
    category: 'UI/UX Design',
    level: 'All Levels',
    duration: '40+ hours',
    lessonsCount: 120,
    studentsCount: 0,                       // update after launch
    rating: 0,
    reviewsCount: 0,
    language: 'Hindi + English',
    lastUpdated: 'June 2026',
    outcomes: [
      'Master visual hierarchy and the six principles of design',
      'Understand the psychology behind interfaces users love',
      'Build and document full design systems from scratch',
      'Design mobile apps and web products end-to-end in Figma',
      'Create a portfolio that gets you hired or landed clients',
      'Price your freelance work and handle client projects',
      'Learn the iteration cycle used by top product teams',
      'Go from brief → wireframe → prototype → handoff',
    ],
    features: [
      '40+ hours of HD video lessons',
      'Figma source files for every project',
      'Real-world case studies (5 complete products)',
      'Certificate of completion',
      'Lifetime access + all future updates',
      'Private community (Discord)',
      'Q&A with Mohit every month',
    ],
    modules: [
      {
        title: 'Foundation — How designers actually think',
        lessons: [
          { id: 'm1l1', title: 'Why most designers plateau (and how to escape)', duration: '18 min', type: 'video', preview: true },
          { id: 'm1l2', title: 'The six principles of design — full breakdown', duration: '42 min', type: 'video', preview: true },
          { id: 'm1l3', title: 'Visual hierarchy in the wild', duration: '28 min', type: 'video' },
          { id: 'm1l4', title: 'Design psychology — why users do what they do', duration: '35 min', type: 'video' },
          { id: 'm1l5', title: 'Foundation project: redesign a bad UI', duration: '20 min', type: 'article' },
        ],
      },
      {
        title: 'Figma Mastery',
        lessons: [
          { id: 'm2l1', title: 'Figma setup — the workspace that speeds you up', duration: '22 min', type: 'video' },
          { id: 'm2l2', title: 'Auto Layout deep dive', duration: '38 min', type: 'video' },
          { id: 'm2l3', title: 'Components, variants and properties', duration: '45 min', type: 'video' },
          { id: 'm2l4', title: 'Prototyping and interactions', duration: '32 min', type: 'video' },
          { id: 'm2l5', title: 'Variables and design tokens', duration: '29 min', type: 'video' },
          { id: 'm2l6', title: 'Figma quiz — test your knowledge', duration: '10 min', type: 'quiz' },
        ],
      },
      {
        title: 'Design Systems',
        lessons: [
          { id: 'm3l1', title: 'What a design system actually is', duration: '24 min', type: 'video' },
          { id: 'm3l2', title: 'Color systems — beyond the brand guide', duration: '31 min', type: 'video' },
          { id: 'm3l3', title: 'Typography scale and type pairing', duration: '26 min', type: 'video' },
          { id: 'm3l4', title: 'Spacing, grid and layout tokens', duration: '20 min', type: 'video' },
          { id: 'm3l5', title: 'Building a full component library', duration: '55 min', type: 'video' },
        ],
      },
      {
        title: 'Real-World Projects (5 complete builds)',
        lessons: [
          { id: 'm4l1', title: 'Project 1 — Mobile banking app (fintech)', duration: '90 min', type: 'video' },
          { id: 'm4l2', title: 'Project 2 — SaaS dashboard', duration: '75 min', type: 'video' },
          { id: 'm4l3', title: 'Project 3 — E-commerce product page', duration: '60 min', type: 'video' },
          { id: 'm4l4', title: 'Project 4 — Landing page for a startup', duration: '50 min', type: 'video' },
          { id: 'm4l5', title: 'Project 5 — Your portfolio site', duration: '80 min', type: 'video' },
        ],
      },
      {
        title: 'The Business of Design',
        lessons: [
          { id: 'm5l1', title: 'How to price your work as a freelancer in India', duration: '34 min', type: 'video' },
          { id: 'm5l2', title: 'Finding clients — cold to warm in 30 days', duration: '28 min', type: 'video' },
          { id: 'm5l3', title: 'Running a client project start to finish', duration: '40 min', type: 'video' },
          { id: 'm5l4', title: 'Building your portfolio and personal brand', duration: '32 min', type: 'video' },
          { id: 'm5l5', title: 'Getting your first design job (or your next one)', duration: '36 min', type: 'video' },
        ],
      },
    ],
    paymentLink: '',        // ← paste your Razorpay payment link here
    enrollmentOpen: false,
    comingSoon: true,
    badge: 'New',
    published: true,
  },

  // ─── ADD MORE COURSES BELOW ──────────────────────────────────
  // {
  //   id: 'brand-design-101',
  //   slug: 'brand-design-for-designers',
  //   title: 'Brand Design for UI/UX Designers',
  //   ...
  //   published: false, // set to true when ready
  // },
]

export function getCourse(slug: string): Course | undefined {
  return courses.find(c => c.slug === slug && c.published)
}

export function getPublishedCourses(): Course[] {
  return courses.filter(c => c.published)
}
