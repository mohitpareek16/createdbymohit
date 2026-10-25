import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import { getAllWebsites } from '../data/websites'

const VALUES = [
  {
    num: '01',
    title: 'Audit before build',
    desc: "We never write a line of code before understanding your operation. The audit isn't a luxury — it's how we avoid building the wrong thing.",
  },
  {
    num: '02',
    title: 'Custom over template',
    desc: "Templates work for generic problems. You have a specific problem. We build exactly what you need — not a tool that almost fits.",
  },
  {
    num: '03',
    title: 'Fewer clients, deeper work',
    desc: "Maximum 2–3 active projects at a time. Every client gets Mohit directly involved. Not handed off. Not delegated. Present.",
  },
  {
    num: '04',
    title: 'Results over outputs',
    desc: "The work isn't done when it ships. It's done when it works. We track outcomes, not just deliverables.",
  },
]

const HOW = [
  {
    step: 'AUDIT',
    desc: 'We map your entire business — every workflow, every handoff, every manual step. This is where we find the real problem.',
    color: '#C41E3A',
  },
  {
    step: 'BUILD',
    desc: 'We design and build the exact solution your audit reveals. Custom software, AI systems, or automation tools.',
    color: '#0C0C0A',
  },
  {
    step: 'INTEGRATE',
    desc: 'We connect the solution to your existing systems, train your team, and make sure it actually gets used.',
    color: '#C41E3A',
  },
]

export default function StartingCorePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })
  const websites = getAllWebsites().slice(0, 6)

  return (
    <main style={{ background: 'var(--bg)' }}>
      <SEO
        title="Starting Core — Boutique Development & AI Studio | Jaipur, India"
        description="Starting Core is Mohit Pareek's boutique development and AI studio. We audit your business, find the real problem, then build exactly what you need. Custom software, AI integration, automation."
        canonical="/starting-core"
      />
      <Nav />

      {/* ── HERO ── */}
      <section style={{
        paddingTop: 'clamp(120px,15vw,180px)',
        paddingBottom: 'clamp(72px,8vw,120px)',
        paddingInline: '24px',
        background: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Dot grid texture */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          zIndex: 0,
        }} />
        {/* Red glow */}
        <div style={{
          position: 'absolute', top: '-15%', right: '-5%', width: '50vw', height: '50vw',
          background: 'radial-gradient(circle, rgba(196,30,58,0.06) 0%, transparent 65%)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }} ref={heroRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="font-mono uppercase"
            style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '20px' }}
          >
            <span style={{ color: 'var(--accent)', marginRight: '6px' }}>··</span>STARTING CORE · THE STUDIO
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne uppercase"
            style={{
              fontSize: 'clamp(48px,8vw,110px)', lineHeight: 0.88,
              letterSpacing: '-0.035em', fontWeight: 800, color: 'var(--text)',
              marginBottom: '28px', maxWidth: '14ch',
            }}
          >
            THE STUDIO.<br />EVERY BUSINESS<br />IS{' '}
            <span style={{ color: 'var(--accent)' }}>DIFFERENT.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{
              fontSize: 'clamp(15px,1.6vw,18px)', lineHeight: 1.7,
              color: 'var(--muted)', maxWidth: '50ch',
              marginBottom: '40px',
            }}
          >
            Starting Core is not an agency. Not a freelancer platform. It's a small, focused studio that works deeply with a few clients at a time — and audits before it builds anything.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.42, duration: 0.6 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}
          >
            <Link to="/contact" className="bracket-link accent">[ WORK WITH US ]</Link>
            <Link to="/work" className="bracket-link">[ SEE THE WORK ]</Link>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section style={{ borderBottom: '1px solid var(--border)', background: 'var(--surface)' }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '1px', background: 'var(--border)',
        }}>
          {[
            { num: '80+', label: 'Problems solved' },
            { num: '6+', label: 'Years building' },
            { num: '3', label: 'Active retainers' },
            { num: '₹40K', label: 'Audit starts at' },
          ].map(({ num, label }) => (
            <div key={label} style={{ background: 'var(--surface)', padding: '28px 24px', textAlign: 'center' }}>
              <p className="font-syne" style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', lineHeight: 1, marginBottom: '6px' }}>
                {num}
              </p>
              <p className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.16em', color: 'var(--muted)' }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY THE NAME ── */}
      <section style={{ padding: 'clamp(72px,8vw,120px) 24px', borderBottom: '1px solid var(--border)', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '56px', alignItems: 'center' }}>
          <div>
            <p className="font-mono uppercase" style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '16px' }}>
              <span style={{ color: 'var(--accent)', marginRight: '6px' }}>··</span>WHY THE NAME
            </p>
            <h2 className="font-syne uppercase" style={{
              fontSize: 'clamp(32px,4.5vw,64px)', lineHeight: 0.92,
              letterSpacing: '-0.033em', fontWeight: 800, color: 'var(--text)',
            }}>
              STARTING<br />
              <span style={{ color: 'var(--accent)' }}>CORE.</span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p style={{ fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.75, color: 'var(--muted)' }}>
              Every problem has a core. Every solution starts there. The name is a commitment — we don't build features before understanding what the actual problem is.
            </p>
            <p style={{ fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.75, color: 'var(--muted)' }}>
              Most agencies jump straight to building. We don't. We start at the core — the real issue, the actual bottleneck, the thing that's genuinely holding your business back. Then we build.
            </p>
            <p style={{ fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.75, color: 'var(--text)', fontWeight: 500 }}>
              Starting Core is that commitment, in two words.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section style={{ padding: 'clamp(72px,8vw,120px) 24px', background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="font-mono uppercase" style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '16px' }}>
            <span style={{ color: 'var(--accent)', marginRight: '6px' }}>··</span>HOW WE WORK
          </p>
          <h2 className="font-syne uppercase" style={{
            fontSize: 'clamp(32px,4.5vw,64px)', lineHeight: 0.92,
            letterSpacing: '-0.033em', fontWeight: 800, color: 'var(--text)',
            marginBottom: '56px',
          }}>
            AUDIT → BUILD →{' '}
            <span style={{ color: 'var(--accent)' }}>INTEGRATE.</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {HOW.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: 'var(--bg)',
                  borderRadius: '16px',
                  padding: '32px 28px',
                  border: '1px solid var(--border)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: '3px', background: item.color,
                }} />
                <p className="font-syne" style={{
                  fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, letterSpacing: '-0.025em',
                  color: 'var(--text)', marginBottom: '16px',
                }}>
                  {item.step}
                </p>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--muted)' }}>
                  {item.desc}
                </p>
                <p className="font-mono" style={{ fontSize: '9px', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.16em', marginTop: '16px' }}>
                  Step {i + 1} of 3
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ padding: 'clamp(72px,8vw,120px) 24px', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="font-mono uppercase" style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '16px' }}>
            <span style={{ color: 'var(--accent)', marginRight: '6px' }}>··</span>HOW WE THINK
          </p>
          <h2 className="font-syne uppercase" style={{
            fontSize: 'clamp(32px,4.5vw,64px)', lineHeight: 0.92,
            letterSpacing: '-0.033em', fontWeight: 800, color: 'var(--text)',
            marginBottom: '56px',
          }}>
            THINGS WE ACTUALLY{' '}
            <span style={{ color: 'var(--accent)' }}>BELIEVE.</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', background: 'var(--border)', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)' }}>
            {VALUES.map((v, i) => (
              <motion.div
                key={v.num}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                style={{ background: 'var(--bg)', padding: '32px 28px' }}
              >
                <p className="font-mono" style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '14px' }}>
                  {v.num}
                </p>
                <p className="font-syne" style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text)', marginBottom: '10px', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                  {v.title}
                </p>
                <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'var(--muted)' }}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ── */}
      <section style={{ padding: 'clamp(72px,8vw,120px) 24px', background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <p className="font-mono uppercase" style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '12px' }}>
                <span style={{ color: 'var(--accent)', marginRight: '6px' }}>··</span>SELECTED WORK
              </p>
              <h2 className="font-syne uppercase" style={{
                fontSize: 'clamp(28px,4vw,52px)', lineHeight: 0.92,
                letterSpacing: '-0.03em', fontWeight: 800, color: 'var(--text)',
              }}>
                80+ PROBLEMS.{' '}
                <span style={{ color: 'var(--accent)' }}>SOLVED.</span>
              </h2>
            </div>
            <Link to="/work" className="bracket-link" style={{ flexShrink: 0 }}>
              [ VIEW ALL WORK ]
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '14px' }}>
            {websites.map((site, i) => (
              <motion.a
                key={site.slug}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group project-card noise-card"
                style={{
                  display: 'block',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: site.gradient,
                  aspectRatio: '3/2',
                  textDecoration: 'none',
                  position: 'relative',
                }}
              >
                <div className="project-card-overlay" />
                <div style={{ position: 'absolute', top: '14px', left: '14px', zIndex: 3 }}>
                  <span className="font-mono" style={{ fontSize: '8px', letterSpacing: '0.16em', textTransform: 'uppercase', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', color: 'rgba(255,255,255,0.7)', padding: '4px 10px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.15)' }}>
                    {site.category}
                  </span>
                </div>
                <div className="project-card-body" style={{ zIndex: 3 }}>
                  <p className="font-syne font-bold text-white uppercase" style={{ fontSize: 'clamp(16px,1.8vw,22px)', letterSpacing: '-0.02em', lineHeight: 1 }}>
                    {site.title}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'var(--text)', padding: 'clamp(72px,8vw,112px) 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '56px', alignItems: 'center' }}>
          <div>
            <p className="font-mono uppercase" style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(247,245,240,0.3)', marginBottom: '16px' }}>
              <span style={{ color: 'var(--accent)', marginRight: '6px' }}>··</span>WORK WITH US
            </p>
            <h2 className="font-syne uppercase" style={{
              fontSize: 'clamp(36px,5.5vw,80px)', lineHeight: 0.9,
              letterSpacing: '-0.035em', fontWeight: 800, color: '#F7F5F0',
              marginBottom: '24px',
            }}>
              LET'S SOLVE YOUR SPECIFIC{' '}
              <span style={{ color: 'var(--accent)' }}>PROBLEM.</span>
            </h2>
            <p style={{ fontSize: 'clamp(14px,1.4vw,16px)', lineHeight: 1.7, color: 'rgba(247,245,240,0.55)', marginBottom: '32px', maxWidth: '44ch' }}>
              We take on 2–3 new projects per quarter. Tell us what's happening in your business and we'll see if we're the right fit.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <Link to="/contact" className="bracket-link" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>
                [ GET IN TOUCH ]
              </Link>
              <Link to="/services" className="bracket-link" style={{ borderColor: 'rgba(247,245,240,0.2)', color: '#F7F5F0' }}>
                [ SEE SERVICES ]
              </Link>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { label: 'Jaipur, Rajasthan', sub: 'India · Remote-first' },
              { label: 'Q4 2026', sub: 'Open for projects' },
              { label: '₹40,000', sub: 'Audit starts at' },
              { label: '2–3 weeks', sub: 'Average response time' },
            ].map(item => (
              <div key={item.label} style={{ background: 'rgba(247,245,240,0.05)', borderRadius: '12px', padding: '20px 18px', border: '1px solid rgba(247,245,240,0.08)' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#F7F5F0', marginBottom: '4px' }}>
                  {item.label}
                </p>
                <p className="font-mono" style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(247,245,240,0.35)' }}>
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
