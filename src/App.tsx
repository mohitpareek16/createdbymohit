import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CourseCatalog from './pages/CourseCatalog'
import CourseDetail from './pages/CourseDetail'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CourseCatalog />} />
      <Route path="/courses/:slug" element={<CourseDetail />} />
    </Routes>
  )
}
