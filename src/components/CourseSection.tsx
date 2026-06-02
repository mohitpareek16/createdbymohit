import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check } from 'lucide-react'
import WordsPullUp from './WordsPullUp'

const CURRICULUM = [
  'Visual hierarchy & design psychology',
  'Six principles of design',
  'Design systems & component libraries',
  'The business of being a designer in India',
  'Real-world client work & case studies',
]

export default function CourseSection() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="course" className="relative bg-[#051A24] py-20 md:py-28 px-6 md:px-10 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C41E3A]/15 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div ref={ref} className="max-w-[1320px] mx-auto relative">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 font-mono text-[11px] tracking-widest uppercase text-[#C41E3A] mb-8"
        >
          <span className="w-6 h-px bg-[#C41E3A]" />
          Launching soon · 2026
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(36px,6.5vw,100px)] leading-[0.92] tracking-tight text-white mb-10 max-w-[14ch]"
        >
          The UI/UX{' '}
          <em className="font-mondwest text-[#C41E3A] not-italic">masterclass</em>{' '}
          I wish I had.
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-white/65 text-base md:text-lg leading-relaxed mb-8 max-w-[52ch]">
              A <strong className="text-white font-medium">complete UI/UX course</strong> built from six years of shipping products and 5,000+ designs. No fluff — just the{' '}
              <strong className="text-white font-medium">psychology, principles and process</strong> that separate designers who get hired from designers who get scrolled past.
            </p>
            <div className="flex flex-col gap-4">
              {CURRICULUM.map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/75 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[#C41E3A]/20 flex items-center justify-center flex-none">
                    <Check className="w-3 h-3 text-[#C41E3A]" strokeWidth={2.5} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - waitlist form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <label className="block font-mono text-[11px] tracking-widest uppercase text-[#8A8780] mb-4">
              Be first on the waitlist
            </label>
            <div className="flex gap-2 mb-4">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-transparent border border-white/20 rounded-full px-5 py-3 text-white text-sm placeholder-white/30 outline-none focus:border-[#C41E3A] transition-colors"
              />
              <button
                onClick={() => { if (email) setJoined(true) }}
                disabled={joined}
                className="bg-[#C41E3A] text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-[#C41E3A]/80 transition-colors disabled:opacity-70 whitespace-nowrap"
              >
                {joined ? "You're in ✓" : 'Join'}
              </button>
            </div>
            <p className="font-mono text-[11px] text-white/40 leading-relaxed">
              Early access · Founding-member pricing · One email a week, never spam.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
