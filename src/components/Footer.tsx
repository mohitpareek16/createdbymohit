import { Link } from 'react-router-dom'
import Doodle from './sketch/Doodle'
import { RED } from './sketch/RoughBox'

const PAPER = '#F4EFE6'
const FADED = 'rgba(244,239,230,0.55)'

const internalLinks = [
  { label: 'Work',     href: '/work' },
  { label: 'About',    href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Courses',  href: '/courses' },
  { label: 'Blog',     href: '/blog' },
]
const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/createdbymohit/' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/mohit-pareek-b8a676204' },
  { label: 'Dribbble',  href: 'https://dribbble.com/mohit_pareek16' },
  { label: 'YouTube',   href: 'https://www.youtube.com/@createdbymohit' },
]

export default function Footer() {
  return (
    <footer className="ink-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <svg aria-hidden width="100%" height="18" preserveAspectRatio="none" viewBox="0 0 1000 18" style={{ display: 'block', background: 'var(--paper)' }}>
        <path d="M0 18 L0 9 C 40 4, 70 14, 110 8 C 150 2, 190 13, 240 9 C 290 5, 330 15, 380 8 C 430 2, 470 12, 520 9 C 570 6, 610 15, 660 8 C 710 3, 750 12, 800 9 C 850 5, 900 14, 950 8 C 970 6, 985 9, 1000 8 L1000 18 Z" fill="#1B1A17" />
      </svg>

      <div aria-hidden className="font-hand" style={{
        position: 'absolute', right: '-2vw', bottom: '-6vw', fontSize: 'clamp(160px, 30vw, 440px)', lineHeight: 1,
        color: PAPER, opacity: 0.05, pointerEvents: 'none', transform: 'rotate(-6deg)', whiteSpace: 'nowrap',
      }}>
        Mohit
      </div>

      <div style={{
        position: 'relative', maxWidth: 1280, margin: '0 auto',
        padding: 'clamp(72px, 9vw, 130px) 0 32px',
        paddingLeft: 'max(20px, env(safe-area-inset-left, 0px))',
        paddingRight: 'max(20px, env(safe-area-inset-right, 0px))',
      }}>
        <p className="hand-label" style={{ color: '#F6D365', marginBottom: 14 }}>so, what's broken? —</p>
        <h2 className="font-display" style={{ fontSize: 'clamp(54px, 9vw, 140px)', lineHeight: 0.9, letterSpacing: '-0.035em', color: PAPER, maxWidth: '12ch' }}>
          Let's solve your specific{' '}
          <em style={{ color: RED, position: 'relative', display: 'inline-block' }}>
            problem.
            <Doodle name="circle" size="100%" color={PAPER} strokeWidth={2.4} stretch
              style={{ position: 'absolute', left: '-7%', top: '2%', width: '114%', height: '100%', opacity: 0.85 }} />
          </em>
        </h2>
        <p style={{ fontSize: 'clamp(16px, 1.5vw, 19px)', lineHeight: 1.65, color: FADED, maxWidth: '46ch', marginTop: 28 }}>
          Every company is different. So is the solution. Tell us what's broken and we'll figure out the right fix together.
        </p>
        <Link to="/contact" className="bracket-link" style={{ marginTop: 32, color: '#1B1A17', background: PAPER, boxShadow: `3px 4px 0 0 ${RED}` }}>
          Get in touch →
        </Link>

        <div className="foot-grid">
          <div>
            <p className="font-hand" style={{ fontSize: 24, color: '#F6D365', marginBottom: 14 }}>wander around</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {internalLinks.map(l => (
                <li key={l.label}><Link to={l.href} className="font-display sketch-link" style={{ fontSize: 26, color: PAPER }}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-hand" style={{ fontSize: 24, color: '#F6D365', marginBottom: 14 }}>say hi on</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {socialLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="font-display sketch-link" style={{ fontSize: 26, color: PAPER }}>{l.label} ↗</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-hand" style={{ fontSize: 24, color: '#F6D365', marginBottom: 14 }}>get in touch</p>
            <a href="mailto:hello@createdbymohit.com" className="font-display sketch-link" style={{ fontSize: 26, color: PAPER, wordBreak: 'break-word' }}>hello@createdbymohit.com</a>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 18 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: RED, animation: 'heroPulse 2.2s infinite' }} />
              <span className="eyebrow" style={{ color: FADED, fontSize: 11 }}>Open for new projects · 2026</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginTop: 56, paddingTop: 22, borderTop: '1px dashed rgba(244,239,230,0.25)' }}>
          <span className="eyebrow" style={{ fontSize: 10, color: FADED }}>© 2026 Mohit Pareek · createdbymohit.com</span>
          <span className="font-hand" style={{ fontSize: 22, color: FADED }}>designed &amp; built by hand, in India ✶</span>
        </div>
      </div>

      <style>{`
        .foot-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 40px; margin-top: clamp(64px, 8vw, 110px); }
        @media (max-width: 760px) { .foot-grid { grid-template-columns: 1fr 1fr; } .foot-grid > div:last-child { grid-column: 1 / -1; } }
      `}</style>
    </footer>
  )
}
