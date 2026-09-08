import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import Footer from '../components/Footer'

const WORK = [
  { title: 'evr', category: 'Product Design', desc: 'Carbon footprint tracking for conscious consumers.', accent: '#2D1B8B', slug: 'evr' },
  { title: 'Automation Machines', category: 'SaaS Platform', desc: 'AI-powered workflow automation for modern teams.', accent: '#0C4A2E', slug: 'automation-machines' },
  { title: 'xPortfolio', category: 'Design Tool', desc: 'Portfolio builder for designers and creatives.', accent: '#0F3172', slug: 'xportfolio' },
]

const VALUES = [
  {
    title: 'Fewer, better decisions',
    desc: "Startups don't fail because they ran out of ideas. They fail because they couldn't decide fast enough. We help teams move from debate to direction.",
  },
  {
    title: 'Craft without ceremony',
    desc: "Good design doesn't require a 6-week process. It requires clear thinking and a high bar. We maintain both.",
  },
  {
    title: 'Embedded, not external',
    desc: 'We work inside your Slack, attend your standups, and read your user research. Not from a deck on a Friday.',
  },
  {
    title: 'Outcomes over outputs',
    desc: "Screens are a means to an end. We track whether the thing we made actually worked — and we'll tell you if we think something won't.",
  },
]

export default function StartingCorePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <main>
      <SEO
        title="AI Automation Agency for Businesses | Starting Core"
        description="Starting Core is an AI automation agency founded by Mohit Pareek. We build custom AI workflows, agents, and automation systems for businesses in India — eliminating manual work and scaling operations."
        canonical="/starting-core"
      />
      <Nav />

      {/* ── HERO ── */}
      <section className="bg-[#051A24] pt-40 pb-24 px-6 md:px-10 relative overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="max-w-[1320px] mx-auto relative z-10" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3A] animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">
              Starting Core · Design Studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(44px,8vw,112px)] leading-[0.88] tracking-tight text-white mb-10 max-w-[14ch]"
          >
            The studio behind{' '}
            <em className="font-mondwest text-[#C41E3A] not-italic">the work.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-base text-white/55 max-w-[50ch] leading-relaxed mb-12"
          >
            Starting Core is Mohit Pareek's design studio. We partner with early-stage and growth-stage
            startups to ship product design that moves numbers — not just screenshots that win awards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#C41E3A] text-white rounded-full px-7 py-4 text-sm font-medium hover:bg-[#a8192f] transition-colors"
            >
              Work with us
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 border border-white/20 text-white rounded-full px-7 py-4 text-sm font-medium hover:border-white/50 transition-colors"
            >
              See the work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-b border-[#D8D4CB]">
        <div className="max-w-[1320px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-[#D8D4CB]">
          {[
            { num: '50+', label: 'Products designed' },
            { num: '6+', label: 'Years in product' },
            { num: '3', label: 'Active retainers' },
            { num: '₹50k', label: 'Monthly starting rate' },
          ].map(({ num, label }) => (
            <div key={label} className="px-8 py-10 text-center">
              <div className="font-mondwest text-4xl md:text-5xl text-[#051A24] leading-none mb-2">{num}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="py-20 md:py-28 px-6 md:px-10 border-b border-[#D8D4CB]">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_540px] gap-16 xl:gap-28">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780] mb-4">
                What we do
              </div>
              <h2 className="text-[clamp(30px,5vw,60px)] leading-[1.05] tracking-tight text-[#051A24]">
                Design that earns its place in the{' '}
                <em className="font-mondwest text-[#C41E3A] not-italic">product.</em>
              </h2>
            </div>
            <div className="flex flex-col gap-10 lg:pt-14">
              {[
                { title: 'Product Design', desc: 'End-to-end design for digital products — from research and architecture to high-fidelity UI and developer handoff.' },
                { title: 'Design Sprints', desc: 'A focused week to solve one hard problem: validate an idea, fix a broken flow, or unblock a stalled decision.' },
                { title: 'Fractional Design Leadership', desc: 'Part-time design lead for teams who need senior direction without a full-time hire.' },
                { title: 'Design Audits', desc: 'A thorough review of your product with a prioritised list of what to fix and why.' },
              ].map(({ title, desc }) => (
                <div key={title} className="border-t border-[#D8D4CB] pt-6">
                  <h3 className="font-medium text-[#051A24] mb-2">{title}</h3>
                  <p className="text-sm text-[#051A24]/60 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#F5F3EE] border-b border-[#D8D4CB]">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780] mb-3">
                Selected work
              </div>
              <h2 className="text-[clamp(28px,4vw,52px)] leading-[1.05] tracking-tight text-[#051A24]">
                Recent projects
              </h2>
            </div>
            <Link
              to="/work"
              className="hidden md:inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#8A8780] hover:text-[#051A24] transition-colors"
            >
              View all
              <ArrowRight className="w-3 h-3" strokeWidth={2} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {WORK.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to={`/work/${project.slug}`} className="group block">
                  <div
                    className="aspect-square rounded-2xl mb-4 relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${project.accent} 0%, ${project.accent}88 100%)` }}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-white/70 border border-white/30 rounded-full px-4 py-2">
                        View case study
                      </span>
                    </div>
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780] mb-1.5">{project.category}</div>
                  <h3 className="font-medium text-[#051A24] group-hover:text-[#C41E3A] transition-colors">{project.title}</h3>
                  <p className="text-sm text-[#051A24]/55 mt-1">{project.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-20 md:py-28 px-6 md:px-10 border-b border-[#D8D4CB]">
        <div className="max-w-[1320px] mx-auto">
          <div className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780] mb-4">
            How we work
          </div>
          <h2 className="text-[clamp(28px,4vw,52px)] leading-[1.05] tracking-tight text-[#051A24] mb-14 max-w-[22ch]">
            The things we actually believe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-[#D8D4CB] pt-7"
              >
                <h3 className="font-medium text-[#051A24] mb-3">{v.title}</h3>
                <p className="text-sm text-[#051A24]/60 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#051A24] py-24 md:py-32 px-6 md:px-10 text-center">
        <div className="max-w-[640px] mx-auto">
          <div className="font-mono text-[11px] uppercase tracking-widest text-white/30 mb-6">
            Ready to build?
          </div>
          <h2 className="text-[clamp(32px,5.5vw,72px)] leading-[1] tracking-tight text-white mb-6">
            Let's make something{' '}
            <em className="font-mondwest text-[#C41E3A] not-italic">that ships.</em>
          </h2>
          <p className="text-sm text-white/50 leading-relaxed mb-10 max-w-[40ch] mx-auto">
            We take on 2–3 new projects per quarter. Reach out early.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#051A24] rounded-full px-8 py-4 text-sm font-medium hover:bg-[#C41E3A] hover:text-white transition-colors"
          >
            Start a conversation
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
