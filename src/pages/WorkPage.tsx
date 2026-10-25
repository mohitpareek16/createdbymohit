import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import { getAllProjects, type Project } from '../data/projects'
import { getAllWebsites, type WebsiteProject } from '../data/websites'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/work/${project.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-2xl bg-[#051A24] mb-5" style={{ aspectRatio: '16/9' }}>
          <img
            src={project.gif}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-[#051A24]/0 group-hover:bg-[#051A24]/40 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 bg-white text-[#051A24] rounded-full px-5 py-2.5 text-sm font-medium">
              Read case study
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780]">{project.year}</span>
              <span className="w-px h-3 bg-[#D8D4CB]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780]">{project.category}</span>
            </div>
            <h3 className="font-mondwest text-2xl md:text-3xl text-[#051A24] group-hover:text-[#C41E3A] transition-colors leading-tight mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-[#051A24]/60 max-w-[44ch] leading-relaxed">{project.tagline}</p>
          </div>
          <div className="flex-none ml-4 mt-1">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780] group-hover:text-[#C41E3A] transition-colors flex items-center gap-1.5">
              Case study
              <ArrowRight className="w-3 h-3" strokeWidth={2} />
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="font-mono text-[10px] uppercase tracking-widest text-[#051A24]/50 border border-[#D8D4CB] rounded-full px-3 py-1 group-hover:border-[#051A24]/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  )
}

function WebsiteCard({ site, index }: { site: WebsiteProject; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: (index % 4) * 0.07, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/work/site/${site.slug}`} className="group block">
        {/* Thumbnail */}
        <div
          className="relative rounded-xl overflow-hidden mb-4"
          style={{ aspectRatio: '16/9', background: site.gradient }}
        >
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mondwest text-white/20 text-xl tracking-tight">{site.title}</span>
          </div>
          {/* Status dot */}
          <div className="absolute top-3 right-3">
            {site.status === 'live' ? (
              <span className="w-2 h-2 rounded-full bg-emerald-400 block" title="Live" />
            ) : (
              <span className="w-2 h-2 rounded-full bg-amber-400 block" title="Verify link" />
            )}
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-white border border-white/40 rounded-full px-3 py-1.5">
              View project <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="font-mono text-[9px] uppercase tracking-widest text-[#8A8780] mb-1">
          {site.category} · {site.year}
        </div>
        <h3 className="text-sm font-medium text-[#051A24] group-hover:text-[#C41E3A] transition-colors leading-snug mb-0.5">
          {site.title}
        </h3>
        <p className="font-mono text-[10px] text-[#8A8780]">{site.domain}</p>
      </Link>
    </motion.div>
  )
}

export default function WorkPage() {
  const projects = getAllProjects()
  const websites = getAllWebsites()
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <main>
      <SEO
        title="Work — 80+ Problems Solved | Starting Core · Mohit Pareek"
        description="80+ client projects — custom software, AI systems, websites, and automation tools built for businesses across India and beyond. Founder of Starting Core."
        canonical="/work"
      />
      <Nav />

      {/* Hero */}
      <section style={{ paddingTop: 'clamp(120px,15vw,180px)', paddingBottom: 'clamp(48px,5vw,80px)', paddingInline: '24px', borderBottom: '1px solid var(--border)', background: 'var(--bg)' }}>
        <div className="max-w-[1320px] mx-auto" ref={heroRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="font-mono uppercase"
            style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '20px' }}
          >
            <span style={{ color: 'var(--accent)', marginRight: '6px' }}>··</span>SELECTED WORK · 2019 — 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne uppercase"
            style={{ fontSize: 'clamp(44px,7.5vw,100px)', lineHeight: 0.9, letterSpacing: '-0.035em', fontWeight: 800, color: 'var(--text)', marginBottom: '24px' }}
          >
            80+ PROBLEMS.<br />
            <span style={{ color: 'var(--accent)' }}>DIFFERENT EVERY TIME.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ fontSize: 'clamp(14px,1.4vw,17px)', lineHeight: 1.7, color: 'var(--muted)', maxWidth: '52ch' }}
          >
            Deep case studies alongside 31 client websites — from EdTech platforms and hospitality brands to NGOs, e-commerce, and VC portals.
          </motion.p>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="py-16 md:py-24 px-6 md:px-10" style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg)' }}>
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780] mb-2">Deep dives</div>
              <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.05] tracking-tight text-[#051A24]">Case Studies</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT WEBSITES ── */}
      <section className="py-16 md:py-24 px-6 md:px-10" style={{ background: 'var(--surface)' }}>
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780] mb-2">Client work</div>
              <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.05] tracking-tight text-[#051A24]">
                Websites Built
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-4 text-xs text-[#8A8780]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Live
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Verify link
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
            {websites.map((site, i) => (
              <WebsiteCard key={site.slug} site={site} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-10" style={{ background: 'var(--text)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest mb-3" style={{ color: 'rgba(247,245,240,0.3)' }}>
              <span style={{ color: 'var(--accent)', marginRight: '6px' }}>··</span>WANT TO BE ON THIS LIST?
            </div>
            <h2 className="font-syne uppercase" style={{ fontSize: 'clamp(28px,4vw,56px)', lineHeight: 0.92, letterSpacing: '-0.033em', fontWeight: 800, color: '#F7F5F0' }}>
              LET'S SOLVE YOUR{' '}
              <span style={{ color: 'var(--accent)' }}>SPECIFIC PROBLEM.</span>
            </h2>
          </div>
          <Link
            to="/contact"
            className="flex-none bracket-link"
            style={{ borderColor: 'var(--accent)', color: 'var(--accent)', flexShrink: 0 }}
          >
            [ GET IN TOUCH ]
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
