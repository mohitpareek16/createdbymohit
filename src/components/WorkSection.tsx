import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getAllWebsites, type WebsiteProject } from '../data/websites'
import SketchBrowser from './sketch/SketchBrowser'
import Doodle from './sketch/Doodle'
import Mark from './sketch/Mark'
import { RED } from './sketch/RoughBox'

const FEATURED_SLUGS = ['kiventures', 'kasbahagafay', 'cipherschools', 'yolotrips', 'infumarket', 'agrivia']
const ALL = getAllWebsites()
const FEATURED = FEATURED_SLUGS.map(s => ALL.find(p => p.slug === s)!).filter(Boolean)
const GRID = ALL.filter(p => !FEATURED_SLUGS.includes(p.slug)).slice(0, 15)
const TILTS = [-1.4, 0.9, -0.6, 1.2, -1, 0.7]

function FeaturedCard({ project, i }: { project: WebsiteProject; i: number }) {
  return (
    <motion.a
      href={project.url} target="_blank" rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: TILTS[i % TILTS.length] }}
      whileHover={{ rotate: 0, y: -8 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.08 }}
      className={`feat-card feat-${i}`}
      style={{ display: 'block', color: 'var(--ink)' }}>
      <SketchBrowser domain={project.domain} gradient={project.gradient} variant={i} aspect={i === 0 ? '16 / 11' : '16 / 10'} />
      <div style={{ padding: '18px 6px 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
          <h3 className="font-display" style={{ fontSize: i === 0 ? 'clamp(32px, 3.4vw, 46px)' : 'clamp(26px, 2.4vw, 34px)', lineHeight: 1 }}>
            {project.title} <span style={{ fontSize: '0.6em', color: RED }}>↗</span>
          </h3>
          <span className="font-hand" style={{ fontSize: 24, color: RED, flexShrink: 0 }}>'{project.year.slice(2)}</span>
        </div>
        <p className="eyebrow" style={{ fontSize: 11, marginTop: 8 }}>{project.category} · {project.industry}</p>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-soft)', marginTop: 10, maxWidth: '52ch' }}>{project.what}</p>
      </div>
    </motion.a>
  )
}

function IndexCard({ project, i }: { project: WebsiteProject; i: number }) {
  return (
    <motion.a
      href={project.url} target="_blank" rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: (i % 5) * 0.05 }}
      className="index-card paper-shadow"
      style={{ display: 'block', background: 'var(--card)', color: 'var(--ink)', transform: `rotate(${(i % 2 ? 1 : -1) * ((i % 3) * 0.5 + 0.3)}deg)` }}>
      <div style={{ height: 10, background: project.gradient }} />
      <div className="ruled" style={{ padding: '14px 14px 16px 56px', minHeight: 112, backgroundPositionY: 6 }}>
        <p className="font-display" style={{ fontSize: 22, lineHeight: 1.1 }}>{project.title}</p>
        <p className="font-hand" style={{ fontSize: 19, color: 'var(--ink-soft)', marginTop: 6, lineHeight: 1.1 }}>{project.industry}</p>
        <p className="eyebrow" style={{ fontSize: 10, marginTop: 8 }}>{project.year} ↗</p>
      </div>
    </motion.a>
  )
}

export default function WorkSection() {
  return (
    <section id="work" style={{ padding: 'clamp(80px, 9vw, 140px) 0' }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        paddingLeft: 'max(20px, env(safe-area-inset-left, 0px))',
        paddingRight: 'max(20px, env(safe-area-inset-right, 0px))',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 'clamp(48px, 6vw, 88px)' }}>
          <div>
            <p className="hand-label" style={{ marginBottom: 10 }}>selected work —</p>
            <h2 className="font-display" style={{ fontSize: 'clamp(54px, 8vw, 120px)', lineHeight: 0.9, letterSpacing: '-0.03em' }}>
              80+ problems<br />
              <em><Mark type="circle" padding={[6, 14]} strokeWidth={2.4} delay={300} iterations={1}>solved.</Mark></em>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 14 }}>
            <p className="eyebrow">India &amp; Global · 2019 — 2026</p>
            <Link to="/work" className="bracket-link">View all projects</Link>
          </div>
        </div>

        <div className="feat-grid">
          {FEATURED.map((p, i) => <FeaturedCard key={p.slug} project={p} i={i} />)}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: 'clamp(64px, 8vw, 110px) 0 36px' }}>
          <Doodle name="squiggle" size={120} color="rgba(27,26,23,0.4)" strokeWidth={1.8} className="hidden sm:block" />
          <p className="font-hand" style={{ fontSize: 28, color: 'var(--ink)', lineHeight: 1.1 }}>
            + {GRID.length} more from the notebook
          </p>
          <Doodle name="arrowDown" size={22} color={RED} strokeWidth={2} />
        </div>

        <div className="index-grid">
          {GRID.map((p, i) => <IndexCard key={p.slug} project={p} i={i} />)}
        </div>

        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <Link to="/work" className="bracket-link accent">See all 31 projects →</Link>
        </div>
      </div>

      <style>{`
        .feat-grid {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: clamp(40px, 5vw, 72px) clamp(24px, 3vw, 48px);
        }
        .feat-0 { grid-column: span 7; }
        .feat-1 { grid-column: span 5; margin-top: clamp(40px, 8vw, 120px); }
        .feat-2 { grid-column: span 4; }
        .feat-3 { grid-column: span 4; margin-top: 48px; }
        .feat-4 { grid-column: span 4; }
        .feat-5 { grid-column: 3 / span 8; }
        .feat-card:hover .sketch-thumb { filter: saturate(1.15); }
        .index-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
          gap: 22px;
        }
        .index-card { transition: transform .25s ease, box-shadow .25s ease; }
        .index-card:hover { transform: rotate(0deg) translateY(-6px) !important; box-shadow: 0 18px 30px -12px rgba(27,26,23,.3); }
        @media (max-width: 900px) {
          .feat-grid { grid-template-columns: 1fr; }
          .feat-grid > * { grid-column: auto !important; margin-top: 0 !important; }
        }
      `}</style>
    </section>
  )
}
