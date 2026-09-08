import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Project {
  name: string
  slug: string
  category: string
  year: string
  desc: string
}

const PROJECTS: Project[] = [
  {
    name: 'evr',
    slug: 'evr',
    category: 'Brand Identity',
    year: '2024',
    desc: 'From idea to millions raised for a web3 AI product',
  },
  {
    name: 'Automation Machines',
    slug: 'automation-machines',
    category: 'SaaS Platform',
    year: '2024',
    desc: 'Streamlining industrial automation with modern UX',
  },
  {
    name: 'xPortfolio',
    slug: 'xportfolio',
    category: 'Design Tool',
    year: '2023',
    desc: 'Modern portfolio management platform for creatives',
  },
]

export default function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const rowsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
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

      // Rows stagger
      const rows = rowsRef.current?.querySelectorAll('.work-row-item')
      if (rows && rows.length > 0) {
        gsap.fromTo(
          rows,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: rowsRef.current,
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
      id="work"
      ref={sectionRef}
      className="py-20 md:py-28 px-6 md:px-10"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="flex items-end justify-between mb-12 md:mb-16 opacity-0">
          <div>
            <p
              className="font-mono uppercase tracking-widest text-white/40 mb-4"
              style={{ fontSize: '10px', letterSpacing: '0.18em' }}
            >
              <span style={{ marginRight: '0.5em', opacity: 0.5 }}>··</span>
              SELECTED WORK
            </p>
            <h2
              className="uppercase font-bold tracking-tight text-white"
              style={{
                fontSize: 'clamp(36px, 6vw, 80px)',
                lineHeight: 0.92,
                letterSpacing: '-0.02em',
              }}
            >
              THINGS<br />I'VE SHIPPED.
            </h2>
          </div>
          <div
            className="hidden md:block text-right font-mono text-white/30 uppercase"
            style={{ fontSize: '10px', letterSpacing: '0.14em', lineHeight: 1.8 }}
          >
            2020 — 2026<br />Product · Brand · System
          </div>
        </div>

        {/* Table header (desktop) */}
        <div
          className="hidden md:grid mb-2 pb-3"
          style={{
            gridTemplateColumns: '1fr 200px 80px 40px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <span className="font-mono text-white/25 uppercase" style={{ fontSize: '9px', letterSpacing: '0.18em' }}>
            Project
          </span>
          <span className="font-mono text-white/25 uppercase" style={{ fontSize: '9px', letterSpacing: '0.18em' }}>
            Category
          </span>
          <span className="font-mono text-white/25 uppercase" style={{ fontSize: '9px', letterSpacing: '0.18em' }}>
            Year
          </span>
          <span />
        </div>

        {/* Project rows */}
        <div ref={rowsRef}>
          {PROJECTS.map((project, i) => (
            <Link
              key={project.slug}
              to={`/work/${project.slug}`}
              className="work-row work-row-item block"
              style={{ opacity: 0 }}
            >
              <div
                className="py-5 md:py-7"
                style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4px' }}
              >
                {/* Mobile layout */}
                <div className="md:hidden">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p
                        className="font-bold text-white uppercase tracking-tight"
                        style={{ fontSize: 'clamp(26px, 7vw, 40px)', lineHeight: 1 }}
                      >
                        {project.name}
                      </p>
                      <p className="mt-2 font-mono text-white/40 uppercase" style={{ fontSize: '9px', letterSpacing: '0.14em' }}>
                        {project.category} · {project.year}
                      </p>
                    </div>
                    <span className="row-arrow text-white/60 text-lg flex-shrink-0 mt-1">→</span>
                  </div>
                  <p className="mt-2 text-white/40 text-sm">{project.desc}</p>
                </div>

                {/* Desktop layout */}
                <div
                  className="hidden md:grid items-center"
                  style={{ gridTemplateColumns: '1fr 200px 80px 40px', gap: '16px' }}
                >
                  <div>
                    <p
                      className="font-bold text-white uppercase tracking-tight"
                      style={{ fontSize: 'clamp(28px, 3.5vw, 52px)', lineHeight: 1 }}
                    >
                      {project.name}
                    </p>
                    <p className="mt-1 text-white/35 text-sm">{project.desc}</p>
                  </div>
                  <span
                    className="font-mono text-white/40 uppercase"
                    style={{ fontSize: '10px', letterSpacing: '0.12em' }}
                  >
                    {project.category}
                  </span>
                  <span
                    className="font-mono text-white/40"
                    style={{ fontSize: '10px', letterSpacing: '0.1em' }}
                  >
                    {project.year}
                  </span>
                  <span className="row-arrow text-white/60 text-lg">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-12">
          <Link to="/work" className="bracket-link inline-flex">
            [ VIEW ALL PROJECTS ]
          </Link>
        </div>
      </div>
    </section>
  )
}
