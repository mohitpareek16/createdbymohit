import { motion } from 'framer-motion'
import Doodle from './sketch/Doodle'
import { RED } from './sketch/RoughBox'

const POINTS = [
  { title: "It's live, and someone owns it.", body: 'Set up on your WhatsApp and CRM, with a person accountable when a sync breaks at 9pm on a Saturday.' },
  { title: 'It stays current.', body: 'Prices, offers and answers are updated every month, not frozen on the day a freelancer handed it over.' },
  { title: 'You get a number.', body: 'One page each month: enquiries, first-reply time, bookings, show-ups and the rupees recovered against your own baseline.' },
]

export default function WhyNotDIY() {
  return (
    <section className="ink-section" style={{ padding: 'clamp(80px, 9vw, 130px) 0', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{
        position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(244,239,230,0.07) 1px, transparent 1px)', backgroundSize: '22px 22px',
      }} />
      <div style={{
        maxWidth: 1180, margin: '0 auto', position: 'relative',
        paddingLeft: 'max(20px, env(safe-area-inset-left, 0px))',
        paddingRight: 'max(20px, env(safe-area-inset-right, 0px))',
      }}>
        <p className="hand-label" style={{ marginBottom: 10, color: '#F6D365' }}>"can't I just use ChatGPT?" —</p>
        <h2 className="font-display" style={{ fontSize: 'clamp(44px, 6vw, 92px)', lineHeight: 0.95, letterSpacing: '-0.03em', color: 'var(--paper)', maxWidth: '18ch' }}>
          You can. It breaks <em style={{ color: RED }}>in week three.</em>
        </h2>
        <p style={{ fontSize: 'clamp(16px, 1.5vw, 19px)', lineHeight: 1.65, color: 'rgba(244,239,230,0.62)', maxWidth: '56ch', marginTop: 22 }}>
          Meta's own WhatsApp AI and ₹10,000 chatbot apps answer FAQs fine. The money is lost in the parts nobody watches: stale answers, a calendar that stops syncing, follow-ups that never fire.
        </p>

        <div className="diy-grid">
          {POINTS.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}>
              <Doodle name="check" size={40} color="#F6D365" strokeWidth={3} delay={0.2 + i * 0.15} />
              <h3 className="font-display" style={{ fontSize: 'clamp(26px, 2.4vw, 34px)', lineHeight: 1.08, color: 'var(--paper)', marginTop: 14 }}>{p.title}</h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.65, color: 'rgba(244,239,230,0.62)', marginTop: 10 }}>{p.body}</p>
            </motion.div>
          ))}
        </div>

        <p className="font-hand" style={{ fontSize: 26, color: 'rgba(244,239,230,0.8)', marginTop: 'clamp(40px, 5vw, 64px)' }}>
          rather run it yourself? ask, and we'll send you our checklist free.
        </p>
      </div>
      <style>{`
        .diy-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(28px, 4vw, 56px); margin-top: clamp(44px, 5vw, 72px); }
        @media (max-width: 860px) { .diy-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
