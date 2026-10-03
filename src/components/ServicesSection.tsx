import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Service {
  num: string
  title: string
  short: string
  desc: string
  href: string
}

const SERVICES: Service[] = [
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
    desc: "Not every business needs a custom AI agent. Sometimes a pre-built tool configured correctly does the job. Sometimes it needs to be built from scratch. We figure out which, then implement it — WhatsApp bots, workflow automations, CRM intelligence, whatever solves your actual problem.",
    href: '/services',
  },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef  = useRef<HTMLDivElement>(null)
  const rowsRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%', toggleActions: 'play none none none' } })

      const rows = rowsRef.current?.querySelectorAll('.service-row')
      if (rows && rows.length > 0) {
        gsap.fromTo(rows, { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12,
            scrollTrigger: { trigger: rowsRef.current, start: 'top 85%', toggleActions: 'play none none none' } })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services"
      className="py-20 md:py-28 px-6 md:px-10"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div ref={headerRef} className="flex items-end justify-between mb-12 md:mb-16 opacity-0">
          <div>
            <p className="font-mono uppercase tracking-widest text-white/40 mb-4"
              style={{ fontSize: '10px', letterSpacing: '0.18em' }}>
              <span style={{ marginRight: '0.5em', opacity: 0.5 }}>··</span>WHAT WE DO
            </p>
            <h2 className="font-syne uppercase text-white"
              style={{ fontSize: 'clamp(36px, 6vw, 80px)', lineHeight: 0.92,
                       letterSpacing: '-0.03em', fontWeight: 800 }}>
              THREE WAYS<br />WE HELP.
            </h2>
          </div>
          <Link to="/services"
            className="hidden md:inline-flex bracket-link self-end">
            [ ALL SERVICES ]
          </Link>
        </div>

        {/* Service rows */}
        <div ref={rowsRef}>
          {SERVICES.map((service) => (
            <Link key={service.num} to={service.href}
              className="service-row block opacity-0 group"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', cursor: 'pointer' }}>
              <div className="py-7 md:py-9 grid grid-cols-1 md:grid-cols-[80px_1fr_1fr_40px] gap-4 md:gap-8 items-start"
                style={{ transition: 'background 0.2s ease' }}>

                {/* Number */}
                <div className="flex items-start gap-3 md:block">
                  <span className="font-mono text-[#C41E3A]"
                    style={{ fontSize: '11px', letterSpacing: '0.1em', marginTop: '4px' }}>
                    {service.num}
                  </span>
                  {/* Mobile: title inline */}
                  <p className="md:hidden font-syne font-bold text-white uppercase"
                    style={{ fontSize: 'clamp(24px, 6vw, 36px)', lineHeight: 1, letterSpacing: '-0.02em' }}>
                    {service.title}
                  </p>
                </div>

                {/* Title (desktop) + short label */}
                <div>
                  <p className="hidden md:block font-syne font-bold text-white uppercase mb-2"
                    style={{ fontSize: 'clamp(28px, 3vw, 48px)', lineHeight: 1, letterSpacing: '-0.02em',
                             transition: 'color 0.2s ease' }}>
                    {service.title}
                  </p>
                  <span className="font-mono text-white/30 uppercase"
                    style={{ fontSize: '9px', letterSpacing: '0.18em' }}>
                    {service.short}
                  </span>
                </div>

                {/* Description */}
                <p className="text-white/45 leading-relaxed col-span-1 md:col-span-1"
                  style={{ fontSize: 'clamp(13px, 1.3vw, 15px)', lineHeight: 1.75, maxWidth: '52ch' }}>
                  {service.desc}
                </p>

                {/* Arrow */}
                <span className="hidden md:flex items-start justify-end pt-2 text-white/30 text-xl row-arrow"
                  style={{ opacity: 0, transform: 'translateX(-8px)',
                           transition: 'opacity 0.2s ease, transform 0.2s ease' }}>
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 md:hidden">
          <Link to="/services" className="bracket-link inline-flex">[ ALL SERVICES ]</Link>
        </div>
      </div>

      <style>{`
        .service-row:hover { background: rgba(255,255,255,0.02); }
        .service-row:hover .row-arrow { opacity: 1 !important; transform: translateX(0) !important; }
      `}</style>
    </section>
  )
}
