import { useRef } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import { getProject, getNextProject } from '../data/projects'

// ── Scroll progress bar ───────────────────────────────────────
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#C41E3A] z-[100] origin-left"
      style={{ scaleX }}
    />
  )
}

// ── Section heading ───────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780] mb-4">
      {children}
    </div>
  )
}

// ── Process step ─────────────────────────────────────────────
function ProcessStep({
  phase,
  description,
  index,
  total,
}: {
  phase: string
  description: string
  index: number
  total: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-[48px_1fr] gap-6 items-start"
    >
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full border-2 border-[#C41E3A] flex items-center justify-center flex-shrink-0">
          <span className="font-mono text-[10px] text-[#C41E3A] font-medium">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        {index < total - 1 && <div className="w-px flex-1 bg-[#D8D4CB] mt-2 min-h-[40px]" />}
      </div>
      <div className={index < total - 1 ? 'pb-10' : ''}>
        <h4 className="font-mondwest text-lg text-[#051A24] mb-2">{phase}</h4>
        <p className="text-sm text-[#051A24]/65 leading-relaxed max-w-[58ch]">{description}</p>
      </div>
    </motion.div>
  )
}

// ── Metric card ───────────────────────────────────────────────
function MetricCard({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="p-6 border border-white/10 rounded-2xl bg-white/5"
    >
      <div className="font-mondwest text-3xl md:text-4xl text-white mb-2">{value}</div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-white/45 leading-relaxed">{label}</div>
    </motion.div>
  )
}

// ── Page ─────────────────────────────────────────────────────
export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProject(slug) : undefined
  const next = slug ? getNextProject(slug) : undefined

  if (!project) return <Navigate to="/work" replace />

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${project.title} — Case Study | Mohit Pareek`}
        description={project.tagline}
        canonical={`/work/${project.slug}`}
        type="article"
      />
      <ScrollProgress />
      <Nav />

      {/* ── HERO ── */}
      <section
        className="pt-32 pb-0 px-6 md:px-10"
        style={{ background: `linear-gradient(160deg, ${project.accent} 0%, #051A24 55%)` }}
      >
        <div className="max-w-[1320px] mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/40 mb-8">
            <Link to="/work" className="hover:text-white/70 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" strokeWidth={2} />
              Work
            </Link>
            <span>/</span>
            <span className="text-white/60">{project.category.split('·')[0].trim()}</span>
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8">
            {[
              { label: 'Role', value: project.role },
              { label: 'Client', value: project.client },
              { label: 'Year', value: project.year },
              { label: 'Duration', value: project.duration },
            ].map(m => (
              <div key={m.label} className="flex items-center gap-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-white/35">{m.label}</span>
                <span className="font-mono text-[10px] text-white/65">{m.value}</span>
              </div>
            ))}
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-mondwest text-[clamp(48px,8vw,104px)] text-white leading-[0.88] tracking-tight mb-6 max-w-[14ch]"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-base md:text-lg text-white/65 max-w-[56ch] leading-relaxed mb-12"
          >
            {project.tagline}
          </motion.p>

          {/* GIF */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-t-2xl overflow-hidden border-t border-x border-white/10"
            style={{ boxShadow: '0 -8px 40px rgba(0,0,0,0.3)' }}
          >
            <img
              src={project.gif}
              alt={project.title}
              className="w-full object-cover"
              style={{ maxHeight: 600 }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="py-20 md:py-28 px-6 md:px-10 border-b border-[#D8D4CB]">
        <div className="max-w-[800px] mx-auto">
          <SectionLabel>Overview</SectionLabel>
          <p className="text-[clamp(18px,2.2vw,24px)] leading-[1.65] text-[#051A24]/80 font-light">
            {project.overview}
          </p>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#F5F3EE] border-b border-[#D8D4CB]">
        <div className="max-w-[800px] mx-auto">
          <SectionLabel>The Problem</SectionLabel>
          <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-tight text-[#051A24] mb-8 font-normal">
            {project.problem}
          </h2>
          {project.problemBullets.length > 0 && (
            <ul className="flex flex-col gap-4 mt-8">
              {project.problemBullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-4 text-sm text-[#051A24]/70 leading-relaxed"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C41E3A] flex-shrink-0" />
                  {bullet}
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 md:py-28 px-6 md:px-10 border-b border-[#D8D4CB]">
        <div className="max-w-[800px] mx-auto">
          <SectionLabel>The Process</SectionLabel>
          <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-tight text-[#051A24] mb-12 font-normal">
            How we got to the answer.
          </h2>
          <div>
            {project.process.map((step, i) => (
              <ProcessStep
                key={step.phase}
                phase={step.phase}
                description={step.description}
                index={i}
                total={project.process.length}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#F5F3EE] border-b border-[#D8D4CB]">
        <div className="max-w-[800px] mx-auto">
          <SectionLabel>The Solution</SectionLabel>
          <p className="text-[clamp(18px,2.2vw,24px)] leading-[1.65] text-[#051A24]/80 font-light">
            {project.solution}
          </p>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#051A24]">
        <div className="max-w-[1320px] mx-auto">
          <SectionLabel>
            <span className="text-white/40">Results</span>
          </SectionLabel>
          <h2 className="text-[clamp(28px,4vw,52px)] leading-[1.05] tracking-tight text-white mb-12 font-normal">
            What actually{' '}
            <em className="font-mondwest text-[#C41E3A] not-italic">changed.</em>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.metrics.map((m, i) => (
              <MetricCard key={m.label} value={m.value} label={m.label} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── NEXT PROJECT ── */}
      {next && (
        <section className="py-16 px-6 md:px-10 border-t border-[#D8D4CB]">
          <div className="max-w-[1320px] mx-auto">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780] mb-6">
              Next project
            </div>
            <Link to={`/work/${next.slug}`} className="group flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="flex-none w-full md:w-48 rounded-xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src={next.gif}
                  alt={next.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-mondwest text-3xl md:text-4xl text-[#051A24] group-hover:text-[#C41E3A] transition-colors leading-tight mb-2">
                  {next.title}
                </h3>
                <p className="text-sm text-[#051A24]/60 max-w-[44ch]">{next.tagline}</p>
              </div>
              <div className="flex-none">
                <span className="w-12 h-12 rounded-full border border-[#D8D4CB] flex items-center justify-center group-hover:bg-[#051A24] group-hover:border-[#051A24] transition-colors">
                  <ArrowRight className="w-5 h-5 text-[#8A8780] group-hover:text-white transition-colors" strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
