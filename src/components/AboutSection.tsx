import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import WordsPullUp from './WordsPullUp'

const PRINCIPLES = [
  {
    no: '01',
    title: 'Visual Bookmarking',
    desc: "Users don't read interfaces — they scan and memorise shapes, positions, weights. Design for muscle memory, not for reading.",
  },
  {
    no: '02',
    title: 'Gestural Interaction',
    desc: 'The best interactions feel like extensions of the body. Swipe, hold, release. Reduce taps. Reduce thought.',
  },
  {
    no: '03',
    title: 'Cognitive Load',
    desc: "Every element on a screen is a tax on attention. The goal of design isn't to add — it's to subtract until what remains is inevitable.",
  },
  {
    no: '04',
    title: 'Business + Beauty',
    desc: 'Aesthetic without outcome is decoration. Outcome without aesthetic is forgotten. The job is both — always.',
  },
]

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-[1320px] mx-auto">
        {/* Section head */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="font-mono text-[11px] tracking-widest uppercase text-[#8A8780] mb-3">03 — About</div>
            <h2 className="text-[clamp(36px,5.5vw,72px)] leading-[0.95] tracking-tight text-[#051A24]">
              <WordsPullUp
                segments={[
                  { text: 'A short' },
                  { text: 'philosophy.', className: 'font-mondwest text-[#C41E3A]' },
                ]}
              />
            </h2>
          </div>
          <div className="hidden md:block text-right font-mono text-[11px] text-[#8A8780] uppercase tracking-wider">
            Designer · Educator<br />Founder · Starting Core
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-16 md:gap-24 items-start">
          {/* Left - sticky photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:sticky md:top-[120px]"
          >
            <div className="relative overflow-hidden rounded-2xl border border-[#D8D4CB]" style={{ aspectRatio: '4/5' }}>
              <img
                src="/mohit-pareek.jpg"
                alt="Mohit Pareek"
                className="w-full h-full object-cover object-top"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                <p className="font-mondwest text-white text-lg italic">— Mohit Pareek</p>
                <p className="font-mono text-white/60 text-[11px] mt-1 uppercase tracking-wider">Designer, India</p>
              </div>
            </div>
          </motion.div>

          {/* Right - content */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <blockquote className="font-mondwest text-[clamp(24px,3.5vw,42px)] leading-[1.15] text-[#051A24] mb-12">
              "Great design isn't <em className="text-[#C41E3A]">noticed.</em> It's felt. The user shouldn't think about the interface — they should think about{' '}
              <em className="text-[#C41E3A]">what they came to do.</em>"
            </blockquote>

            <div className="flex flex-col divide-y divide-[#D8D4CB] border-t border-[#D8D4CB]">
              {PRINCIPLES.map((p, i) => (
                <motion.div
                  key={p.no}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-[64px_1fr] gap-5 py-7 hover:bg-[#F5F3EE] -mx-4 px-4 rounded-xl transition-colors duration-200"
                >
                  <span className="font-mono text-[11px] text-[#8A8780] pt-1 tracking-wider">{p.no}</span>
                  <div>
                    <h4 className="font-mondwest text-xl text-[#051A24] mb-2">{p.title}</h4>
                    <p className="text-sm text-[#051A24]/65 leading-relaxed max-w-[54ch]">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
