import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useInView, MotionValue } from 'framer-motion'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import Footer from '../components/Footer'

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
    example: "Apple's product pages. Notion's onboarding. Airbnb's listing pages. None of them chose between beauty and conversion. They built products where the two reinforce each other.",
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
      <SEO
        title="About Mohit Pareek — Custom Developer & Founder of Starting Core"
        description="Mohit Pareek builds custom software, AI systems, and automation tools for businesses. Founder of Starting Core. 6+ years, 80+ projects, Jaipur, India."
        canonical="/about"
      />
      <Nav />

      {/* ── HERO ── */}
      <section className="min-h-[60vh] flex items-end pt-40 pb-16 px-6 md:px-10" style={{ background: 'var(--bg)' }}>
        <div className="max-w-[1320px] mx-auto w-full" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-[11px] uppercase tracking-widest mb-6 flex items-center gap-3"
            style={{ color: 'var(--muted)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
            My Story · Builder · Educator · Founder
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne uppercase mb-8 max-w-[14ch]"
            style={{ fontSize: 'clamp(44px,7.5vw,100px)', lineHeight: 0.9, letterSpacing: '-0.035em', fontWeight: 800, color: 'var(--text)' }}
          >
            I GREW UP<br />
            BUILDING{' '}
            <span style={{ color: 'var(--accent)' }}>THINGS.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.7 }}
            style={{ fontSize: 'clamp(15px,1.6vw,18px)', lineHeight: 1.7, color: 'var(--muted)', maxWidth: '48ch' }}
          >
            Mohit Pareek. Jaipur, India. I build custom software, AI systems, and automation tools for businesses with specific problems. Six years. 80+ projects. Founder of Starting Core.
          </motion.p>
        </div>
      </section>

      {/* ── BIO + STICKY PHOTO ── */}
      <section className="py-20 md:py-32 px-6 md:px-10" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
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
            <div className="mt-5 p-5 rounded-2xl" style={{ border: '1px solid var(--border)', background: 'var(--surface)' }}>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Custom Dev', 'AI Systems', 'Automation', 'Design Education'].map(tag => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-widest rounded-full px-3 py-1"
                    style={{ color: 'var(--muted)', background: 'var(--bg)', border: '1px solid var(--border)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-2 font-mono text-[11px] uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
                <span>Jaipur, Rajasthan · India · Remote</span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  Open Q4 2026
                </span>
              </div>
            </div>
          </div>

          {/* Scrolling right — bio text */}
          <div className="flex flex-col gap-8" style={{ fontSize: 'clamp(16px,1.8vw,20px)', lineHeight: 1.7, color: 'var(--text)' }}>
            <ScrollRevealParagraph
              text="I started with design. Not in a classroom — at 2am watching tutorials, rebuilding apps I loved from scratch, failing at the details until they stopped being details. The obsession was never about aesthetics. It was about understanding how things work."
            />
            <ScrollRevealParagraph
              text="My first paid project was a logo for a cousin's business. ₹8,000. I redid it four times. The client said stop — it was perfect after the second version. I've been learning the gap between effort and outcome ever since."
            />
            <ScrollRevealParagraph
              text="Eight years later, I've built for 80+ businesses across India, Southeast Asia, and beyond. E-commerce platforms, EdTech systems, hospitality sites, NGO tools, VC portals, fintech dashboards. Every single one different. Every single one taught me something."
            />
            <ScrollRevealParagraph
              text="When I founded Starting Core, I made a deliberate shift — from building products to solving business problems. The craft is the same. The scope is different. Now we audit first, understand the real bottleneck, and then build the exact thing that fixes it."
            />
            <ScrollRevealParagraph
              text="AI changed everything. Not because it's a silver bullet — but because it made automation accessible. Now a small business in Jaipur can have the same operational efficiency as a company 10 times its size. That's the work I'm most excited about right now."
            />
            <ScrollRevealParagraph
              text="Starting Core is the studio. The courses, the content, the community — that's the teaching side. Both matter. Both are how I'm spending the next decade."
              className="font-medium"
            />
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-20 md:py-32 px-6 md:px-10" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-[1320px] mx-auto">
          <div className="mb-16">
            <div className="font-mono text-[11px] uppercase tracking-widest mb-4" style={{ color: 'var(--muted)' }}>
              <span style={{ color: 'var(--accent)', marginRight: '6px' }}>··</span>The journey
            </div>
            <h2 className="font-syne uppercase" style={{ fontSize: 'clamp(32px,5vw,64px)', lineHeight: 0.92, letterSpacing: '-0.033em', fontWeight: 800, color: 'var(--text)' }}>
              HOW I <span style={{ color: 'var(--accent)' }}>GOT HERE.</span>
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
      <section className="py-20 md:py-32 px-6 md:px-10" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
        <div className="max-w-[1320px] mx-auto">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest mb-4" style={{ color: 'var(--muted)' }}>
                <span style={{ color: 'var(--accent)', marginRight: '6px' }}>··</span>How I think
              </div>
              <h2 className="font-syne uppercase" style={{ fontSize: 'clamp(32px,5vw,64px)', lineHeight: 0.92, letterSpacing: '-0.033em', fontWeight: 800, color: 'var(--text)' }}>
                FOUR PRINCIPLES.{' '}
                <span style={{ color: 'var(--accent)' }}>NO EXCEPTIONS.</span>
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
      <section style={{ background: 'var(--text)', padding: 'clamp(72px,8vw,112px) 24px' }}>
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest mb-6" style={{ color: 'rgba(247,245,240,0.4)' }}>
              <span style={{ color: 'var(--accent)', marginRight: '6px' }}>··</span>THE STUDIO
            </div>
            <h2 className="font-syne uppercase mb-6" style={{ fontSize: 'clamp(32px,5vw,64px)', lineHeight: 0.92, letterSpacing: '-0.033em', fontWeight: 800, color: '#F7F5F0' }}>
              THIS IS{' '}
              <span style={{ color: 'var(--accent)' }}>STARTING CORE.</span>
            </h2>
            <p style={{ fontSize: 'clamp(14px,1.4vw,16px)', lineHeight: 1.75, color: 'rgba(247,245,240,0.6)', marginBottom: '32px', maxWidth: '44ch' }}>
              A boutique development and AI studio. Not an agency. Not a freelancer platform. We audit first, then build exactly what you need — custom software, AI systems, or automation tools.
            </p>
            <Link to="/starting-core" className="bracket-link" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>
              [ ABOUT THE STUDIO ]
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '80+', label: 'Problems solved' },
              { num: '6+', label: 'Years building' },
              { num: '30+', label: 'AI systems built' },
              { num: '₹40k', label: 'Audit starts at' },
            ].map(stat => (
              <div key={stat.label} style={{ background: 'rgba(247,245,240,0.05)', borderRadius: '16px', padding: '24px', border: '1px solid rgba(247,245,240,0.08)' }}>
                <p className="font-syne" style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#F7F5F0', marginBottom: '6px' }}>{stat.num}</p>
                <p className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.14em', color: 'rgba(247,245,240,0.35)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 px-6 md:px-10 text-center" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
        <div className="max-w-[640px] mx-auto">
          <div className="font-mono text-[11px] uppercase tracking-widest mb-6" style={{ color: 'var(--muted)' }}>
            <span style={{ color: 'var(--accent)', marginRight: '6px' }}>··</span>What's next
          </div>
          <h2 className="font-syne uppercase mb-6" style={{ fontSize: 'clamp(32px,5.5vw,72px)', lineHeight: 0.92, letterSpacing: '-0.033em', fontWeight: 800, color: 'var(--text)' }}>
            TELL US WHAT'S{' '}
            <span style={{ color: 'var(--accent)' }}>BROKEN.</span>
          </h2>
          <p style={{ fontSize: 'clamp(14px,1.4vw,16px)', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '40px' }}>
            Audits start at ₹40,000. Custom builds from ₹80,000. We take on 2–3 new projects per quarter so every client gets full attention.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="bracket-link accent">[ START A PROJECT ]</Link>
            <Link to="/courses" className="bracket-link">[ EXPLORE COURSES ]</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
