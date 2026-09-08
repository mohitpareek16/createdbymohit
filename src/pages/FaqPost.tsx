import { useRef } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import { getFaq, getAllFaqs } from '../data/faq'

export default function FaqPost() {
  const { slug } = useParams<{ slug: string }>()
  const faq = getFaq(slug ?? '')

  if (!faq) return <Navigate to="/faq" replace />

  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })

  const allFaqs = getAllFaqs()
  const related = faq.relatedSlugs
    ? allFaqs.filter(f => faq.relatedSlugs!.includes(f.slug))
    : []

  return (
    <main>
      <SEO
        title={`${faq.question} | Starting Core FAQ`}
        description={faq.shortAnswer}
        canonical={`/faq/${faq.slug}`}
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
              to="/faq"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#8A8780] hover:text-[#C41E3A] transition-colors"
            >
              <ArrowLeft className="w-3 h-3" strokeWidth={2} />
              All FAQs
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05, duration: 0.4 }}
            className="font-mono text-[10px] uppercase tracking-widest text-[#C41E3A] mb-4"
          >
            AI Automation · FAQ
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(26px,4vw,48px)] leading-[1.1] tracking-tight text-[#051A24] mb-6"
          >
            {faq.question}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-base text-[#051A24]/70 leading-relaxed border-l-2 border-[#C41E3A] pl-5"
          >
            {faq.shortAnswer}
          </motion.p>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10">
        <div className="max-w-[860px] mx-auto">
          <div className="prose-content flex flex-col gap-10">
            {faq.body.map((section, i) => (
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
                {section.bullets && (
                  <ul className="mt-3 flex flex-col gap-2">
                    {section.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-[15px] text-[#051A24]/70 leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-[#C41E3A] flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 p-8 rounded-2xl bg-[#F5F3EE] border border-[#D8D4CB]">
            <h3 className="font-medium text-[#051A24] mb-2">Want this for your business?</h3>
            <p className="text-sm text-[#051A24]/60 leading-relaxed mb-5 max-w-[48ch]">
              Starting Core builds custom AI automation for businesses in India. Tell us what you want to automate — we'll tell you if it's worth building.
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
                to="/starting-core"
                className="inline-flex items-center gap-2 border border-[#D8D4CB] text-[#051A24] rounded-full px-6 py-3 text-sm font-medium hover:border-[#051A24] transition-colors"
              >
                About Starting Core
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related FAQs */}
      {related.length > 0 && (
        <section className="py-12 px-6 md:px-10 border-t border-[#D8D4CB]">
          <div className="max-w-[860px] mx-auto">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780] mb-6">Related questions</div>
            <div className="flex flex-col gap-3">
              {related.map(r => (
                <Link
                  key={r.slug}
                  to={`/faq/${r.slug}`}
                  className="group flex items-center justify-between gap-4 p-5 rounded-xl border border-[#D8D4CB] hover:border-[#051A24] transition-colors"
                >
                  <span className="text-sm font-medium text-[#051A24] group-hover:text-[#C41E3A] transition-colors leading-snug">
                    {r.question}
                  </span>
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
