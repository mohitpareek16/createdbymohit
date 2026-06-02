import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Button from './Button'
import WordsPullUp from './WordsPullUp'

export default function PricingSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pricing" className="bg-[#0D212C] py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-[1320px] mx-auto">
        <div className="mb-12">
          <div className="font-mono text-[11px] tracking-widest uppercase text-white/40 mb-3">04 — Pricing</div>
          <h2 className="text-[clamp(36px,5.5vw,72px)] leading-[0.95] tracking-tight text-white">
            <WordsPullUp
              segments={[
                { text: 'Transparent' },
                { text: 'pricing.', className: 'font-mondwest text-[#C41E3A]' },
              ]}
            />
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-4xl md:ml-auto">
          {/* Dark card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[40px] p-10 border border-white/10 text-white flex flex-col gap-6"
            style={{ background: 'rgba(255,255,255,0.03)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }}
          >
            <div>
              <div className="text-2xl font-medium mb-2">Monthly Partnership</div>
              <p className="text-white/55 text-sm leading-relaxed">
                A dedicated creative design team.<br />You work directly with Mohit.
              </p>
            </div>
            <div>
              <div className="font-mondwest text-4xl text-white">$5,000</div>
              <div className="font-mono text-[11px] text-white/40 uppercase tracking-wider mt-1">Monthly</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <a
                href="mailto:hello@createdbymohit.com"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-[#C41E3A] text-white hover:bg-[#C41E3A]/80 transition-colors"
              >
                Start a project
              </a>
              <button className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-white/10 text-white hover:bg-white/15 transition-colors">
                How it works
              </button>
            </div>
          </motion.div>

          {/* Light card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[40px] p-10 bg-white text-[#051A24] flex flex-col gap-6"
            style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
          >
            <div>
              <div className="text-2xl font-medium mb-2">Custom Project</div>
              <p className="text-[#051A24]/55 text-sm leading-relaxed">
                Fixed scope, fixed timeline.<br />Same team, same standards.
              </p>
            </div>
            <div>
              <div className="font-mondwest text-4xl text-[#051A24]">₹50,000</div>
              <div className="font-mono text-[11px] text-[#8A8780] uppercase tracking-wider mt-1">Minimum</div>
            </div>
            <div className="mt-auto">
              <Button variant="primary" href="mailto:hello@createdbymohit.com">
                Start a project
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
