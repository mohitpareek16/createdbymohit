import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Mohit transformed our app from confusing to intuitive. Our user retention jumped 60% after his redesign. He has a rare ability to see the product from the user's eyes.",
    name: 'Rahul Mehta',
    role: 'CEO',
    company: 'FinVibe',
  },
  {
    quote:
      "Working with Mohit was a masterclass in design thinking. He doesn't just make things look good — he makes them work. Every decision has intent and business rationale.",
    name: 'Priya Singh',
    role: 'Founder',
    company: 'EduPath',
  },
  {
    quote:
      "We raised $2M after the rebrand. Mohit's design work was central to our fundraising story — investors kept asking about our product experience.",
    name: 'Sarah Chen',
    role: 'Co-founder',
    company: 'NexGate',
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const quoteRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const total = TESTIMONIALS.length

  // Section reveal
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  // Fade transition on change
  const goTo = (idx: number) => {
    if (!quoteRef.current) return
    gsap.to(quoteRef.current, {
      opacity: 0,
      y: -10,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        setCurrent(idx)
        gsap.fromTo(
          quoteRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
        )
      },
    })
  }

  const prev = () => goTo((current - 1 + total) % total)
  const next = () => goTo((current + 1) % total)

  const t = TESTIMONIALS[current]

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-20 md:py-28 px-6 md:px-10"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#0A0A0A' }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p
            className="font-mono uppercase tracking-widest text-white/40 mb-4"
            style={{ fontSize: '10px', letterSpacing: '0.18em' }}
          >
            <span style={{ marginRight: '0.5em', opacity: 0.5 }}>··</span>
            TESTIMONIALS
          </p>
          <h2
            className="uppercase font-bold tracking-tight text-white"
            style={{
              fontSize: 'clamp(36px, 6vw, 80px)',
              lineHeight: 0.92,
              letterSpacing: '-0.02em',
            }}
          >
            WHAT<br />BUILDERS SAY.
          </h2>
        </div>

        {/* Testimonial container */}
        <div ref={containerRef} className="opacity-0">
          {/* Large quote mark */}
          <div
            className="font-mondwest text-white/10 select-none leading-none mb-4"
            style={{ fontSize: 'clamp(80px, 14vw, 180px)', lineHeight: 0.8 }}
            aria-hidden
          >
            "
          </div>

          {/* Quote text */}
          <div ref={quoteRef} style={{ minHeight: 'clamp(120px, 20vw, 200px)' }}>
            <blockquote
              className="text-white font-bold leading-relaxed"
              style={{
                fontSize: 'clamp(18px, 2.8vw, 34px)',
                lineHeight: 1.4,
                maxWidth: '900px',
              }}
            >
              "{t.quote}"
            </blockquote>

            <div className="mt-6 flex items-center gap-4">
              <div
                className="w-8 h-px"
                style={{ background: 'rgba(255,255,255,0.3)' }}
              />
              <div>
                <p
                  className="font-mono uppercase tracking-wider text-white/80"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  {t.name}
                </p>
                <p
                  className="font-mono text-white/40 mt-0.5"
                  style={{ fontSize: '10px', letterSpacing: '0.1em' }}
                >
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-5 mt-10 md:mt-12">
            {/* Prev/Next */}
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all"
              style={{
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.6)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(255,255,255,0.4)'
                el.style.color = '#fff'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(255,255,255,0.15)'
                el.style.color = 'rgba(255,255,255,0.6)'
              }}
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all"
              style={{
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.6)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(255,255,255,0.4)'
                el.style.color = '#fff'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(255,255,255,0.15)'
                el.style.color = 'rgba(255,255,255,0.6)'
              }}
              aria-label="Next"
            >
              →
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2 ml-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    width: i === current ? '24px' : '6px',
                    height: '6px',
                    borderRadius: '3px',
                    background: i === current ? '#ffffff' : 'rgba(255,255,255,0.2)',
                    transition: 'width 0.3s ease, background 0.3s ease',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <span
              className="ml-auto font-mono text-white/30"
              style={{ fontSize: '10px', letterSpacing: '0.1em' }}
            >
              {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
