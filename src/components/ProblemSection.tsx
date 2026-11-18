import { motion } from 'framer-motion'
import RoughBox, { RED, INK } from './sketch/RoughBox'

type Problem = { title: string; body: string }

const HOME_PROBLEMS: Problem[] = [
  { title: 'The late-night enquiry', body: "Someone asks about price at night. Your team replies the next morning. By then they've messaged two of your competitors." },
  { title: 'The no-show', body: 'They booked. Nobody reminded them. The slot sits empty, and the ad money that brought them is gone.' },
  { title: 'The forgotten follow-up', body: '"Let me think and get back." Nobody ever follows up, while the ads keep running.' },
]

const CHATS = [
  { them: 'Hi, what is the price for this?', at: '10:42 pm', us: 'Hello! Sorry for the late reply…', usAt: '11:15 am', note: '12½ hours later' },
  { them: 'Booked for 4pm tomorrow, thanks', at: '6:10 pm', us: '', usAt: '', note: 'no reminder · no-show' },
  { them: 'Let me think and get back', at: '1:25 pm', us: '', usAt: '', note: 'never followed up' },
]

function Bubble({ text, time, mine }: { text: string; time: string; mine?: boolean }) {
  return (
    <div style={{ alignSelf: mine ? 'flex-end' : 'flex-start', maxWidth: '86%' }}>
      <div className={mine ? 'sketch-border-alt' : 'sketch-border'} style={{
        padding: '7px 12px 8px', fontSize: 14, lineHeight: 1.35, borderWidth: 1.3,
        background: mine ? '#E3F1E1' : '#FBF8F2', color: INK,
      }}>
        {text}
        <span className="font-mono" style={{ display: 'block', fontSize: 9.5, color: 'var(--ink-faint)', marginTop: 3, textAlign: 'right' }}>{time}</span>
      </div>
    </div>
  )
}

export default function ProblemSection({ problems = HOME_PROBLEMS, hand = 'sound familiar? —', title = 'You already pay for the enquiry.', emphasis = 'Then it leaks.' }: {
  problems?: Problem[]; hand?: string; title?: string; emphasis?: string
}) {
  return (
    <section style={{ padding: 'clamp(80px, 9vw, 140px) 0' }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        paddingLeft: 'max(20px, env(safe-area-inset-left, 0px))',
        paddingRight: 'max(20px, env(safe-area-inset-right, 0px))',
      }}>
        <p className="hand-label" style={{ marginBottom: 10 }}>{hand}</p>
        <h2 className="font-display" style={{ fontSize: 'clamp(44px, 6vw, 92px)', lineHeight: 0.95, letterSpacing: '-0.03em', maxWidth: '17ch', marginBottom: 'clamp(44px, 5vw, 72px)' }}>
          {title} <em style={{ color: RED }}>{emphasis}</em>
        </h2>

        <div className="prob-grid">
          {problems.map((p, i) => {
            const c = CHATS[i % CHATS.length]
            return (
              <motion.div key={p.title}
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: [-1, 0.8, -0.5][i % 3] }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}>
                <RoughBox fill="#FBF8F2" fillStyle="solid" strokeWidth={1.5} style={{ height: '100%' }}>
                  <div style={{ padding: 'clamp(22px, 2.6vw, 30px)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div className="graph-paper" style={{ padding: '16px 14px', display: 'flex', flexDirection: 'column', gap: 10, minHeight: 168, background: 'var(--paper)', backgroundSize: '20px 20px', position: 'relative' }}>
                      <Bubble text={c.them} time={c.at} />
                      {c.us ? <Bubble text={c.us} time={c.usAt} mine /> : (
                        <div style={{ alignSelf: 'flex-end', display: 'flex', gap: 5, padding: '10px 14px' }} aria-hidden>
                          {[0, 1, 2].map(n => <span key={n} style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ink-faint)', opacity: 0.5 }} />)}
                        </div>
                      )}
                      <span className="font-hand" style={{ position: 'absolute', right: 10, bottom: -14, fontSize: 22, color: RED, background: 'var(--card)', padding: '0 6px', transform: 'rotate(-3deg)' }}>
                        {c.note}
                      </span>
                    </div>
                    <h3 className="font-display" style={{ fontSize: 'clamp(28px, 2.6vw, 36px)', lineHeight: 1.05, marginTop: 28 }}>{p.title}</h3>
                    <p style={{ fontSize: 15.5, lineHeight: 1.65, color: 'var(--ink-soft)', marginTop: 10 }}>{p.body}</p>
                  </div>
                </RoughBox>
              </motion.div>
            )
          })}
        </div>
      </div>
      <style>{`
        .prob-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(22px, 3vw, 40px); }
        @media (max-width: 900px) { .prob-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
