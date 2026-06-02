import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import WordsPullUp from './WordsPullUp'

const PROJECTS = [
  {
    name: 'evr',
    desc: 'From idea to millions raised for a web3 AI product',
    gif: 'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  },
  {
    name: 'Automation Machines',
    desc: 'Streamlining industrial automation with modern UX',
    gif: 'https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif',
  },
  {
    name: 'xPortfolio',
    desc: 'Modern portfolio management platform',
    gif: 'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  },
]

function ProjectItem({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="pl-20 md:pl-28 mb-5 flex items-end justify-between">
        <div>
          <div className="font-mono text-[11px] tracking-widest uppercase text-[#8A8780] mb-2">
            0{index + 1}
          </div>
          <h3 className="font-mondwest text-3xl md:text-4xl font-semibold text-[#051A24] leading-tight">
            {project.name}
          </h3>
          <p className="text-sm text-[#051A24]/60 mt-1">{project.desc}</p>
        </div>
        <span className="font-mono text-xs text-[#8A8780] pb-1 hover:text-[#C41E3A] transition-colors cursor-pointer">
          Case Study →
        </span>
      </div>
      <img
        src={project.gif}
        alt={project.name}
        className="w-full rounded-2xl shadow-lg object-cover"
        style={{ maxHeight: 580 }}
      />
    </motion.div>
  )
}

export default function WorkSection() {
  return (
    <section id="work" className="py-20 md:py-28 px-6 md:px-10 max-w-[1200px] mx-auto">
      {/* Section head */}
      <div className="flex items-end justify-between mb-16">
        <div>
          <div className="font-mono text-[11px] tracking-widest uppercase text-[#8A8780] mb-3">
            01 — Selected Work
          </div>
          <h2 className="text-[clamp(36px,5.5vw,72px)] leading-[0.95] tracking-tight text-[#051A24]">
            <WordsPullUp
              segments={[
                { text: "Things I've" },
                { text: 'shipped.', className: 'font-mondwest text-[#C41E3A]' },
              ]}
            />
          </h2>
        </div>
        <div className="hidden md:block text-right font-mono text-[11px] text-[#8A8780] uppercase tracking-wider">
          2020 — 2026<br />Product · Brand · System
        </div>
      </div>

      <div className="flex flex-col gap-20 md:gap-28">
        {PROJECTS.map((p, i) => (
          <ProjectItem key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
