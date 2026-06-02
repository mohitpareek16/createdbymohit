import HeroSection from '../components/HeroSection'
import MarqueeSection from '../components/MarqueeSection'
import StatsBento from '../components/StatsBento'
import WorkSection from '../components/WorkSection'
import ContentSection from '../components/ContentSection'
import CourseSection from '../components/CourseSection'
import AboutSection from '../components/AboutSection'
import TestimonialCarousel from '../components/TestimonialCarousel'
import PricingSection from '../components/PricingSection'
import PartnerSection from '../components/PartnerSection'
import Footer from '../components/Footer'
import BottomNav from '../components/BottomNav'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MarqueeSection />
      <StatsBento />
      <WorkSection />
      <ContentSection />
      <CourseSection />
      <AboutSection />
      <TestimonialCarousel />
      <PricingSection />
      <PartnerSection />
      <Footer />
      <BottomNav />
    </main>
  )
}
