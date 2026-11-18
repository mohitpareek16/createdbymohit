import Nav from '../components/Nav'
import SEO from '../components/SEO'
import LeakCalculator from '../components/LeakCalculator'
import ServicesSection from '../components/ServicesSection'
import Footer from '../components/Footer'

export default function LeakCalculatorPage() {
  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <SEO
        title="Leak Calculator: what slow replies cost your business | Starting Core"
        description="Estimate how much revenue your business loses every month to slow WhatsApp and enquiry replies. Free calculator from Starting Core."
        canonical="/leak-calculator"
      />
      <Nav />
      <div style={{ paddingTop: 60 }}>
        <LeakCalculator />
      </div>
      <ServicesSection />
      <Footer />
    </main>
  )
}
