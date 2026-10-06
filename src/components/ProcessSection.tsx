import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    num: '01',
    word: 'AUDIT',
    tagline: 'Understand everything first.',
    body: 'Before touching any code or AI tool, we map your entire operation. Every workflow, every handoff, every manual step that shouldn\'t be manual. Most agencies skip this. That\'s why their solutions don\'t stick.',
    red: false,
  },
  {
    num: '02',
    word: 'STRATEGISE',
    tagline: 'Define the exact fix.',
    body: 'After the audit we know the real problem — not the symptom. We define exactly what needs to be built, why, and how. No bloated proposals. No unnecessary features. Just the right scope.',
    red: true,
  },
  {
    num: '03',
    word: 'BUILD',
    tagline: 'Custom, not copy-pasted.',
    body: 'We build only what you actually need — whether that\'s a custom integration, an AI agent, a full system, or a simple automation. The solution is as unique as the problem.',
    red: false,
  },
  {
    num: '04',
    word: 'INTEGRATE',
    tagline: 'Fits into how you work.',
    body: 'We don\'t hand you software and disappear. We integrate the solution into your existing workflows, train your team, and make sure it actually gets used.',
    red: true,
  },
  {
    num: '05',
    word: 'SCALE',
    tagline: 'Built to grow with you.',
    body: 'The systems we build are designed to scale. When your business grows, your tools grow with it — not against it.',
    red: false,
  },
]

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const stepRefs   = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      stepRefs.current.forEach((step, i) => {
        if (!step) return
        const divider = step.querySelector('.step-divider')
        const word    = step.querySelector('.step-word')
        const meta    = step.querySelector('.step-meta')
        const body    = step.querySelector('.step-body')

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: 'top 82%',
            toggleActions: 'play none none none',
          }
        })

        tl.fromTo(divider, { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: 'power2.out', transformOrigin: 'left' })
          .fromTo(word, { clipPath: 'inset(0% 0% 100% 0%)', y: 20 },
            { clipPath: 'inset(0% 0% 0% 0%)', y: 0, duration: 0.7, ease: 'power4.out' }, '-=0.2')
          .fromTo([meta, body], { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out', stagger: 0.08 }, '-=0.3')
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="process"
      style={{
        background: 'var(--bg)',
        padding: 'clamp(72px,8vw,120px) 24px',
        borderTop: '1px solid var(--border)',
      }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Label */}
        <p className="font-mono uppercase mb-12 md:mb-16"
          style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--muted)' }}>
          <span style={{ marginRight: '0.5em', color: 'var(--accent)' }}>··</span>HOW WE WORK
        </p>

        {/* Steps */}
        {STEPS.map((step, i) => (
          <div key={step.num}
            ref={el => { stepRefs.current[i] = el }}
            style={{ paddingBottom: 'clamp(40px, 5vw, 64px)' }}>

            {/* Divider */}
            <div className="step-divider" style={{
              height: '1px',
              background: step.red ? 'var(--accent)' : 'var(--border-strong)',
              marginBottom: 'clamp(20px, 2.5vw, 32px)',
              transformOrigin: 'left',
            }} />

            {/* 3-column grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'clamp(40px,5vw,64px) 1fr clamp(200px,26%,380px)',
              gap: 'clamp(16px, 2.5vw, 40px)',
              alignItems: 'start',
            }}
              className="!grid-cols-[auto_1fr] md:!grid-cols-[clamp(40px,5vw,64px)_1fr_clamp(200px,26%,380px)]">

              {/* Number */}
              <span className="font-mono" style={{
                fontSize: '11px', letterSpacing: '0.1em', color: 'var(--muted)',
                paddingTop: '6px',
              }}>
                {step.num}
              </span>

              {/* Big word */}
              <div style={{ overflow: 'hidden' }}>
                <h3 className="step-word font-syne font-bold uppercase"
                  style={{
                    fontSize: 'clamp(48px, 8vw, 120px)',
                    lineHeight: 0.92,
                    letterSpacing: '-0.035em',
                    color: step.red ? 'var(--accent)' : 'var(--text)',
                    clipPath: 'inset(0% 0% 100% 0%)',
                  }}>
                  {step.word}
                </h3>
              </div>

              {/* Right: tagline + body */}
              <div className="step-body hidden md:block" style={{ opacity: 0, paddingTop: '8px' }}>
                <p className="font-syne font-bold step-meta mb-3"
                  style={{
                    fontSize: 'clamp(14px, 1.3vw, 17px)',
                    color: 'var(--text)',
                    letterSpacing: '-0.01em',
                    opacity: 0,
                  }}>
                  {step.tagline}
                </p>
                <p style={{ fontSize: 'clamp(13px, 1.2vw, 15px)', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '44ch' }}>
                  {step.body}
                </p>
              </div>
            </div>

            {/* Mobile body */}
            <div className="md:hidden step-body mt-4 opacity-0" style={{ opacity: 0 }}>
              <p className="font-syne font-bold step-meta mb-2"
                style={{ fontSize: '15px', color: 'var(--text)', opacity: 0 }}>
                {step.tagline}
              </p>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7 }}>
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
