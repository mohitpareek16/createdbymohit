import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, BookOpen, Users, Star, ArrowRight, Lock } from 'lucide-react'
import { getPublishedCourses, type Course } from '../data/courses'
import WordsPullUp from '../components/WordsPullUp'

function CourseCard({ course, index }: { course: Course; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={`/courses/${course.slug}`}
        className="group block bg-white border border-[#D8D4CB] rounded-3xl overflow-hidden hover:-translate-y-1 hover:border-[#051A24] hover:shadow-xl transition-all duration-300"
      >
        {/* Thumbnail */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {course.badge && (
              <span className="bg-accent text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full">
                {course.badge}
              </span>
            )}
            {course.comingSoon && (
              <span className="bg-[#051A24] text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full">
                Coming Soon
              </span>
            )}
          </div>
          {/* Preview overlay on hover */}
          <div className="absolute inset-0 bg-[#051A24]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-medium text-sm flex items-center gap-2">
              View course <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </span>
          </div>
        </div>

        {/* Card body */}
        <div className="p-7">
          {/* Meta row */}
          <div className="flex items-center gap-3 mb-3 font-mono text-[10px] uppercase tracking-widest text-[#8A8780]">
            <span>{course.category}</span>
            <span className="w-px h-3 bg-[#D8D4CB]" />
            <span>{course.level}</span>
            <span className="w-px h-3 bg-[#D8D4CB]" />
            <span>{course.language}</span>
          </div>

          <h2 className="font-mondwest text-2xl text-[#051A24] leading-snug mb-2 group-hover:text-accent transition-colors">
            {course.title}
          </h2>
          <p className="text-sm text-[#273C46]/70 leading-relaxed line-clamp-2 mb-5">
            {course.tagline}
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-5 text-[12px] text-[#8A8780] mb-6">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
              {course.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" strokeWidth={1.5} />
              {course.lessonsCount} lessons
            </span>
            {course.studentsCount > 0 && (
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" strokeWidth={1.5} />
                {course.studentsCount.toLocaleString()} students
              </span>
            )}
            {course.rating > 0 && (
              <span className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" strokeWidth={0} />
                {course.rating.toFixed(1)}
              </span>
            )}
          </div>

          {/* Price row */}
          <div className="flex items-center justify-between pt-5 border-t border-[#D8D4CB]">
            <div className="flex items-baseline gap-2">
              <span className="font-mondwest text-2xl text-[#051A24]">
                {course.currency === 'INR' ? '₹' : '$'}{course.price.toLocaleString()}
              </span>
              {course.originalPrice && (
                <span className="text-sm text-[#8A8780] line-through">
                  {course.currency === 'INR' ? '₹' : '$'}{course.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            {course.comingSoon ? (
              <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[#8A8780]">
                <Lock className="w-3 h-3" strokeWidth={2} />
                Waitlist open
              </span>
            ) : (
              <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-accent">
                Enroll now
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function CourseCatalog() {
  const courses = getPublishedCourses()

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 bg-white/90 backdrop-blur-xl border-b border-[#D8D4CB]">
        <Link to="/" className="font-mondwest text-lg font-semibold text-[#051A24] tracking-tight">
          <em>Created</em> By Mohit
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {['Work', 'Content', 'About'].map(l => (
            <Link
              key={l}
              to={`/#${l.toLowerCase()}`}
              className="font-mono text-[11px] uppercase tracking-widest text-[#273C46] hover:text-[#051A24] transition-colors"
            >
              {l}
            </Link>
          ))}
        </nav>
      </header>

      <main className="px-6 md:px-10 py-16 md:py-24 max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="font-mono text-[11px] tracking-widest uppercase text-[#8A8780] mb-4">
            All Courses
          </div>
          <h1 className="text-[clamp(40px,6vw,88px)] leading-[0.92] tracking-tight text-[#051A24] mb-5">
            <WordsPullUp
              segments={[
                { text: 'Learn design.' },
                { text: 'The right', className: '' },
                { text: 'way.', className: 'font-mondwest text-accent' },
              ]}
            />
          </h1>
          <p className="text-[#273C46]/70 text-base md:text-lg max-w-[52ch] leading-relaxed">
            Practical courses built from real projects — not theory slides. Every lesson is designed to make you faster, sharper, and more hireable.
          </p>
        </div>

        {/* Course grid */}
        {courses.length === 0 ? (
          <div className="text-center py-32 text-[#8A8780]">
            <p className="font-mondwest text-3xl mb-3">Courses coming soon.</p>
            <p className="text-sm">Join the waitlist on the home page to be first.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </div>
        )}
      </main>

      {/* Footer CTA */}
      <div className="border-t border-[#D8D4CB] py-12 px-6 md:px-10 bg-[#F5F3EE] text-center">
        <p className="font-mondwest text-2xl text-[#051A24] mb-4">
          Don't see what you need?
        </p>
        <p className="text-sm text-[#273C46]/70 mb-6">
          Tell Mohit what you want to learn — the next course might be for you.
        </p>
        <a
          href="mailto:hello@createdbymohit.com?subject=Course Request"
          className="inline-flex items-center gap-2 bg-[#051A24] text-white rounded-full px-7 py-3 text-sm font-medium hover:bg-accent transition-colors"
          style={{ boxShadow: '0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), inset 0 2px 8px 0 rgba(255,255,255,0.5)' }}
        >
          Request a course <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
        </a>
      </div>
    </div>
  )
}
