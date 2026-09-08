import { useRef } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import { getGlossaryTerm, getAllGlossaryTerms } from '../data/glossary'

export default function GlossaryPost() {
  const { slug } = useParams<{ slug: string }>()
  const term = getGlossaryTerm(slug ?? '')

  if (!term) return <Navigate to="/glossary" replace />

  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })

  const allTerms = getAllGlossaryTerms()
  const related = term.relatedSlugs
    ? allTerms.filter(t => term.relatedSlugs!.includes(t.slug))
    : []

  return (
    <main>
      <SEO
        title={`What is ${term.term}? | AI Automation Glossary | Starting Core`}
        description={term.shortDef}
        canonical={`/glossary/${term.slug}`}
        type="article"
      />
      <Nav />

      <section className="pt-40 pb-12 px-6 md:px-10 border-b border-[#D8D4CB]">
        <div className="max-w-[860px] mx-auto" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/glossary"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#8A8780] hover:text-[#C41E3A] transition-colors"
            >
              <ArrowLeft className="w-3 h-3" strokeWidth={2} />
              Glossary
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05, duration: 0.4 }}
            className="font-mono text-[10px] uppercase tracking-widest text-[#C41E3A] mb-3"
          >
            AI Automation · Glossary
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.06, duration: 0.4 }}
            className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780] mb-3"
          >
            What is…
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-mondwest text-[clamp(36px,6vw,80px)] leading-[0.95] tracking-tight text-[#051A24] mb-6"
          >
            {term.term}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-base text-[#051A24]/70 leading-relaxed border-l-2 border-[#C41E3A] pl-5"
          >
            {term.shortDef}
          </motion.p>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10">
        <div className="max-w-[860px] mx-auto">
          <div className="flex flex-col gap-10">
            {term.body.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.06, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                {section.heading && (
                  <h2 className="text-lg font-medium text-[#051A24] mb-4 mt-2">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-[16px] text-[#051A24]/70 leading-relaxed mb-4 last:mb-0">
                    {p}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 p-8 rounded-2xl bg-[#F5F3EE] border border-[#D8D4CB]">
            <h3 className="font-medium text-[#051A24] mb-2">Want to implement this for your business?</h3>
            <p className="text-sm text-[#051A24]/60 leading-relaxed mb-5 max-w-[48ch]">
              Starting Core builds AI automation systems for businesses in India. From simple workflows to multi-agent pipelines.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#051A24] text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-[#C41E3A] transition-colors"
              >
                Start a conversation
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 border border-[#D8D4CB] text-[#051A24] rounded-full px-6 py-3 text-sm font-medium hover:border-[#051A24] transition-colors"
              >
                Read the FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related terms */}
      {related.length > 0 && (
        <section className="py-12 px-6 md:px-10 border-t border-[#D8D4CB]">
          <div className="max-w-[860px] mx-auto">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780] mb-6">Related terms</div>
            <div className="flex flex-col gap-3">
              {related.map(r => (
                <Link
                  key={r.slug}
                  to={`/glossary/${r.slug}`}
                  className="group flex items-center justify-between gap-4 p-5 rounded-xl border border-[#D8D4CB] hover:border-[#051A24] transition-colors"
                >
                  <div>
                    <span className="text-sm font-medium text-[#051A24] group-hover:text-[#C41E3A] transition-colors block leading-snug mb-1">
                      {r.term}
                    </span>
                    <span className="text-xs text-[#051A24]/50 line-clamp-1">{r.shortDef}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#D8D4CB] group-hover:text-[#C41E3A] transition-colors flex-shrink-0" strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
