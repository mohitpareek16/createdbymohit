import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Nav from './Nav'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Photo fade in
      gsap.fromTo(
        photoRef.current,
        { opacity: 0, scale: 1.04 },
        { opacity: 1, scale: 1, duration: 1.4, ease: 'power3.out', delay: 0.1 }
      )

      // Headline words stagger
      const words = headlineRef.current?.querySelectorAll('.hero-word')
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          { y: 120, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power4.out',
            stagger: 0.08,
            delay: 0.3,
          }
        )
      }

      // Sub text
      gsap.fromTo(
        subRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.7 }
      )

      // Bottom strip
      gsap.fromTo(
        bottomRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1 }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const HEADLINE_WORDS = ['DESIGNING', 'PRODUCTS', 'THAT MOVE']

  return (
    <>
      <Nav />

      <section
        ref={containerRef}
        className="relative min-h-screen overflow-hidden"
        style={{ background: '#0A0A0A' }}
      >
        {/* Background photo */}
        <div
          ref={photoRef}
          className="absolute inset-0 opacity-0"
          style={{ willChange: 'transform, opacity' }}
        >
          <img
            src="/mohit-pareek.jpg"
            alt="Mohit Pareek — UI/UX Designer"
            className="w-full h-full object-cover object-top"
            style={{ objectPosition: 'center 15%' }}
          />
          {/* Dark gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.3) 40%, rgba(10,10,10,0.75) 75%, rgba(10,10,10,0.97) 100%)',
            }}
          />
          {/* Left side vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.1) 50%, rgba(10,10,10,0) 100%)',
            }}
          />
        </div>

        {/* Dot decorators */}
        <span
          className="absolute top-[28%] left-[8%] font-mono text-white/20 text-lg pointer-events-none select-none"
          style={{ letterSpacing: '0.2em' }}
        >
          ··
        </span>
        <span
          className="absolute top-[55%] right-[12%] font-mono text-white/15 text-base pointer-events-none select-none"
          style={{ letterSpacing: '0.2em' }}
        >
          ··
        </span>

        {/* Main content layer */}
        <div className="relative z-10 min-h-screen flex flex-col justify-between px-6 md:px-10 pt-28 pb-8">
          {/* Top-left headline */}
          <div className="flex-1 flex flex-col justify-center max-w-[1400px] mx-auto w-full">
            <h1
              ref={headlineRef}
              className="uppercase font-bold tracking-tight leading-none text-white"
              style={{
                fontSize: 'clamp(64px, 12vw, 168px)',
                lineHeight: 0.88,
                letterSpacing: '-0.02em',
              }}
            >
              {HEADLINE_WORDS.map((word) => (
                <span key={word} className="line-reveal block">
                  <span className="hero-word block" style={{ opacity: 0 }}>
                    {word}
                  </span>
                </span>
              ))}
            </h1>

            {/* Bottom-right italic text */}
            <div
              ref={subRef}
              className="self-end mt-6 md:mt-8 text-right opacity-0"
              style={{ willChange: 'opacity, transform' }}
            >
              <p
                className="font-mondwest text-white/60 uppercase leading-tight"
                style={{
                  fontSize: 'clamp(18px, 3vw, 42px)',
                  fontStyle: 'italic',
                  lineHeight: 1.1,
                }}
              >
                TURNING<br />COMPLEXITY<br />INTO CLARITY
              </p>
            </div>
          </div>

          {/* Bottom strip */}
          <div
            ref={bottomRef}
            className="opacity-0 border-t pt-6"
            style={{ borderColor: 'rgba(255,255,255,0.1)', willChange: 'opacity, transform' }}
          >
            <div className="max-w-[1400px] mx-auto w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              {/* Left: availability + info */}
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/50">
                  <span
                    className="w-2 h-2 rounded-full bg-[#C41E3A] flex-shrink-0"
                    style={{ animation: 'heroPulse 2.2s infinite' }}
                  />
                  Available Q3 2026
                </span>
                <span
                  className="font-mono text-[10px] uppercase tracking-widest text-white/40"
                  style={{ letterSpacing: '0.12em' }}
                >
                  UI/UX Designer &amp; Educator · Jaipur, India
                </span>
              </div>

              {/* Right: CTAs */}
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href="mailto:hello@createdbymohit.com"
                  className="bracket-link"
                >
                  [ START A PROJECT ]
                </a>
                <Link to="/work" className="bracket-link">
                  [ VIEW WORK ]
                </Link>
              </div>
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
