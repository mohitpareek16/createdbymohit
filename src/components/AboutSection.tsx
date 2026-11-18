import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import RoughBox, { RED } from './sketch/RoughBox'
import Mark from './sketch/Mark'
import Doodle from './sketch/Doodle'

const RULES = [
  { t: 'You own every account.', d: 'Number, CRM, data and domain stay in your business name.' },
  { t: 'Narrow beats clever.', d: 'One job per agent: answer, qualify, book, remind, reactivate.' },
  { t: 'Always a human handoff.', d: 'Written rules for what the AI must never say or promise.' },
  { t: 'We guarantee what we control.', d: 'Reply time, follow-ups and the report. Not your revenue.' },
]

const STORY = [
  "I grew up in Jaipur building things on the internet — websites, tools, automations — before I knew what to call any of it. Every project taught me one thing: most business problems aren't really design problems or tech problems. They're process problems.",
  "I spent years working with founders drowning in manual work — copy-pasting data between spreadsheets, manually sending follow-ups, juggling 6 disconnected tools that were never meant to work together. The problem wasn't a lack of tools. It was a lack of the right system.",
  "That's when everything changed. I started mapping the full operation before touching any code or AI. Understanding every input, every output, every bottleneck. Then building solutions that actually fit.",
  "I founded Starting Core to do this at scale. Every company is built differently. A D2C brand has different problems than a B2B SaaS. So the solution has to be different too.",
]

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: 'clamp(80px, 9vw, 140px) 0' }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        paddingLeft: 'max(20px, env(safe-area-inset-left, 0px))',
        paddingRight: 'max(20px, env(safe-area-inset-right, 0px))',
      }}>
        <p className="hand-label" style={{ marginBottom: 10 }}>the founder, Mohit Pareek —</p>
        <h2 className="font-display" style={{ fontSize: 'clamp(46px, 6.5vw, 100px)', lineHeight: 0.95, letterSpacing: '-0.03em', maxWidth: '14ch', marginBottom: 'clamp(48px, 6vw, 80px)' }}>
          Audit first.<br />Build second.<br />
          <em style={{ color: RED }}><Mark type="underline" iterations={2} strokeWidth={2.4} padding={2}>Report every month.</Mark></em>
        </h2>

        <div className="about-grid">
          {/* Notebook page */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: -0.6 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="ruled paper-shadow"
            style={{ background: 'var(--card)', padding: '40px clamp(20px, 3vw, 40px) 32px 72px', position: 'relative', backgroundPositionY: 24 }}>
            <div aria-hidden style={{ position: 'absolute', left: 16, top: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
              {[0, 1, 2].map(n => <span key={n} style={{ width: 14, height: 14, borderRadius: '50%', background: 'var(--paper-2)', boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.18)' }} />)}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {STORY.map((p, i) => (
                <p key={i} style={{ fontSize: 16.5, lineHeight: '32px', color: 'var(--ink)', opacity: 0.86 }}>{p}</p>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 32, flexWrap: 'wrap', gap: 16 }}>
              <Link to="/about" className="bracket-link">About Mohit</Link>
              <span className="font-hand" style={{ fontSize: 34, color: 'var(--ink)', transform: 'rotate(-4deg)' }}>— Mohit P.</span>
            </div>
          </motion.div>

          {/* Stats + sticky note */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            <RoughBox roughness={1.4} strokeWidth={1.4} fill="#FBF8F2" fillStyle="solid">
              <div style={{ padding: 'clamp(22px, 2.6vw, 32px)' }}>
                <p className="font-hand" style={{ fontSize: 28, color: RED, lineHeight: 1 }}>the rules we work by</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16, marginTop: 20 }}>
                  {RULES.map(r => (
                    <li key={r.t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <Doodle name="check" size={20} color={RED} strokeWidth={2.6} animate={false} style={{ marginTop: 4, flexShrink: 0 }} />
                      <span>
                        <strong className="font-display" style={{ fontSize: 23, fontWeight: 400, display: 'block', lineHeight: 1.15 }}>{r.t}</strong>
                        <span style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--ink-soft)' }}>{r.d}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </RoughBox>

            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: 1.8 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{ background: '#F6D365', padding: '30px 28px 26px', position: 'relative', boxShadow: '0 18px 30px -16px rgba(27,26,23,0.45)' }}>
              <span className="tape" style={{ top: -12, left: '40%', background: 'rgba(251,248,242,0.7)' }} />
              <Doodle name="quote" size={44} color={RED} strokeWidth={2.4} style={{ marginBottom: 6 }} />
              <p className="eyebrow" style={{ color: 'var(--ink)', marginBottom: 12, fontSize: 11 }}>The Starting Core Principle</p>
              <p className="font-hand" style={{ fontSize: 'clamp(24px, 2.2vw, 29px)', lineHeight: 1.22, color: 'var(--ink)' }}>
                "Every company is built differently — a D2C brand, a B2B SaaS, a local service business. The problems look the same on the surface. They almost never are. That's why we audit before we build."
              </p>
              <Link to="/starting-core" className="sketch-link" style={{ display: 'inline-block', marginTop: 18, fontSize: 15, fontWeight: 500, color: 'var(--ink)' }}>
                Learn about Starting Core →
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid { display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr); gap: clamp(40px, 6vw, 88px); align-items: start; }
        @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
