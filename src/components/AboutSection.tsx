import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { value: '6+',   label: 'Years Experience' },
  { value: '80+',  label: 'Projects Delivered' },
  { value: '30+',  label: 'AI Systems Built' },
  { value: '₹50L+', label: 'Value Generated' },
]

const STORY_PARAGRAPHS = [
  "I grew up in Jaipur building things on the internet — websites, tools, automations — before I knew what to call any of it. Every project taught me one thing: most business problems aren't really design problems or tech problems. They're process problems.",
  "I spent years working with founders who were drowning in manual work — copy-pasting data between spreadsheets, manually sending follow-ups, juggling 6 disconnected tools that were never meant to work together. The problem wasn't a lack of tools. It was a lack of the right system.",
  "That's when everything changed. I started mapping the full operation before touching any code or AI. Understanding every input, every output, every bottleneck. Then building solutions that actually fit — not generic automations pasted from a YouTube tutorial.",
  "I founded Starting Core to do this at scale. Every company is built differently. A D2C brand has different problems than a B2B SaaS. So the solution has to be different too. We audit, we understand, then we build — custom development, AI integration, or both.",
]

export default function AboutSection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const labelRef    = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const textRef     = useRef<HTMLDivElement>(null)
  const statsRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(labelRef.current, { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' } })

      gsap.fromTo(headlineRef.current, { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' } })

      const paras = textRef.current?.querySelectorAll('p')
      if (paras && paras.length > 0) {
        gsap.fromTo(paras, { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12,
            scrollTrigger: { trigger: textRef.current, start: 'top 80%', toggleActions: 'play none none none' } })
      }

      const statItems = statsRef.current?.querySelectorAll('.stat-item')
      if (statItems && statItems.length > 0) {
        gsap.fromTo(statItems, { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1,
            scrollTrigger: { trigger: statsRef.current, start: 'top 85%', toggleActions: 'play none none none' } })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef}
      className="py-20 md:py-28 px-6 md:px-10"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#0A0A0A' }}>
      <div className="max-w-[1200px] mx-auto">

        {/* Label */}
        <div ref={labelRef} className="mb-6 opacity-0">
          <p className="font-mono uppercase tracking-widest text-white/40"
            style={{ fontSize: '10px', letterSpacing: '0.18em' }}>
            <span style={{ marginRight: '0.5em', opacity: 0.5 }}>··</span>
            THE FOUNDER
          </p>
        </div>

        {/* Headline */}
        <h2 ref={headlineRef}
          className="font-syne text-white uppercase mb-14 md:mb-16 opacity-0"
          style={{ fontSize: 'clamp(28px, 5vw, 64px)', lineHeight: 1.0,
                   letterSpacing: '-0.03em', fontWeight: 800, maxWidth: '22ch' }}>
          AUDIT FIRST.<br />BUILD SECOND.<br />RESULTS ALWAYS.
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-14 md:gap-20 items-start">

          {/* Left: story */}
          <div ref={textRef} className="flex flex-col gap-6">
            {STORY_PARAGRAPHS.map((para, i) => (
              <p key={i} className="text-white/55 leading-relaxed opacity-0"
                style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', lineHeight: 1.75 }}>
                {para}
              </p>
            ))}
            <a href="/about" className="bracket-link self-start mt-4">
              [ ABOUT MOHIT ]
            </a>
          </div>

          {/* Right: stats + quote */}
          <div ref={statsRef}>
            <div className="grid grid-cols-2 gap-px"
              style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', overflow: 'hidden' }}>
              {STATS.map((stat) => (
                <div key={stat.label}
                  className="stat-item opacity-0 p-6 md:p-8"
                  style={{ background: '#111111',
                           borderRight: '1px solid rgba(255,255,255,0.07)',
                           borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <p className="font-syne font-bold text-white leading-none mb-2"
                    style={{ fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '-0.03em' }}>
                    {stat.value}
                  </p>
                  <p className="font-mono text-white/35 uppercase"
                    style={{ fontSize: '9px', letterSpacing: '0.16em', lineHeight: 1.5 }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl"
              style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(196,30,58,0.06)' }}>
              <p className="font-mono uppercase text-[#C41E3A] mb-3"
                style={{ fontSize: '9px', letterSpacing: '0.16em' }}>
                The Starting Core Principle
              </p>
              <p className="text-white/60 italic leading-relaxed"
                style={{ fontSize: 'clamp(14px, 1.5vw, 16px)', lineHeight: 1.65 }}>
                "Every company is built differently — a D2C brand, a B2B SaaS, a local service business. The problems look the same on the surface. They almost never are. That's why we audit before we build."
              </p>
              <a href="/starting-core"
                className="inline-block mt-4 font-mono text-white/30 hover:text-white/60 transition-colors uppercase"
                style={{ fontSize: '9px', letterSpacing: '0.14em' }}>
                Learn about Starting Core →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
