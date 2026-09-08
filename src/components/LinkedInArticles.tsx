import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LINKEDIN_ARTICLES } from '../data/linkedin-articles'

gsap.registerPlugin(ScrollTrigger)

export default function LinkedInArticles() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Cards
      const cards = cardsRef.current?.querySelectorAll('.li-card')
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: cardsRef.current,
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
      id="linkedin"
      ref={sectionRef}
      className="py-20 md:py-28 px-6 md:px-10"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-12 md:mb-16 opacity-0">
          <p
            className="font-mono uppercase tracking-widest text-white/40 mb-4"
            style={{ fontSize: '10px', letterSpacing: '0.18em' }}
          >
            LINKEDIN
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <h2
              className="uppercase font-bold tracking-tight text-white"
              style={{
                fontSize: 'clamp(36px, 6vw, 80px)',
                lineHeight: 0.92,
                letterSpacing: '-0.02em',
              }}
            >
              LATEST<br />THINKING.
            </h2>
            <a
              href="https://www.linkedin.com/in/mohit-pareek-b8a676204"
              target="_blank"
              rel="noopener noreferrer"
              className="bracket-link self-start md:self-end"
            >
              [ VIEW PROFILE ]
            </a>
          </div>
        </div>

        {/* Cards — horizontal scroll on mobile, 4-col grid on desktop */}
        <div
          ref={cardsRef}
          className="snap-x-scroll md:grid"
          style={{
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
          }}
        >
          {LINKEDIN_ARTICLES.map((article) => (
            <a
              key={article.id}
              href={article.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="li-card group block flex-shrink-0 opacity-0"
              style={{
                width: 'min(300px, 80vw)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '24px',
                background: '#111111',
                transition: 'border-color 0.2s ease, background 0.2s ease',
                minWidth: 0,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.18)'
                el.style.background = '#161616'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.08)'
                el.style.background = '#111111'
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="font-mono uppercase text-[#C41E3A]"
                  style={{ fontSize: '9px', letterSpacing: '0.16em' }}
                >
                  {article.category}
                </span>
                <span
                  className="font-mono text-white/30"
                  style={{ fontSize: '9px', letterSpacing: '0.1em' }}
                >
                  {article.date}
                </span>
              </div>

              <h3
                className="text-white font-bold mb-3 leading-tight group-hover:text-white/90 transition-colors"
                style={{ fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.25 }}
              >
                {article.title}
              </h3>

              <p
                className="text-white/40 leading-relaxed mb-6"
                style={{ fontSize: '13px', lineHeight: 1.6 }}
              >
                {article.excerpt}
              </p>

              <span
                className="font-mono text-white/50 group-hover:text-white/80 transition-colors"
                style={{ fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase' }}
              >
                READ ON LINKEDIN →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
