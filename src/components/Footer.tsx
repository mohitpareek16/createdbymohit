import { Link } from 'react-router-dom'

export default function Footer() {
  const internalLinks = [
    { label: 'WORK',     href: '/work' },
    { label: 'ABOUT',    href: '/about' },
    { label: 'SERVICES', href: '/services' },
    { label: 'COURSES',  href: '/courses' },
    { label: 'BLOG',     href: '/blog' },
  ]
  const socialLinks = [
    { label: 'INSTAGRAM', href: 'https://www.instagram.com/createdbymohit/' },
    { label: 'LINKEDIN',  href: 'https://www.linkedin.com/in/mohit-pareek-b8a676204' },
    { label: 'DRIBBBLE',  href: 'https://dribbble.com/mohit_pareek16' },
    { label: 'YOUTUBE',   href: 'https://www.youtube.com/@createdbymohit' },
  ]

  return (
    <footer style={{ background: '#0C0C0A', position: 'relative', overflow: 'hidden' }}>

      {/* Giant watermark */}
      <div aria-hidden style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        pointerEvents: 'none', overflow: 'hidden',
      }}>
        <p className="font-syne uppercase whitespace-nowrap leading-none text-white"
          style={{
            fontSize: 'clamp(100px, 20vw, 300px)',
            fontWeight: 800, opacity: 0.035,
            transform: 'translateY(30%)', letterSpacing: '-0.03em',
          }}>
          MOHIT
        </p>
      </div>

      <div style={{ position: 'relative', zIndex: 1, padding: 'clamp(64px,8vw,112px) 24px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* CTA */}
          <h2 className="font-syne uppercase text-white mb-4"
            style={{
              fontSize: 'clamp(36px, 7.5vw, 96px)',
              lineHeight: 0.9, letterSpacing: '-0.035em',
              fontWeight: 800, maxWidth: '16ch',
            }}>
            LET'S SOLVE<br />YOUR SPECIFIC<br />
            <span style={{ color: '#C41E3A' }}>PROBLEM.</span>
          </h2>

          <p style={{
            fontSize: 'clamp(14px, 1.4vw, 17px)', lineHeight: 1.65,
            color: 'rgba(255,255,255,0.4)', maxWidth: '44ch', marginBottom: '32px',
          }}>
            Every company is different. So is the solution. Tell us what's broken and we'll figure out the right fix together.
          </p>

          <Link to="/contact" className="inline-flex mb-16 md:mb-20 font-mono uppercase transition-all"
            style={{
              fontSize: '10px', letterSpacing: '0.15em',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '9999px', padding: '12px 24px',
              color: '#fff',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0C0C0A' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff' }}>
            [ GET IN TOUCH ]
          </Link>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', marginBottom: '48px' }} />

          {/* 3 columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 mb-14">
            <div>
              <p className="font-mono uppercase mb-5 text-white/30" style={{ fontSize: '9px', letterSpacing: '0.2em' }}>
                Navigation
              </p>
              <ul className="flex flex-col gap-3">
                {internalLinks.map(item => (
                  <li key={item.label}>
                    <Link to={item.href}
                      className="font-mono text-white/45 transition-colors uppercase"
                      style={{ fontSize: '11px', letterSpacing: '0.12em' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
                      [{item.label}]
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono uppercase mb-5 text-white/30" style={{ fontSize: '9px', letterSpacing: '0.2em' }}>
                Social
              </p>
              <ul className="flex flex-col gap-3">
                {socialLinks.map(item => (
                  <li key={item.label}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer"
                      className="font-mono text-white/45 transition-colors uppercase"
                      style={{ fontSize: '11px', letterSpacing: '0.12em' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
                      [{item.label}]
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="font-mono uppercase mb-5 text-white/30" style={{ fontSize: '9px', letterSpacing: '0.2em' }}>
                Get in Touch
              </p>
              <a href="mailto:hello@createdbymohit.com"
                className="font-mono text-white/45 transition-colors block mb-2 uppercase"
                style={{ fontSize: '11px', letterSpacing: '0.1em' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
                hello@createdbymohit.com
              </a>
              <div className="flex items-center gap-2 mt-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3A]"
                  style={{ animation: 'heroPulse 2.2s infinite' }} />
                <span className="font-mono uppercase text-white/30" style={{ fontSize: '9px', letterSpacing: '0.14em' }}>
                  Open for New Projects · 2026
                </span>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <span className="font-mono text-white/20" style={{ fontSize: '9px', letterSpacing: '0.12em' }}>
              © 2026 Mohit Pareek · createdbymohit.com
            </span>
            <span className="font-mono uppercase text-white/20" style={{ fontSize: '9px', letterSpacing: '0.12em' }}>
              DESIGNED &amp; BUILT IN INDIA
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(196,30,58,0.5); }
          50%       { box-shadow: 0 0 0 8px rgba(196,30,58,0); }
        }
      `}</style>
    </footer>
  )
}
