import HeroSection from '../components/HeroSection'
import MarqueeSection from '../components/MarqueeSection'
import WorkSection from '../components/WorkSection'
import LinkedInArticles from '../components/LinkedInArticles'
import AboutSection from '../components/AboutSection'
import TestimonialCarousel from '../components/TestimonialCarousel'
import CourseSection from '../components/CourseSection'
import Footer from '../components/Footer'
import BottomNav from '../components/BottomNav'

export default function HomePage() {
  return (
    <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <HeroSection />
      <MarqueeSection />
      <WorkSection />
      <LinkedInArticles />
      <AboutSection />
      <TestimonialCarousel />
      <CourseSection />
      <Footer />
      <BottomNav />
    </main>
  )
}
