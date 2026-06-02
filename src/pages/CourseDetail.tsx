import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Clock, BookOpen, Users, Star, Check, Play, ChevronDown,
  ArrowRight, Lock, Globe, RefreshCw, Award, MessageCircle,
} from 'lucide-react'
import { getCourse, type Module } from '../data/courses'
import WordsPullUp from '../components/WordsPullUp'

// ── Curriculum accordion module ──────────────────────────────
function CurriculumModule({ mod, index }: { mod: Module; index: number }) {
  const [open, setOpen] = useState(index === 0)
  const totalDuration = mod.lessons.reduce((acc, l) => {
    const [m] = l.duration.split(' ')
    return acc + parseInt(m, 10)
  }, 0)

  return (
    <div className="border border-[#D8D4CB] rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-6 py-5 bg-[#F5F3EE] hover:bg-[#ECEAE4] transition-colors text-left"
      >
        <div>
          <span className="font-medium text-[#051A24] text-sm md:text-base">{mod.title}</span>
          <div className="flex items-center gap-3 mt-1 font-mono text-[10px] uppercase tracking-wider text-[#8A8780]">
            <span>{mod.lessons.length} lessons</span>
            <span className="w-px h-3 bg-[#D8D4CB]" />
            <span>{totalDuration} min</span>
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-[#8A8780] transition-transform duration-300 flex-none ${open ? 'rotate-180' : ''}`}
          strokeWidth={1.5}
        />
      </button>

      {open && (
        <div className="divide-y divide-[#D8D4CB]">
          {mod.lessons.map(lesson => (
            <div key={lesson.id} className="flex items-center gap-4 px-6 py-4">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-none bg-[#F5F3EE]">
                {lesson.type === 'video' ? (
                  <Play className="w-3 h-3 text-[#051A24]" strokeWidth={2} />
                ) : lesson.type === 'quiz' ? (
                  <Check className="w-3 h-3 text-accent" strokeWidth={2.5} />
                ) : (
                  <BookOpen className="w-3 h-3 text-[#273C46]" strokeWidth={1.5} />
                )}
              </div>
              <span className="text-sm text-[#051A24] flex-1">{lesson.title}</span>
              <div className="flex items-center gap-3 flex-none">
                {lesson.preview ? (
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent border border-accent/30 rounded-full px-2.5 py-1">
                    Preview
                  </span>
                ) : (
                  <Lock className="w-3.5 h-3.5 text-[#D8D4CB]" strokeWidth={1.5} />
                )}
                <span className="font-mono text-[11px] text-[#8A8780] w-14 text-right">{lesson.duration}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Sticky buy card ───────────────────────────────────────────
function BuyCard({ course }: { course: ReturnType<typeof getCourse> }) {
  if (!course) return null

  return (
    <div
      className="bg-white border border-[#D8D4CB] rounded-3xl p-7 sticky top-24"
      style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}
    >
      {/* Thumbnail preview */}
      <div className="rounded-2xl overflow-hidden mb-6" style={{ aspectRatio: '16/9' }}>
        <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3 mb-1">
        <span className="font-mondwest text-4xl text-[#051A24]">
          {course.currency === 'INR' ? '₹' : '$'}{course.price.toLocaleString()}
        </span>
        {course.originalPrice && (
          <span className="text-base text-[#8A8780] line-through">
            {course.currency === 'INR' ? '₹' : '$'}{course.originalPrice.toLocaleString()}
          </span>
        )}
        {course.originalPrice && (
          <span className="text-sm font-medium text-accent">
            {Math.round((1 - course.price / course.originalPrice) * 100)}% off
          </span>
        )}
      </div>
      {course.comingSoon && (
        <p className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780] mb-5">
          Founding-member price · Ends at launch
        </p>
      )}

      {/* CTA */}
      <div className="flex flex-col gap-3 mt-5">
        {course.comingSoon ? (
          <>
            <a
              href="#waitlist"
              className="w-full flex items-center justify-center gap-2 bg-[#051A24] text-white rounded-full py-4 text-sm font-medium hover:bg-accent transition-colors"
              style={{ boxShadow: '0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), inset 0 2px 8px 0 rgba(255,255,255,0.5)' }}
            >
              Join the waitlist
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <p className="text-center font-mono text-[10px] text-[#8A8780] uppercase tracking-wider">
              Free · No commitment
            </p>
          </>
        ) : course.paymentLink ? (
          <>
            <a
              href={course.paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#051A24] text-white rounded-full py-4 text-sm font-medium hover:bg-accent transition-colors"
              style={{ boxShadow: '0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), inset 0 2px 8px 0 rgba(255,255,255,0.5)' }}
            >
              Enroll now
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <p className="text-center text-xs text-[#8A8780]">30-day money-back guarantee</p>
          </>
        ) : (
          <a
            href="mailto:hello@createdbymohit.com"
            className="w-full flex items-center justify-center gap-2 bg-[#051A24] text-white rounded-full py-4 text-sm font-medium hover:bg-accent transition-colors"
          >
            Contact for enrollment
          </a>
        )}
      </div>

      {/* Features list */}
      <div className="mt-7 pt-6 border-t border-[#D8D4CB] flex flex-col gap-3">
        <p className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780] mb-1">
          This course includes
        </p>
        {[
          { icon: Play, text: course.duration + ' of video' },
          { icon: BookOpen, text: course.lessonsCount + ' lessons' },
          { icon: RefreshCw, text: 'Lifetime access + updates' },
          { icon: Award, text: 'Certificate of completion' },
          { icon: Globe, text: course.language },
          { icon: MessageCircle, text: 'Monthly live Q&A with Mohit' },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-3 text-sm text-[#273C46]">
            <Icon className="w-4 h-4 text-[#8A8780] flex-none" strokeWidth={1.5} />
            {text}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────────
export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>()
  const course = getCourse(slug ?? '')

  if (!course) return <Navigate to="/courses" replace />

  const totalLessons = course.modules.reduce((a, m) => a + m.lessons.length, 0)
  const previewLessons = course.modules.flatMap(m => m.lessons).filter(l => l.preview)

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 bg-white/90 backdrop-blur-xl border-b border-[#D8D4CB]">
        <Link to="/" className="font-mondwest text-lg font-semibold text-[#051A24] tracking-tight">
          <em>Created</em> By Mohit
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/courses" className="font-mono text-[11px] uppercase tracking-widest text-[#273C46] hover:text-[#051A24] transition-colors hidden md:block">
            ← All Courses
          </Link>
          {!course.comingSoon && course.paymentLink && (
            <a
              href={course.paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#051A24] text-white rounded-full px-5 py-2.5 text-xs font-medium hover:bg-accent transition-colors"
            >
              Enroll — {course.currency === 'INR' ? '₹' : '$'}{course.price.toLocaleString()}
            </a>
          )}
        </div>
      </header>

      {/* Hero */}
      <div className="bg-[#051A24] pt-16 pb-20 px-6 md:px-10">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-start">
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/40 mb-6">
              <Link to="/courses" className="hover:text-white/60 transition-colors">Courses</Link>
              <span>/</span>
              <span className="text-white/60">{course.category}</span>
            </div>

            {/* Badges */}
            <div className="flex gap-2 mb-5">
              {course.badge && (
                <span className="bg-accent text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full">
                  {course.badge}
                </span>
              )}
              {course.comingSoon && (
                <span className="border border-white/20 text-white/70 text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full">
                  Coming Soon
                </span>
              )}
              <span className="border border-white/20 text-white/70 text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full">
                {course.level}
              </span>
            </div>

            <h1 className="font-mondwest text-[clamp(32px,5vw,64px)] text-white leading-[0.95] tracking-tight mb-5">
              {course.title}
            </h1>
            <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-[56ch] mb-8">
              {course.tagline}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/60">
              {course.rating > 0 && (
                <span className="flex items-center gap-1.5 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" strokeWidth={0} />
                  {course.rating.toFixed(1)} ({course.reviewsCount.toLocaleString()} reviews)
                </span>
              )}
              {course.studentsCount > 0 && (
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" strokeWidth={1.5} />
                  {course.studentsCount.toLocaleString()} students
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" strokeWidth={1.5} />
                {course.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" strokeWidth={1.5} />
                {totalLessons} lessons
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4" strokeWidth={1.5} />
                {course.language}
              </span>
            </div>

            {/* Instructor */}
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/10">
              <img
                src="/mohit-pareek.jpg"
                alt="Mohit Pareek"
                className="w-12 h-12 rounded-full object-cover object-top flex-none border border-white/20"
              />
              <div>
                <p className="text-white text-sm font-medium">Mohit Pareek</p>
                <p className="text-white/50 text-xs">UI/UX Designer & Educator · Starting Core</p>
              </div>
            </div>
          </div>

          {/* Buy card — desktop shows here */}
          <div className="hidden lg:block">
            <BuyCard course={course} />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-16 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-start">
        <div className="flex flex-col gap-14">
          {/* What you'll learn */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-mondwest text-3xl text-[#051A24] mb-8">
              What you'll <em className="text-accent">learn</em>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {course.outcomes.map(outcome => (
                <div key={outcome} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-none mt-0.5">
                    <Check className="w-3 h-3 text-accent" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-[#273C46] leading-snug">{outcome}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Curriculum */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-baseline justify-between mb-6">
              <h2 className="font-mondwest text-3xl text-[#051A24]">
                Course <em className="text-accent">curriculum</em>
              </h2>
              <span className="font-mono text-[11px] text-[#8A8780] uppercase tracking-wider">
                {totalLessons} lessons · {course.modules.length} modules
              </span>
            </div>
            {previewLessons.length > 0 && (
              <p className="text-sm text-[#8A8780] mb-6">
                {previewLessons.length} free preview lesson{previewLessons.length > 1 ? 's' : ''} — no sign-up needed.
              </p>
            )}
            <div className="flex flex-col gap-3">
              {course.modules.map((mod, i) => (
                <CurriculumModule key={mod.title} mod={mod} index={i} />
              ))}
            </div>
          </motion.section>

          {/* About instructor */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#F5F3EE] rounded-3xl p-8 md:p-10"
          >
            <h2 className="font-mondwest text-3xl text-[#051A24] mb-7">
              Your <em className="text-accent">instructor</em>
            </h2>
            <div className="flex items-start gap-6">
              <img
                src="/mohit-pareek.jpg"
                alt="Mohit Pareek"
                className="w-20 h-20 rounded-2xl object-cover object-top flex-none border border-[#D8D4CB]"
              />
              <div>
                <h3 className="font-mondwest text-xl text-[#051A24] mb-1">Mohit Pareek</h3>
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#8A8780] mb-4">
                  UI/UX Designer & Educator · Founder, Starting Core
                </p>
                <p className="text-sm text-[#273C46] leading-relaxed max-w-[56ch]">
                  Six years building digital products for clients across India. Founder of Starting Core. Creator of design content followed by 1M+ designers. Mohit teaches the psychology and principles that most courses skip — the parts that actually make interfaces work.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Waitlist form — mobile + linked from buy card */}
          {course.comingSoon && (
            <motion.section
              id="waitlist"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#051A24] rounded-3xl p-8 md:p-10"
            >
              <h2 className="font-mondwest text-3xl text-white mb-2">
                Be first in line.
              </h2>
              <p className="text-white/60 text-sm mb-7">
                Get early access and founding-member pricing when the course launches.
              </p>
              <WaitlistForm />
            </motion.section>
          )}
        </div>

        {/* Buy card — mobile shows here */}
        <div className="lg:hidden">
          <BuyCard course={course} />
        </div>
      </div>
    </div>
  )
}

function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  return done ? (
    <div className="flex items-center gap-3 text-white">
      <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
        <Check className="w-4 h-4 text-accent" strokeWidth={2.5} />
      </span>
      <div>
        <p className="font-medium text-sm">You're on the list!</p>
        <p className="text-white/50 text-xs mt-0.5">We'll email you when the course opens.</p>
      </div>
    </div>
  ) : (
    <div className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 bg-transparent border border-white/20 rounded-full px-5 py-3 text-white text-sm placeholder-white/30 outline-none focus:border-accent transition-colors"
      />
      <button
        onClick={() => { if (email) setDone(true) }}
        className="bg-accent text-white rounded-full px-7 py-3 text-sm font-medium hover:bg-accent/80 transition-colors whitespace-nowrap flex-none"
      >
        Join waitlist
      </button>
    </div>
  )
}
