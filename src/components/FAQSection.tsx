import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

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

function FAQItem({ item, index }: { item: typeof FAQ_ITEMS[0]; index: number }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', alignItems: 'flex-start',
          justifyContent: 'space-between', gap: '20px',
          padding: '24px 0', background: 'none', border: 'none',
          cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span style={{
          fontSize: 'clamp(15px, 1.5vw, 17px)',
          fontWeight: 500, color: open ? 'var(--text)' : 'var(--text)',
          lineHeight: 1.4, flex: 1,
          transition: 'color 0.2s',
        }}>
          {item.q}
        </span>
        <span style={{
          width: '28px', height: '28px', borderRadius: '50%',
          border: '1px solid var(--border-strong)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, marginTop: '2px',
          background: open ? 'var(--accent)' : 'transparent',
          borderColor: open ? 'var(--accent)' : 'var(--border-strong)',
          transition: 'all 0.2s ease',
        }}>
          {open
            ? <Minus size={13} color="#fff" strokeWidth={2} />
            : <Plus size={13} color="var(--muted)" strokeWidth={2} />
          }
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              fontSize: 'clamp(14px, 1.3vw, 15px)',
              lineHeight: 1.75, color: 'var(--muted)',
              paddingBottom: '24px', maxWidth: '72ch',
            }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true })

  return (
    <section style={{
      padding: 'clamp(72px,8vw,120px) 24px',
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div ref={headRef} style={{ marginBottom: '56px' }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="font-mono uppercase"
            style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '16px' }}
          >
            <span style={{ color: 'var(--accent)', marginRight: '6px' }}>··</span>FREQUENTLY ASKED
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 60px)',
              fontWeight: 800, letterSpacing: '-0.035em',
              lineHeight: 0.95, color: 'var(--text)',
            }}
          >
            Questions people<br />
            <span style={{ color: 'var(--accent)' }}>actually ask.</span>
          </motion.h2>
        </div>

        <div style={{ maxWidth: '800px' }}>
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: '56px', padding: '32px 36px',
          background: 'var(--surface)',
          borderRadius: '20px',
          border: '1px solid var(--border)',
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between',
          gap: '20px', maxWidth: '800px',
        }}>
          <div>
            <p style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text)', marginBottom: '6px' }}>
              Still have questions?
            </p>
            <p style={{ fontSize: '14px', color: 'var(--muted)' }}>
              Write directly — I reply within 24 hours.
            </p>
          </div>
          <a href="mailto:hello@createdbymohit.com"
            className="bracket-link"
            style={{ borderColor: 'var(--accent)', color: 'var(--accent)', textDecoration: 'none' }}>
            [ hello@createdbymohit.com ]
          </a>
        </div>

      </div>
    </section>
  )
}
