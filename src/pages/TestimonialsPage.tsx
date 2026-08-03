import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import BottomNav from '../components/BottomNav'

const TESTIMONIALS = [
  {
    quote: "Mohit redesigned our onboarding and our activation jumped 40% in month one. He just gets it. He didn't ask us what we wanted — he figured out what we needed.",
    name: 'Elena Sharma',
    role: 'Head of Product',
    company: 'FinVibe',
    category: 'Product Design',
    size: 'large',
  },
  {
    quote: "Worked with Mohit on a 5-day design sprint for our checkout flow. By day three we had a tested prototype. By week four after launch, cart abandonment was down 28%.",
    name: 'Arjun Mehta',
    role: 'Co-founder & CEO',
    company: 'CartPilot',
    category: 'Design Sprint',
    size: 'medium',
  },
  {
    quote: "Honest, fast, and doesn't waste your time with slides about process. He just designs.",
    name: 'Priya Nair',
    role: 'Founder',
    company: 'Layerwise',
    category: 'Freelance',
    size: 'small',
  },
  {
    quote: "We hired Mohit as a fractional design lead when we had one junior designer and no direction. Six months later we had a design system, a component library, and a junior who was doing real work. The ROI was obvious within 60 days.",
    name: 'Rohan Kapoor',
    role: 'CTO',
    company: 'Stackflow',
    category: 'Fractional Lead',
    size: 'large',
  },
  {
    quote: "The audit report was brutal and exactly what we needed. We'd been ignoring problems for two years because nobody could articulate them clearly. Mohit did it in a week.",
    name: 'Simran Batra',
    role: 'Product Manager',
    company: 'Sprinto',
    category: 'Design Audit',
    size: 'medium',
  },
  {
    quote: "I took Mohit's portfolio review call and had three offers within six weeks. Highly recommend if you're stuck.",
    name: 'Karan Sood',
    role: 'Senior Designer',
    company: 'Razorpay',
    category: 'Consultation',
    size: 'small',
  },
  {
    quote: "His courses changed how I think about design. Not just skills — perspective. The case study on conversion bottlenecks alone was worth the price.",
    name: 'Nidhi Jain',
    role: 'UI/UX Designer',
    company: 'Freelance',
    category: 'Course',
    size: 'medium',
  },
  {
    quote: "Mohit helped us ship a 0→1 product in 8 weeks. The design quality was production-ready from day one — no polish pass required. That's rare.",
    name: 'Vikram Reddy',
    role: 'Founder',
    company: 'Omnivault',
    category: 'Product Design',
    size: 'large',
  },
]

const LOGOS = ['FinVibe', 'CartPilot', 'Layerwise', 'Stackflow', 'Sprinto', 'Razorpay', 'Omnivault', 'Starting Core']

function TestimonialCard({ t, index }: { t: typeof TESTIMONIALS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  const isLarge = t.size === 'large'
  const isSmall = t.size === 'small'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 3) * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-2xl border border-[#D8D4CB] p-7 flex flex-col ${isLarge ? 'bg-[#051A24]' : 'bg-white'}`}
    >
      <div className="mb-4">
        <span className={`inline-block font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full border ${
          isLarge
            ? 'text-[#C41E3A] border-[#C41E3A]/30'
            : 'text-[#8A8780] border-[#D8D4CB]'
        }`}>
          {t.category}
        </span>
      </div>

      <blockquote className={`flex-1 leading-relaxed mb-6 ${
        isSmall ? 'text-sm' : isLarge ? 'text-lg' : 'text-base'
      } ${isLarge ? 'text-white/85' : 'text-[#051A24]/80'}`}>
        "{t.quote}"
      </blockquote>

      <div className={`flex items-center gap-3 pt-5 border-t ${isLarge ? 'border-white/10' : 'border-[#D8D4CB]'}`}>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 ${
          isLarge ? 'bg-white/10 text-white' : 'bg-[#F5F3EE] text-[#051A24]'
        }`}>
          {t.name.charAt(0)}
        </div>
        <div>
          <div className={`text-sm font-medium ${isLarge ? 'text-white' : 'text-[#051A24]'}`}>{t.name}</div>
          <div className={`text-xs ${isLarge ? 'text-white/40' : 'text-[#8A8780]'}`}>
            {t.role} · {t.company}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function TestimonialsPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <main>
      <Nav />

      {/* ── HERO ── */}
      <section className="pt-40 pb-16 px-6 md:px-10 border-b border-[#D8D4CB]">
        <div className="max-w-[1320px] mx-auto" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780] mb-6"
          >
            Client feedback · Social proof
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(44px,7.5vw,96px)] leading-[0.9] tracking-tight text-[#051A24] mb-6"
          >
            What clients{' '}
            <em className="font-mondwest text-[#C41E3A] not-italic">actually say.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base text-[#051A24]/60 max-w-[50ch] leading-relaxed"
          >
            Founders, product leads, and designers who've worked with me directly.
            No PR-polished quotes — what they told me.
          </motion.p>
        </div>
      </section>

      {/* ── LOGOS ── */}
      <section className="py-10 px-6 md:px-10 border-b border-[#D8D4CB] overflow-hidden">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780] flex-shrink-0">
              Clients include
            </span>
            {LOGOS.map(logo => (
              <span key={logo} className="font-medium text-[#051A24]/40 text-sm hover:text-[#051A24]/70 transition-colors cursor-default">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1320px] mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="break-inside-avoid">
                <TestimonialCard t={t} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 md:px-10 bg-[#F5F3EE] border-t border-[#D8D4CB]">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-[clamp(24px,4vw,48px)] leading-[1.1] tracking-tight text-[#051A24] max-w-[20ch]">
              Want results like these?{' '}
              <em className="font-mondwest text-[#C41E3A] not-italic">Let's talk.</em>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#051A24] text-white rounded-full px-7 py-4 text-sm font-medium hover:bg-[#C41E3A] transition-colors"
            >
              Start a project
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
            <Link
              to="/book"
              className="inline-flex items-center gap-2 border border-[#D8D4CB] text-[#051A24] rounded-full px-7 py-4 text-sm font-medium hover:border-[#051A24] transition-colors"
            >
              Book a call first
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </main>
  )
}
