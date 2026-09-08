import { Link } from 'react-router-dom'

export default function Footer() {
  const internalLinks = [
    { label: 'WORK', href: '/work' },
    { label: 'ABOUT', href: '/about' },
    { label: 'SERVICES', href: '/services' },
    { label: 'COURSES', href: '/courses' },
    { label: 'BLOG', href: '/blog' },
  ]

  const socialLinks = [
    { label: 'INSTAGRAM', href: 'https://www.instagram.com/createdbymohit/' },
    { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/mohit-pareek-b8a676204' },
    { label: 'DRIBBBLE', href: 'https://dribbble.com/mohit_pareek16' },
    { label: 'YOUTUBE', href: 'https://www.youtube.com/@createdbymohit' },
  ]

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#0A0A0A', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Decorative large background text */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <p
          className="font-mondwest text-white uppercase whitespace-nowrap leading-none"
          style={{
            fontSize: 'clamp(120px, 22vw, 320px)',
            opacity: 0.04,
            transform: 'translateY(30%)',
            lineHeight: 0.85,
            letterSpacing: '-0.03em',
          }}
        >
          MOHIT
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-10 pt-20 md:pt-28 pb-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Big CTA heading */}
          <h2
            className="uppercase font-bold text-white tracking-tight mb-8"
            style={{
              fontSize: 'clamp(40px, 8vw, 100px)',
              lineHeight: 0.88,
              letterSpacing: '-0.03em',
              maxWidth: '18ch',
            }}
          >
            LET'S CREATE<br />SOMETHING<br />
            <span style={{ color: '#C41E3A' }}>MEANINGFUL.</span>
          </h2>

          <Link to="/contact" className="bracket-link inline-flex mb-16 md:mb-20">
            [ CONTACT ME ]
          </Link>

          {/* Divider */}
          <div
            className="mb-12"
            style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.08)' }}
          />

          {/* Three columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 mb-14">
            {/* Column 1: Links */}
            <div>
              <p
                className="font-mono text-white/30 uppercase mb-5"
                style={{ fontSize: '9px', letterSpacing: '0.2em' }}
              >
                Navigation
              </p>
              <ul className="flex flex-col gap-3">
                {internalLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="font-mono text-white/50 hover:text-white transition-colors"
                      style={{ fontSize: '11px', letterSpacing: '0.12em' }}
                    >
                      [{item.label}]
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Social */}
            <div>
              <p
                className="font-mono text-white/30 uppercase mb-5"
                style={{ fontSize: '9px', letterSpacing: '0.2em' }}
              >
                Social
              </p>
              <ul className="flex flex-col gap-3">
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-white/50 hover:text-white transition-colors"
                      style={{ fontSize: '11px', letterSpacing: '0.12em' }}
                    >
                      [{item.label}]
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="col-span-2 md:col-span-1">
              <p
                className="font-mono text-white/30 uppercase mb-5"
                style={{ fontSize: '9px', letterSpacing: '0.2em' }}
              >
                Get in Touch
              </p>
              <a
                href="mailto:hello@createdbymohit.com"
                className="font-mono text-white/50 hover:text-white transition-colors block mb-2"
                style={{ fontSize: '11px', letterSpacing: '0.1em' }}
              >
                hello@createdbymohit.com
              </a>
              <div className="flex items-center gap-2 mt-4">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#C41E3A] flex-shrink-0"
                  style={{ animation: 'heroPulse 2.2s infinite' }}
                />
                <span
                  className="font-mono text-white/30 uppercase"
                  style={{ fontSize: '9px', letterSpacing: '0.14em' }}
                >
                  Available for projects · Q3 2026
                </span>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <span
              className="font-mono text-white/25"
              style={{ fontSize: '9px', letterSpacing: '0.12em' }}
            >
              © 2026 Mohit Pareek · createdbymohit.com
            </span>
            <span
              className="font-mono text-white/25 uppercase"
              style={{ fontSize: '9px', letterSpacing: '0.12em' }}
            >
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
