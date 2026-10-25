import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import Footer from '../components/Footer'

const SERVICES = [
  {
    num: '01',
    title: 'Custom Development',
    tagline: 'BUILD THE EXACT THING YOU NEED',
    desc: 'Every company has different processes, different tools, different bottlenecks. We don\'t sell pre-packaged solutions. We scope the problem, design the solution, then build it — integrations, purpose-built tools, full system redesigns. Whatever it takes to fix the actual thing that\'s broken.',
    deliverables: [
      'Problem scoping & technical architecture',
      'Full-stack development (web, mobile, APIs)',
      'Third-party integrations & data pipelines',
      'Admin dashboards & internal tools',
      'Production deployment & documentation',
      'Ongoing support & iteration',
    ],
    suited: 'Businesses with a specific gap no off-the-shelf product fills. Teams who\'ve outgrown spreadsheets and need custom tooling.',
    price: '₹80,000 – ₹3,00,000+',
    priceNote: 'Project scope',
    timeline: '4–12 weeks',
    featured: true,
  },
  {
    num: '02',
    title: 'Business Audit',
    tagline: 'UNDERSTAND EVERYTHING FIRST',
    desc: 'Before writing a single line of code or touching any AI tool, we map your entire operation. Every workflow, every handoff, every manual step that shouldn\'t be manual. The audit is the foundation. It\'s why every solution we build actually sticks.',
    deliverables: [
      'Full business process mapping',
      'Bottleneck & inefficiency identification',
      'Technology stack review',
      'AI & automation opportunity report',
      'Prioritised recommendations document',
      '60-minute debrief call with Mohit',
    ],
    suited: 'Businesses before any major build or AI project. Teams spending too much time on manual work. Founders who suspect something is wrong but can\'t pinpoint it.',
    price: '₹40,000',
    priceNote: 'Flat rate',
    timeline: '2 weeks',
    featured: false,
  },
  {
    num: '03',
    title: 'AI Integration',
    tagline: 'THE RIGHT AI FOR YOUR BUSINESS',
    desc: 'Not every business needs a custom AI agent. Sometimes a pre-built tool configured correctly does the job. Sometimes it needs to be built from scratch. We figure out which — then implement it, test it, and hand it over with your team fully trained.',
    deliverables: [
      'AI tool selection & configuration',
      'WhatsApp & messaging bots',
      'CRM automation & lead intelligence',
      'Document processing & data extraction',
      'Custom AI agents & workflows',
      'Team training & ongoing support',
    ],
    suited: 'Businesses ready to remove repetitive manual work. Teams spending hours on tasks that AI can handle. Companies who\'ve tried AI tools but haven\'t made them stick.',
    price: '₹60,000 – ₹2,00,000+',
    priceNote: 'Complexity based',
    timeline: '2–8 weeks',
    featured: false,
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Discovery call',
    desc: "We talk through what's happening in your business, where the friction is, and what a good outcome looks like. 30 minutes. No pitch.",
  },
  {
    step: '02',
    title: 'Proposal',
    desc: 'Within 48 hours we send a scoped proposal — what we\'ll do, what it costs, how long it takes, and exactly what you get at the end.',
  },
  {
    step: '03',
    title: 'Kickoff',
    desc: 'Contracts signed, access granted, kickoff call done. We move fast from here. You\'ll have a dedicated Slack channel and weekly updates.',
  },
  {
    step: '04',
    title: 'Build & iterate',
    desc: 'We build in weekly sprints with clear checkpoints. You\'re never waiting 6 weeks to see something. Feedback is continuous.',
  },
  {
    step: '05',
    title: 'Handoff',
    desc: 'Full documentation, team training, and a recorded walkthrough. You own everything we built — code, systems, credentials, docs.',
  },
]

const FAQ = [
  {
    q: 'How do I know which service is right for me?',
    a: 'Start with the Business Audit if you\'re not sure where to begin — it maps your entire operation and tells us exactly what to build. If you already know the problem, go straight to Custom Development or AI Integration.',
  },
  {
    q: 'Do you work outside India?',
    a: 'Yes. We work with businesses globally. All pricing is in INR but we\'re flexible. Payment in USD or AED is fine.',
  },
  {
    q: 'What\'s the minimum engagement?',
    a: 'The Business Audit at ₹40,000 is our smallest engagement. Custom Development and AI Integration start at ₹60,000–80,000 depending on scope.',
  },
  {
    q: 'Do you offer monthly retainers?',
    a: 'Yes. For ongoing work — maintenance, iteration, new features — we offer monthly retainers from ₹80,000/month. We have 3 active retainer clients currently.',
  },
  {
    q: 'How many clients do you take on at once?',
    a: 'Maximum 2–3 active projects at a time. This is deliberate — every client gets Mohit directly involved, not handed off to a junior.',
  },
]

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })
  const processRef = useRef<HTMLDivElement>(null)

  return (
    <main style={{ background: 'var(--bg)' }}>
      <SEO
        title="Services — Custom Development, Business Audit & AI Integration | Starting Core"
        description="Three ways to work with Starting Core: Custom Development (₹80K+), Business Audit (₹40K flat), and AI Integration (₹60K+). Founded by Mohit Pareek, Jaipur, India."
        canonical="/services"
      />
      <Nav />

      {/* ── HERO ── */}
      <section style={{
        paddingTop: 'clamp(120px,15vw,180px)',
        paddingBottom: 'clamp(56px,6vw,96px)',
        paddingInline: '24px',
        borderBottom: '1px solid var(--border)',
        background: 'var(--bg)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }} ref={heroRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="font-mono uppercase"
            style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '20px' }}
          >
            <span style={{ color: 'var(--accent)', marginRight: '6px' }}>··</span>WHAT WE DO · STARTING CORE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne uppercase"
            style={{
              fontSize: 'clamp(44px,7.5vw,100px)', lineHeight: 0.9,
              letterSpacing: '-0.035em', fontWeight: 800, color: 'var(--text)',
              marginBottom: '28px', maxWidth: '16ch',
            }}
          >
            THREE THINGS.<br />ALL OF THEM{' '}
            <span style={{ color: 'var(--accent)' }}>WELL.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.28, duration: 0.7 }}
            style={{
              fontSize: 'clamp(15px,1.6vw,18px)', lineHeight: 1.7,
              color: 'var(--muted)', maxWidth: '52ch',
              marginBottom: '40px',
            }}
          >
            Custom development, business audits, and AI integration — each one grounded in understanding your
            actual problem before touching any code or tool.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}
          >
            <Link to="/contact" className="bracket-link accent">
              [ START A PROJECT ]
            </Link>
            <Link to="/book" className="bracket-link">
              [ BOOK A CALL ]
            </Link>
            <span className="font-mono" style={{ fontSize: '9px', letterSpacing: '0.14em', color: 'var(--subtle)', textTransform: 'uppercase' }}>
              <span className="inline-block w-1.5 h-1.5 rounded-full mr-2" style={{ background: 'var(--accent)', animation: 'pulse 2s infinite', display: 'inline-block', verticalAlign: 'middle' }} />
              Open Q4 2026
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{
        padding: 'clamp(72px,8vw,120px) 24px',
        background: 'var(--bg)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: svc.featured ? 'var(--text)' : 'var(--surface)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: svc.featured ? 'none' : '1px solid var(--border)',
                }}
              >
                <div style={{
                  padding: 'clamp(28px,4vw,52px)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '40px 56px',
                  alignItems: 'start',
                }}>
                  {/* Left: number + title */}
                  <div>
                    <p className="font-mono" style={{ fontSize: '11px', letterSpacing: '0.14em', color: 'var(--accent)', marginBottom: '16px', textTransform: 'uppercase' }}>
                      {svc.num}
                    </p>
                    <h2 className="font-syne uppercase" style={{
                      fontSize: 'clamp(28px,3.5vw,52px)', lineHeight: 0.92,
                      letterSpacing: '-0.03em', fontWeight: 800,
                      color: svc.featured ? '#F7F5F0' : 'var(--text)',
                      marginBottom: '12px',
                    }}>
                      {svc.title}
                    </h2>
                    <p className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.18em', color: svc.featured ? 'rgba(247,245,240,0.4)' : 'var(--muted)', marginBottom: '20px' }}>
                      {svc.tagline}
                    </p>
                    <p style={{
                      fontSize: 'clamp(13px,1.2vw,15px)', lineHeight: 1.75,
                      color: svc.featured ? 'rgba(247,245,240,0.65)' : 'var(--muted)',
                      maxWidth: '48ch',
                    }}>
                      {svc.desc}
                    </p>
                  </div>

                  {/* Right: deliverables + pricing */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                    <div>
                      <p className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.16em', color: svc.featured ? 'rgba(247,245,240,0.3)' : 'var(--subtle)', marginBottom: '14px' }}>
                        What's included
                      </p>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {svc.deliverables.map(d => (
                          <li key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                            <span style={{ color: 'var(--accent)', fontSize: '13px', marginTop: '1px', flexShrink: 0 }}>→</span>
                            <span style={{ fontSize: '13px', lineHeight: 1.6, color: svc.featured ? 'rgba(247,245,240,0.7)' : 'var(--muted)' }}>
                              {d}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price + CTA */}
                    <div style={{
                      background: svc.featured ? 'rgba(247,245,240,0.06)' : 'var(--bg)',
                      borderRadius: '14px',
                      padding: '20px 22px',
                      border: svc.featured ? '1px solid rgba(247,245,240,0.1)' : '1px solid var(--border)',
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
                        <div>
                          <p className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.14em', color: svc.featured ? 'rgba(247,245,240,0.3)' : 'var(--subtle)', marginBottom: '4px' }}>
                            Investment
                          </p>
                          <p className="font-syne" style={{ fontSize: 'clamp(18px,2vw,24px)', fontWeight: 800, letterSpacing: '-0.02em', color: svc.featured ? '#F7F5F0' : 'var(--text)' }}>
                            {svc.price}
                          </p>
                          <p className="font-mono" style={{ fontSize: '9px', color: svc.featured ? 'rgba(247,245,240,0.35)' : 'var(--muted)', marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                            {svc.priceNote} · {svc.timeline}
                          </p>
                        </div>
                        <Link to="/contact" className={`bracket-link ${svc.featured ? '' : 'accent'}`}
                          style={svc.featured ? { borderColor: '#C41E3A', color: '#C41E3A' } : {}}>
                          [ GET STARTED ]
                        </Link>
                      </div>
                      <p style={{ fontSize: '12px', lineHeight: 1.65, color: svc.featured ? 'rgba(247,245,240,0.4)' : 'var(--subtle)' }}>
                        <span style={{ color: 'var(--accent)', marginRight: '4px' }}>→</span>
                        Best for: {svc.suited}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Retainer note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7 }}
            style={{
              marginTop: '20px',
              background: 'var(--surface)',
              borderRadius: '16px',
              border: '1px solid var(--border)',
              padding: '24px 28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div>
              <p className="font-syne" style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>
                Need ongoing work?
              </p>
              <p style={{ fontSize: '13px', color: 'var(--muted)' }}>
                Monthly retainers available for continuous development, maintenance, and iteration — from ₹80,000/month.
              </p>
            </div>
            <Link to="/contact" className="bracket-link" style={{ flexShrink: 0 }}>
              [ DISCUSS RETAINER ]
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section ref={processRef} style={{
        padding: 'clamp(72px,8vw,120px) 24px',
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="font-mono uppercase" style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '16px' }}>
            <span style={{ color: 'var(--accent)', marginRight: '6px' }}>··</span>HOW WE WORK
          </p>
          <h2 className="font-syne uppercase" style={{
            fontSize: 'clamp(32px,5vw,72px)', lineHeight: 0.92,
            letterSpacing: '-0.033em', fontWeight: 800, color: 'var(--text)',
            marginBottom: '56px',
          }}>
            SIMPLE PROCESS.<br />
            <span style={{ color: 'var(--accent)' }}>ZERO FLUFF.</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1px',
            background: 'var(--border)',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid var(--border)',
          }}>
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                style={{ background: 'var(--surface)', padding: '28px 24px' }}
              >
                <p className="font-mono" style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '16px' }}>
                  {p.step}
                </p>
                <h4 className="font-syne" style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px', letterSpacing: '-0.01em' }}>
                  {p.title}
                </h4>
                <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'var(--muted)' }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{
        padding: 'clamp(72px,8vw,120px) 24px',
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px' }}>
            <div>
              <p className="font-mono uppercase" style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '16px' }}>
                <span style={{ color: 'var(--accent)', marginRight: '6px' }}>··</span>FAQ
              </p>
              <h2 className="font-syne uppercase" style={{
                fontSize: 'clamp(28px,4vw,56px)', lineHeight: 0.92,
                letterSpacing: '-0.03em', fontWeight: 800, color: 'var(--text)',
              }}>
                COMMON<br />
                <span style={{ color: 'var(--accent)' }}>QUESTIONS.</span>
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {FAQ.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ delay: i * 0.07, duration: 0.6 }}
                  style={{ borderTop: '1px solid var(--border)', padding: '20px 0' }}
                >
                  <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)', marginBottom: '8px', lineHeight: 1.5 }}>
                    {item.q}
                  </p>
                  <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'var(--muted)' }}>
                    {item.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA DARK BAND ── */}
      <section style={{ background: 'var(--text)', padding: 'clamp(72px,8vw,112px) 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="font-mono uppercase" style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(247,245,240,0.3)', marginBottom: '20px' }}>
            <span style={{ color: 'var(--accent)', marginRight: '6px' }}>··</span>GET IN TOUCH
          </p>
          <h2 className="font-syne uppercase" style={{
            fontSize: 'clamp(36px,6vw,88px)', lineHeight: 0.9,
            letterSpacing: '-0.035em', fontWeight: 800, color: '#F7F5F0',
            marginBottom: '32px', maxWidth: '14ch',
          }}>
            NOT SURE WHICH FIT?{' '}
            <span style={{ color: 'var(--accent)' }}>JUST ASK.</span>
          </h2>
          <p style={{ fontSize: 'clamp(15px,1.5vw,18px)', lineHeight: 1.7, color: 'rgba(247,245,240,0.55)', maxWidth: '52ch', marginBottom: '40px' }}>
            Tell us what's happening in your business. We'll tell you which service makes sense — or if none of them do.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Link to="/contact" className="bracket-link"
              style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>
              [ START A PROJECT ]
            </Link>
            <Link to="/book" className="bracket-link"
              style={{ borderColor: 'rgba(247,245,240,0.2)', color: '#F7F5F0' }}>
              [ BOOK A CALL FIRST ]
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
