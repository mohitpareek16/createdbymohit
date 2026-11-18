import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Doodle from './sketch/Doodle'
import { RED } from './sketch/RoughBox'
import { GUARANTEES } from '../data/offer'
import { LeakCheckLink, WhatsAppLink } from './CtaLinks'

const ease = [0.16, 1, 0.3, 1] as const
const up = (d: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease, delay: d },
})

type Props = {
  hand?: string
  headline?: string
  emphasis?: string
  sub?: string
  waMessage?: string
  showVerticals?: boolean
}

export default function HeroSection({
  hand = 'for clinics & real estate teams —',
  headline = 'Every enquiry you pay for,',
  emphasis = 'answered in under a minute.',
  sub = 'Starting Core installs WhatsApp lead-recovery systems: an instant reply, a booking, five follow-ups and a monthly rupee report. Live in 3 weeks.',
  waMessage,
  showVerticals = true,
}: Props) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 'clamp(110px, 14vw, 150px)' }}>
      <Doodle name="asterisk" size={28} color={RED} strokeWidth={2.2} delay={1.6} className="hidden lg:block"
        style={{ position: 'absolute', top: '16%', right: '44%', opacity: 0.8 }} />
      <Doodle name="spark" size={22} delay={1.9}
        style={{ position: 'absolute', bottom: '26%', left: '3%', opacity: 0.5 }} />

      <div style={{
        maxWidth: 1280, margin: '0 auto',
        paddingLeft: 'max(20px, env(safe-area-inset-left, 0px))',
        paddingRight: 'max(20px, env(safe-area-inset-right, 0px))',
      }}>
        <div className="hero-grid">
          <div style={{ minWidth: 0 }}>
            <motion.div {...up(0.1)} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <span style={{ width: 9, height: 9, borderRadius: '50%', background: RED, animation: 'heroPulse 2.2s infinite' }} />
              <span className="eyebrow">Starting Core · Lead recovery systems · Jaipur</span>
            </motion.div>

            <motion.p {...up(0.2)} className="font-hand"
              style={{ fontSize: 'clamp(24px, 2.6vw, 32px)', color: RED, transform: 'rotate(-3deg)', transformOrigin: 'left', marginBottom: 6, marginLeft: 4 }}>
              {hand}
            </motion.p>

            <motion.h1 {...up(0.3)} className="font-display"
              style={{ fontSize: 'clamp(50px, 6.8vw, 104px)', lineHeight: 0.92, letterSpacing: '-0.03em', color: 'var(--ink)' }}>
              {headline}{' '}
              <em style={{ color: RED }}>{emphasis}</em>
            </motion.h1>

            <motion.p {...up(0.5)} style={{ fontSize: 'clamp(17px, 1.6vw, 20px)', lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: '46ch', marginTop: 28 }}>
              {sub}
            </motion.p>

            <motion.div {...up(0.6)} style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 32 }}>
              <LeakCheckLink />
              <WhatsAppLink message={waMessage} />
            </motion.div>

            <motion.p {...up(0.7)} className="font-hand" style={{ fontSize: 23, color: 'var(--ink-soft)', marginTop: 22, display: 'flex', alignItems: 'center', gap: 8 }}>
              <Doodle name="check" size={22} color={RED} strokeWidth={2.6} delay={1.8} />
              you own the number, the CRM and the data
            </motion.p>

            {showVerticals && (
              <motion.div {...up(0.8)} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px 26px', marginTop: 26 }}>
                <span className="font-hand" style={{ fontSize: 22, color: 'var(--ink-faint)' }}>pick yours →</span>
                <Link to="/clinics" className="sketch-link" style={{ fontSize: 16, fontWeight: 500, color: 'var(--ink)' }}>I run a clinic</Link>
                <Link to="/real-estate" className="sketch-link" style={{ fontSize: 16, fontWeight: 500, color: 'var(--ink)' }}>I sell property</Link>
                <a href="#calculator" className="sketch-link" style={{ fontSize: 16, fontWeight: 500, color: 'var(--ink)' }}>Calculate my leak</a>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 8 }}
            animate={{ opacity: 1, y: 0, rotate: 2.5 }}
            transition={{ duration: 1.2, ease, delay: 0.35 }}
            className="hero-photo"
            style={{ position: 'relative', justifySelf: 'center' }}>

            <div className="paper-shadow" style={{ background: 'var(--card)', padding: '14px 14px 18px', position: 'relative' }}>
              <span className="tape" style={{ top: -13, left: '50%', transform: 'translateX(-50%) rotate(-3deg)' }} />
              <div style={{ aspectRatio: '4 / 5', overflow: 'hidden', background: 'var(--paper-2)' }}>
                <img src="/mohit-pareek.jpg" alt="Mohit Pareek, founder of Starting Core, in Jaipur"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'contrast(1.04) saturate(0.92)' }} />
              </div>
              <div style={{ paddingTop: 14, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 }}>
                <div>
                  <p className="font-hand" style={{ fontSize: 30, lineHeight: 1, color: 'var(--ink)' }}>Mohit Pareek</p>
                  <p className="eyebrow" style={{ fontSize: 10, marginTop: 6 }}>Founder, Starting Core · Jaipur</p>
                </div>
                <Doodle name="heart" size={26} color={RED} strokeWidth={2.2} delay={2.1} />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 1.6, rotate: -30 }}
              animate={{ opacity: 1, scale: 1, rotate: -12 }}
              transition={{ duration: 0.5, ease: [0.2, 1.4, 0.4, 1], delay: 1.5 }}
              style={{ position: 'absolute', top: -40, left: -46, width: 118, height: 118, zIndex: 4, color: RED }}>
              <svg viewBox="0 0 120 120" width="118" height="118" aria-hidden style={{ position: 'absolute', inset: 0 }}
                fill="none" stroke={RED} strokeLinecap="round">
                <circle cx="60" cy="60" r="53" fill="#FBF8F2" stroke="none" />
                <path d="M60 6 C 92 5, 114 28, 114 60 C 114 92, 90 115, 58 114 C 26 113, 6 90, 6 60 C 6 30, 28 7, 64 7" strokeWidth="2.6" />
                <path d="M60 16 C 85 15, 104 34, 104 60 C 104 86, 85 104, 59 104 C 34 104, 16 86, 16 60 C 16 35, 34 16, 62 16.5" strokeWidth="1.3" strokeDasharray="3 4" />
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', textAlign: 'center' }}>
                <div>
                  <div className="font-mono" style={{ fontSize: 11, letterSpacing: '0.22em', fontWeight: 700 }}>OPEN</div>
                  <div className="font-display" style={{ fontSize: 38, lineHeight: 1, fontStyle: 'italic', margin: '2px 0' }}>Q4</div>
                  <div className="font-mono" style={{ fontSize: 11, letterSpacing: '0.22em', fontWeight: 700 }}>2026</div>
                </div>
              </div>
            </motion.div>

            <div className="hero-note" style={{ position: 'absolute', left: -150, bottom: 110, width: 150, pointerEvents: 'none' }}>
              <p className="font-hand" style={{ fontSize: 26, color: RED, transform: 'rotate(-8deg)', marginBottom: 2 }}>you talk to me</p>
              <Doodle name="arrowCurve" size={110} color={RED} strokeWidth={2.4} delay={1.8} style={{ marginLeft: 30 }} />
            </div>
          </motion.div>
        </div>

        <motion.div {...up(0.9)} className="hero-stats">
          {GUARANTEES.map((s, i) => (
            <div key={s.l} style={{ position: 'relative', padding: '8px 4px' }}>
              {i === 0 && (
                <Doodle name="circle" size="100%" color={RED} strokeWidth={2.4} delay={2.2} stretch
                  style={{ position: 'absolute', left: '-14%', top: '-6%', width: '112%', height: '112%', pointerEvents: 'none' }} />
              )}
              <div className="font-display" style={{ fontSize: 'clamp(40px, 5vw, 68px)', lineHeight: 1, color: 'var(--ink)' }}>{s.v}</div>
              <div className="font-hand" style={{ fontSize: 22, color: 'var(--ink-soft)', marginTop: 4, lineHeight: 1.05 }}>{s.l}</div>
            </div>
          ))}
        </motion.div>
        <p className="eyebrow" style={{ fontSize: 10, marginTop: 14, textTransform: 'none', letterSpacing: '0.04em' }}>
          What we guarantee: the parts we control. Not your revenue. Nobody honest can.
        </p>
      </div>

      <div style={{ marginTop: 'clamp(40px, 6vw, 72px)', position: 'relative' }}>
        <svg aria-hidden width="100%" height="8" preserveAspectRatio="none" viewBox="0 0 1000 8" style={{ display: 'block' }}>
          <path d="M0 4 C 120 2, 260 6, 400 4 C 560 2, 700 6, 1000 3" stroke="#1B1A17" strokeOpacity="0.4" strokeWidth="1.2" fill="none" vectorEffect="non-scaling-stroke" />
        </svg>
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '14px 0',
          paddingLeft: 'max(20px, env(safe-area-inset-left, 0px))',
          paddingRight: 'max(20px, env(safe-area-inset-right, 0px))',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10,
        }}>
          <span className="eyebrow" style={{ fontSize: 11 }}>Starting Core</span>
          <span className="eyebrow hidden md:inline" style={{ fontSize: 11 }}>Reply · Qualify · Book · Follow up · Report</span>
          <a href="mailto:hello@createdbymohit.com" className="eyebrow sketch-link" style={{ fontSize: 11, textTransform: 'none', letterSpacing: '0.04em' }}>
            hello@createdbymohit.com ↗
          </a>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.3fr) minmax(0, 0.7fr);
          gap: clamp(32px, 6vw, 96px);
          align-items: center;
        }
        .hero-photo { width: min(100%, 360px); }
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
          margin-top: clamp(48px, 7vw, 88px);
          max-width: 900px;
        }
        @media (max-width: 1100px) { .hero-note { display: none; } }
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr; }
          .hero-photo { width: min(72%, 320px); margin-top: 32px; }
        }
        @media (max-width: 560px) {
          .hero-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); row-gap: 28px; }
        }
      `}</style>
    </section>
  )
}
