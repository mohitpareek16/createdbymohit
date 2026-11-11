import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Doodle from './sketch/Doodle'
import { RED, INK } from './sketch/RoughBox'

const FAQ_ITEMS = [
  {
    q: 'What kind of projects do you take on?',
    a: 'Custom software development, AI and automation systems, and UI/UX design for businesses. I work with startups, D2C brands, SaaS companies, and established businesses across India. If you have a real operational problem — manual work, broken workflows, a product that needs to exist — I build the solution.',
  },
  {
    q: 'How does your process work?',
    a: 'Every engagement starts with a Business Audit (₹40,000 flat). I map your entire operation, find exactly what\'s holding you back, and give you a detailed roadmap. Then I build the solution — custom software, AI integration, or automation. This audit-first approach means we never build the wrong thing.',
  },
  {
    q: 'What is your pricing?',
    a: 'Business Audit: ₹40,000 flat (2 weeks). Custom Development: ₹80,000–₹3,00,000+ depending on scope (4–12 weeks). AI Integration: ₹60,000–₹2,00,000+ depending on complexity (2–8 weeks). Ongoing retainer: ₹80,000/month. All prices are transparent — no hidden fees.',
  },
  {
    q: 'How long does a project take?',
    a: 'A Business Audit takes 2 weeks. A custom software build typically takes 4–12 weeks depending on scope. AI integration projects take 2–8 weeks. I give you a fixed timeline upfront and stick to it. No endless sprints.',
  },
  {
    q: 'Do you also do UI/UX design work?',
    a: 'Yes — UI/UX design is my foundation. I design and build. Every product I develop is designed with intention — from user flows and wireframes to production-ready interfaces. I can also do design-only work: product design, redesigns, design systems, and Figma prototypes.',
  },
  {
    q: 'Do you work with clients outside India?',
    a: 'Yes. I\'m based in Jaipur, India (IST, UTC+5:30) but work with clients globally. Most communication happens async over email and calls. International payments are handled via bank transfer or Wise.',
  },
  {
    q: 'How many clients do you work with at once?',
    a: 'I take 2–3 new projects per quarter, deliberately. Fewer clients means deeper focus, better results, and real accountability. You get my full attention — not a revolving team.',
  },
  {
    q: 'What technologies do you use?',
    a: 'React, Next.js, TypeScript, Node.js, Python, PostgreSQL, Supabase, and various AI APIs (OpenAI, Claude, Gemini). For automation: n8n, Zapier, Make. For design: Figma, Framer. I pick the right tool for the problem, not the trendy one.',
  },
]

function Rule({ seed }: { seed: number }) {
  const d = seed % 2
    ? 'M0 3 C 180 1, 380 5, 560 3 C 740 1, 880 4, 1000 2.5'
    : 'M0 2.5 C 160 4.5, 340 1, 520 3 C 720 5, 860 1.5, 1000 3'
  return (
    <svg aria-hidden width="100%" height="6" preserveAspectRatio="none" viewBox="0 0 1000 6" style={{ display: 'block' }}>
      <path d={d} stroke={INK} strokeOpacity="0.5" strokeWidth="1.3" fill="none" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

function FAQItem({ item, index }: { item: typeof FAQ_ITEMS[0]; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.04, duration: 0.5 }}>
      <button onClick={() => setOpen(!open)} aria-expanded={open}
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, padding: '24px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', color: INK }}>
        <span style={{ display: 'flex', alignItems: 'baseline', gap: 18, minWidth: 0 }}>
          <span className="font-hand" style={{ fontSize: 24, color: RED, flexShrink: 0, width: 30 }}>{String(index + 1).padStart(2, '0')}</span>
          <span className="font-display" style={{ fontSize: 'clamp(22px, 2.4vw, 32px)', lineHeight: 1.15, fontStyle: open ? 'italic' : 'normal' }}>{item.q}</span>
        </span>
        <span style={{ flexShrink: 0, transition: 'transform .35s ease', transform: open ? 'rotate(180deg)' : 'none', display: 'grid', placeItems: 'center' }}>
          <Doodle key={open ? 'm' : 'p'} name={open ? 'minus' : 'plus'} size={30} color={open ? RED : INK} strokeWidth={2.4} duration={0.35} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)', padding: '0 0 28px 48px', maxWidth: '70ch' }}>{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <Rule seed={index} />
    </motion.div>
  )
}

export default function FAQSection() {
  return (
    <section style={{ padding: 'clamp(80px, 9vw, 140px) 0' }}>
      <div className="faq-wrap" style={{
        maxWidth: 1280, margin: '0 auto',
        paddingLeft: 'max(20px, env(safe-area-inset-left, 0px))',
        paddingRight: 'max(20px, env(safe-area-inset-right, 0px))',
      }}>
        <div className="faq-head">
          <p className="hand-label" style={{ marginBottom: 10 }}>frequently asked —</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(46px, 6vw, 88px)', lineHeight: 0.95, letterSpacing: '-0.03em' }}>
            Questions people <em style={{ color: RED }}>actually ask.</em>
          </h2>
          <div style={{ marginTop: 40, position: 'relative', maxWidth: 320 }} className="faq-note">
            <p className="font-hand" style={{ fontSize: 28, lineHeight: 1.15, transform: 'rotate(-3deg)' }}>
              Still have questions? Write directly — I reply within 24 hours.
            </p>
            <Doodle name="arrowLoop" size={130} color={RED} strokeWidth={2.2} style={{ marginTop: 6, marginLeft: 30 }} />
            <a href="mailto:hello@createdbymohit.com" className="bracket-link" style={{ marginTop: 10, fontSize: 20 }}>
              hello@createdbymohit.com
            </a>
          </div>
        </div>
        <div style={{ minWidth: 0 }}>
          <Rule seed={9} />
          {FAQ_ITEMS.map((item, i) => <FAQItem key={i} item={item} index={i} />)}
        </div>
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
