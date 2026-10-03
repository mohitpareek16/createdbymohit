import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import Nav from './Nav'

// ── Cycling words (jeffmilanes.com "I BUILD ___" pattern) ──────
const CYCLING_WORDS = [
  'AI SYSTEMS.',
  'CUSTOM SOFTWARE.',
  'AUTOMATION TOOLS.',
  'REAL SOLUTIONS.',
  'YOUR BUSINESS.',
]

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const bottomRef    = useRef<HTMLDivElement>(null)
  const staticRef    = useRef<HTMLDivElement>(null)
  const wordRefs     = useRef<(HTMLSpanElement | null)[]>([])
  const cycleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const currentIdx   = useRef(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance: "I BUILD" slides in
      gsap.fromTo(staticRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.2 })

      // Bottom strip entrance
      gsap.fromTo(bottomRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1.1 })

      // Set all words off-screen below
      wordRefs.current.forEach((el, i) => {
        if (el) gsap.set(el, { yPercent: i === 0 ? 100 : 110 })
      })

      // Show first word after static text arrives
      const showWord = (idx: number) => {
        const el = wordRefs.current[idx]
        if (!el) return

        gsap.fromTo(el,
          { yPercent: 110 },
          {
            yPercent: 0, duration: 0.65, ease: 'power4.out',
            onComplete: () => {
              cycleTimerRef.current = setTimeout(() => {
                const nextIdx = (idx + 1) % CYCLING_WORDS.length
                // Out: slide up
                gsap.to(el, {
                  yPercent: -110, duration: 0.5, ease: 'power3.in',
                  onComplete: () => {
                    gsap.set(el, { yPercent: 110 }) // reset for reuse
                    currentIdx.current = nextIdx
                    showWord(nextIdx)
                  },
                })
              }, 1800)
            },
          }
        )
      }

      cycleTimerRef.current = setTimeout(() => showWord(0), 900)
    }, containerRef)

    return () => {
      ctx.revert()
      if (cycleTimerRef.current) clearTimeout(cycleTimerRef.current)
    }
  }, [])

  return (
    <>
      <Nav />
      <section ref={containerRef} className="relative min-h-screen overflow-hidden flex flex-col"
        style={{ background: '#050505' }}>

        {/* Subtle noise overlay */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden
          style={{ opacity: 0.025,
            backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
            backgroundSize: '200px 200px', mixBlendMode: 'overlay' }} />

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-end px-6 md:px-10 pb-0 pt-28">
          <div className="max-w-[1400px] mx-auto w-full">

            {/* "I BUILD" static + cycling word */}
            <div ref={staticRef} style={{ opacity: 0 }}>
              <h1 className="font-syne uppercase text-white leading-none select-none"
                style={{ fontWeight: 800, letterSpacing: '-0.03em',
                         fontSize: 'clamp(68px, 12.5vw, 180px)', lineHeight: 0.87 }}>

                {/* Static line */}
                <span className="block">I BUILD</span>

                {/* Cycling line — overflow hidden clips the slide animation */}
                <div className="relative overflow-hidden"
                  style={{ height: 'clamp(59px, 10.9vw, 156px)' }}>
                  {CYCLING_WORDS.map((word, i) => (
                    <span key={word}
                      ref={el => { wordRefs.current[i] = el }}
                      className="absolute top-0 left-0 block whitespace-nowrap leading-none"
                      style={{ color: '#C41E3A', willChange: 'transform',
                               fontFamily: 'inherit', fontWeight: 'inherit',
                               fontSize: 'inherit', letterSpacing: 'inherit' }}>
                      {word}
                    </span>
                  ))}
                </div>
              </h1>
            </div>

            {/* "Scroll the story" prompt */}
            <div className="flex items-center gap-3 mt-10 md:mt-14 mb-10 md:mb-14">
              <div className="w-6 h-px bg-white/20" />
              <p className="font-mono text-white/35 uppercase tracking-widest"
                style={{ fontSize: '10px', letterSpacing: '0.2em' }}>
                Scroll to explore ↓
              </p>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div ref={bottomRef} className="opacity-0 border-t px-6 md:px-10 py-5"
          style={{ borderColor: 'rgba(255,255,255,0.07)', willChange: 'opacity, transform' }}>
          <div className="max-w-[1400px] mx-auto w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-5">
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/45">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3A] flex-shrink-0"
                  style={{ animation: 'heroPulse 2.2s infinite' }} />
                Open for New Projects
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/30"
                style={{ letterSpacing: '0.12em' }}>
                Founder, Starting Core · Jaipur, India
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a href="mailto:hello@createdbymohit.com" className="bracket-link">[ START A PROJECT ]</a>
              <Link to="/work" className="bracket-link">[ VIEW WORK ]</Link>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes heroPulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(196,30,58,0.5); }
            50%       { box-shadow: 0 0 0 9px rgba(196,30,58,0); }
          }
        `}</style>
      </section>
    </>
  )
}
