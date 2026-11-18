import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import CustomCursor from './components/CustomCursor'
import IntroScreen from './components/IntroScreen'
import NewsletterModal from './components/NewsletterModal'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import PageWrapper from './components/PageWrapper'
import HomePage from './pages/HomePage'
const AboutPage = lazy(() => import('./pages/AboutPage'))
const WorkPage = lazy(() => import('./pages/WorkPage'))
const CaseStudy = lazy(() => import('./pages/CaseStudy'))
const CourseCatalog = lazy(() => import('./pages/CourseCatalog'))
const CourseDetail = lazy(() => import('./pages/CourseDetail'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const BookPage = lazy(() => import('./pages/BookPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const BlogList = lazy(() => import('./pages/BlogList'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const StartingCorePage = lazy(() => import('./pages/StartingCorePage'))
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'))
const MediaPage = lazy(() => import('./pages/MediaPage'))
const WebsiteCase = lazy(() => import('./pages/WebsiteCase'))
const VerticalPage = lazy(() => import('./pages/VerticalPage'))
const LeakCalculatorPage = lazy(() => import('./pages/LeakCalculatorPage'))
const FaqIndex = lazy(() => import('./pages/FaqIndex'))
const FaqPost = lazy(() => import('./pages/FaqPost'))
const GlossaryIndex = lazy(() => import('./pages/GlossaryIndex'))
const GlossaryPost = lazy(() => import('./pages/GlossaryPost'))

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Suspense fallback={<div style={{ minHeight: '100vh' }} />} key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/work" element={<PageWrapper><WorkPage /></PageWrapper>} />
        <Route path="/work/site/:slug" element={<PageWrapper><WebsiteCase /></PageWrapper>} />
        <Route path="/work/:slug" element={<PageWrapper><CaseStudy /></PageWrapper>} />
        <Route path="/courses" element={<PageWrapper><CourseCatalog /></PageWrapper>} />
        <Route path="/courses/:slug" element={<PageWrapper><CourseDetail /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
        <Route path="/book" element={<PageWrapper><BookPage /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><BlogList /></PageWrapper>} />
        <Route path="/blog/:slug" element={<PageWrapper><BlogPost /></PageWrapper>} />
        <Route path="/starting-core" element={<PageWrapper><StartingCorePage /></PageWrapper>} />
        <Route path="/testimonials" element={<PageWrapper><TestimonialsPage /></PageWrapper>} />
        <Route path="/media" element={<PageWrapper><MediaPage /></PageWrapper>} />
        <Route path="/faq" element={<PageWrapper><FaqIndex /></PageWrapper>} />
        <Route path="/faq/:slug" element={<PageWrapper><FaqPost /></PageWrapper>} />
        <Route path="/glossary" element={<PageWrapper><GlossaryIndex /></PageWrapper>} />
        <Route path="/glossary/:slug" element={<PageWrapper><GlossaryPost /></PageWrapper>} />
        <Route path="/clinics" element={<PageWrapper><VerticalPage /></PageWrapper>} />
        <Route path="/real-estate" element={<PageWrapper><VerticalPage /></PageWrapper>} />
        <Route path="/leak-calculator" element={<PageWrapper><LeakCalculatorPage /></PageWrapper>} />
      </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <IntroScreen />
      <NewsletterModal />
      <CustomCursor />
      <ScrollToTop />
      <AnimatedRoutes />
      <WhatsAppButton />
    </ThemeProvider>
  )
}
