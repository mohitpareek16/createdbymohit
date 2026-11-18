import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { label: 'Work',     to: '/#work' },
  { label: 'Approach', to: '/#approach' },
  { label: 'About',    to: '/#about' },
  { label: 'Insights', to: '/blog' },
]

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="font-display" style={{ fontSize: 25, lineHeight: 1, letterSpacing: '-0.02em', color: light ? 'var(--paper)' : 'var(--ink)' }}>
      CreatedBy<em>Mohit</em><span style={{ color: 'var(--red)' }}>.</span>
    </span>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()

  useEffect(() => { setOpen(false) }, [pathname, hash])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled || open ? 'rgba(246,245,241,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'saturate(1.4) blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'saturate(1.4) blur(14px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--rule)' : 'transparent'}`,
        transition: 'background .3s ease, border-color .3s ease',
        paddingTop: 'env(safe-area-inset-top, 0px)',
      }}>
        <div className="wrap" style={{ height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" aria-label="CreatedByMohit home"><Wordmark /></Link>

          <nav className="nav-desk" aria-label="Main">
            {LINKS.map(l => (
              <Link key={l.label} to={l.to} className="link-u" style={{ fontSize: 14.5, color: 'var(--ink)' }}>{l.label}</Link>
            ))}
            <Link to="/#contact" className="btn btn-solid">
              Let's talk <span className="arrow">↗</span>
            </Link>
          </nav>

          <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}
            style={{ width: 44, height: 44, display: 'grid', placeItems: 'center', background: 'none', border: '1px solid var(--rule)', borderRadius: 999, cursor: 'pointer' }}>
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="#121212" strokeWidth="1.6" strokeLinecap="round">
              {open ? <><path d="M3 1 L15 11" /><path d="M15 1 L3 11" /></> : <><path d="M1 2h16" /><path d="M1 10h16" /></>}
            </svg>
          </button>
        </div>
      </header>

      {open && (
        <div style={{ position: 'fixed', inset: '68px 0 0', zIndex: 49, background: 'var(--paper)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <nav className="wrap" style={{ paddingTop: 32, display: 'flex', flexDirection: 'column' }} aria-label="Mobile">
            {[...LINKS, { label: "Let's talk", to: '/#contact' }].map((l, i) => (
              <Link key={l.label} to={l.to} style={{ display: 'flex', alignItems: 'baseline', gap: 16, padding: '14px 0', borderBottom: '1px solid var(--rule)' }}>
                <span className="label" style={{ color: 'var(--red)' }}>0{i + 1}</span>
                <span className="font-display" style={{ fontSize: 42, lineHeight: 1 }}>{l.label}</span>
              </Link>
            ))}
          </nav>
          <div className="wrap" style={{ paddingBottom: 'calc(28px + env(safe-area-inset-bottom, 0px))' }}>
            <a href="mailto:hello@createdbymohit.com" className="label" style={{ textTransform: 'none', letterSpacing: 0, fontSize: 14 }}>hello@createdbymohit.com</a>
          </div>
        </div>
      )}

      <style>{`
        .nav-desk { display: none; align-items: center; gap: 30px; }
        .nav-desk .btn { padding: 11px 18px !important; font-size: 14px !important; }
        @media (min-width: 860px) { .nav-desk { display: flex; } .nav-burger { display: none !important; } }
      `}</style>
    </>
  )
}
