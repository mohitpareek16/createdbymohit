import { Link } from 'react-router-dom'
import { getAllWebsites, type WebsiteProject } from '../../data/websites'
import { FEATURED_SLUGS, SUPPORTING_SLUGS } from '../../data/studio'
import { Reveal, SectionHead } from './shared'
import ProjectVisual from './ProjectVisual'

const ALL = getAllWebsites()
const pick = (slugs: string[]) => slugs.map(s => ALL.find(p => p.slug === s)).filter((p): p is WebsiteProject => !!p)
const FEATURED = pick(FEATURED_SLUGS)
const SUPPORTING = pick(SUPPORTING_SLUGS)
const GALLERY = ALL.filter(p => !FEATURED_SLUGS.includes(p.slug) && !SUPPORTING_SLUGS.includes(p.slug))

function Featured({ p, i }: { p: WebsiteProject; i: number }) {
  return (
    <Reveal className={`feat ${i % 2 ? 'feat-rev' : ''}`}>
      <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${p.title}`} style={{ display: 'block', minWidth: 0 }}>
        <ProjectVisual p={p} />
      </a>
      <div style={{ minWidth: 0 }}>
        <p className="label"><span className="label-num">{String(i + 1).padStart(2, '0')}</span>{p.category} · {p.year}</p>
        <h3 className="font-display" style={{ fontSize: 'clamp(36px, 3.8vw, 54px)', lineHeight: 1, letterSpacing: '-0.025em', marginTop: 16 }}>{p.title}</h3>
        <dl style={{ display: 'grid', gap: 18, marginTop: 24 }}>
          <div>
            <dt className="label" style={{ fontSize: 10.5 }}>The business</dt>
            <dd style={{ fontSize: 15.5, lineHeight: 1.65, color: 'var(--ink-soft)', marginTop: 6 }}>{p.description}</dd>
          </div>
          <div>
            <dt className="label" style={{ fontSize: 10.5 }}>What we did</dt>
            <dd style={{ fontSize: 15.5, lineHeight: 1.65, color: 'var(--ink)', marginTop: 6 }}>{p.what}</dd>
          </div>
        </dl>
        <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 22 }}>
          {p.tags.map(t => <li key={t} className="chip">{t}</li>)}
        </ul>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 22, marginTop: 26 }}>
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="link-u" style={{ fontSize: 15, fontWeight: 500 }}>Visit {p.domain} ↗</a>
          <Link to={`/work/site/${p.slug}`} className="link-u" style={{ fontSize: 15, color: 'var(--ink-soft)' }}>Project details →</Link>
        </div>
      </div>
    </Reveal>
  )
}

export default function Work() {
  return (
    <section className="section rule-top" id="work">
      <div className="wrap">
        <SectionHead num="03" label="Selected work"
          title={<>Real problems. <em>Thoughtful solutions.</em></>}
          intro={`${ALL.length} websites and digital products for founders, brands and organisations in India and abroad. A few of them, in their own words and ours.`} />

        <div style={{ display: 'grid', gap: 'clamp(64px, 9vw, 128px)' }}>
          {FEATURED.map((p, i) => <Featured key={p.slug} p={p} i={i} />)}
        </div>

        <div style={{ marginTop: 'clamp(80px, 10vw, 140px)' }}>
          <p className="label" style={{ marginBottom: 28 }}>More projects</p>
          <div className="support-grid">
            {SUPPORTING.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 4) * 0.06}>
                <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                  <ProjectVisual p={p} size="sm" />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 10, marginTop: 14 }}>
                    <h3 className="font-display" style={{ fontSize: 24, lineHeight: 1.1 }}>{p.title}</h3>
                    <span className="label" style={{ fontSize: 10.5 }}>{p.year}</span>
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ink-soft)', marginTop: 6 }}>{p.what}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 'clamp(64px, 8vw, 110px)' }}>
          <p className="label" style={{ marginBottom: 14 }}>And {GALLERY.length} more</p>
          <ul className="gallery">
            {GALLERY.map(p => (
              <li key={p.slug}>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="gal-row">
                  <span aria-hidden style={{ width: 12, height: 12, borderRadius: 99, background: p.gradient, flexShrink: 0 }} />
                  <span className="font-display" style={{ fontSize: 22, lineHeight: 1.1, flex: 1, minWidth: 0 }}>{p.title}</span>
                  <span className="gal-meta" style={{ fontSize: 13.5, color: 'var(--ink-soft)' }}>{p.industry}</span>
                  <span className="label" style={{ fontSize: 10.5, width: 40, textAlign: 'right' }}>{p.year}</span>
                  <span aria-hidden className="gal-arrow">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style>{`
        .feat { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr); gap: clamp(32px, 5vw, 80px); align-items: center; }
        .feat-rev > a { order: 2; }
        .support-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: clamp(28px, 3vw, 40px) clamp(18px, 2vw, 28px); }
        .gallery { list-style: none; display: grid; grid-template-columns: 1fr 1fr; column-gap: clamp(24px, 4vw, 64px); border-top: 1px solid var(--rule); }
        .gal-row { display: flex; align-items: center; gap: 16px; padding: 16px 0; border-bottom: 1px solid var(--rule); transition: padding .3s ease; }
        .gal-row:hover { padding-left: 8px; }
        .gal-arrow { color: var(--red); opacity: 0; transition: opacity .25s ease; }
        .gal-row:hover .gal-arrow { opacity: 1; }
        @media (max-width: 1000px) { .support-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 860px) {
          .feat { grid-template-columns: 1fr; }
          .feat-rev > a { order: 0; }
          .gallery { grid-template-columns: 1fr; }
        }
        @media (max-width: 520px) { .support-grid { grid-template-columns: 1fr; } .gal-meta { display: none; } }
      `}</style>
    </section>
  )
}
