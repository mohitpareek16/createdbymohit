import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { value: '6+', label: 'Years of Practice' },
  { value: '80+', label: 'Projects Shipped' },
  { value: '5K+', label: 'Designs Created' },
  { value: '₹50L+', label: 'Value Generated' },
]

const STORY_PARAGRAPHS = [
  "I grew up in Jaipur filling notebooks with logos, interfaces, and layouts that didn't exist yet. Back then I just called it drawing. Later I found out it was a career.",
  "I started posting on LinkedIn about design when most people my age were posting about college fests. I wrote about UI/UX, startup design, and what I was learning — not because I had it figured out, but because writing forced me to think. The audience came after.",
  "My first real lesson: being a jack of all trades sounds good until you realize companies hire for depth, not breadth. I stopped trying to do everything and went deep on product design. That decision changed everything.",
  "I founded Starting Core because founders at the critical seed-to-series-A moment were getting junior design help on senior-design problems. I wanted to change that — not with a deck about process, but with shipped work that moved numbers.",
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label
      gsap.fromTo(
        labelRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Headline
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Text paragraphs
      const paras = textRef.current?.querySelectorAll('p')
      if (paras && paras.length > 0) {
        gsap.fromTo(
          paras,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )
      }

      // Stats
      const statItems = statsRef.current?.querySelectorAll('.stat-item')
      if (statItems && statItems.length > 0) {
        gsap.fromTo(
          statItems,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-28 px-6 md:px-10"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#0A0A0A' }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Label */}
        <div ref={labelRef} className="mb-6 opacity-0">
          <p
            className="font-mono uppercase tracking-widest text-white/40"
            style={{ fontSize: '10px', letterSpacing: '0.18em' }}
          >
            <span style={{ marginRight: '0.5em', opacity: 0.5 }}>··</span>
            MY STORY
          </p>
        </div>

        {/* Headline */}
        <h2
          ref={headlineRef}
          className="text-white font-bold uppercase tracking-tight mb-14 md:mb-16 opacity-0"
          style={{
            fontSize: 'clamp(28px, 5vw, 64px)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            maxWidth: '22ch',
          }}
        >
          FROM DOODLING IN NOTEBOOKS TO DESIGNING FOR STARTUPS.
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-14 md:gap-20 items-start">
          {/* Left: story paragraphs */}
          <div ref={textRef} className="flex flex-col gap-6">
            {STORY_PARAGRAPHS.map((para, i) => (
              <p
                key={i}
                className="text-white/55 leading-relaxed opacity-0"
                style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', lineHeight: 1.75 }}
              >
                {para}
              </p>
            ))}

            <a
              href="/about"
              className="bracket-link self-start mt-4"
            >
              [ READ FULL STORY ]
            </a>
          </div>

          {/* Right: stat grid */}
          <div ref={statsRef}>
            <div
              className="grid grid-cols-2 gap-px"
              style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', overflow: 'hidden' }}
            >
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="stat-item opacity-0 p-6 md:p-8"
                  style={{
                    background: '#111111',
                    borderRight: '1px solid rgba(255,255,255,0.07)',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <p
                    className="font-bold text-white leading-none mb-2"
                    style={{ fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '-0.03em' }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="font-mono text-white/35 uppercase"
                    style={{ fontSize: '9px', letterSpacing: '0.16em', lineHeight: 1.5 }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Featured LinkedIn post context */}
            <div
              className="mt-10 p-6 rounded-2xl"
              style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(196,30,58,0.06)' }}
            >
              <p
                className="font-mono uppercase text-[#C41E3A] mb-3"
                style={{ fontSize: '9px', letterSpacing: '0.16em' }}
              >
                From LinkedIn
              </p>
              <p
                className="text-white/60 italic leading-relaxed"
                style={{ fontSize: 'clamp(14px, 1.5vw, 16px)', lineHeight: 1.65 }}
              >
                "I feel sad that companies tell students: you study here, we won't hire you. But the same companies have bad design, bad UX, bad products. The problem isn't the college. The problem is they never invested in design."
              </p>
              <a
                href="https://www.linkedin.com/in/mohit-pareek-b8a676204"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 font-mono text-white/30 hover:text-white/60 transition-colors uppercase"
                style={{ fontSize: '9px', letterSpacing: '0.14em' }}
              >
                Follow on LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
