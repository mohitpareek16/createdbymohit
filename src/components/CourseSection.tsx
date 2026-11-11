import { useState } from 'react'
import { motion } from 'framer-motion'
import RoughBox, { RED, INK } from './sketch/RoughBox'
import Doodle from './sketch/Doodle'
import Mark from './sketch/Mark'

const CURRICULUM = [
  'Visual hierarchy & design psychology',
  'Six principles of design',
  'Design systems & component libraries',
  'The business of being a designer in India',
  'Real-world client work & case studies',
]

export default function CourseSection() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  return (
    <section id="course" style={{ padding: 'clamp(80px, 9vw, 140px) 0', background: 'var(--paper-2)' }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        paddingLeft: 'max(20px, env(safe-area-inset-left, 0px))',
        paddingRight: 'max(20px, env(safe-area-inset-right, 0px))',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
          <Doodle name="star" size={26} color={RED} fill={RED} strokeWidth={1.6} />
          <span className="eyebrow" style={{ color: RED }}>Launching soon · 2026</span>
        </div>
        <h2 className="font-display" style={{ fontSize: 'clamp(46px, 6.5vw, 100px)', lineHeight: 0.95, letterSpacing: '-0.03em', maxWidth: '15ch', marginBottom: 'clamp(40px, 5vw, 72px)' }}>
          The UI/UX masterclass <em><Mark type="highlight" iterations={1} padding={[0, 6]}>I wish I had.</Mark></em>
        </h2>

        <div className="course-grid">
          <div>
            <p style={{ fontSize: 'clamp(17px, 1.5vw, 19px)', lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: 32, maxWidth: '50ch' }}>
              A complete UI/UX course built from six years of shipping products and 5,000+ designs. No fluff — just the{' '}
              <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>psychology, principles and process</strong>{' '}
              that separate designers who get hired from designers who get scrolled past.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {CURRICULUM.map((item, i) => (
                <motion.li key={item}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ position: 'relative', width: 30, height: 30, flexShrink: 0 }}>
                    <span className="sketch-border" style={{ position: 'absolute', inset: 3, borderWidth: 1.6 }} />
                    <Doodle name="check" size={30} color={RED} strokeWidth={3} delay={0.3 + i * 0.15} duration={0.5}
                      style={{ position: 'absolute', left: 4, top: -6 }} />
                  </span>
                  <span className="font-hand" style={{ fontSize: 'clamp(24px, 2.2vw, 28px)', lineHeight: 1.1 }}>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}>
            <span className="tape" style={{ top: -12, left: 30, transform: 'rotate(-5deg)' }} />
            <RoughBox fill="#FBF8F2" fillStyle="solid" strokeWidth={1.6}>
              <form onSubmit={e => { e.preventDefault(); if (email) setJoined(true) }} style={{ padding: 'clamp(26px, 3vw, 38px)' }}>
                <label htmlFor="waitlist-email" className="font-display" style={{ display: 'block', fontSize: 32, lineHeight: 1.05, marginBottom: 6 }}>
                  Be first on the waitlist
                </label>
                <p className="font-hand" style={{ fontSize: 22, color: 'var(--ink-soft)', marginBottom: 22 }}>founding-member pricing, promise ✌</p>
                {joined ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0' }}>
                    <Doodle name="check" size={38} color={RED} strokeWidth={3.2} />
                    <p className="font-hand" style={{ fontSize: 30 }}>You're in! Talk soon.</p>
                  </div>
                ) : (
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <input id="waitlist-email" type="email" required value={email} onChange={e => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      style={{
                        flex: '1 1 200px', minWidth: 0, background: 'transparent', outline: 'none',
                        border: 'none', borderBottom: `2px solid ${INK}`,
                        fontFamily: 'var(--font-hand)', fontSize: 26, padding: '6px 2px', color: INK,
                      }} />
                    <button type="submit" className="bracket-link accent" style={{ fontSize: 22 }}>Join →</button>
                  </div>
                )}
                <p className="eyebrow" style={{ fontSize: 10, marginTop: 22, lineHeight: 1.8 }}>
                  Early access · Founding-member pricing · One email a week, never spam.
                </p>
              </form>
            </RoughBox>
          </motion.div>
        </div>
      </div>

      <style>{`
        .course-grid { display: grid; grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr); gap: clamp(40px, 6vw, 88px); align-items: center; }
        #waitlist-email::placeholder { color: rgba(27,26,23,0.35); }
        @media (max-width: 900px) { .course-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
