import { Helmet } from 'react-helmet-async'
import HeroSection         from '../components/HeroSection'
import MarqueeSection      from '../components/MarqueeSection'
import ProcessSection      from '../components/ProcessSection'
import ServicesSection     from '../components/ServicesSection'
import WorkSection         from '../components/WorkSection'
import LinkedInArticles    from '../components/LinkedInArticles'
import AboutSection        from '../components/AboutSection'
import PodcastSection      from '../components/PodcastSection'
import TestimonialCarousel from '../components/TestimonialCarousel'
import CourseSection       from '../components/CourseSection'
import Footer              from '../components/Footer'

export default function HomePage() {
  return (
    <main style={{ background: '#050505', minHeight: '100vh' }}>
      <Helmet>
        <title>Mohit Pareek — I Build AI Systems & Custom Software | India</title>
        <meta name="description" content="Mohit Pareek builds AI systems, custom software, and automation tools for businesses. Founder of Starting Core — we audit your business first, then build exactly what you need." />
        <link rel="canonical" href="https://createdbymohit.com/" />
        <meta property="og:title" content="Mohit Pareek — I Build AI Systems & Custom Software" />
        <meta property="og:description" content="Founder of Starting Core. We audit your business, find the real problem, then build the exact solution — AI systems, custom software, or automation tools." />
        <meta property="og:url" content="https://createdbymohit.com/" />
      </Helmet>
      <HeroSection />
      <MarqueeSection />
      <ProcessSection />
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
