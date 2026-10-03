import { Helmet } from 'react-helmet-async'
import HeroSection         from '../components/HeroSection'
import MarqueeSection      from '../components/MarqueeSection'
import WorkSection         from '../components/WorkSection'
import ServicesSection     from '../components/ServicesSection'
import LinkedInArticles    from '../components/LinkedInArticles'
import AboutSection        from '../components/AboutSection'
import PodcastSection      from '../components/PodcastSection'
import TestimonialCarousel from '../components/TestimonialCarousel'
import CourseSection       from '../components/CourseSection'
import Footer              from '../components/Footer'

export default function HomePage() {
  return (
    <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <Helmet>
        <title>Mohit Pareek — Custom AI & Development for Businesses | India</title>
        <meta name="description" content="Mohit Pareek is the founder of Starting Core — an AI automation and custom development agency in India. We audit your business, understand the real problem, then build the right solution: custom dev, AI integration, or both." />
        <link rel="canonical" href="https://createdbymohit.com/" />
        <meta property="og:title" content="Mohit Pareek — Custom AI & Development for Businesses" />
        <meta property="og:description" content="Founder of Starting Core. We build AI systems and custom tools that solve specific business problems — not templates, not generic automations." />
        <meta property="og:url" content="https://createdbymohit.com/" />
      </Helmet>
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <WorkSection />
      <LinkedInArticles />
      <AboutSection />
      <PodcastSection />
      <TestimonialCarousel />
      <CourseSection />
      <Footer />
    </main>
  )
}
