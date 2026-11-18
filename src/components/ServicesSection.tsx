import { motion } from 'framer-motion'
import RoughBox, { RED } from './sketch/RoughBox'
import Doodle from './sketch/Doodle'
import { OFFERS, ADD_ONS } from '../data/offer'
import { LeakCheckLink } from './CtaLinks'

const TILT = [-1, 0.6, -0.4, 0.9]

export default function ServicesSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="pricing" style={{ padding: 'clamp(80px, 9vw, 140px) 0' }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        paddingLeft: 'max(20px, env(safe-area-inset-left, 0px))',
        paddingRight: 'max(20px, env(safe-area-inset-right, 0px))',
      }}>
        {showHeading && (
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 'clamp(48px, 6vw, 80px)' }}>
            <div>
              <p className="hand-label" style={{ marginBottom: 10 }}>offers & prices —</p>
              <h2 className="font-display" style={{ fontSize: 'clamp(48px, 6.5vw, 100px)', lineHeight: 0.92, letterSpacing: '-0.03em' }}>
                Fixed scope.<br /><em>Prices on the page.</em>
              </h2>
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: '36ch' }}>
              Start free, measure for ₹15,000, or go straight to the build. WhatsApp and platform fees are paid by you, at cost.
            </p>
          </div>
        )}

        <div className="offer-grid">
          {OFFERS.map((o, i) => (
            <motion.div key={o.id}
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: TILT[i] }}
              whileHover={{ rotate: 0, y: -6 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              style={{ position: 'relative' }}>
              {o.featured && (
                <span className="font-hand" style={{ position: 'absolute', top: -34, right: 14, fontSize: 24, color: RED, transform: 'rotate(4deg)', zIndex: 3 }}>
                  most clients start here ↓
                </span>
              )}
              <span className="tape" style={{ top: -12, left: 24, transform: 'rotate(-6deg)' }} />
              <RoughBox fill={o.featured ? '#F6D365' : '#FBF8F2'} fillStyle="solid" roughness={1.3} strokeWidth={o.featured ? 2.2 : 1.5} style={{ height: '100%' }}>
                <div style={{ padding: 'clamp(24px, 2.6vw, 32px)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <p className="font-hand" style={{ fontSize: 24, color: RED, lineHeight: 1 }}>{String(i + 1).padStart(2, '0')} · {o.role}</p>
                  <h3 className="font-display" style={{ fontSize: 'clamp(30px, 2.6vw, 38px)', lineHeight: 1, letterSpacing: '-0.02em', marginTop: 18 }}>{o.name}</h3>
                  <p className="font-display" style={{ fontSize: 'clamp(30px, 2.8vw, 40px)', lineHeight: 1.05, marginTop: 18, fontStyle: 'italic' }}>{o.price}</p>
                  <p className="eyebrow" style={{ fontSize: 10, marginTop: 8, lineHeight: 1.7, textTransform: 'none', letterSpacing: '0.03em', color: o.featured ? 'var(--ink)' : undefined }}>{o.priceNote}</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginTop: 22, flex: 1 }}>
                    {o.includes.map(item => (
                      <li key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14.5, lineHeight: 1.5, color: 'var(--ink)' }}>
                        <Doodle name="check" size={16} color={RED} strokeWidth={2.6} animate={false} style={{ marginTop: 3, flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="font-hand" style={{ fontSize: 22, marginTop: 22, color: 'var(--ink-soft)' }}>⏱ {o.time}</p>
                </div>
              </RoughBox>
            </motion.div>
          ))}
        </div>

        <div className="addon-row">
          <p className="font-hand" style={{ fontSize: 28, color: 'var(--ink)' }}>add-ons, once you're live:</p>
          <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '10px 28px' }}>
            {ADD_ONS.map(a => (
              <li key={a.name} style={{ fontSize: 15, color: 'var(--ink-soft)' }}>
                {a.name} <span className="font-hand" style={{ fontSize: 21, color: RED }}>{a.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 18, marginTop: 40 }}>
          <LeakCheckLink />
          <span className="font-hand" style={{ fontSize: 22, color: 'var(--ink-soft)' }}>not sure which? the free Leak Check tells you.</span>
        </div>
      </div>

      <style>{`
        .offer-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: clamp(20px, 2.4vw, 32px); align-items: stretch; margin-top: 20px; }
        .addon-row { display: flex; flex-wrap: wrap; align-items: baseline; gap: 12px 24px; margin-top: clamp(40px, 5vw, 64px); padding-top: 22px; border-top: 1.4px dashed rgba(27,26,23,0.3); }
        @media (max-width: 1100px) { .offer-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); row-gap: 56px; } }
        @media (max-width: 640px) { .offer-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
