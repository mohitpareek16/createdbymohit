import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import { getAllGlossaryTerms } from '../data/glossary'

export default function GlossaryIndex() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })
  const terms = getAllGlossaryTerms()

  return (
    <main>
      <SEO
        title="AI Automation Glossary | Starting Core | createdbymohit.com"
        description="Plain-English definitions of key AI automation and workflow terms — AI agents, RPA, BPA, no-code workflows, and more."
        canonical="/glossary"
      />
      <Nav />

      <section className="pt-40 pb-16 px-6 md:px-10 border-b border-[#D8D4CB]">
        <div className="max-w-[1320px] mx-auto" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780] mb-6 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3A]" />
            AI Automation · Glossary
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(40px,7vw,88px)] leading-[0.9] tracking-tight text-[#051A24] mb-6"
          >
            The terms,{' '}
            <em className="font-mondwest text-[#C41E3A] not-italic">defined.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base text-[#051A24]/60 max-w-[50ch] leading-relaxed"
          >
            Plain-English definitions for the AI and automation terms that matter for businesses — no jargon, no fluff.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {terms.map((term, i) => (
              <motion.div
                key={term.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to={`/glossary/${term.slug}`}
                  className="group block h-full p-7 rounded-2xl border border-[#D8D4CB] hover:border-[#051A24] bg-white transition-colors"
                >
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#C41E3A] mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h2 className="font-mondwest text-xl text-[#051A24] group-hover:text-[#C41E3A] transition-colors leading-tight mb-3">
                    {term.term}
                  </h2>
                  <p className="text-sm text-[#051A24]/55 leading-relaxed line-clamp-3">
                    {term.shortDef}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-[#8A8780] group-hover:text-[#C41E3A] transition-colors">
                    Read definition
                    <ArrowRight className="w-3 h-3" strokeWidth={2} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 md:px-10 bg-[#F5F3EE] border-t border-[#D8D4CB]">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-medium text-[#051A24] mb-1">Ready to automate something?</h2>
            <p className="text-sm text-[#051A24]/60">Starting Core builds AI automation for businesses in India.</p>
          </div>
          <Link
            to="/starting-core"
            className="inline-flex items-center gap-2 bg-[#051A24] text-white rounded-full px-6 py-3.5 text-sm font-medium hover:bg-[#C41E3A] transition-colors flex-shrink-0"
          >
            About Starting Core
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
