import { Reveal, SectionHead } from './shared'
import { COMMUNITY, SOCIALS } from '../../data/studio'
import { LINKEDIN_ARTICLES } from '../../data/linkedin-articles'

const FADE = 'rgba(246,245,241,0.62)'
const LINE = '1px solid rgba(246,245,241,0.16)'

export default function Community() {
  const blocks: { title: string; body: string; href?: string; cta?: string }[] = [COMMUNITY.hosted, COMMUNITY.guest, COMMUNITY.teaching]
  return (
    <section className="section" id="community" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
      <div className="wrap">
        <SectionHead light num="06" label="Beyond client work"
          title={<>Building, learning and <em>sharing along the way.</em></>}
          intro="I share what I learn while building: design, product thinking and practical AI, for a community of designers, creators and founders." />

        <div className="soc-grid">
          {SOCIALS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="soc">
                <span className="label" style={{ color: FADE }}>{s.label}</span>
                <span className="font-display" style={{ fontSize: 'clamp(21px, 2.2vw, 26px)', lineHeight: 1.1 }}>{s.handle}</span>
                <span style={{ fontSize: 13.5, color: FADE }}>Follow ↗</span>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="talk-grid">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.06} style={{ borderTop: LINE, paddingTop: 22 }}>
              <h3 className="font-display" style={{ fontSize: 30, lineHeight: 1.1 }}>{b.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: FADE, marginTop: 12 }}>{b.body}</p>
              {b.href && <a href={b.href} target="_blank" rel="noopener noreferrer" className="link-u" style={{ display: 'inline-block', fontSize: 14.5, marginTop: 16 }}>{b.cta} ↗</a>}
            </Reveal>
          ))}
        </div>

        <div style={{ marginTop: 'clamp(56px, 7vw, 96px)' }}>
          <p className="label" style={{ color: FADE, marginBottom: 8 }}>Recent writing on LinkedIn</p>
          <ul style={{ listStyle: 'none' }}>
            {LINKEDIN_ARTICLES.slice(0, 4).map(a => (
              <li key={a.id}>
                <a href={a.linkedinUrl} target="_blank" rel="noopener noreferrer" className="li-row">
                  <span className="label" style={{ color: FADE, width: 120, flexShrink: 0 }}>{a.category}</span>
                  <span className="font-display" style={{ flex: 1, minWidth: 0, fontSize: 'clamp(20px, 2vw, 26px)', lineHeight: 1.2 }}>{a.title}</span>
                  <span aria-hidden style={{ color: 'var(--red)' }}>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style>{`
        .soc-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 14px; }
        .soc-grid > * { min-width: 0; }
        .soc span { overflow-wrap: anywhere; }
        .soc { display: flex; flex-direction: column; gap: 12px; padding: 22px; border: ${LINE}; border-radius: 12px; transition: background .25s ease, border-color .25s ease; }
        .soc:hover { background: rgba(246,245,241,0.06); border-color: rgba(246,245,241,0.4); }
        .talk-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(24px, 3vw, 44px); margin-top: clamp(48px, 6vw, 80px); }
        .li-row { display: flex; align-items: baseline; gap: 20px; padding: 18px 0; border-bottom: ${LINE}; }
        .li-row:hover span:nth-child(2) { font-style: italic; }
        @media (max-width: 860px) { .soc-grid { grid-template-columns: 1fr 1fr; } .talk-grid { grid-template-columns: 1fr; } }
        @media (max-width: 560px) { .li-row .label { display: none; } }
      `}</style>
    </section>
  )
}
