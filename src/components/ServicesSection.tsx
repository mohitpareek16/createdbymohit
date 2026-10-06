import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  {
    num: '01',
    title: 'Custom Development',
    short: 'SOLVE THE SPECIFIC PROBLEM',
    desc: "Every company has different processes, different tools, different bottlenecks. We don't sell pre-packaged solutions. We diagnose what's actually broken and build exactly what fixes it — whether that's a custom integration, a purpose-built tool, or a full system redesign.",
    href: '/services',
  },
  {
    num: '02',
    title: 'Business Audit',
    short: 'UNDERSTAND EVERYTHING FIRST',
    desc: "Before writing a single line of code or touching any AI tool, we map your entire operation. Every workflow, every handoff, every manual step that shouldn't be manual. The audit is the foundation. It's why the solutions we build actually stick.",
    href: '/services',
  },
  {
    num: '03',
    title: 'AI Integration',
    short: 'THE RIGHT AI FOR YOUR BUSINESS',
    desc: "Not every business needs a custom AI agent. Sometimes a pre-built tool configured correctly does the job. Sometimes it needs to be built from scratch. We figure out which, then implement it — WhatsApp bots, workflow automations, CRM intelligence.",
    href: '/services',
  },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef  = useRef<HTMLDivElement>(null)
  const rowsRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 86%' } })

      const rows = rowsRef.current?.querySelectorAll('.service-row')
      if (rows && rows.length > 0) {
        gsap.fromTo(rows,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12,
            scrollTrigger: { trigger: rowsRef.current, start: 'top 86%' } })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services"
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        padding: 'clamp(72px,8vw,120px) 24px',
      }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div ref={headerRef} className="flex items-end justify-between mb-12 md:mb-16 opacity-0"
          style={{ flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <p className="font-mono uppercase mb-4"
              style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--muted)' }}>
              <span style={{ marginRight: '0.5em', color: 'var(--accent)' }}>··</span>WHAT WE DO
            </p>
            <h2 className="font-syne uppercase"
              style={{
                fontSize: 'clamp(36px, 6vw, 80px)', lineHeight: 0.92,
                letterSpacing: '-0.035em', fontWeight: 800, color: 'var(--text)',
              }}>
              THREE WAYS<br />WE HELP.
            </h2>
          </div>
          <Link to="/services" className="hidden md:inline-flex bracket-link">
            [ ALL SERVICES ]
          </Link>
        </div>

        {/* Rows */}
        <div ref={rowsRef}>
          {SERVICES.map(service => (
            <Link key={service.num} to={service.href}
              className="service-row block opacity-0 group"
              style={{
                borderTop: '1px solid var(--border)',
                cursor: 'pointer',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface-2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
              <div className="py-7 md:py-9 grid grid-cols-1 md:grid-cols-[80px_1fr_1fr_40px] gap-4 md:gap-8 items-start">

                {/* Number */}
                <div className="flex items-start gap-3 md:block">
                  <span className="font-mono" style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'var(--accent)', marginTop: '4px' }}>
                    {service.num}
                  </span>
                  <p className="md:hidden font-syne font-bold uppercase" style={{
                    fontSize: 'clamp(22px, 5.5vw, 32px)', lineHeight: 1,
                    letterSpacing: '-0.02em', color: 'var(--text)',
                  }}>
                    {service.title}
                  </p>
                </div>

                {/* Title (desktop) + short */}
                <div>
                  <p className="hidden md:block font-syne font-bold uppercase mb-2"
                    style={{
                      fontSize: 'clamp(26px, 2.8vw, 44px)', lineHeight: 1,
                      letterSpacing: '-0.02em', color: 'var(--text)',
                      transition: 'color 0.2s ease',
                    }}>
                    {service.title}
                  </p>
                  <span className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.18em', color: 'var(--muted)' }}>
                    {service.short}
                  </span>
                </div>

                {/* Description */}
                <p style={{
                  fontSize: 'clamp(13px, 1.25vw, 15px)', lineHeight: 1.75,
                  color: 'var(--muted)', maxWidth: '50ch',
                }}>
                  {service.desc}
                </p>

                {/* Arrow */}
                <span className="hidden md:flex items-start justify-end pt-2 row-arrow"
                  style={{ fontSize: '18px', color: 'var(--accent)' }}>
                  →
                </span>
              </div>
            </Link>
          ))}
          <div style={{ height: '1px', background: 'var(--border)' }} />
        </div>

        <div className="mt-8 md:hidden">
          <Link to="/services" className="bracket-link inline-flex">[ ALL SERVICES ]</Link>
        </div>
      </div>
    </section>
  )
}
