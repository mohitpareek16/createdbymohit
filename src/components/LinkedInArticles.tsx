import { motion } from 'framer-motion'
import { LINKEDIN_ARTICLES } from '../data/linkedin-articles'
import { RED } from './sketch/RoughBox'
import Doodle from './sketch/Doodle'

export default function LinkedInArticles() {
  return (
    <section id="linkedin" style={{ padding: 'clamp(80px, 9vw, 140px) 0', background: 'var(--paper-2)' }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        paddingLeft: 'max(20px, env(safe-area-inset-left, 0px))',
        paddingRight: 'max(20px, env(safe-area-inset-right, 0px))',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 'clamp(44px, 5vw, 72px)' }}>
          <div>
            <p className="hand-label" style={{ marginBottom: 10 }}>linkedin articles —</p>
            <h2 className="font-display" style={{ fontSize: 'clamp(50px, 7vw, 108px)', lineHeight: 0.9, letterSpacing: '-0.03em', position: 'relative' }}>
              Latest <em>thinking.</em>
              <Doodle name="bulb" size={44} color={RED} strokeWidth={2.2} style={{ position: 'absolute', top: -34, right: -50 }} />
            </h2>
          </div>
          <a href="https://www.linkedin.com/in/mohit-pareek-b8a676204" target="_blank" rel="noopener noreferrer" className="bracket-link">
            View all articles ↗
          </a>
        </div>

        <div className="li-grid">
          {LINKEDIN_ARTICLES.map((a, i) => (
            <motion.a key={a.id} href={a.linkedinUrl} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.08 }}
              className="li-card paper-shadow"
              style={{ transform: `rotate(${[-0.8, 0.6, -0.3, 0.9, -0.6, 0.4][i % 6]}deg)` }}>
              <span className="tape" style={{ top: -11, right: 24, width: 70, transform: 'rotate(8deg)' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 10, paddingBottom: 12, borderBottom: '1.4px solid var(--ink)' }}>
                <span className="font-hand" style={{ fontSize: 22, color: RED, lineHeight: 1 }}>{a.category}</span>
                <span className="eyebrow" style={{ fontSize: 10 }}>{a.date}</span>
              </div>
              <h3 className="font-display" style={{ fontSize: 'clamp(24px, 2.2vw, 30px)', lineHeight: 1.08, marginTop: 16, letterSpacing: '-0.01em' }}>{a.title}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.65, color: 'var(--ink-soft)', marginTop: 12, flex: 1 }}>{a.excerpt}</p>
              <span className="eyebrow sketch-link" style={{ fontSize: 11, marginTop: 20, alignSelf: 'flex-start', color: 'var(--ink)' }}>Read on LinkedIn →</span>
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        .li-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(24px, 3vw, 36px); }
        .li-card {
          position: relative; display: flex; flex-direction: column;
          background: var(--card); color: var(--ink);
          padding: 24px 24px 22px;
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .li-card:hover { transform: rotate(0deg) translateY(-6px) !important; }
        @media (max-width: 900px) { .li-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
