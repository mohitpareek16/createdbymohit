import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useInView, MotionValue } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import BottomNav from '../components/BottomNav'
import Button from '../components/Button'

// ── Scroll-linked word reveal ────────────────────────────────────
function AnimatedWord({
  word,
  progress,
  index,
  total,
}: {
  word: string
  progress: MotionValue<number>
  index: number
  total: number
}) {
  const opacity = useTransform(progress, [index / total, Math.min((index + 3) / total, 1)], [0.18, 1])
  return (
    <motion.span style={{ opacity }} className="inline">
      {word}{' '}
    </motion.span>
  )
}

function ScrollRevealParagraph({ text, className = '' }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.88', 'end 0.45'] })
  const words = text.split(' ')
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <AnimatedWord key={i} word={w} progress={scrollYProgress} index={i} total={words.length} />
      ))}
    </p>
  )
}

// ── Timeline ────────────────────────────────────────────────────
const TIMELINE = [
  {
    year: '2018',
    title: 'First Figma file',
    desc: "Discovered design through late-night YouTube tutorials. Built a fake app just to see if I could. Then built another. The obsession began here.",
  },
  {
    year: '2019',
    title: 'First paying client',
    desc: "A local business needed a logo. They paid ₹8,000. I redid it four times before they said stop, it's perfect. I learned that done and right are two different things.",
  },
  {
    year: '2020',
    title: 'First international project',
    desc: "Covid moved the world online. I got my first client from outside India — a startup in Singapore building a fintech app. Everything accelerated from there.",
  },
  {
    year: '2021',
    title: 'Went independent',
    desc: "Left a brief agency internship because I realized I could do this on my own terms — and do it better. Never looked back.",
  },
  {
    year: '2022',
    title: '50+ clients',
    desc: "Consistent 6-figure months. Designed fintech dashboards, e-commerce platforms, SaaS onboarding flows, and educational products. Built the reputation one project at a time.",
  },
  {
    year: '2023',
    title: '0 to 1M+ community',
    desc: "Started sharing publicly — the real stuff about craft, psychology, pricing, and process. Not inspiration. Truth. It reached 1M+ designers faster than I expected.",
  },
  {
    year: '2024',
    title: 'Starting Core',
    desc: "Launched the studio formally. Named it Starting Core because the hardest — and most important — part of any project is where it truly begins.",
  },
  {
    year: 'Now',
    title: 'Teaching the next wave',
    desc: "Building courses and mentoring designers who want to work at the intersection of craft and business. Six years in the field compressed into frameworks that actually work.",
  },
]

function TimelineItem({
  year,
  title,
  desc,
  index,
  isLast,
}: {
  year: string
  title: string
  desc: string
  index: number
  isLast: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-[80px_28px_1fr] gap-x-5 items-start"
    >
      {/* Year */}
      <div className="pt-0.5 text-right">
        <span className="font-mono text-[11px] tracking-widest uppercase text-[#8A8780]">{year}</span>
      </div>

      {/* Line + dot */}
      <div className="flex flex-col items-center">
        <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-0.5 transition-colors duration-700 ${inView ? 'bg-[#C41E3A]' : 'bg-[#D8D4CB]'}`} />
        {!isLast && <div className="w-px flex-1 bg-[#D8D4CB] mt-2 min-h-[56px]" />}
      </div>

      {/* Content */}
      <div className={`pb-12 ${isLast ? 'pb-0' : ''}`}>
        <h4 className="font-mondwest text-xl text-[#051A24] mb-2 leading-tight">{title}</h4>
        <p className="text-sm text-[#051A24]/60 leading-relaxed max-w-[52ch]">{desc}</p>
      </div>
    </motion.div>
  )
}

// ── Principles ────────────────────────────────────────────────────
const PRINCIPLES = [
  {
    no: '01',
    title: 'Visual Bookmarking',
    short: "Users don't read interfaces — they scan and memorise shapes, positions, weights.",
    expanded:
      "Great UI is never read. It's navigated by muscle memory. A user who has opened Spotify 500 times doesn't look for the bottom nav — their thumb already knows where it is. This is visual bookmarking: the cognitive map users build of a product through repetition. Design for that map, not for the first-time user reading instructions.",
    example: 'Spotify bottom nav. iOS control panel. Gmail compose button. All anchored at the same position across years of updates because the cost of moving them is user trust.',
  },
  {
    no: '02',
    title: 'Gestural Interaction',
    short: 'The best interactions feel like extensions of the body. Reduce taps. Reduce thought.',
    expanded:
      "Touch interfaces are physical. A swipe to delete should feel like throwing something away — the spring physics, the resistance, the snap. A pull-to-refresh should feel like stretching a rubber band. When interaction is gestural, users stop thinking about the UI and start thinking about the task. That is the goal: invisible design.",
    example: 'iOS back swipe. The momentum of a scroll that slows naturally. A haptic that confirms a payment. The tap radius on a small element — invisible, but felt.',
  },
  {
    no: '03',
    title: 'Cognitive Load',
    short: "Every element on screen is a tax on attention. The goal isn't to add — it's to subtract.",
    expanded:
      "Cognitive load is the total mental effort required to use a product. Every button, every label, every option adds to it. The best interfaces are the ones where users make fewer decisions, not more. Give people the obvious next step — not five equally weighted choices. Remove until it breaks, then add back exactly one thing.",
    example: "Stripe's checkout. Linear's empty state. Figma's toolbar. None of them show you everything at once. They reveal the right thing at the right moment.",
  },
  {
    no: '04',
    title: 'Business + Beauty',
    short: 'Aesthetic without outcome is decoration. Outcome without aesthetic is forgotten.',
    expanded:
      "The false dichotomy of design: beautiful vs. functional. The reality is that beauty is functional. Aesthetic quality correlates with perceived trustworthiness, willingness to pay, and time-on-product. A product that looks like it was built with care signals that it works with care. The job is always both — and always at the same time.",
    example: 'Apple's product pages. Notion's onboarding. Airbnb's listing pages. None of them chose between beauty and conversion. They built products where the two reinforce each other.',
  },
]

function PrincipleCard({
  no,
  title,
  short,
  expanded,
  example,
  index,
}: (typeof PRINCIPLES)[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="p-8 border border-[#D8D4CB] hover:border-[#051A24] transition-colors duration-300 rounded-3xl group"
    >
      <div className="flex items-start justify-between mb-6">
        <span className="font-mono text-[11px] tracking-widest uppercase text-[#C41E3A]">{no}</span>
        <span className="font-mono text-[10px] tracking-widest uppercase text-[#D8D4CB] group-hover:text-[#8A8780] transition-colors">
          Principle
        </span>
      </div>
      <h3 className="font-mondwest text-2xl md:text-3xl text-[#051A24] mb-3 leading-tight">{title}</h3>
      <p className="text-sm text-[#051A24]/60 leading-relaxed mb-6 italic">{short}</p>
      <p className="text-sm text-[#051A24]/75 leading-relaxed mb-6">{expanded}</p>
      <div className="border-t border-[#D8D4CB] pt-5">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780] block mb-2">In practice</span>
        <p className="text-xs text-[#051A24]/55 leading-relaxed">{example}</p>
      </div>
    </motion.div>
  )
}

// ── Page ─────────────────────────────────────────────────────────
export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <main>
      <Nav />

      {/* ── HERO ── */}
      <section className="min-h-[60vh] flex items-end pt-40 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-[1320px] mx-auto w-full" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780] mb-6 flex items-center gap-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3A]" />
            My Story · Designer · Educator · Founder
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(48px,8vw,104px)] leading-[0.9] tracking-tight text-[#051A24] mb-8 max-w-[14ch]"
          >
            The story{' '}
            <em className="font-mondwest text-[#C41E3A] not-italic">
              behind the&nbsp;work.
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="text-base text-[#051A24]/60 max-w-[48ch] leading-relaxed"
          >
            Six years of building digital products for clients across India and the world.
            Here's how I got here — and where I'm going next.
          </motion.p>
        </div>
      </section>

      {/* ── BIO + STICKY PHOTO ── */}
      <section className="py-20 md:py-32 px-6 md:px-10 border-t border-[#D8D4CB]">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-[360px_1fr] gap-16 lg:gap-24 items-start">

          {/* Sticky left */}
          <div className="md:sticky md:top-28">
            <div className="relative overflow-hidden rounded-2xl border border-[#D8D4CB]" style={{ aspectRatio: '4/5' }}>
              <img
                src="/mohit-pareek.jpg"
                alt="Mohit Pareek"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                <p className="font-mondwest text-white text-lg italic">— Mohit Pareek</p>
                <p className="font-mono text-white/60 text-[11px] mt-1 uppercase tracking-wider">Designer, India</p>
              </div>
            </div>

            {/* Info card */}
            <div className="mt-5 p-5 rounded-2xl border border-[#D8D4CB] bg-[#F5F3EE]">
              <div className="flex flex-wrap gap-2 mb-4">
                {['UI Design', 'UX Research', 'Product Strategy', 'Education'].map(tag => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-widest text-[#051A24]/60 bg-white border border-[#D8D4CB] rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-2 font-mono text-[11px] text-[#8A8780] uppercase tracking-wider">
                <span>📍 Jaipur, India · Remote</span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3A]" />
                  Available · Q3 2026
                </span>
              </div>
            </div>
          </div>

          {/* Scrolling right — bio text */}
          <div className="flex flex-col gap-8 text-[clamp(17px,2vw,21px)] leading-[1.7] text-[#051A24]">
            <ScrollRevealParagraph
              text="I didn't study design in a classroom. I learned it at 2am watching tutorials, rebuilding apps I loved from scratch inside Figma, failing at the details until they weren't details anymore."
            />
            <ScrollRevealParagraph
              text="My first real project was a logo for a cousin's business. I charged nothing. The second time someone asked, I charged ₹2,000 and felt like a fraud. The third time, I raised my price, delivered better work, and realised the two things were connected."
            />
            <ScrollRevealParagraph
              text="Six years later, I've worked with over 50 clients across India, Southeast Asia, and North America. Fintech apps. SaaS dashboards. E-commerce platforms. Educational products built for millions of users. Every project taught me something the classroom never could."
            />
            <ScrollRevealParagraph
              text="In 2023, I started sharing what I was actually learning — not the curated inspiration, but the real thinking behind the work. Why certain UI patterns build trust. How to structure a design system from scratch. How to price your work without apologising for it."
            />
            <ScrollRevealParagraph
              text="That content reached 1M+ designers across Instagram, YouTube, and LinkedIn. Which told me one thing: people are hungry for truth, not just inspiration."
            />
            <ScrollRevealParagraph
              text="So I built Starting Core — a studio and education platform designed to do both. To take on projects at the highest level, and to teach others how to get there. That's the work now. That's what I'm building."
              className="font-medium text-[#051A24]"
            />
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-20 md:py-32 px-6 md:px-10 bg-[#F5F3EE] border-t border-[#D8D4CB]">
        <div className="max-w-[1320px] mx-auto">
          <div className="mb-16">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780] mb-4">The journey</div>
            <h2 className="text-[clamp(36px,5.5vw,72px)] leading-[0.95] tracking-tight text-[#051A24]">
              How I{' '}
              <em className="font-mondwest text-[#C41E3A] not-italic">got here.</em>
            </h2>
          </div>

          <div className="max-w-[680px]">
            {TIMELINE.map((item, i) => (
              <TimelineItem
                key={item.year}
                {...item}
                index={i}
                isLast={i === TIMELINE.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ── */}
      <section className="py-20 md:py-32 px-6 md:px-10 border-t border-[#D8D4CB]">
        <div className="max-w-[1320px] mx-auto">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780] mb-4">How I think</div>
              <h2 className="text-[clamp(36px,5.5vw,72px)] leading-[0.95] tracking-tight text-[#051A24]">
                Four principles.{' '}
                <em className="font-mondwest text-[#C41E3A] not-italic">No exceptions.</em>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PRINCIPLES.map((p, i) => (
              <PrincipleCard key={p.no} {...p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── STARTING CORE ── */}
      <section className="bg-[#051A24] py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-white/40 mb-6">The Studio</div>
            <h2 className="text-[clamp(36px,5.5vw,64px)] leading-[0.95] tracking-tight text-white mb-6">
              This is{' '}
              <em className="font-mondwest text-[#C41E3A] not-italic">Starting Core.</em>
            </h2>
            <p className="text-base text-white/60 leading-relaxed mb-8 max-w-[44ch]">
              A deliberately small studio. I guide the creative vision on every project, backed by a design crew that moves fast without cutting corners. We take on a handful of clients at a time so each one gets the real thing.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" href="mailto:hello@createdbymohit.com">
                Work with us
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '50+', label: 'Clients served' },
              { num: '6+', label: 'Years of craft' },
              { num: '1M+', label: 'Community reach' },
              { num: '₹50k', label: 'Projects start at / mo' },
            ].map(stat => (
              <div key={stat.label} className="bg-[#0D212C] rounded-2xl p-6 border border-white/10">
                <div className="font-mondwest text-3xl text-white mb-1">{stat.num}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 px-6 md:px-10 text-center border-t border-[#D8D4CB]">
        <div className="max-w-[640px] mx-auto">
          <div className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780] mb-6">What's next</div>
          <h2 className="text-[clamp(36px,6vw,72px)] leading-[0.95] tracking-tight text-[#051A24] mb-6">
            Ready to build something{' '}
            <em className="font-mondwest text-[#C41E3A] not-italic">worth remembering?</em>
          </h2>
          <p className="text-base text-[#051A24]/60 leading-relaxed mb-10">
            Projects start at ₹50,000 per month. I take on a limited number of engagements so every client gets the full Mohit.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="primary" href="mailto:hello@createdbymohit.com">
              Start a project
            </Button>
            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#D8D4CB] text-[#051A24] text-sm font-medium hover:border-[#051A24] transition-colors"
            >
              Explore courses
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </main>
  )
}
