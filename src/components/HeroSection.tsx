import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/createdbymohit/' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/mohit-pareek-b8a676204' },
  { label: 'Dribbble',  href: 'https://dribbble.com/mohit_pareek16' },
  { label: 'YouTube',   href: 'https://www.youtube.com/@createdbymohit' },
]

const STATS = [
  { v: '6+',    l: 'Years' },
  { v: '80+',   l: 'Projects' },
  { v: '30+',   l: 'AI Systems' },
  { v: '₹50L+', l: 'Value Built' },
]

export default function HeroSection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const leftRef     = useRef<HTMLDivElement>(null)
  const photoRef    = useRef<HTMLDivElement>(null)
  const statsBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 })

      if (leftRef.current) {
        tl.fromTo(
          Array.from(leftRef.current.children),
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.85, stagger: 0.09, ease: 'power3.out' }
        )
      }

      tl.fromTo(
        photoRef.current,
        { opacity: 0, scale: 0.96, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: 'power3.out' },
        '-=0.6'
      )

      tl.fromTo(
        statsBarRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} style={{
      minHeight: '100svh',
      background: 'var(--bg)',
      display: 'flex',
      flexDirection: 'column',
      padding: '96px 24px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Red glow top-right */}
      <div aria-hidden style={{
        position: 'absolute', top: '-15%', right: '-8%',
        width: '65vw', height: '65vw',
        background: 'radial-gradient(circle, rgba(196,30,58,0.14) 0%, transparent 60%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Subtle dot grid */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />

      <div style={{
        maxWidth: '1200px', width: '100%', margin: '0 auto',
        flex: 1, display: 'flex', flexDirection: 'column',
        justifyContent: 'center', position: 'relative', zIndex: 1,
        paddingBottom: '48px',
      }}>

        {/* ── Two-column grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) auto',
          gap: 'clamp(32px, 5vw, 80px)',
          alignItems: 'center',
        }}>

          {/* Left column */}
          <div ref={leftRef} style={{ display: 'flex', flexDirection: 'column' }}>

            {/* Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
              <span style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: 'var(--accent)', display: 'inline-block',
                boxShadow: '0 0 0 0 rgba(196,30,58,0.4)',
                animation: 'heroPulse 2.2s infinite',
              }} />
              <span className="font-mono uppercase" style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--muted)' }}>
                Available for Projects · Q4 2026
              </span>
            </div>

            {/* Name — mixed case, large Syne */}
            <h1 className="font-syne" style={{
              fontSize: 'clamp(52px, 8.5vw, 116px)',
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              fontWeight: 800,
              color: 'var(--text)',
              marginBottom: '20px',
            }}>
              Mohit<br />
              <span style={{ color: 'var(--accent)' }}>Pareek.</span>
            </h1>

            {/* Role tags */}
            <p className="font-mono uppercase" style={{
              fontSize: '10px', letterSpacing: '0.18em',
              color: 'var(--muted)', marginBottom: '24px',
              lineHeight: 1.8,
            }}>
              UI/UX Designer · Custom Software · AI Builder<br />
              Founder, Starting Core · Jaipur, India
            </p>

            {/* Description */}
            <p style={{
              fontSize: 'clamp(15px, 1.5vw, 18px)',
              lineHeight: 1.7, color: 'var(--muted)',
              maxWidth: '46ch', marginBottom: '36px',
            }}>
              I design and build custom software, AI systems, and digital products that solve{' '}
              <em style={{ color: 'var(--text)', fontStyle: 'normal', fontWeight: 500 }}>your specific problem</em>
              {' '}— not a generic template. 6 years of real results.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
              <Link to="/contact" className="bracket-link accent">
                [ Start a Project ]
              </Link>
              <Link to="/work" className="bracket-link">
                [ View Work ]
              </Link>
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px 28px', alignItems: 'center' }}>
              <span className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.16em', color: 'var(--subtle)' }}>
                Follow
              </span>
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="font-mono uppercase"
                  style={{ fontSize: '9px', letterSpacing: '0.14em', color: 'var(--muted)', transition: 'color 0.2s', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Right column — stats + photo */}
          <div ref={photoRef} style={{
            display: 'flex', flexDirection: 'column', gap: '16px',
            width: 'clamp(260px, 28vw, 400px)',
            flexShrink: 0,
          }}>

            {/* 2×2 Stats bento */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {STATS.map(s => (
                <div key={s.l} style={{
                  padding: '16px 18px',
                  background: 'var(--surface)',
                  borderRadius: '14px',
                  border: '1px solid var(--border)',
                }}>
                  <div className="font-syne" style={{
                    fontSize: 'clamp(22px, 2.5vw, 32px)',
                    fontWeight: 800, letterSpacing: '-0.03em',
                    color: 'var(--accent)', lineHeight: 1,
                  }}>
                    {s.v}
                  </div>
                  <div className="font-mono uppercase" style={{
                    fontSize: '8px', letterSpacing: '0.14em',
                    color: 'var(--muted)', marginTop: '5px',
                  }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            {/* Photo card */}
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              aspectRatio: '3/4',
              boxShadow: '0 0 80px rgba(196,30,58,0.18), 0 0 160px rgba(196,30,58,0.06)',
              border: '1px solid var(--border)',
            }}>
              <img
                src="/mohit-pareek.jpg"
                alt="Mohit Pareek — UI/UX Designer & Custom Software Developer"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center top',
                  display: 'block',
                }}
              />
              {/* Bottom gradient */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.2) 45%, transparent 75%)',
                pointerEvents: 'none',
              }} />
              {/* Caption overlay */}
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                <p style={{ fontSize: '13px', fontWeight: 500, color: '#F5F3EE', letterSpacing: '-0.01em' }}>
                  Founder, Starting Core
                </p>
                <p className="font-mono uppercase" style={{
                  fontSize: '8px', letterSpacing: '0.16em',
                  color: 'rgba(245,243,238,0.4)', marginTop: '4px',
                }}>
                  Jaipur · India · UTC +5:30
                </p>
              </div>
              {/* Top badge */}
              <div style={{
                position: 'absolute', top: '16px', left: '16px',
                display: 'flex', alignItems: 'center', gap: '6px',
                background: 'rgba(10,10,10,0.7)',
                backdropFilter: 'blur(12px)',
                borderRadius: '999px', padding: '6px 12px',
                border: '1px solid rgba(255,255,255,0.1)',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
                <span className="font-mono uppercase" style={{ fontSize: '8px', letterSpacing: '0.14em', color: '#F5F3EE' }}>
                  Open Q4 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div ref={statsBarRef} style={{
        borderTop: '1px solid var(--border)',
        padding: '16px 24px',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px',
        }}>
          <span className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.16em', color: 'var(--subtle)' }}>
            CREATEDBYMOHIT.COM
          </span>
          <span className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.16em', color: 'var(--subtle)' }}>
            CUSTOM SOFTWARE · AI SYSTEMS · UI/UX DESIGN · INDIA
          </span>
          <a href="mailto:hello@createdbymohit.com"
            className="font-mono uppercase"
            style={{ fontSize: '9px', letterSpacing: '0.14em', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
            hello@createdbymohit.com ↗
          </a>
        </div>
      </div>

      <style>{`
        @keyframes heroPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(196,30,58,0.5); }
          50%       { box-shadow: 0 0 0 8px rgba(196,30,58,0); }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo-col { display: none !important; }
        }
      `}</style>
    </section>
  )
}
