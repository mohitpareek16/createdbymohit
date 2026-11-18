import { Navigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import HeroSection from '../components/HeroSection'
import ProblemSection from '../components/ProblemSection'
import ProcessSection from '../components/ProcessSection'
import ServicesSection from '../components/ServicesSection'
import LeakCalculator from '../components/LeakCalculator'
import WhyNotDIY from '../components/WhyNotDIY'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'
import RoughBox, { RED } from '../components/sketch/RoughBox'
import Doodle from '../components/sketch/Doodle'
import { VERTICALS, FAQ, type Vertical } from '../data/offer'
import { LeakCheckLink, WhatsAppLink } from '../components/CtaLinks'

function WhatItDoes({ v }: { v: Vertical }) {
  return (
    <section style={{ padding: 'clamp(80px, 9vw, 140px) 0', background: 'var(--paper-2)' }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        paddingLeft: 'max(20px, env(safe-area-inset-left, 0px))',
        paddingRight: 'max(20px, env(safe-area-inset-right, 0px))',
      }}>
        <p className="hand-label" style={{ marginBottom: 10 }}>what we install for you —</p>
        <h2 className="font-display" style={{ fontSize: 'clamp(44px, 6vw, 88px)', lineHeight: 0.95, letterSpacing: '-0.03em', maxWidth: '16ch' }}>
          One WhatsApp system. <em style={{ color: RED }}>Six jobs, done every time.</em>
        </h2>
        <div className="does-grid">
          {v.does.map((d, i) => (
            <motion.div key={d}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <span className="font-hand" style={{ fontSize: 34, color: RED, lineHeight: 1, minWidth: 34 }}>{i + 1}</span>
              <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink)' }}>{d}</p>
            </motion.div>
          ))}
        </div>
        <RoughBox fill="#FBF8F2" fillStyle="solid" strokeWidth={1.4} style={{ marginTop: 'clamp(40px, 5vw, 64px)' }}>
          <div style={{ padding: '22px 26px', display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <Doodle name="heart" size={30} color={RED} strokeWidth={2.4} />
            <p style={{ flex: '1 1 300px', fontSize: 16, lineHeight: 1.6, color: 'var(--ink)' }}>{v.safety}</p>
          </div>
        </RoughBox>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 40 }}>
          <LeakCheckLink />
          <WhatsAppLink message={v.waMessage} />
        </div>
      </div>
      <style>{`
        .does-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px clamp(28px, 5vw, 72px); margin-top: clamp(40px, 5vw, 64px); }
        @media (max-width: 760px) { .does-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}

export default function VerticalPage() {
  const slug = useLocation().pathname.replace(/^\/|\/$/g, '')
  const v = VERTICALS[slug]
  if (!v) return <Navigate to="/" replace />

  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <SEO title={v.seoTitle} description={v.seoDescription} canonical={`/${v.slug}`} />
      <Nav />
      <HeroSection hand={v.hand} headline={v.headline} emphasis={v.emphasis} sub={v.sub} waMessage={v.waMessage} showVerticals={false} />
      <ProblemSection problems={v.problems} hand={`${v.label.toLowerCase()}, this is where it leaks —`} />
      <WhatItDoes v={v} />
      <LeakCalculator defaults={v.calc} />
      <ProcessSection />
      <ServicesSection />
      <WhyNotDIY />
      <FAQSection items={FAQ.filter(f => f.q !== 'Who is this for?')} />
      <Footer />
    </main>
  )
}
