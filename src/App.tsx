import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import CustomCursor from './components/CustomCursor'
import IntroScreen from './components/IntroScreen'
import NewsletterModal from './components/NewsletterModal'
import ScrollToTop from './components/ScrollToTop'
import PageWrapper from './components/PageWrapper'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import WorkPage from './pages/WorkPage'
import CaseStudy from './pages/CaseStudy'
import CourseCatalog from './pages/CourseCatalog'
import CourseDetail from './pages/CourseDetail'
import ContactPage from './pages/ContactPage'
import BookPage from './pages/BookPage'
import ServicesPage from './pages/ServicesPage'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import StartingCorePage from './pages/StartingCorePage'
import TestimonialsPage from './pages/TestimonialsPage'
import MediaPage from './pages/MediaPage'
import WebsiteCase from './pages/WebsiteCase'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
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
      </Routes>
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
    </ThemeProvider>
  )
}
