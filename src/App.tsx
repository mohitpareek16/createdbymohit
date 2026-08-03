import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import CustomCursor from './components/CustomCursor'
import ScrollToTop from './components/ScrollToTop'
import PageWrapper from './components/PageWrapper'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import WorkPage from './pages/WorkPage'
import CaseStudy from './pages/CaseStudy'
import CourseCatalog from './pages/CourseCatalog'
import CourseDetail from './pages/CourseDetail'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/work" element={<PageWrapper><WorkPage /></PageWrapper>} />
        <Route path="/work/:slug" element={<PageWrapper><CaseStudy /></PageWrapper>} />
        <Route path="/courses" element={<PageWrapper><CourseCatalog /></PageWrapper>} />
        <Route path="/courses/:slug" element={<PageWrapper><CourseDetail /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      <AnimatedRoutes />
    </>
  )
}
