import { useRef } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, AlertCircle } from 'lucide-react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { getWebsite } from '../data/websites'

export default function WebsiteCase() {
  const { slug } = useParams<{ slug: string }>()
  const site = getWebsite(slug ?? '')

  if (!site) return <Navigate to="/work" replace />

  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-0 px-6 md:px-10">
        <div className="max-w-[1320px] mx-auto" ref={heroRef}>

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#8A8780] hover:text-[#C41E3A] transition-colors"
            >
              <ArrowLeft className="w-3 h-3" strokeWidth={2} />
              Back to Work
            </Link>
          </motion.div>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780]">{site.year}</span>
            <span className="w-px h-3 bg-[#D8D4CB]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780]">{site.industry}</span>
            <span className="w-px h-3 bg-[#D8D4CB]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780]">{site.category}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-mondwest text-[clamp(44px,7vw,96px)] leading-[0.9] tracking-tight text-[#051A24] mb-4"
          >
            {site.title}
          </motion.h1>

          {/* Domain */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mb-12"
          >
            <span className="font-mono text-sm text-[#8A8780]">{site.domain}</span>
          </motion.div>
        </div>
      </section>

      {/* Thumbnail */}
      <section className="px-6 md:px-10 mb-16">
        <div className="max-w-[1320px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl overflow-hidden"
            style={{ aspectRatio: '16/7', background: site.gradient }}
          >
            {/* Gradient texture overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />

            {/* Centre label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <span className="font-mondwest text-white/20 text-[clamp(28px,5vw,72px)] tracking-tight leading-none">
                {site.title}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">{site.domain}</span>
            </div>

            {/* Live/Check badge */}
            <div className="absolute top-5 right-5">
              {site.status === 'live' ? (
                <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-emerald-400 border border-emerald-400/30 rounded-full px-3 py-1.5 bg-black/30 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-amber-400 border border-amber-400/30 rounded-full px-3 py-1.5 bg-black/30 backdrop-blur-sm">
                  <AlertCircle className="w-3 h-3" />
                  Verify link
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 xl:gap-24">

            {/* Left — main content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780] mb-3">About the project</div>
                <p className="text-[17px] text-[#051A24]/75 leading-relaxed mb-10">
                  {site.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780] mb-3">What I did</div>
                <p className="text-[17px] text-[#051A24]/75 leading-relaxed mb-10">
                  {site.what}
                </p>
              </motion.div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.15, duration: 0.55 }}
                className="flex flex-wrap gap-2"
              >
                {site.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-widest text-[#051A24]/50 border border-[#D8D4CB] rounded-full px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right — sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6"
            >
              {/* View site CTA */}
              <div className="rounded-2xl border border-[#D8D4CB] p-6">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780] mb-2">Live website</div>
                <p className="text-sm text-[#051A24]/60 leading-relaxed mb-5">
                  {site.status === 'live'
                    ? 'This site is currently live. Click below to view it.'
                    : 'This link may no longer be active. Verify before visiting.'}
                </p>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium transition-colors ${
                    site.status === 'live'
                      ? 'bg-[#051A24] text-white hover:bg-[#C41E3A]'
                      : 'bg-[#F5F3EE] text-[#051A24]/60 hover:bg-[#D8D4CB]'
                  }`}
                >
                  View live site
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                </a>
              </div>

              {/* Project details */}
              <div className="rounded-2xl border border-[#D8D4CB] p-6 flex flex-col gap-4">
                {[
                  { label: 'Client', value: site.title },
                  { label: 'Industry', value: site.industry },
                  { label: 'Category', value: site.category },
                  { label: 'Year', value: site.year },
                ].map(({ label, value }) => (
                  <div key={label} className="border-b border-[#F0EDE7] pb-4 last:border-0 last:pb-0">
                    <div className="font-mono text-[9px] uppercase tracking-widest text-[#8A8780] mb-1">{label}</div>
                    <div className="text-sm font-medium text-[#051A24]">{value}</div>
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[#F5F3EE] border-t border-[#D8D4CB]">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780] mb-3">Next step</div>
            <h2 className="text-[clamp(24px,3.5vw,44px)] leading-[1.05] tracking-tight text-[#051A24]">
              Want a site like this for{' '}
              <em className="font-mondwest text-[#C41E3A] not-italic">your business?</em>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#051A24] text-white rounded-full px-7 py-4 text-sm font-medium hover:bg-[#C41E3A] transition-colors"
            >
              Start a project
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 border border-[#D8D4CB] text-[#051A24] rounded-full px-7 py-4 text-sm font-medium hover:border-[#051A24] transition-colors"
            >
              View all work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
