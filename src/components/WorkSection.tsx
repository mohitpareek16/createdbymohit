import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getAllWebsites, type WebsiteProject } from '../data/websites'

gsap.registerPlugin(ScrollTrigger)

// Featured top 6 shown large, rest in compact grid
const FEATURED_SLUGS = ['kiventures', 'kasbahagafay', 'cipherschools', 'yolotrips', 'infumarket', 'agrivia']
const ALL = getAllWebsites()
const FEATURED = FEATURED_SLUGS.map(s => ALL.find(p => p.slug === s)!).filter(Boolean)
const GRID = ALL.filter(p => !FEATURED_SLUGS.includes(p.slug)).slice(0, 15)

function ProjectCard({ project, big = false }: { project: WebsiteProject; big?: boolean }) {
  const cardRef = useRef<HTMLAnchorElement>(null)

  return (
    <a ref={cardRef} href={project.url} target="_blank" rel="noopener noreferrer"
      className="project-card noise-card group block"
      style={{
        aspectRatio: big ? '4/3' : '3/2',
        background: project.gradient,
        borderRadius: big ? '20px' : '14px',
        position: 'relative',
        overflow: 'hidden',
        display: 'block',
        textDecoration: 'none',
      }}>

      {/* Scale-on-hover inner */}
      <div className="project-card-inner" style={{
        position: 'absolute', inset: 0,
        background: project.gradient,
        transition: 'transform 0.55s cubic-bezier(0.22,1,0.36,1)',
      }} />

      {/* Gradient overlay */}
      <div className="project-card-overlay" />

      {/* Top tags */}
      <div style={{
        position: 'absolute', top: 18, left: 18, right: 18,
        display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
        zIndex: 3,
      }}>
        <span className="font-mono uppercase" style={{
          fontSize: '9px', letterSpacing: '0.18em',
          background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          color: 'rgba(255,255,255,0.75)',
          padding: '5px 10px', borderRadius: '999px',
          border: '1px solid rgba(255,255,255,0.15)',
        }}>
          {project.category}
        </span>
        <span className="font-mono" style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
          {project.year}
        </span>
      </div>

      {/* Bottom info — always visible */}
      <div className="project-card-body" style={{ zIndex: 3 }}>
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          marginBottom: big ? '8px' : '4px',
        }}>
          <h3 className="font-syne font-bold text-white uppercase" style={{
            fontSize: big ? 'clamp(22px, 2.2vw, 36px)' : 'clamp(16px, 1.6vw, 24px)',
            letterSpacing: '-0.02em', lineHeight: 1, maxWidth: '80%',
          }}>
            {project.title}
          </h3>
          <span className="text-white/50 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
            style={{ fontSize: big ? '20px' : '16px', lineHeight: 1 }}>
            ↗
          </span>
        </div>

        {/* Description slides up on hover */}
        {big && (
          <p className="project-card-desc font-inter text-white/70"
            style={{ fontSize: '13px', lineHeight: 1.6, zIndex: 4, paddingTop: '8px' }}>
            {project.what}
          </p>
        )}
      </div>
    </a>
  )
}

function CompactCard({ project }: { project: WebsiteProject }) {
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer"
      className="group block"
      style={{
        background: 'var(--surface)',
        borderRadius: '12px',
        overflow: 'hidden',
        textDecoration: 'none',
        border: '1px solid var(--border)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>

      {/* Gradient swatch */}
      <div style={{
        height: '80px', background: project.gradient, borderRadius: '8px 8px 0 0',
        position: 'relative',
      }}>
        <span className="font-mono absolute bottom-2 right-2 text-white/50"
          style={{ fontSize: '9px', letterSpacing: '0.1em' }}>
          {project.year}
        </span>
      </div>

      {/* Info */}
      <div style={{ padding: '12px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
          <p className="font-syne font-bold uppercase" style={{
            fontSize: 'clamp(13px, 1.2vw, 16px)', letterSpacing: '-0.01em',
            color: 'var(--text)', lineHeight: 1,
          }}>
            {project.title}
          </p>
          <span className="text-[--muted] group-hover:text-[--accent] transition-colors" style={{ fontSize: '13px' }}>↗</span>
        </div>
        <p className="font-mono uppercase" style={{ fontSize: '8px', letterSpacing: '0.14em', color: 'var(--muted)' }}>
          {project.industry}
        </p>
      </div>
    </a>
  )
}

export default function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef  = useRef<HTMLDivElement>(null)
  const feat1Ref   = useRef<HTMLDivElement>(null)
  const feat2Ref   = useRef<HTMLDivElement>(null)
  const gridRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 88%' } })

      gsap.fromTo(feat1Ref.current?.children ?? [],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: feat1Ref.current, start: 'top 88%' } })

      gsap.fromTo(feat2Ref.current?.children ?? [],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: feat2Ref.current, start: 'top 88%' } })

      const cards = gridRef.current?.querySelectorAll('a')
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.05,
            scrollTrigger: { trigger: gridRef.current, start: 'top 88%' } })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="work" ref={sectionRef}
      style={{ padding: 'clamp(72px,8vw,120px) 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div ref={headerRef} className="opacity-0" style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          marginBottom: 'clamp(40px, 5vw, 72px)',
          flexWrap: 'wrap', gap: '20px',
        }}>
          <div>
            <p className="font-mono uppercase mb-4" style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--muted)' }}>
              <span style={{ marginRight: '0.5em', color: 'var(--accent)' }}>··</span>SELECTED WORK
            </p>
            <h2 className="font-syne uppercase" style={{
              fontSize: 'clamp(38px, 6.5vw, 88px)', lineHeight: 0.9,
              letterSpacing: '-0.035em', fontWeight: 800, color: 'var(--text)',
            }}>
              80+ PROBLEMS<br />
              <span style={{ color: 'var(--accent)' }}>SOLVED.</span>
            </h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p className="font-mono uppercase mb-3" style={{ fontSize: '9px', letterSpacing: '0.14em', color: 'var(--muted)' }}>
              India &amp; Global · 2019 — 2026
            </p>
            <Link to="/work" className="bracket-link" style={{ fontSize: '9px' }}>
              [ VIEW ALL PROJECTS ]
            </Link>
          </div>
        </div>

        {/* Featured row 1 — 2 large + 1 medium */}
        <div ref={feat1Ref} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '16px',
          marginBottom: '16px',
        }}
          className="md:!grid-cols-[1.4fr_1fr_1fr]">
          {FEATURED.slice(0, 3).map(p => (
            <ProjectCard key={p.slug} project={p} big />
          ))}
        </div>

        {/* Featured row 2 — 3 equal */}
        <div ref={feat2Ref} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '16px',
          marginBottom: '48px',
        }}
          className="md:!grid-cols-3">
          {FEATURED.slice(3, 6).map(p => (
            <ProjectCard key={p.slug} project={p} big={false} />
          ))}
        </div>

        {/* Divider with label */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '16px',
          marginBottom: '28px',
        }}>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          <p className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.18em', color: 'var(--muted)' }}>
            + {GRID.length} MORE PROJECTS
          </p>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        {/* Compact grid — all other projects */}
        <div ref={gridRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: '12px',
          marginBottom: '48px',
        }}>
          {GRID.map(p => (
            <CompactCard key={p.slug} project={p} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', paddingTop: '16px' }}>
          <Link to="/work" className="bracket-link" style={{ fontSize: '10px' }}>
            [ SEE ALL 31 PROJECTS ]
          </Link>
        </div>
      </div>
    </section>
  )
}
