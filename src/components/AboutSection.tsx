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

const STORY = [
  "I grew up in Jaipur building things on the internet — websites, tools, automations — before I knew what to call any of it. Every project taught me one thing: most business problems aren't really design problems or tech problems. They're process problems.",
  "I spent years working with founders drowning in manual work — copy-pasting data between spreadsheets, manually sending follow-ups, juggling 6 disconnected tools that were never meant to work together. The problem wasn't a lack of tools. It was a lack of the right system.",
  "That's when everything changed. I started mapping the full operation before touching any code or AI. Understanding every input, every output, every bottleneck. Then building solutions that actually fit.",
  "I founded Starting Core to do this at scale. Every company is built differently. A D2C brand has different problems than a B2B SaaS. So the solution has to be different too.",
]

export default function AboutSection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const labelRef    = useRef<HTMLDivElement>(null)
  const headRef     = useRef<HTMLHeadingElement>(null)
  const textRef     = useRef<HTMLDivElement>(null)
  const statsRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo([labelRef.current, headRef.current],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } })

      const paras = textRef.current?.querySelectorAll('p')
      if (paras && paras.length) {
        gsap.fromTo(paras, { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1,
            scrollTrigger: { trigger: textRef.current, start: 'top 80%' } })
      }

      const statItems = statsRef.current?.querySelectorAll('.stat-item')
      if (statItems && statItems.length) {
        gsap.fromTo(statItems, { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1,
            scrollTrigger: { trigger: statsRef.current, start: 'top 85%' } })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef}
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
        padding: 'clamp(72px,8vw,120px) 24px',
      }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div ref={labelRef} className="mb-6 opacity-0">
          <p className="font-mono uppercase" style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--muted)' }}>
            <span style={{ marginRight: '0.5em', color: 'var(--accent)' }}>··</span>THE FOUNDER
          </p>
        </div>

        <h2 ref={headRef}
          className="font-syne uppercase mb-14 md:mb-16 opacity-0"
          style={{
            fontSize: 'clamp(28px, 5vw, 64px)', lineHeight: 1.0,
            letterSpacing: '-0.035em', fontWeight: 800, maxWidth: '22ch',
            color: 'var(--text)',
          }}>
          AUDIT FIRST.<br />BUILD SECOND.<br />
          <span style={{ color: 'var(--accent)' }}>RESULTS ALWAYS.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-14 md:gap-20 items-start">

          {/* Story */}
          <div ref={textRef} className="flex flex-col gap-6">
            {STORY.map((para, i) => (
              <p key={i} className="opacity-0"
                style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', lineHeight: 1.75, color: 'var(--muted)' }}>
                {para}
              </p>
            ))}
            <a href="/about" className="bracket-link self-start mt-4">
              [ ABOUT MOHIT ]
            </a>
          </div>

          {/* Stats + quote */}
          <div ref={statsRef}>
            <div className="grid grid-cols-2 gap-px"
              style={{
                border: '1px solid var(--border)',
                borderRadius: '16px',
                overflow: 'hidden',
              }}>
              {STATS.map(stat => (
                <div key={stat.label} className="stat-item opacity-0 p-6 md:p-8"
                  style={{
                    background: 'var(--surface)',
                    borderRight: '1px solid var(--border)',
                    borderBottom: '1px solid var(--border)',
                  }}>
                  <p className="font-syne font-bold leading-none mb-2"
                    style={{
                      fontSize: 'clamp(32px, 4.5vw, 52px)',
                      letterSpacing: '-0.03em', color: 'var(--text)',
                    }}>
                    {stat.value}
                  </p>
                  <p className="font-mono uppercase"
                    style={{ fontSize: '9px', letterSpacing: '0.16em', color: 'var(--muted)' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl"
              style={{
                border: '1px solid rgba(196,30,58,0.2)',
                background: 'rgba(196,30,58,0.04)',
              }}>
              <p className="font-mono uppercase mb-3"
                style={{ fontSize: '9px', letterSpacing: '0.16em', color: 'var(--accent)' }}>
                The Starting Core Principle
              </p>
              <p className="italic leading-relaxed"
                style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'var(--muted)', lineHeight: 1.7 }}>
                "Every company is built differently — a D2C brand, a B2B SaaS, a local service business. The problems look the same on the surface. They almost never are. That's why we audit before we build."
              </p>
              <a href="/starting-core"
                className="inline-block mt-4 font-mono uppercase transition-colors"
                style={{ fontSize: '9px', letterSpacing: '0.14em', color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
                Learn about Starting Core →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
