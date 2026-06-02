import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import WordsPullUp from './WordsPullUp'

const PLATFORMS = [
  {
    href: 'https://www.instagram.com/createdbymohit/',
    platform: 'Instagram · @createdbymohit',
    heading: 'UI breakdowns. App roasts. The psychology behind the screens you scroll.',
    footer: ['Reels & carousels', '→ Follow'],
  },
  {
    href: 'https://www.youtube.com/@createdbymohit',
    platform: 'YouTube · Created By Mohit',
    heading: 'Long-form masterclasses on visual hierarchy, design thinking, and the iteration cycle.',
    footer: ['Tutorials & podcasts', '→ Subscribe'],
  },
  {
    href: 'https://www.linkedin.com/in/mohit-pareek-b8a676204',
    platform: 'LinkedIn · Mohit Pareek',
    heading: 'Career tips for designers. Freelance economics. The business behind beautiful pixels.',
    footer: ['Essays & insights', '→ Connect'],
  },
]

export default function ContentSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="content" ref={ref} className="py-20 md:py-28 px-6 md:px-10 max-w-[1320px] mx-auto">
      <div className="flex items-end justify-between mb-16">
        <div>
          <div className="font-mono text-[11px] tracking-widest uppercase text-[#8A8780] mb-3">02 — Content</div>
          <h2 className="text-[clamp(36px,5.5vw,72px)] leading-[0.95] tracking-tight text-[#051A24]">
            <WordsPullUp
              segments={[
                { text: 'Teaching the' },
                { text: 'why.', className: 'font-mondwest text-[#C41E3A]' },
              ]}
            />
          </h2>
        </div>
        <div className="hidden md:block text-right font-mono text-[11px] text-[#8A8780] uppercase tracking-wider">
          Instagram · YouTube<br />LinkedIn · Dribbble
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {PLATFORMS.map((p, i) => (
          <motion.a
            key={p.platform}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group bg-white border border-[#D8D4CB] rounded-2xl p-7 flex flex-col min-h-[300px] hover:-translate-y-1 hover:border-[#051A24] transition-all duration-300"
          >
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-[#8A8780] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C41E3A] flex-none" />
              {p.platform}
            </div>
            <h3 className="text-xl leading-snug text-[#051A24] mb-auto">
              {p.heading}
            </h3>
            <div className="flex items-center justify-between mt-8 pt-5 border-t border-[#D8D4CB] font-mono text-[11px] text-[#8A8780]">
              <span>{p.footer[0]}</span>
              <strong className="text-[#051A24] group-hover:text-[#C41E3A] transition-colors">{p.footer[1]}</strong>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
