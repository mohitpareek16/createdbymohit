import { Helmet } from 'react-helmet-async'
import Nav            from '../components/Nav'
import HeroSection    from '../components/HeroSection'
import MarqueeSection from '../components/MarqueeSection'
import ProblemSection from '../components/ProblemSection'
import ProcessSection from '../components/ProcessSection'
import ServicesSection from '../components/ServicesSection'
import LeakCalculator from '../components/LeakCalculator'
import WhyNotDIY      from '../components/WhyNotDIY'
import AboutSection   from '../components/AboutSection'
import WorkSection    from '../components/WorkSection'
import FAQSection     from '../components/FAQSection'
import Footer         from '../components/Footer'

const TITLE = 'Starting Core — Every enquiry answered in under a minute | WhatsApp lead recovery'
const DESC = 'Starting Core installs WhatsApp lead-recovery systems for clinics and real estate teams: instant reply, booking, five follow-ups and a monthly rupee report. Live in 3 weeks. Founded by Mohit Pareek, Jaipur.'

export default function HomePage() {
  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <link rel="canonical" href="https://createdbymohit.com/" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:url" content="https://createdbymohit.com/" />
      </Helmet>
      <Nav />
      <HeroSection />
      <MarqueeSection />
      <ProblemSection />
      <ProcessSection />
      <ServicesSection />
      <LeakCalculator />
      <WhyNotDIY />
      <AboutSection />
      <WorkSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
