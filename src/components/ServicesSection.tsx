import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import RoughBox, { RED } from './sketch/RoughBox'
import Doodle from './sketch/Doodle'

const SERVICES = [
  {
    num: '01',
    title: 'Custom Development',
    short: 'Solve the specific problem',
    desc: "Every company has different processes, different tools, different bottlenecks. We don't sell pre-packaged solutions. We diagnose what's actually broken and build exactly what fixes it — whether that's a custom integration, a purpose-built tool, or a full system redesign.",
    href: '/services',
  },
  {
    num: '02',
    title: 'Business Audit',
    short: 'Understand everything first',
    desc: "Before writing a single line of code or touching any AI tool, we map your entire operation. Every workflow, every handoff, every manual step that shouldn't be manual. The audit is the foundation. It's why the solutions we build actually stick.",
    href: '/services',
  },
  {
    num: '03',
    title: 'AI Integration',
    short: 'The right AI for your business',
    desc: "Not every business needs a custom AI agent. Sometimes a pre-built tool configured correctly does the job. Sometimes it needs to be built from scratch. We figure out which, then implement it — WhatsApp bots, workflow automations, CRM intelligence.",
    href: '/services',
  },
]

const TILT = [-1.2, 0.8, -0.4]

export default function ServicesSection() {
  return (
    <section id="services" style={{ padding: 'clamp(80px, 9vw, 140px) 0' }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        paddingLeft: 'max(20px, env(safe-area-inset-left, 0px))',
        paddingRight: 'max(20px, env(safe-area-inset-right, 0px))',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 'clamp(48px, 6vw, 80px)' }}>
          <div>
            <p className="hand-label" style={{ marginBottom: 10 }}>what we do —</p>
            <h2 className="font-display" style={{ fontSize: 'clamp(50px, 7vw, 108px)', lineHeight: 0.9, letterSpacing: '-0.03em' }}>
              Three ways<br /><em>we help.</em>
            </h2>
          </div>
          <Link to="/services" className="bracket-link">All services</Link>
        </div>

        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <motion.div key={s.num}
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: TILT[i] }}
              whileHover={{ rotate: 0, y: -6 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              style={{ position: 'relative' }}>
              <span className="tape" style={{ top: -12, left: 28, transform: 'rotate(-6deg)' }} />
              <Link to={s.href} style={{ display: 'block', color: 'var(--ink)', height: '100%' }}>
                <RoughBox fill={i === 1 ? '#F6D365' : '#FBF8F2'} fillStyle="solid" roughness={1.3} strokeWidth={1.6} style={{ height: '100%' }}>
                  <div style={{ padding: 'clamp(26px, 3vw, 36px)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'clamp(40px, 5vw, 72px)' }}>
                      <span className="font-hand" style={{ fontSize: 40, color: RED, lineHeight: 1 }}>{s.num}</span>
                      <Doodle name="arrowRight" size={58} color="#1B1A17" strokeWidth={2} />
                    </div>
                    <h3 className="font-display" style={{ fontSize: 'clamp(34px, 3.2vw, 46px)', lineHeight: 1, letterSpacing: '-0.02em' }}>{s.title}</h3>
                    <p className="eyebrow" style={{ fontSize: 11, marginTop: 12, color: i === 1 ? 'var(--ink)' : undefined }}>{s.short}</p>
                    <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-soft)', marginTop: 18, flex: 1 }}>{s.desc}</p>
                    <span className="font-hand" style={{ fontSize: 24, marginTop: 24, color: 'var(--ink)' }}>
                      read more <span style={{ color: RED }}>→</span>
                    </span>
                  </div>
                </RoughBox>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .svc-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(24px, 3vw, 40px); align-items: stretch; }
        .svc-grid > div:nth-child(2) { margin-top: 40px; }
        @media (max-width: 900px) {
          .svc-grid { grid-template-columns: 1fr; }
          .svc-grid > div:nth-child(2) { margin-top: 0; }
        }
      `}</style>
    </section>
  )
}
