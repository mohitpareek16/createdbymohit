import { motion } from 'framer-motion'
import RoughBox, { RED, INK } from './sketch/RoughBox'
import Doodle, { type DoodleName } from './sketch/Doodle'

const STEPS: { num: string; word: string; tagline: string; body: string; red: boolean; doodle: DoodleName }[] = [
  {
    num: '01', word: 'Audit', tagline: 'Understand everything first.', red: false, doodle: 'bulb',
    body: 'Before touching any code or AI tool, we map your entire operation. Every workflow, every handoff, every manual step that shouldn\'t be manual. Most agencies skip this. That\'s why their solutions don\'t stick.',
  },
  {
    num: '02', word: 'Strategise', tagline: 'Define the exact fix.', red: true, doodle: 'pencil',
    body: 'After the audit we know the real problem — not the symptom. We define exactly what needs to be built, why, and how. No bloated proposals. No unnecessary features. Just the right scope.',
  },
  {
    num: '03', word: 'Build', tagline: 'Custom, not copy-pasted.', red: false, doodle: 'scribble',
    body: 'We build only what you actually need — whether that\'s a custom integration, an AI agent, a full system, or a simple automation. The solution is as unique as the problem.',
  },
  {
    num: '04', word: 'Integrate', tagline: 'Fits into how you work.', red: true, doodle: 'check',
    body: 'We don\'t hand you software and disappear. We integrate the solution into your existing workflows, train your team, and make sure it actually gets used.',
  },
  {
    num: '05', word: 'Scale', tagline: 'Built to grow with you.', red: false, doodle: 'sun',
    body: 'The systems we build are designed to scale. When your business grows, your tools grow with it — not against it.',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="graph-paper" style={{ padding: 'clamp(80px, 9vw, 140px) 0', backgroundColor: 'var(--paper-2)' }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        paddingLeft: 'max(20px, env(safe-area-inset-left, 0px))',
        paddingRight: 'max(20px, env(safe-area-inset-right, 0px))',
      }}>
        <div style={{ marginBottom: 'clamp(48px, 6vw, 80px)', maxWidth: 760 }}>
          <p className="hand-label" style={{ marginBottom: 10 }}>how we work —</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(46px, 6.5vw, 96px)', lineHeight: 0.92, letterSpacing: '-0.03em' }}>
            Five steps.<br /><em style={{ color: RED }}>No shortcuts.</em>
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          <svg aria-hidden className="process-rail" preserveAspectRatio="none" viewBox="0 0 20 1000"
            style={{ position: 'absolute', left: 31, top: 40, bottom: 40, width: 20, height: 'calc(100% - 80px)' }}>
            <path d="M10 0 C 4 120, 16 240, 10 360 C 4 480, 16 600, 10 720 C 5 840, 15 920, 10 1000"
              stroke={INK} strokeOpacity="0.45" strokeWidth="1.6" strokeDasharray="2 7" strokeLinecap="round" fill="none" vectorEffect="non-scaling-stroke" />
          </svg>

          {STEPS.map((s, i) => (
            <motion.div key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="process-row">
              <RoughBox shape="ellipse" fill={s.red ? RED : '#FBF8F2'} fillStyle="solid"
                stroke={INK} strokeWidth={1.6} style={{ width: 64, height: 64, flexShrink: 0 }}>
                <div style={{ height: '100%', display: 'grid', placeItems: 'center' }}>
                  <span className="font-hand" style={{ fontSize: 28, fontWeight: 700, color: s.red ? '#FBF8F2' : INK }}>{s.num}</span>
                </div>
              </RoughBox>

              <div style={{ minWidth: 0 }}>
                <h3 className="font-display" style={{
                  fontSize: 'clamp(52px, 8vw, 116px)', lineHeight: 0.9, letterSpacing: '-0.03em',
                  color: s.red ? RED : INK, fontStyle: s.red ? 'italic' : 'normal',
                }}>
                  {s.word}
                </h3>
              </div>

              <div className="process-body">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <p className="font-hand" style={{ fontSize: 28, lineHeight: 1, color: INK }}>{s.tagline}</p>
                  <Doodle name={s.doodle} size={s.doodle === 'pencil' || s.doodle === 'scribble' ? 46 : 26} color={RED} strokeWidth={2} />
                </div>
                <p style={{ fontSize: 15.5, lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: '46ch' }}>{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .process-row {
          display: grid;
          grid-template-columns: 64px minmax(0, 1fr) minmax(0, 380px);
          gap: clamp(20px, 3vw, 48px);
          align-items: center;
          padding: clamp(22px, 3vw, 36px) 0;
        }
        @media (max-width: 860px) {
          .process-row { grid-template-columns: 64px minmax(0, 1fr); align-items: start; }
          .process-body { grid-column: 2; }
        }
      `}</style>
    </section>
  )
}
