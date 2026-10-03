import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ── jeffmilanes.com "scroll the story" process sections ────────
const STEPS = [
  {
    num:   '01',
    word:  'AUDIT.',
    title: 'We map the whole machine.',
    body:  'Before we write a single line of code or touch any AI tool, we sit down and understand your entire operation. Every tool you use, every process you run, every handoff that slows you down. Most companies think they have a software problem. They usually have a workflow problem.',
    accent: '#C41E3A',
  },
  {
    num:   '02',
    word:  'STRATEGISE.',
    title: 'We find the exact problem worth solving.',
    body:  'Not every bottleneck is worth automating. Not every process needs custom software. We identify the highest-leverage problems — the ones where the right fix creates the most value — and we build a plan that actually fits your stage, your team, and your budget.',
    accent: '#ffffff',
  },
  {
    num:   '03',
    word:  'BUILD.',
    title: 'Custom, not off-the-shelf.',
    body:  "Your company is different from every other company we've worked with. The solution has to be too. We build exactly what you need — a custom integration, a purpose-built internal tool, a workflow redesign, or a full system — no templates, no filler.",
    accent: '#C41E3A',
  },
  {
    num:   '04',
    word:  'INTEGRATE.',
    title: 'The right AI for your specific business.',
    body:  "Not every business needs a custom AI agent built from scratch. Sometimes a pre-built tool configured correctly is the right answer. Sometimes it needs to be custom-built. We figure out which, then implement it cleanly — WhatsApp bots, CRM intelligence, document automation, whatever solves the actual problem.",
    accent: '#ffffff',
  },
  {
    num:   '05',
    word:  'SCALE.',
    title: 'Systems that grow with you.',
    body:  "We don't disappear after delivery. We build systems that are maintainable, documented, and extendable. As your business grows, the systems we build grow with it. That's the difference between a consultant and a partner.",
    accent: '#C41E3A',
  },
]

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef  = useRef<HTMLDivElement>(null)
  const stepsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header fade in
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%', toggleActions: 'play none none none' } })

      // Each step reveals on scroll
      const steps = stepsRef.current?.querySelectorAll('.process-step')
      steps?.forEach((step) => {
        const num     = step.querySelector('.step-num')
        const word    = step.querySelector('.step-word')
        const content = step.querySelector('.step-content')

        const tl = gsap.timeline({
          scrollTrigger: { trigger: step, start: 'top 80%', toggleActions: 'play none none none' },
        })

        tl.fromTo(num,    { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' })
          .fromTo(word,   { opacity: 0, y: 50  }, { opacity: 1, y: 0, duration: 0.7, ease: 'power4.out' }, '-=0.2')
          .fromTo(content,{ opacity: 0, y: 20  }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef}
      className="py-20 md:py-28 px-6 md:px-10"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#050505' }}>
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div ref={headerRef} className="mb-16 md:mb-20 opacity-0">
          <p className="font-mono uppercase tracking-widest text-white/40 mb-4"
            style={{ fontSize: '10px', letterSpacing: '0.18em' }}>
            <span style={{ marginRight: '0.5em', opacity: 0.5 }}>··</span>THE PROCESS
          </p>
          <h2 className="font-syne uppercase text-white"
            style={{ fontSize: 'clamp(36px, 6vw, 80px)', lineHeight: 0.92,
                     letterSpacing: '-0.03em', fontWeight: 800 }}>
            HOW WE<br />WORK.
          </h2>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="flex flex-col">
          {STEPS.map((step, i) => (
            <div key={step.num}
              className="process-step grid grid-cols-1 md:grid-cols-[100px_1fr_1fr] gap-6 md:gap-10 py-12 md:py-16"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>

              {/* Number */}
              <div className="step-num opacity-0 flex items-start pt-1">
                <span className="font-mono text-[#C41E3A]"
                  style={{ fontSize: '11px', letterSpacing: '0.1em' }}>
                  {step.num}
                </span>
              </div>

              {/* Big word */}
              <div className="step-word opacity-0">
                <h3 className="font-syne uppercase text-white"
                  style={{ fontSize: 'clamp(40px, 6.5vw, 96px)', lineHeight: 0.88,
                           letterSpacing: '-0.03em', fontWeight: 800,
                           color: step.accent }}>
                  {step.word}
                </h3>
              </div>

              {/* Title + body */}
              <div className="step-content opacity-0 flex flex-col justify-center gap-3">
                <p className="font-syne font-bold text-white"
                  style={{ fontSize: 'clamp(16px, 1.6vw, 22px)', lineHeight: 1.25,
                           letterSpacing: '-0.01em' }}>
                  {step.title}
                </p>
                <p className="text-white/50 leading-relaxed"
                  style={{ fontSize: 'clamp(13px, 1.2vw, 15px)', lineHeight: 1.75, maxWidth: '52ch' }}>
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
