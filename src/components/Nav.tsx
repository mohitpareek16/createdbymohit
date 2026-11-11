import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Doodle from './sketch/Doodle'

const NAV_LINKS = [
  { label: 'About',    href: '/about' },
  { label: 'Work',     href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Blog',     href: '/blog' },
]

const MENU = [
  { label: 'Work',     href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About',    href: '/about' },
  { label: 'Blog',     href: '/blog' },
  { label: 'Courses',  href: '/courses' },
  { label: 'Contact',  href: '/contact' },
]

function Wordmark() {
  return (
    <Link to="/" aria-label="Created by Mohit — home" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--ink)' }}>
      <span className="font-hand" style={{ fontSize: 30, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.01em' }}>
        created by <span style={{ color: 'var(--red)' }}>mohit</span>
      </span>
      <Doodle name="spark" size={16} color="#C41E3A" strokeWidth={2} fill="#C41E3A" animate={false} style={{ marginTop: -14 }} />
    </Link>
  )
}

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
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'background 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease',
        background: scrolled ? 'rgba(244,239,230,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
        padding: scrolled ? '10px 0' : '18px 0',
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          paddingLeft: 'max(20px, env(safe-area-inset-left, 0px))',
          paddingRight: 'max(20px, env(safe-area-inset-right, 0px))',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Wordmark />

          <nav className="hidden md:flex items-center" style={{ gap: 32 }}>
            {NAV_LINKS.map(link => {
              const active = pathname.startsWith(link.href)
              return (
                <Link key={link.label} to={link.href} className="sketch-link"
                  style={{
                    fontSize: 15, fontWeight: 500, color: 'var(--ink)',
                    backgroundSize: active ? '100% 2px' : undefined,
                  }}>
                  {link.label}
                </Link>
              )
            })}
            <Link to="/contact" className="bracket-link accent" style={{ fontSize: 20, padding: '8px 18px 10px' }}>
              Start a project →
            </Link>
          </nav>

          <button onClick={() => setMenuOpen(true)} className="md:hidden sketch-border nav-burger"
            style={{ width: 46, height: 40, background: 'transparent', cursor: 'pointer', placeItems: 'center' }}
            aria-label="Open menu">
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" stroke="#1B1A17" strokeWidth="2" strokeLinecap="round">
              <path d="M2 3 C 8 2, 14 4, 20 2.5" /><path d="M2 8.5 C 9 7.5, 13 9, 20 8" /><path d="M2 14 C 7 13, 15 14.5, 20 13.5" />
            </svg>
          </button>
        </div>
        {scrolled && (
          <svg aria-hidden width="100%" height="6" preserveAspectRatio="none" viewBox="0 0 1000 6"
            style={{ position: 'absolute', left: 0, bottom: -3, display: 'block' }}>
            <path d="M0 3 C 150 1, 300 5, 500 3 C 700 1, 850 5, 1000 2.5" stroke="#1B1A17" strokeOpacity="0.35" strokeWidth="1.2" fill="none" vectorEffect="non-scaling-stroke" />
          </svg>
        )}
        <style>{`.nav-burger { display: grid; } @media (min-width: 768px) { .nav-burger { display: none; } }`}</style>
      </header>

      {menuOpen && (
        <div className="ruled" style={{
          position: 'fixed', inset: 0, zIndex: 60, background: 'var(--card)',
          display: 'flex', flexDirection: 'column',
          paddingLeft: 'max(20px, env(safe-area-inset-left, 0px))',
          paddingRight: 'max(20px, env(safe-area-inset-right, 0px))',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 0' }}>
            <Wordmark />
            <button onClick={() => setMenuOpen(false)} className="sketch-border"
              style={{ width: 46, height: 40, background: 'transparent', cursor: 'pointer', display: 'grid', placeItems: 'center' }}
              aria-label="Close menu">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#C41E3A" strokeWidth="2.2" strokeLinecap="round">
                <path d="M3 3 C 7 7, 11 11, 15 15" /><path d="M15 3 C 11 7, 7 11, 3 15" />
              </svg>
            </button>
          </div>

          <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 56 }}>
            {MENU.map((item, i) => (
              <Link key={item.label} to={item.href} onClick={() => setMenuOpen(false)}
                style={{ display: 'flex', alignItems: 'baseline', gap: 14, padding: '6px 0', color: 'var(--ink)' }}>
                <span className="font-hand" style={{ fontSize: 22, color: 'var(--red)', width: 28 }}>{String(i + 1).padStart(2, '0')}</span>
                <span className="font-display" style={{ fontSize: 'clamp(44px, 12vw, 64px)', lineHeight: 1.05 }}>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div style={{ padding: '20px 0 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
            <span className="eyebrow" style={{ textTransform: 'none', letterSpacing: '0.02em' }}>hello@createdbymohit.com</span>
            <span className="hand-label" style={{ fontSize: 20 }}>open for projects ✶</span>
          </div>
        </div>
      )}
    </>
  )
}
