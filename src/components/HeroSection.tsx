import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Nav from './Nav'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headlineRef  = useRef<HTMLHeadingElement>(null)
  const subRef       = useRef<HTMLDivElement>(null)
  const bottomRef    = useRef<HTMLDivElement>(null)
  const photoRef     = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(photoRef.current,
        { opacity: 0, scale: 1.04 },
        { opacity: 1, scale: 1, duration: 1.4, ease: 'power3.out', delay: 0.1 })

      const words = headlineRef.current?.querySelectorAll('.hero-word')
      if (words && words.length > 0) {
        gsap.fromTo(words,
          { y: 120, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power4.out', stagger: 0.1, delay: 0.3 })
      }

      gsap.fromTo(subRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.75 })

      gsap.fromTo(bottomRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1.05 })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const HEADLINE_WORDS = ['WE BUILD AI', 'THAT SOLVES', 'YOUR PROBLEM']

  return (
    <>
      <Nav />
      <section ref={containerRef} className="relative min-h-screen overflow-hidden"
        style={{ background: '#0A0A0A' }}>

        {/* Background photo */}
        <div ref={photoRef} className="absolute inset-0 opacity-0" style={{ willChange: 'transform, opacity' }}>
          <img src="/mohit-pareek.jpg" alt="Mohit Pareek — Founder, Starting Core"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 15%' }} />
          <div className="absolute inset-0"
            style={{ background:
              'linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.35) 35%, rgba(10,10,10,0.8) 70%, rgba(10,10,10,0.98) 100%)' }} />
          <div className="absolute inset-0"
            style={{ background:
              'linear-gradient(to right, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.15) 55%, rgba(10,10,10,0) 100%)' }} />
        </div>

        {/* Subtle grid accent */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
                   backgroundSize: '80px 80px', opacity: 0.6 }} />

        {/* Main content */}
        <div className="relative z-10 min-h-screen flex flex-col justify-between px-6 md:px-10 pt-28 pb-8">
          <div className="flex-1 flex flex-col justify-center max-w-[1400px] mx-auto w-full">

            {/* Label */}
            <div ref={subRef} className="mb-6 opacity-0" style={{ willChange: 'opacity, transform' }}>
              <p className="font-mono text-white/40 uppercase tracking-widest"
                style={{ fontSize: '10px', letterSpacing: '0.2em' }}>
                <span style={{ color: '#C41E3A', marginRight: '0.5em' }}>●</span>
                CUSTOM DEVELOPMENT · BUSINESS AUDIT · AI INTEGRATION
              </p>
            </div>

            {/* Headline */}
            <h1 ref={headlineRef}
              className="font-syne uppercase leading-none text-white"
              style={{ fontSize: 'clamp(60px, 11.5vw, 164px)', lineHeight: 0.88,
                       letterSpacing: '-0.03em', fontWeight: 800 }}>
              {HEADLINE_WORDS.map((word) => (
                <span key={word} className="line-reveal block">
                  <span className="hero-word block" style={{ opacity: 0 }}>{word}</span>
                </span>
              ))}
            </h1>

          </div>

          {/* Bottom strip */}
          <div ref={bottomRef} className="opacity-0 border-t pt-6"
            style={{ borderColor: 'rgba(255,255,255,0.1)', willChange: 'opacity, transform' }}>
            <div className="max-w-[1400px] mx-auto w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/50">
                  <span className="w-2 h-2 rounded-full bg-[#C41E3A] flex-shrink-0"
                    style={{ animation: 'heroPulse 2.2s infinite' }} />
                  Open for New Projects
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/35"
                  style={{ letterSpacing: '0.12em' }}>
                  Founder, Starting Core · Jaipur, India
                </span>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <a href="mailto:hello@createdbymohit.com" className="bracket-link">[ START A PROJECT ]</a>
                <Link to="/work" className="bracket-link">[ VIEW WORK ]</Link>
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
