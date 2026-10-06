import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'ABOUT',    href: '/about' },
  { label: 'WORK',     href: '/work' },
  { label: 'SERVICES', href: '/services' },
  { label: 'BLOG',     href: '/blog' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setMenuOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '18px 24px',
        transition: 'background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        background: scrolled ? 'rgba(247,245,240,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.04)' : 'none',
      }}>
        <Link to="/" className="font-mondwest" style={{
          fontSize: '15px', letterSpacing: '-0.01em', lineHeight: 1,
          textDecoration: 'none', color: 'var(--text)',
        }}>
          CREATED BY MOHIT
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link, i) => (
            <span key={link.label} className="flex items-center">
              {i > 0 && (
                <span className="mx-3 select-none" style={{ fontSize: '10px', color: 'var(--subtle)' }}>·</span>
              )}
              <Link to={link.href} className="font-mono uppercase transition-colors"
                style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
                {link.label}
              </Link>
            </span>
          ))}
          <a href="mailto:hello@createdbymohit.com" className="bracket-link ml-6"
            style={{ fontSize: '9px', padding: '8px 16px' }}>
            [ START A PROJECT ]
          </a>
        </nav>

        <button onClick={() => setMenuOpen(true)} className="md:hidden flex items-center justify-center"
          style={{
            width: '40px', height: '40px', borderRadius: '50%',
            border: '1px solid var(--border-strong)', color: 'var(--muted)',
            background: 'transparent', cursor: 'pointer',
            transition: 'border-color 0.2s ease, color 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text)'; e.currentTarget.style.color = 'var(--text)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.color = 'var(--muted)' }}
          aria-label="Open menu">
          <Menu size={16} strokeWidth={1.5} />
        </button>
      </header>

      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 60,
          background: '#0C0C0A', display: 'flex', flexDirection: 'column',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '18px 24px', flexShrink: 0,
          }}>
            <Link to="/" onClick={() => setMenuOpen(false)} className="font-mondwest text-white"
              style={{ fontSize: '15px', letterSpacing: '-0.01em' }}>
              CREATED BY MOHIT
            </Link>
            <button onClick={() => setMenuOpen(false)} style={{
              width: '40px', height: '40px', borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)',
              background: 'transparent', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }} aria-label="Close menu">
              <X size={16} strokeWidth={1.5} />
            </button>
          </div>

          <nav style={{
            flex: 1, display: 'flex', flexDirection: 'column',
            justifyContent: 'center', padding: '0 24px', overflow: 'hidden',
          }}>
            {[
              { label: 'Work',     href: '/work' },
              { label: 'Services', href: '/services' },
              { label: 'About',    href: '/about' },
              { label: 'Blog',     href: '/blog' },
              { label: 'Courses',  href: '/courses' },
              { label: 'Contact',  href: '/contact' },
            ].map(item => (
              <Link key={item.label} to={item.href} onClick={() => setMenuOpen(false)}
                className="font-mondwest text-white/60 hover:text-white transition-colors block leading-none py-3"
                style={{ fontSize: 'clamp(48px, 12vw, 72px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div style={{
            padding: '20px 24px', borderTop: '1px solid rgba(255,255,255,0.07)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <a href="mailto:hello@createdbymohit.com"
              className="font-mono text-white/35 hover:text-white/60 transition-colors"
              style={{ fontSize: '10px', letterSpacing: '0.1em' }}>
              hello@createdbymohit.com
            </a>
            <span className="flex items-center gap-2 font-mono text-white/25" style={{ fontSize: '9px', letterSpacing: '0.12em' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3A]" style={{ animation: 'heroPulse 2.2s infinite' }} />
              OPEN FOR PROJECTS
            </span>
          </div>
        </div>
      )}
    </>
  )
}
