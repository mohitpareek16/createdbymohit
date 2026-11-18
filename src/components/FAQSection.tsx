import { motion } from 'framer-motion'
import Doodle from './sketch/Doodle'
import { RED, INK } from './sketch/RoughBox'
import { FAQ, type FaqItem } from '../data/offer'
import { WhatsAppLink } from './CtaLinks'

function Rule({ seed }: { seed: number }) {
  const d = seed % 2
    ? 'M0 3 C 180 1, 380 5, 560 3 C 740 1, 880 4, 1000 2.5'
    : 'M0 2.5 C 160 4.5, 340 1, 520 3 C 720 5, 860 1.5, 1000 3'
  return (
    <svg aria-hidden width="100%" height="6" preserveAspectRatio="none" viewBox="0 0 1000 6" style={{ display: 'block' }}>
      <path d={d} stroke={INK} strokeOpacity="0.4" strokeWidth="1.3" fill="none" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

export default function FAQSection({ items = FAQ }: { items?: FaqItem[] }) {
  return (
    <section id="faq" style={{ padding: 'clamp(80px, 9vw, 140px) 0' }}>
      <div className="faq-wrap" style={{
        maxWidth: 1280, margin: '0 auto',
        paddingLeft: 'max(20px, env(safe-area-inset-left, 0px))',
        paddingRight: 'max(20px, env(safe-area-inset-right, 0px))',
      }}>
        <div className="faq-head">
          <p className="hand-label" style={{ marginBottom: 10 }}>straight answers —</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(46px, 6vw, 88px)', lineHeight: 0.95, letterSpacing: '-0.03em' }}>
            Questions owners <em style={{ color: RED }}>actually ask.</em>
          </h2>
          <div style={{ marginTop: 40, maxWidth: 320 }}>
            <p className="font-hand" style={{ fontSize: 28, lineHeight: 1.15, transform: 'rotate(-3deg)' }}>
              Something else? Ask me on WhatsApp. I reply the same day.
            </p>
            <Doodle name="arrowLoop" size={130} color={RED} strokeWidth={2.2} style={{ marginTop: 6, marginLeft: 30 }} />
            <WhatsAppLink message="Hi Mohit, I have a question about Starting Core." style={{ marginTop: 10 }}>Ask on WhatsApp</WhatsAppLink>
          </div>
        </div>
        <dl style={{ minWidth: 0 }}>
          <Rule seed={9} />
          {items.map((item, i) => (
            <motion.div key={item.q}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '34px minmax(0, 1fr)', gap: 14, padding: '26px 0 24px' }}>
                <span className="font-hand" style={{ fontSize: 24, color: RED, lineHeight: 1.3 }}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <dt className="font-display" style={{ fontSize: 'clamp(24px, 2.4vw, 32px)', lineHeight: 1.15 }}>{item.q}</dt>
                  <dd style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)', marginTop: 10, maxWidth: '68ch' }}>{item.a}</dd>
                </div>
              </div>
              <Rule seed={i} />
            </motion.div>
          ))}
        </dl>
      </div>
      <style>{`
        .faq-wrap { display: grid; grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr); gap: clamp(40px, 6vw, 96px); align-items: start; }
        .faq-head { position: sticky; top: 110px; }
        @media (max-width: 900px) {
          .faq-wrap { grid-template-columns: 1fr; }
          .faq-head { position: static; }
        }
      `}</style>
    </section>
  )
}
