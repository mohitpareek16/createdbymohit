import { motion } from 'framer-motion'
import SystemDiagram from './SystemDiagram'
import { CAPABILITIES, PROBLEMS } from '../../data/studio'

const ease = [0.16, 1, 0.3, 1] as const
const up = (d: number) => ({ initial: { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, ease, delay: d } })

export default function Hero() {
  return (
    <section style={{ paddingTop: 'clamp(120px, 14vw, 168px)', paddingBottom: 'clamp(64px, 8vw, 110px)' }}>
      <div className="wrap">
        <motion.p {...up(0.05)} className="label" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 7, height: 7, borderRadius: 99, background: 'var(--red)' }} />
          Independent problem-solving studio · Jaipur, India
        </motion.p>

        <motion.h1 {...up(0.15)} className="font-display"
          style={{ fontSize: 'clamp(52px, 8.4vw, 132px)', lineHeight: 0.94, letterSpacing: '-0.038em', marginTop: 26, maxWidth: '13ch' }}>
          Your business has problems. <em>We build the solutions.</em>
        </motion.h1>

        <div className="hero-row">
          <motion.p {...up(0.3)} style={{ fontSize: 'clamp(17px, 1.6vw, 21px)', lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: '44ch' }}>
            From simplifying everyday operations to building intelligent digital products, we turn complex business challenges into practical solutions using design, technology and AI.
          </motion.p>
          <motion.div {...up(0.4)} style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href="#contact" className="btn btn-solid">Let's solve your problem <span className="arrow">↗</span></a>
            <a href="#work" className="btn">Explore our work</a>
          </motion.div>
        </div>

        <motion.ul {...up(0.5)} aria-label="What we do" style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 30 }}>
          {CAPABILITIES.map(c => <li key={c} className="chip">{c}</li>)}
        </motion.ul>

        <div className="hero-visual">
          <div style={{ minWidth: 0 }}><SystemDiagram /></div>
          <motion.div {...up(0.9)} style={{ borderLeft: '1px solid var(--rule)', paddingLeft: 'clamp(20px, 3vw, 36px)' }}>
            <p className="label" style={{ marginBottom: 16 }}>Sound familiar?</p>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 12 }}>
              {PROBLEMS.map(p => (
                <li key={p} style={{ display: 'flex', gap: 12, fontSize: 15, lineHeight: 1.45, color: 'var(--ink)' }}>
                  <span aria-hidden style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }}>→</span>{p}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      <style>{`
        .hero-row { display: flex; justify-content: space-between; align-items: flex-end; gap: 28px; flex-wrap: wrap; margin-top: clamp(28px, 4vw, 44px); }
        .hero-visual { display: grid; grid-template-columns: minmax(0, 1.7fr) minmax(0, 1fr); gap: clamp(32px, 5vw, 72px); align-items: center; margin-top: clamp(56px, 8vw, 100px); padding-top: clamp(32px, 4vw, 48px); border-top: 1px solid var(--rule); }
        @media (max-width: 860px) { .hero-visual { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
