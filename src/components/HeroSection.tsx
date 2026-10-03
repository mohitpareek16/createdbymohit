import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import Nav from './Nav'

const CYCLING_WORDS = [
  'AI SYSTEMS.',
  'CUSTOM SOFTWARE.',
  'AUTOMATION.',
  'REAL SOLUTIONS.',
  'YOUR BUSINESS.',
]

export default function HeroSection() {
  const containerRef  = useRef<HTMLDivElement>(null)
  const bottomRef     = useRef<HTMLDivElement>(null)
  const h1Ref         = useRef<HTMLDivElement>(null)
  const wordRefs      = useRef<(HTMLSpanElement | null)[]>([])
  const scrollLineRef = useRef<HTMLDivElement>(null)
  const timerRef      = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance: h1 clip-path reveal from bottom
      gsap.fromTo(h1Ref.current,
        { clipPath: 'inset(100% 0% 0% 0%)', y: 40 },
        { clipPath: 'inset(0% 0% 0% 0%)', y: 0, duration: 1.1, ease: 'power4.out', delay: 0.1 })

      gsap.fromTo(scrollLineRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.9 })

      gsap.fromTo(bottomRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 1.1 })

      // Set all words below the clip
      wordRefs.current.forEach(el => { if (el) gsap.set(el, { yPercent: 115 }) })

      const showWord = (idx: number) => {
        const el = wordRefs.current[idx]
        if (!el) return
        gsap.to(el, {
          yPercent: 0, duration: 0.7, ease: 'power4.out',
          onComplete: () => {
            timerRef.current = setTimeout(() => {
              const next = (idx + 1) % CYCLING_WORDS.length
              gsap.to(el, {
                yPercent: -115, duration: 0.55, ease: 'power3.in',
                onComplete: () => {
                  gsap.set(el, { yPercent: 115 })
                  showWord(next)
                },
              })
            }, 1800)
          },
        })
      }

      timerRef.current = setTimeout(() => showWord(0), 1100)
    }, containerRef)

    return () => {
      ctx.revert()
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  return (
    <>
      <Nav />
      <section
        ref={containerRef}
        className="relative min-h-screen flex flex-col overflow-hidden"
        style={{ background: '#000000' }}
      >
        {/* Fine dot grid texture */}
        <div
          className="absolute inset-0 pointer-events-none select-none"
          aria-hidden
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            opacity: 0.4,
          }}
        />

        {/* Gradient vignette corners */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden
          style={{
            background:
              'radial-gradient(ellipse at 0% 0%, rgba(196,30,58,0.06) 0%, transparent 50%), radial-gradient(ellipse at 100% 100%, rgba(255,255,255,0.03) 0%, transparent 50%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-between px-6 md:px-12 lg:px-16 pt-28 pb-0">
          <div className="flex-1 flex flex-col justify-center">

            {/* "I BUILD" + cycling word ── the main event */}
            <div ref={h1Ref} style={{ clipPath: 'inset(100% 0% 0% 0%)' }}>
              <h1
                className="font-syne text-white uppercase select-none"
                style={{
                  fontWeight: 800,
                  fontSize: 'clamp(72px, 13.5vw, 200px)',
                  lineHeight: 0.9,
                  letterSpacing: '-0.035em',
                }}
              >
                {/* Static line */}
                <span className="block">I BUILD</span>

                {/* Cycling line ── height = fontSize × lineHeight */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: '0.9em' }}
                >
                  {CYCLING_WORDS.map((word, i) => (
                    <span
                      key={word}
                      ref={el => { wordRefs.current[i] = el }}
                      className="absolute inset-0 flex items-start"
                      style={{
                        color: '#C41E3A',
                        willChange: 'transform',
                        lineHeight: 'inherit',
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </h1>

              {/* Sub-descriptor */}
              <p
                className="font-mono text-white/35 uppercase mt-8 md:mt-10"
                style={{ fontSize: 'clamp(10px, 1vw, 13px)', letterSpacing: '0.22em' }}
              >
                Software Engineer & AI Specialist &nbsp;·&nbsp; Jaipur, India
              </p>
            </div>

            {/* Scroll prompt */}
            <div ref={scrollLineRef} className="flex items-center gap-4 mt-12 md:mt-16">
              <div className="h-px bg-white/20" style={{ width: '40px' }} />
              <span className="font-mono text-white/30 uppercase" style={{ fontSize: '10px', letterSpacing: '0.2em' }}>
                Scroll the story
              </span>
              <div
                className="h-px bg-white/10 flex-1"
                style={{ maxWidth: '200px' }}
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          ref={bottomRef}
          className="relative z-10 px-6 md:px-12 lg:px-16 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', opacity: 0 }}
        >
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-2 font-mono uppercase tracking-widest text-white/40"
              style={{ fontSize: '10px', letterSpacing: '0.18em' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3A]"
                style={{ animation: 'pulse 2s infinite' }} />
              Open for Projects
            </span>
            <span className="font-mono text-white/25 uppercase"
              style={{ fontSize: '10px', letterSpacing: '0.14em' }}>
              Founder, Starting Core
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="mailto:hello@createdbymohit.com" className="bracket-link">[ START A PROJECT ]</a>
            <Link to="/work" className="bracket-link">[ VIEW WORK ]</Link>
          </div>
        </div>

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50%       { opacity: 0.35; }
          }
        `}</style>
      </section>
    </>
  )
}
