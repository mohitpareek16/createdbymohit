import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import { getAllFaqs } from '../data/faq'

export default function FaqIndex() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })
  const faqs = getAllFaqs()

  return (
    <main>
      <SEO
        title="AI Automation FAQ — Starting Core | createdbymohit.com"
        description="Real answers to the most common questions about AI automation for businesses in India — cost, timelines, tools, and what's actually worth automating."
        canonical="/faq"
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
            AI Automation · FAQ
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(40px,7vw,88px)] leading-[0.9] tracking-tight text-[#051A24] mb-6"
          >
            Questions, answered{' '}
            <em className="font-mondwest text-[#C41E3A] not-italic">honestly.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base text-[#051A24]/60 max-w-[52ch] leading-relaxed"
          >
            The most common questions about AI automation for businesses in India — cost, tools, timelines, and what actually works.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[860px] mx-auto">
          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.06, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to={`/faq/${faq.slug}`}
                  className="group flex items-start justify-between gap-6 py-8 border-b border-[#D8D4CB] hover:bg-[#F5F3EE] -mx-6 px-6 rounded-xl transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#C41E3A] mb-2">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h2 className="text-base font-medium text-[#051A24] leading-snug mb-3 group-hover:text-[#C41E3A] transition-colors">
                      {faq.question}
                    </h2>
                    <p className="text-sm text-[#051A24]/55 leading-relaxed line-clamp-2">
                      {faq.shortAnswer}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#D8D4CB] group-hover:text-[#C41E3A] transition-colors flex-shrink-0 mt-1" strokeWidth={1.5} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 md:px-10 bg-[#F5F3EE] border-t border-[#D8D4CB]">
        <div className="max-w-[860px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-medium text-[#051A24] mb-1">Don't see your question?</h2>
            <p className="text-sm text-[#051A24]/60">Ask me directly — I reply to every message.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#051A24] text-white rounded-full px-6 py-3.5 text-sm font-medium hover:bg-[#C41E3A] transition-colors flex-shrink-0"
          >
            Ask a question
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
