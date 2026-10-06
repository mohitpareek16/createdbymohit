import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WORDS = ['AI SYSTEMS.', 'CUSTOM SOFTWARE.', 'AUTOMATION.', 'REAL SOLUTIONS.', 'YOUR BUSINESS.']

export default function HeroSection() {
  const sectionRef    = useRef<HTMLElement>(null)
  const h1Ref         = useRef<HTMLHeadingElement>(null)
  const staticRef     = useRef<HTMLSpanElement>(null)
  const wordsContRef  = useRef<HTMLDivElement>(null)
  const wordElemsRef  = useRef<HTMLSpanElement[]>([])
  const scrollLineRef = useRef<HTMLDivElement>(null)
  const metaRef       = useRef<HTMLDivElement>(null)
  const ctaRef        = useRef<HTMLDivElement>(null)
  const currentRef    = useRef(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance — reveal h1 from top clip-path
      const tl = gsap.timeline({ delay: 0.15 })

      tl.fromTo(h1Ref.current,
        { clipPath: 'inset(100% 0% 0% 0%)', y: 40 },
        { clipPath: 'inset(0% 0% 0% 0%)', y: 0, duration: 1.1, ease: 'power4.out' })
        .fromTo(metaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
        .fromTo(ctaRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
        .fromTo(scrollLineRef.current,
          { opacity: 0, scaleY: 0 },
          { opacity: 1, scaleY: 1, duration: 0.5, ease: 'power2.out', transformOrigin: 'top center' }, '-=0.2')

      // Word cycling
      const words = wordElemsRef.current
      if (words.length === 0) return

      // Initial position: first word visible, rest hidden below
      gsap.set(words[0], { yPercent: 0, opacity: 1 })
      words.slice(1).forEach(w => gsap.set(w, { yPercent: 110, opacity: 0 }))

      const cycle = () => {
        const curr = currentRef.current
        const next = (curr + 1) % words.length

        const tl = gsap.timeline({
          onComplete: () => {
            currentRef.current = next
            setTimeout(cycle, 2200)
          }
        })
        tl.to(words[curr], { yPercent: -110, opacity: 0, duration: 0.55, ease: 'power3.in' })
          .fromTo(words[next],
            { yPercent: 110, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
            '-=0.1')
      }

      const timer = setTimeout(cycle, 2800)
      return () => clearTimeout(timer)
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef}
      style={{
        minHeight: '100svh',
        background: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '120px 24px 64px',
        position: 'relative',
        overflow: 'hidden',
      }}>

      {/* Dot grid — very subtle */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
        backgroundSize: '44px 44px',
        opacity: 0.45,
      }} />

      {/* Red radial glow — top right, light */}
      <div aria-hidden style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: '60vw', height: '60vw',
        background: 'radial-gradient(circle, rgba(196,30,58,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Label */}
        <p className="font-mono uppercase mb-8"
          style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--muted)' }}>
          <span style={{ marginRight: '0.5em', color: 'var(--accent)' }}>··</span>
          MOHIT PAREEK · FOUNDER, STARTING CORE
        </p>

        {/* Headline */}
        <h1 ref={h1Ref} className="font-syne uppercase"
          style={{
            fontSize: 'clamp(56px, 10.5vw, 160px)',
            lineHeight: 0.9,
            letterSpacing: '-0.035em',
            fontWeight: 800,
            color: 'var(--text)',
            clipPath: 'inset(100% 0% 0% 0%)',
            marginBottom: 'clamp(20px, 2.5vw, 36px)',
          }}>
          <span ref={staticRef}>I BUILD </span>
          {/* Cycling word container — height tied to 0.9em of parent font-size */}
          <div ref={wordsContRef} style={{
            display: 'inline-block',
            verticalAlign: 'bottom',
            height: '0.92em',
            overflow: 'hidden',
            position: 'relative',
          }}>
            {WORDS.map((word, i) => (
              <span key={word}
                ref={el => { if (el) wordElemsRef.current[i] = el }}
                style={{
                  position: i === 0 ? 'relative' : 'absolute',
                  left: 0,
                  top: 0,
                  display: 'block',
                  color: 'var(--accent)',
                  whiteSpace: 'nowrap',
                }}>
                {word}
              </span>
            ))}
          </div>
        </h1>

        {/* Meta line */}
        <div ref={metaRef} className="flex flex-wrap items-center gap-4 mb-12 opacity-0"
          style={{ opacity: 0 }}>
          <p style={{ fontSize: 'clamp(15px, 1.6vw, 19px)', color: 'var(--muted)', lineHeight: 1.5, maxWidth: '52ch' }}>
            Custom development, business audits &amp; AI integration — built for{' '}
            <span style={{ color: 'var(--text)', fontStyle: 'italic' }}>your specific problem</span>,
            not a generic template.
          </p>
        </div>

        {/* CTA strip */}
        <div ref={ctaRef} className="flex flex-wrap items-center gap-4 opacity-0" style={{ opacity: 0 }}>
          <Link to="/contact" className="bracket-link accent" style={{ fontSize: '10px' }}>
            [ START A PROJECT ]
          </Link>
          <Link to="/work" className="bracket-link" style={{ fontSize: '10px' }}>
            [ SEE OUR WORK ]
          </Link>
          <div className="flex items-center gap-2 ml-2">
            <span className="w-2 h-2 rounded-full bg-[#C41E3A]" style={{ animation: 'heroPulse 2.2s infinite' }} />
            <span className="font-mono" style={{ fontSize: '9px', letterSpacing: '0.16em', color: 'var(--muted)', textTransform: 'uppercase' }}>
              Open for Projects · 2026
            </span>
          </div>
        </div>

        {/* Scroll prompt */}
        <div ref={scrollLineRef} className="hidden md:flex items-center gap-3 mt-16"
          style={{ opacity: 0, transformOrigin: 'left center' }}>
          <div style={{ width: '1px', height: '48px', background: 'var(--border-strong)' }} />
          <p className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'var(--subtle)' }}>
            Scroll the story
          </p>
        </div>
      </div>

      {/* Bottom stats strip */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        borderTop: '1px solid var(--border)',
        padding: '16px 24px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          {[
            { v: '6+', l: 'Years' },
            { v: '80+', l: 'Projects' },
            { v: '30+', l: 'AI Systems' },
            { v: '₹50L+', l: 'Value Built' },
          ].map(s => (
            <div key={s.l} className="flex items-baseline gap-2">
              <span className="font-syne font-bold" style={{ fontSize: 'clamp(18px, 2vw, 26px)', letterSpacing: '-0.03em', color: 'var(--text)' }}>{s.v}</span>
              <span className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.14em', color: 'var(--muted)' }}>{s.l}</span>
            </div>
          ))}
          <a href="https://www.linkedin.com/in/mohit-pareek-b8a676204" target="_blank" rel="noopener noreferrer"
            className="font-mono uppercase transition-colors hidden md:block"
            style={{ fontSize: '9px', letterSpacing: '0.14em', color: 'var(--muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  )
}
