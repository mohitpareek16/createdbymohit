import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Clock, BookOpen, Users, Star, ArrowRight, Lock } from 'lucide-react'
import { getPublishedCourses, type Course } from '../data/courses'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import Footer from '../components/Footer'

function CourseCard({ course, index }: { course: Course; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={`/courses/${course.slug}`}
        className="group block rounded-3xl overflow-hidden transition-all duration-300"
        style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
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
          <div className="flex items-center gap-3 mb-3 font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
            <span>{course.category}</span>
            <span style={{ width: '1px', height: '12px', background: 'var(--border-strong)', display: 'inline-block' }} />
            <span>{course.level}</span>
            <span style={{ width: '1px', height: '12px', background: 'var(--border-strong)', display: 'inline-block' }} />
            <span>{course.language}</span>
          </div>

          <h2 className="font-mondwest text-2xl leading-snug mb-2 group-hover:text-accent transition-colors" style={{ color: 'var(--text)' }}>
            {course.title}
          </h2>
          <p className="text-sm leading-relaxed line-clamp-2 mb-5" style={{ color: 'var(--muted)' }}>
            {course.tagline}
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-5 text-[12px] mb-6" style={{ color: 'var(--muted)' }}>
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
          <div className="flex items-center justify-between pt-5" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="flex items-baseline gap-2">
              <span className="font-mondwest text-2xl" style={{ color: 'var(--text)' }}>
                {course.currency === 'INR' ? '₹' : '$'}{course.price.toLocaleString()}
              </span>
              {course.originalPrice && (
                <span className="text-sm line-through" style={{ color: 'var(--muted)' }}>
                  {course.currency === 'INR' ? '₹' : '$'}{course.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            {course.comingSoon ? (
              <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
                <Lock className="w-3 h-3" strokeWidth={2} />
                Waitlist open
              </span>
            ) : (
              <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
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
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <SEO
        title="Design Courses by Mohit Pareek | UI/UX Masterclass India"
        description="Practical UI/UX design courses built from real projects — not theory slides. Learn design, product thinking, and freelancing from Mohit Pareek, founder of Starting Core."
        canonical="/courses"
      />
      <Nav />

      {/* Hero */}
      <section style={{ paddingTop: 'clamp(120px,15vw,180px)', paddingBottom: 'clamp(48px,5vw,80px)', paddingInline: '24px', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[1320px] mx-auto" ref={heroRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="font-mono uppercase"
            style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '20px' }}
          >
            <span style={{ color: 'var(--accent)', marginRight: '6px' }}>··</span>DESIGN EDUCATION
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne"
            style={{ fontSize: 'clamp(40px,6vw,88px)', lineHeight: 0.92, letterSpacing: '-0.04em', fontWeight: 800, color: 'var(--text)', marginBottom: '20px' }}
          >
            Learn design that<br />
            <span style={{ color: 'var(--accent)' }}>actually ships.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ fontSize: 'clamp(14px,1.4vw,17px)', lineHeight: 1.7, color: 'var(--muted)', maxWidth: '52ch' }}
          >
            Practical courses built from real projects — not theory slides. Every lesson is designed to make you faster, sharper, and more hireable.
          </motion.p>
        </div>
      </section>

      <main style={{ padding: 'clamp(56px,6vw,96px) 24px', maxWidth: '1320px', margin: '0 auto' }}>
        {courses.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '96px 0', color: 'var(--muted)' }}>
            <p className="font-syne" style={{ fontSize: '28px', fontWeight: 800, marginBottom: '12px', color: 'var(--text)' }}>Courses coming soon.</p>
            <p style={{ fontSize: '14px' }}>Join the waitlist on the home page to be first.</p>
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
      <section style={{ borderTop: '1px solid var(--border)', padding: 'clamp(56px,6vw,80px) 24px', background: 'var(--text)' }}>
        <div className="max-w-[1320px] mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p className="font-syne" style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 0.95, color: '#F5F3EE' }}>
            Don't see what<br />
            <span style={{ color: 'var(--accent)' }}>you need?</span>
          </p>
          <p style={{ fontSize: '15px', color: 'rgba(245,243,238,0.5)', maxWidth: '44ch' }}>
            Tell Mohit what you want to learn — the next course might be built for you.
          </p>
          <a href="mailto:hello@createdbymohit.com?subject=Course Request"
            className="bracket-link"
            style={{ borderColor: 'var(--accent)', color: 'var(--accent)', textDecoration: 'none', width: 'fit-content' }}>
            [ Request a Course ]
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
