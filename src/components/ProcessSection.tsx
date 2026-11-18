import { motion } from 'framer-motion'
import RoughBox, { RED, INK } from './sketch/RoughBox'
import Doodle, { type DoodleName } from './sketch/Doodle'

const STEPS: { num: string; word: string; what: string; time: string; body: string; red: boolean; doodle: DoodleName }[] = [
  {
    num: '01', word: 'Diagnose', what: 'Leak Teardown & Audit', time: '48 hours – 5 days', red: false, doodle: 'bulb',
    body: 'We message your business like a customer would, measure reply time, drop-off and no-shows, and put a rupee number on the leak.',
  },
  {
    num: '02', word: 'Install', what: 'Lead Recovery System', time: '2–3 weeks', red: true, doodle: 'pencil',
    body: 'We record your baseline, build on your own accounts, test on 20 of your real past enquiries, then go live with a human watching every conversation.',
  },
  {
    num: '03', word: 'Operate', what: 'Growth Ops', time: 'every month', red: false, doodle: 'sun',
    body: 'We read conversations every week, fix wrong answers and broken syncs, run one campaign a month, and send you one page with the number.',
  },
]

export default function ProcessSection() {
  return (
    <section id="how-it-works" className="graph-paper" style={{ padding: 'clamp(80px, 9vw, 140px) 0', backgroundColor: 'var(--paper-2)' }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        paddingLeft: 'max(20px, env(safe-area-inset-left, 0px))',
        paddingRight: 'max(20px, env(safe-area-inset-right, 0px))',
      }}>
        <div style={{ marginBottom: 'clamp(48px, 6vw, 80px)', maxWidth: 760 }}>
          <p className="hand-label" style={{ marginBottom: 10 }}>how it works —</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(46px, 6.5vw, 96px)', lineHeight: 0.92, letterSpacing: '-0.03em' }}>
            Find the leak. Fix it.<br /><em style={{ color: RED }}>Keep it fixed.</em>
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          <svg aria-hidden preserveAspectRatio="none" viewBox="0 0 20 1000"
            style={{ position: 'absolute', left: 31, top: 40, bottom: 40, width: 20, height: 'calc(100% - 80px)' }}>
            <path d="M10 0 C 4 160, 16 330, 10 500 C 4 670, 16 840, 10 1000"
              stroke={INK} strokeOpacity="0.45" strokeWidth="1.6" strokeDasharray="2 7" strokeLinecap="round" fill="none" vectorEffect="non-scaling-stroke" />
          </svg>

          {STEPS.map(s => (
            <motion.div key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="process-row">
              <RoughBox shape="ellipse" fill={s.red ? RED : '#FBF8F2'} fillStyle="solid" stroke={INK} strokeWidth={1.6} style={{ width: 64, height: 64, flexShrink: 0 }}>
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
                <p className="eyebrow" style={{ marginTop: 12, fontSize: 11 }}>{s.what} · {s.time}</p>
              </div>

              <div className="process-body">
                <Doodle name={s.doodle} size={s.doodle === 'pencil' ? 46 : 28} color={RED} strokeWidth={2} style={{ marginBottom: 10 }} />
                <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: '44ch' }}>{s.body}</p>
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
