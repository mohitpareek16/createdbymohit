import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import PageWrapper from './components/PageWrapper'
import HomePage from './pages/HomePage'

const BlogList = lazy(() => import('./pages/BlogList'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const WebsiteCase = lazy(() => import('./pages/WebsiteCase'))
const CourseCatalog = lazy(() => import('./pages/CourseCatalog'))
const CourseDetail = lazy(() => import('./pages/CourseDetail'))
const BookPage = lazy(() => import('./pages/BookPage'))
const FaqIndex = lazy(() => import('./pages/FaqIndex'))
const FaqPost = lazy(() => import('./pages/FaqPost'))
const GlossaryIndex = lazy(() => import('./pages/GlossaryIndex'))
const GlossaryPost = lazy(() => import('./pages/GlossaryPost'))

const REDIRECTS: Record<string, string> = {
  '/about': '/#about',
  '/work': '/#work',
  '/services': '/#approach',
  '/contact': '/#contact',
  '/starting-core': '/#about',
  '/testimonials': '/#work',
  '/media': '/#community',
  '/clinics': '/',
  '/real-estate': '/',
  '/leak-calculator': '/',
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Suspense fallback={<div style={{ minHeight: '100vh' }} />} key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper><BlogList /></PageWrapper>} />
          <Route path="/blog/:slug" element={<PageWrapper><BlogPost /></PageWrapper>} />
          <Route path="/work/site/:slug" element={<PageWrapper><WebsiteCase /></PageWrapper>} />
          <Route path="/work/:slug" element={<Navigate to="/#work" replace />} />
          <Route path="/courses" element={<PageWrapper><CourseCatalog /></PageWrapper>} />
          <Route path="/courses/:slug" element={<PageWrapper><CourseDetail /></PageWrapper>} />
          <Route path="/book" element={<PageWrapper><BookPage /></PageWrapper>} />
          <Route path="/faq" element={<PageWrapper><FaqIndex /></PageWrapper>} />
          <Route path="/faq/:slug" element={<PageWrapper><FaqPost /></PageWrapper>} />
          <Route path="/glossary" element={<PageWrapper><GlossaryIndex /></PageWrapper>} />
          <Route path="/glossary/:slug" element={<PageWrapper><GlossaryPost /></PageWrapper>} />
          {Object.entries(REDIRECTS).map(([from, to]) => <Route key={from} path={from} element={<Navigate to={to} replace />} />)}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <AnimatedRoutes />
      <WhatsAppButton />
    </>
  )
}
