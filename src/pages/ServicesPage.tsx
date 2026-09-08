import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import BottomNav from '../components/BottomNav'

const SERVICES = [
  {
    id: 'product-design',
    index: '01',
    title: 'Product Design',
    tagline: 'From zero to a product people actually use.',
    description:
      'End-to-end design for digital products — from initial research and information architecture through high-fidelity UI and production-ready design systems. I embed in your team or work independently, depending on what you need.',
    deliverables: [
      'User research & competitive analysis',
      'Information architecture & user flows',
      'Wireframes & interactive prototypes',
      'High-fidelity UI design',
      'Design system & component library',
      'Developer handoff (Figma specs + annotations)',
    ],
    suited: 'Startups at seed or Series A, product teams launching a new feature or redesigning an existing one.',
    starting: '₹50,000 / month',
    accent: '#051A24',
    featured: false,
  },
  {
    id: 'design-sprint',
    index: '02',
    title: 'Design Sprint',
    tagline: 'Solve one big problem in one focused week.',
    description:
      'A structured 5-day sprint to validate an idea, redesign a broken flow, or unblock a decision your team has been circling for months. You leave with tested concepts and a clear direction — not just slides.',
    deliverables: [
      'Problem framing & sprint goals (Day 1)',
      'Solution sketching & concept mapping (Day 2)',
      'High-fidelity prototype (Day 3)',
      'User testing with 5 real users (Day 4)',
      'Findings & next-step roadmap (Day 5)',
    ],
    suited: 'Teams stuck on a hard UX problem, founders validating before building, product leads who need a decision made.',
    starting: '₹1,20,000 / sprint',
    accent: '#2D1B8B',
    featured: false,
  },
  {
    id: 'design-audit',
    index: '03',
    title: 'Design Audit',
    tagline: "Find what's hurting your product — and fix it.",
    description:
      'A deep review of your existing product across usability, visual consistency, conversion, and information architecture. You get a prioritised action list and a written report, not just a list of problems.',
    deliverables: [
      'Full UX & usability walkthrough',
      'Conversion bottleneck identification',
      'Visual & brand consistency audit',
      'Accessibility quick-wins',
      'Information architecture review',
      'Prioritised action list + written report',
    ],
    suited: 'Products with traction that feel rough around the edges, teams before a redesign who need a baseline.',
    starting: '₹35,000 / audit',
    accent: '#0C4A2E',
    featured: false,
  },
  {
    id: 'fractional-design',
    index: '04',
    title: 'Fractional Design Lead',
    tagline: 'Senior design thinking without the full-time hire.',
    description:
      "I join your team part-time as your design lead — setting direction, mentoring junior designers, running design reviews, and shipping product. Ideal for startups that need design leadership but aren't ready for a full-time CDO.",
    deliverables: [
      '2–3 days per week dedicated to your product',
      'Design strategy & roadmap ownership',
      'Team mentoring & design critiques',
      'Stakeholder presentations',
      'Hiring support (interviews, design tests)',
      'Ongoing design system stewardship',
    ],
    suited: 'Post-seed startups with a small design team or no senior design voice.',
    starting: '₹80,000 / month',
    accent: '#1A3A5C',
    featured: true,
  },
]

const PROCESS = [
  { step: '01', title: 'Discovery call', desc: "We talk through what you're building, where you are, and what you actually need. No pressure, no pitch." },
  { step: '02', title: 'Proposal', desc: "I send a scoped proposal within 48 hours — what we'll do, what it costs, and when we'll be done." },
  { step: '03', title: 'Kickoff', desc: 'Contracts signed, tools set up, kick-off call done. We move fast from here.' },
  { step: '04', title: 'Weekly cadence', desc: 'Every week: async updates, one sync call, design feedback collected and shipped.' },
]

function ServiceCard({ svc, index }: { svc: typeof SERVICES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-3xl border p-8 md:p-10 flex flex-col ${
        svc.featured
          ? 'border-[#051A24] bg-[#051A24] text-white'
          : 'border-[#D8D4CB] bg-white text-[#051A24]'
      }`}
    >
      {svc.featured && (
        <div className="absolute top-6 right-6 font-mono text-[9px] uppercase tracking-widest text-[#C41E3A] border border-[#C41E3A]/40 rounded-full px-3 py-1">
          Most requested
        </div>
      )}

      <div className="mb-8">
        <div className={`font-mono text-[11px] tracking-widest mb-4 ${svc.featured ? 'text-[#C41E3A]' : 'text-[#C41E3A]'}`}>
          {svc.index}
        </div>
        <h3 className={`font-mondwest text-[clamp(28px,4vw,40px)] leading-tight mb-3 ${svc.featured ? 'text-white' : 'text-[#051A24]'}`}>
          {svc.title}
        </h3>
        <p className={`text-sm font-medium ${svc.featured ? 'text-white/60' : 'text-[#051A24]/60'}`}>
          {svc.tagline}
        </p>
      </div>

      <p className={`text-sm leading-relaxed mb-8 ${svc.featured ? 'text-white/65' : 'text-[#051A24]/65'}`}>
        {svc.description}
      </p>

      <div className="mb-8 flex-1">
        <div className={`font-mono text-[10px] uppercase tracking-widest mb-4 ${svc.featured ? 'text-white/35' : 'text-[#8A8780]'}`}>
          What's included
        </div>
        <div className="flex flex-col gap-2.5">
          {svc.deliverables.map(d => (
            <div key={d} className="flex items-start gap-3">
              <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                svc.featured ? 'bg-[#C41E3A]/20' : 'bg-[#F5F3EE]'
              }`}>
                <Check className={`w-2.5 h-2.5 ${svc.featured ? 'text-[#C41E3A]' : 'text-[#051A24]'}`} strokeWidth={2.5} />
              </div>
              <span className={`text-xs leading-relaxed ${svc.featured ? 'text-white/70' : 'text-[#051A24]/70'}`}>
                {d}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={`text-xs leading-relaxed mb-6 p-4 rounded-2xl ${
        svc.featured ? 'bg-white/5 text-white/50' : 'bg-[#F5F3EE] text-[#051A24]/55'
      }`}>
        <span className={`font-mono text-[10px] uppercase tracking-widest block mb-1.5 ${svc.featured ? 'text-white/30' : 'text-[#8A8780]'}`}>
          Best suited for
        </span>
        {svc.suited}
      </div>

      <div className="flex items-center justify-between">
        <div>
          <div className={`font-mono text-[10px] uppercase tracking-widest mb-1 ${svc.featured ? 'text-white/35' : 'text-[#8A8780]'}`}>
            Starting at
          </div>
          <div className={`font-mondwest text-xl ${svc.featured ? 'text-white' : 'text-[#051A24]'}`}>
            {svc.starting}
          </div>
        </div>
        <Link
          to="/contact"
          className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-medium transition-colors ${
            svc.featured
              ? 'bg-[#C41E3A] text-white hover:bg-[#a8192f]'
              : 'bg-[#051A24] text-white hover:bg-[#C41E3A]'
          }`}
        >
          Start a project
          <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
        </Link>
      </div>
    </motion.div>
  )
}

export default function ServicesPage() {
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
            className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780] mb-6 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3A]" />
            Services · What I do
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(44px,7.5vw,96px)] leading-[0.9] tracking-tight text-[#051A24] mb-6"
          >
            Design that{' '}
            <em className="font-mondwest text-[#C41E3A] not-italic">moves numbers.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base text-[#051A24]/60 max-w-[52ch] leading-relaxed"
          >
            Four ways to work together — from a focused audit to embedded design leadership.
            All of it grounded in real product thinking, not just aesthetics.
          </motion.p>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SERVICES.map((svc, i) => (
              <ServiceCard key={svc.id} svc={svc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-[#F5F3EE] border-t border-[#D8D4CB]">
        <div className="max-w-[1320px] mx-auto">
          <div className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780] mb-4">How we work</div>
          <h2 className="text-[clamp(28px,4vw,52px)] leading-[1.05] tracking-tight text-[#051A24] mb-14">
            Simple process,{' '}
            <em className="font-mondwest text-[#C41E3A] not-italic">zero fluff.</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="font-mono text-[11px] tracking-widest text-[#C41E3A] mb-4">{p.step}</div>
                <h4 className="font-medium text-[#051A24] text-sm mb-2">{p.title}</h4>
                <p className="text-xs text-[#051A24]/55 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 px-6 md:px-10 border-t border-[#D8D4CB]">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3A] animate-pulse" />
              Available Q3 2026
            </div>
            <h2 className="text-[clamp(28px,4.5vw,60px)] leading-[1.05] tracking-tight text-[#051A24] max-w-[18ch]">
              Not sure which service fits?{' '}
              <em className="font-mondwest text-[#C41E3A] not-italic">Just ask.</em>
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
