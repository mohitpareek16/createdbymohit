import Nav from '../components/Nav'
import SEO from '../components/SEO'
import ServicesSection from '../components/ServicesSection'
import ProcessSection from '../components/ProcessSection'
import WhyNotDIY from '../components/WhyNotDIY'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'
import Mark from '../components/sketch/Mark'
import { RED } from '../components/sketch/RoughBox'

export default function ServicesPage() {
  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <SEO
        title="Pricing: Leak Audit, Lead Recovery System, Growth Ops | Starting Core"
        description="Leak Teardown free. Leak Audit ₹15,000. Lead Recovery System ₹75,000–1,25,000, live in 2–3 weeks. Growth Ops from ₹25,000 a month. WhatsApp lead recovery for clinics and real estate."
        canonical="/services"
      />
      <Nav />
      <section style={{ padding: 'clamp(130px, 15vw, 180px) 0 0' }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          paddingLeft: 'max(20px, env(safe-area-inset-left, 0px))',
          paddingRight: 'max(20px, env(safe-area-inset-right, 0px))',
        }}>
          <p className="hand-label" style={{ marginBottom: 10 }}>offers & prices —</p>
          <h1 className="font-display" style={{ fontSize: 'clamp(54px, 8vw, 128px)', lineHeight: 0.9, letterSpacing: '-0.035em', maxWidth: '13ch' }}>
            Four offers. <em style={{ color: RED }}><Mark type="highlight" iterations={1} padding={[0, 6]}>Every price</Mark> on the page.</em>
          </h1>
          <p style={{ fontSize: 'clamp(17px, 1.6vw, 20px)', lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: '52ch', marginTop: 28 }}>
            Start with a free teardown, measure properly with a ₹15,000 audit, or go straight to the build. Every proposal is one page with three options. WhatsApp and platform fees are paid by you, at cost.
          </p>
        </div>
      </section>
      <ServicesSection showHeading={false} />
      <ProcessSection />
      <WhyNotDIY />
      <FAQSection />
      <Footer />
    </main>
  )
}
