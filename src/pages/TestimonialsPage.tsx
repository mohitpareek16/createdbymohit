import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import Footer from '../components/Footer'

const TESTIMONIALS = [
  {
    quote: "Mohit redesigned our onboarding and our activation jumped 40% in month one. He just gets it. He didn't ask us what we wanted — he figured out what we needed.",
    name: 'Elena Sharma',
    role: 'Head of Product',
    company: 'FinVibe',
    category: 'Product Design',
    size: 'large',
  },
  {
    quote: "Worked with Mohit on a 5-day design sprint for our checkout flow. By day three we had a tested prototype. By week four after launch, cart abandonment was down 28%.",
    name: 'Arjun Mehta',
    role: 'Co-founder & CEO',
    company: 'CartPilot',
    category: 'Design Sprint',
    size: 'medium',
  },
  {
    quote: "Honest, fast, and doesn't waste your time with slides about process. He just designs.",
    name: 'Priya Nair',
    role: 'Founder',
    company: 'Layerwise',
    category: 'Freelance',
    size: 'small',
  },
  {
    quote: "We hired Mohit as a fractional design lead when we had one junior designer and no direction. Six months later we had a design system, a component library, and a junior who was doing real work. The ROI was obvious within 60 days.",
    name: 'Rohan Kapoor',
    role: 'CTO',
    company: 'Stackflow',
    category: 'Fractional Lead',
    size: 'large',
  },
  {
    quote: "The audit report was brutal and exactly what we needed. We'd been ignoring problems for two years because nobody could articulate them clearly. Mohit did it in a week.",
    name: 'Simran Batra',
    role: 'Product Manager',
    company: 'Sprinto',
    category: 'Design Audit',
    size: 'medium',
  },
  {
    quote: "I took Mohit's portfolio review call and had three offers within six weeks. Highly recommend if you're stuck.",
    name: 'Karan Sood',
    role: 'Senior Designer',
    company: 'Razorpay',
    category: 'Consultation',
    size: 'small',
  },
  {
    quote: "His courses changed how I think about design. Not just skills — perspective. The case study on conversion bottlenecks alone was worth the price.",
    name: 'Nidhi Jain',
    role: 'UI/UX Designer',
    company: 'Freelance',
    category: 'Course',
    size: 'medium',
  },
  {
    quote: "Mohit helped us ship a 0→1 product in 8 weeks. The design quality was production-ready from day one — no polish pass required. That's rare.",
    name: 'Vikram Reddy',
    role: 'Founder',
    company: 'Omnivault',
    category: 'Product Design',
    size: 'large',
  },
]

const LOGOS = ['FinVibe', 'CartPilot', 'Layerwise', 'Stackflow', 'Sprinto', 'Razorpay', 'Omnivault', 'Starting Core']

function TestimonialCard({ t, index }: { t: typeof TESTIMONIALS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  const isLarge = t.size === 'large'
  const isSmall = t.size === 'small'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 3) * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        borderRadius: '16px',
        border: isLarge ? '1px solid rgba(247,245,240,0.08)' : '1px solid var(--border)',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        background: isLarge ? 'var(--text)' : 'var(--surface)',
      }}
    >
      <div style={{ marginBottom: '16px' }}>
        <span className="font-mono uppercase" style={{
          display: 'inline-block',
          fontSize: '9px',
          letterSpacing: '0.15em',
          padding: '4px 10px',
          borderRadius: '999px',
          border: isLarge ? '1px solid rgba(196,30,58,0.3)' : '1px solid var(--border)',
          color: isLarge ? 'var(--accent)' : 'var(--muted)',
        }}>
          {t.category}
        </span>
      </div>

      <blockquote style={{
        flex: 1,
        lineHeight: 1.7,
        marginBottom: '24px',
        fontSize: isSmall ? '14px' : isLarge ? '17px' : '15px',
        color: isLarge ? 'rgba(247,245,240,0.82)' : 'var(--text)',
        fontStyle: 'normal',
      }}>
        "{t.quote}"
      </blockquote>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        paddingTop: '20px',
        borderTop: isLarge ? '1px solid rgba(247,245,240,0.08)' : '1px solid var(--border)',
      }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          fontWeight: 500,
          flexShrink: 0,
          background: isLarge ? 'rgba(247,245,240,0.08)' : 'var(--surface-2)',
          color: isLarge ? '#F7F5F0' : 'var(--text)',
        }}>
          {t.name.charAt(0)}
        </div>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 500, color: isLarge ? '#F7F5F0' : 'var(--text)' }}>{t.name}</div>
          <div style={{ fontSize: '12px', color: isLarge ? 'rgba(247,245,240,0.35)' : 'var(--muted)' }}>
            {t.role} · {t.company}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function TestimonialsPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <main style={{ background: 'var(--bg)' }}>
      <SEO
        title="Client Testimonials — What People Say | Starting Core · Mohit Pareek"
        description="Founders, CTOs, and product leads who've worked with Starting Core on custom development, AI integration, and business audits. Real results, real quotes."
        canonical="/testimonials"
      />
      <Nav />

      {/* ── HERO ── */}
      <section style={{ paddingTop: 'clamp(120px,15vw,180px)', paddingBottom: 'clamp(48px,5vw,80px)', paddingInline: '24px', borderBottom: '1px solid var(--border)', background: 'var(--bg)' }}>
        <div className="max-w-[1320px] mx-auto" ref={heroRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="font-mono uppercase"
            style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '20px' }}
          >
            <span style={{ color: 'var(--accent)', marginRight: '6px' }}>··</span>CLIENT FEEDBACK · SOCIAL PROOF
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne uppercase"
            style={{ fontSize: 'clamp(44px,7.5vw,96px)', lineHeight: 0.9, letterSpacing: '-0.035em', fontWeight: 800, color: 'var(--text)', marginBottom: '24px' }}
          >
            WHAT PEOPLE{' '}
            <span style={{ color: 'var(--accent)' }}>SAY.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ fontSize: 'clamp(14px,1.4vw,17px)', lineHeight: 1.7, color: 'var(--muted)', maxWidth: '50ch' }}
          >
            Founders, product leads, and business owners who've worked with us directly. No PR polish — exactly what they said.
          </motion.p>
        </div>
      </section>

      {/* ── LOGOS ── */}
      <section style={{ padding: '28px 24px', borderBottom: '1px solid var(--border)', background: 'var(--surface)', overflow: 'hidden' }}>
        <div className="max-w-[1320px] mx-auto">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '32px 40px' }}>
            <span className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.18em', color: 'var(--subtle)', flexShrink: 0 }}>
              Clients include
            </span>
            {LOGOS.map(logo => (
              <span key={logo} style={{ fontSize: '14px', fontWeight: 500, color: 'var(--muted)', cursor: 'default', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section style={{ padding: 'clamp(56px,6vw,96px) 24px', background: 'var(--bg)' }}>
        <div className="max-w-[1320px] mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="break-inside-avoid">
                <TestimonialCard t={t} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: 'clamp(56px,6vw,88px) 24px', background: 'var(--text)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-[1320px] mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div>
            <p className="font-mono uppercase" style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(247,245,240,0.3)', marginBottom: '16px' }}>
              <span style={{ color: 'var(--accent)', marginRight: '6px' }}>··</span>WANT RESULTS LIKE THESE?
            </p>
            <h2 className="font-syne uppercase" style={{ fontSize: 'clamp(28px,4.5vw,60px)', lineHeight: 0.92, letterSpacing: '-0.033em', fontWeight: 800, color: '#F7F5F0' }}>
              LET'S SOLVE YOUR{' '}
              <span style={{ color: 'var(--accent)' }}>SPECIFIC PROBLEM.</span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Link to="/contact" className="bracket-link" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>
              [ START A PROJECT ]
            </Link>
            <Link to="/book" className="bracket-link" style={{ borderColor: 'rgba(247,245,240,0.2)', color: '#F7F5F0' }}>
              [ BOOK A CALL ]
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
