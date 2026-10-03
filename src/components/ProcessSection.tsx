import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    num: '01',
    word: 'AUDIT',
    sub: 'Understand everything first',
    body: "Before we write a single line of code, we map your entire operation. Every workflow, every tool, every handoff. Most companies think they have a tech problem. They almost always have a process problem.",
    accent: false,
  },
  {
    num: '02',
    word: 'STRATEGISE',
    sub: 'Find the exact problem worth solving',
    body: "Not every bottleneck is worth automating. Not every process needs custom software. We identify the highest-leverage problems and build a plan that fits your stage, team, and budget.",
    accent: true,
  },
  {
    num: '03',
    word: 'BUILD',
    sub: 'Custom, not off-the-shelf',
    body: "Your company is different from every other company we've worked with. The solution has to be too. No templates. No filler. We build exactly what you need.",
    accent: false,
  },
  {
    num: '04',
    word: 'INTEGRATE',
    sub: 'The right AI for your specific business',
    body: "Pre-built where it fits. Custom-built where it doesn't. WhatsApp bots, CRM automation, document intelligence, workflow orchestration — whatever solves the actual problem.",
    accent: true,
  },
  {
    num: '05',
    word: 'SCALE',
    sub: 'Systems that grow with you',
    body: "We build maintainable, documented, extendable systems. As your business grows, the systems we build grow with it. That's the difference between a vendor and a partner.",
    accent: false,
  },
]

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const stepsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const steps = stepsRef.current?.querySelectorAll('.pstep')
      steps?.forEach((step) => {
        const word    = step.querySelector('.pstep-word')
        const meta    = step.querySelector('.pstep-meta')
        const body    = step.querySelector('.pstep-body')
        const divider = step.querySelector('.pstep-divider')

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        })

        tl.fromTo(divider, { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: 'power3.out', transformOrigin: 'left' })
          .fromTo(word,    { clipPath: 'inset(0% 0% 100% 0%)', y: 30 },
                           { clipPath: 'inset(0% 0% 0% 0%)', y: 0, duration: 0.85, ease: 'power4.out' }, '-=0.1')
          .fromTo(meta,    { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' }, '-=0.4')
          .fromTo(body,    { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' }, '-=0.35')
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="px-6 md:px-12 lg:px-16 py-24 md:py-32"
      style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-[1280px] mx-auto">

        {/* Section label */}
        <div className="mb-16 md:mb-20 flex items-center gap-4">
          <div className="h-px w-8 bg-[#C41E3A]" />
          <p className="font-mono text-white/35 uppercase tracking-widest" style={{ fontSize: '10px', letterSpacing: '0.22em' }}>
            The Process
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef}>
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="pstep"
            >
              {/* Top divider */}
              <div
                className="pstep-divider"
                style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '32px', transformOrigin: 'left' }}
              />

              {/* Step layout: num + word + content */}
              <div
                className="grid gap-6 pb-12 md:pb-16"
                style={{ gridTemplateColumns: 'clamp(40px,5vw,70px) 1fr clamp(220px,28%,400px)' }}
              >
                {/* Number */}
                <div className="pt-2">
                  <span className="font-mono text-white/25" style={{ fontSize: '11px', letterSpacing: '0.1em' }}>
                    {step.num}
                  </span>
                </div>

                {/* Big word */}
                <div className="pstep-word" style={{ clipPath: 'inset(0% 0% 100% 0%)' }}>
                  <h3
                    className="font-syne uppercase"
                    style={{
                      fontWeight: 800,
                      fontSize: 'clamp(52px, 8.5vw, 130px)',
                      lineHeight: 0.88,
                      letterSpacing: '-0.03em',
                      color: step.accent ? '#C41E3A' : '#ffffff',
                    }}
                  >
                    {step.word}
                  </h3>
                </div>

                {/* Sub + body */}
                <div className="flex flex-col justify-end gap-3 pb-1">
                  <p
                    className="pstep-meta font-syne font-semibold text-white"
                    style={{ fontSize: 'clamp(14px, 1.4vw, 18px)', lineHeight: 1.25, letterSpacing: '-0.01em' }}
                  >
                    {step.sub}
                  </p>
                  <p
                    className="pstep-body text-white/40 leading-relaxed"
                    style={{ fontSize: 'clamp(13px, 1.1vw, 15px)', lineHeight: 1.75 }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Final divider */}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />
        </div>
      </div>

      {/* Mobile layout override */}
      <style>{`
        @media (max-width: 768px) {
          .pstep > div[class*="grid"] {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  )
}
