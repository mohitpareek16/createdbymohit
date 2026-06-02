import { Sparkles, ArrowUpRight, Layers, Wand2, BookOpen, Brush, PenTool, Globe, Box, Aperture, Camera, Type, Palette, Code, type LucideIcon } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const TOOLS_ROW1 = [
  { icon: Layers, label: 'Figma' },
  { icon: Wand2, label: 'Framer' },
  { icon: BookOpen, label: 'Notion' },
  { icon: Brush, label: 'Photoshop' },
  { icon: PenTool, label: 'Illustrator' },
  { icon: Globe, label: 'Webflow' },
  { icon: Box, label: 'Spline' },
  { icon: Aperture, label: 'After FX' },
]

const TOOLS_ROW2 = [
  { icon: Camera, label: 'Principle' },
  { icon: Type, label: 'Typeface' },
  { icon: Palette, label: 'Coolors' },
  { icon: Code, label: 'VS Code' },
  { icon: Layers, label: 'Figma' },
  { icon: Wand2, label: 'Framer' },
  { icon: Brush, label: 'Sketch' },
  { icon: Box, label: 'Miro' },
]

const TIMELINE = [
  { years: '2024–Now', role: 'Lead Designer', company: 'Starting Core' },
  { years: '2021–2024', role: 'Senior Designer', company: 'Freelance' },
  { years: '2019–2021', role: 'UI Designer', company: 'Agency' },
  { years: '2018–2019', role: 'Visual Designer', company: 'Self-Taught' },
]

interface ToolItem {
  icon: LucideIcon
  label: string
}

function ToolRow({ tools, reverse = false }: { tools: ToolItem[]; reverse?: boolean }) {
  const doubled = [...tools, ...tools]
  return (
    <div
      className="flex gap-2 overflow-hidden"
      style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
    >
      <div
        className="flex gap-2 flex-none"
        style={{
          animation: `marqueeAnim ${reverse ? '24s' : '18s'} linear infinite ${reverse ? 'reverse' : 'normal'}`,
        }}
      >
        {doubled.map((t, i) => (
          <div key={i} className="flex items-center gap-1.5 rounded-xl bg-white/10 px-3 py-2 flex-none text-white text-[11px] whitespace-nowrap">
            <t.icon className="w-3.5 h-3.5" strokeWidth={1.5} />
            {t.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function StatsBento() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const card = (delay: number) => ({
    initial: { opacity: 0, y: 32 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  })

  return (
    <section ref={ref} className="bg-[#051A24] py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-[1320px] mx-auto">
        {/* Eyebrow */}
        <motion.div {...card(0)} className="font-mono text-[11px] tracking-[0.12em] uppercase text-white/40 mb-10 flex items-center gap-3">
          <span className="w-6 h-px bg-white/30" />
          In numbers
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* COL 1 - Photo + timeline */}
          <motion.div {...card(0.05)} className="relative rounded-3xl overflow-hidden" style={{ minHeight: 500 }}>
            <img
              src="/mohit-pareek.jpg"
              alt="Mohit Pareek"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/85" />
            {/* Top label */}
            <div className="absolute top-5 left-0 right-0 flex items-center justify-center gap-2">
              <Sparkles className="w-3 h-3 text-white/60" strokeWidth={1.5} />
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/70">Background</span>
              <Sparkles className="w-3 h-3 text-white/60" strokeWidth={1.5} />
            </div>
            {/* Timeline */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3">
              {TIMELINE.map((t, i) => (
                <div key={i} className="grid grid-cols-[80px_auto_1fr] gap-x-3 items-center">
                  <span className="font-mono text-[11px] text-white/50">{t.years}</span>
                  <Sparkles className="w-2.5 h-2.5 text-[#C41E3A] flex-none" strokeWidth={1.5} />
                  <span className="text-[12px] text-white truncate">{t.role} · {t.company}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* COL 2 */}
          <div className="flex flex-col gap-4">
            {/* Client quote */}
            <motion.div {...card(0.1)} className="noise-card relative rounded-3xl bg-[#0D3040] p-6 md:p-8 text-white overflow-hidden flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-white/60" strokeWidth={1.5} />
                <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/60">Client Voice</span>
              </div>
              <blockquote className="text-[13px] leading-[1.65] text-white/85 relative z-10">
                "Mohit redesigned our onboarding and our activation jumped 40% in month one. He just <em>gets it.</em>"
              </blockquote>
              <p className="text-[12px] text-white/50 relative z-10">
                <strong className="text-white/70 not-italic">Elena Sharma</strong>, Head of Product — FinVibe
              </p>
            </motion.div>

            {/* Big stat */}
            <motion.div {...card(0.15)} className="rounded-3xl bg-[#C41E3A] p-8 flex flex-col justify-between" style={{ minHeight: 180 }}>
              <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-white/60">Designs delivered</span>
              <div>
                <div className="font-mondwest text-6xl md:text-7xl text-white leading-none">5,000+</div>
              </div>
            </motion.div>
          </div>

          {/* COL 3 */}
          <div className="flex flex-col gap-4">
            {/* Daily tools */}
            <motion.div {...card(0.2)} className="relative rounded-3xl bg-black overflow-hidden" style={{ minHeight: 260 }}>
              <div className="pt-5 pb-4">
                <div className="flex items-center justify-center gap-2 mb-5">
                  <Sparkles className="w-3 h-3 text-white/60" strokeWidth={1.5} />
                  <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/70">Daily Software</span>
                  <Sparkles className="w-3 h-3 text-white/60" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-3 px-4">
                  <ToolRow tools={TOOLS_ROW1} />
                  <ToolRow tools={TOOLS_ROW2} reverse />
                </div>
              </div>
            </motion.div>

            {/* Stats + contact */}
            <motion.div {...card(0.25)} className="noise-card relative rounded-3xl bg-[#0D3040] p-6 overflow-hidden">
              {/* Stats */}
              <div className="flex gap-3 mb-6">
                {[['50+', 'Clients'], ['6+', 'Years'], ['1M+', 'Followers']].map(([num, label]) => (
                  <div key={label} className="flex-1 bg-white/5 rounded-2xl px-3 py-3 text-center relative z-10">
                    <div className="font-mondwest text-2xl text-white leading-none">{num}</div>
                    <div className="font-mono text-[10px] text-white/50 uppercase tracking-wider mt-1">{label}</div>
                  </div>
                ))}
              </div>
              {/* Contact */}
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <div className="font-mono text-[11px] text-white/50 uppercase tracking-wider mb-1">Reach Me</div>
                  <a href="mailto:hello@createdbymohit.com" className="text-[13px] text-white hover:text-[#C41E3A] transition-colors">
                    hello@createdbymohit.com
                  </a>
                </div>
                <a
                  href="mailto:hello@createdbymohit.com"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors flex-none"
                >
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
