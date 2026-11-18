import { Link } from 'react-router-dom'
import { Wordmark } from './Nav'
import { SOCIALS, EMAIL, whatsappLink } from '../data/studio'

const PAGES = [
  { label: 'Work',     to: '/#work' },
  { label: 'Approach', to: '/#approach' },
  { label: 'About',    to: '/#about' },
  { label: 'Insights', to: '/blog' },
  { label: 'Courses',  to: '/courses' },
]

const FADE = 'rgba(246,245,241,0.55)'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
      <div className="wrap" style={{ paddingBlock: 'clamp(56px, 7vw, 96px) 32px' }}>
        <div className="foot-grid">
          <div style={{ maxWidth: 360 }}>
            <Wordmark light />
            <p style={{ fontSize: 15, lineHeight: 1.65, color: FADE, marginTop: 16 }}>
              An independent problem-solving studio. We figure out what isn't working and build a better way.
            </p>
          </div>
          <div>
            <p className="label" style={{ color: FADE, marginBottom: 16 }}>Studio</p>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 10 }}>
              {PAGES.map(p => <li key={p.label}><Link to={p.to} className="link-u" style={{ fontSize: 15 }}>{p.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="label" style={{ color: FADE, marginBottom: 16 }}>Follow</p>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 10 }}>
              {SOCIALS.map(s => <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="link-u" style={{ fontSize: 15 }}>{s.label} ↗</a></li>)}
            </ul>
          </div>
          <div>
            <p className="label" style={{ color: FADE, marginBottom: 16 }}>Contact</p>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 10 }}>
              <li><a href={`mailto:${EMAIL}`} className="link-u" style={{ fontSize: 15 }}>{EMAIL}</a></li>
              <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="link-u" style={{ fontSize: 15 }}>WhatsApp ↗</a></li>
              <li style={{ fontSize: 15, color: FADE }}>Jaipur, India · UTC +5:30</li>
            </ul>
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, marginTop: 'clamp(48px, 6vw, 80px)', paddingTop: 22, borderTop: '1px solid rgba(246,245,241,0.14)' }}>
          <span className="label" style={{ color: FADE, fontSize: 10.5 }}>© 2026 CreatedByMohit · Mohit Pareek</span>
          <span className="label" style={{ color: FADE, fontSize: 10.5 }}>Designed &amp; built in Jaipur</span>
        </div>
      </div>
      <style>{`
        .foot-grid { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1.3fr; gap: 40px; }
        @media (max-width: 860px) { .foot-grid { grid-template-columns: 1fr 1fr; } .foot-grid > div:first-child { grid-column: 1 / -1; } }
      `}</style>
    </footer>
  )
}
