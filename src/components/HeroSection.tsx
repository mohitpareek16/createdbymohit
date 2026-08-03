import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Button from './Button'
import WordsPullUp from './WordsPullUp'

const ANCHOR_LINKS = ['Work', 'Content', 'About']

const MOBILE_NAV = [
  { label: 'Work',    href: '#work',    type: 'anchor' },
  { label: 'Content', href: '#content', type: 'anchor' },
  { label: 'About',   href: '#about',   type: 'anchor' },
  { label: 'Courses', href: '/courses', type: 'link'   },
]

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  })

  return (
    <>
      {/* NAV */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-[#D8D4CB]' : 'bg-transparent'
        }`}
      >
        <Link to="/" className="font-mondwest text-lg font-semibold text-[#051A24] tracking-tight">
          <em>Created</em> By Mohit
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {ANCHOR_LINKS.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-[#273C46] hover:text-[#051A24] transition-colors font-mono uppercase tracking-wider text-[11px]"
            >
              {l}
            </a>
          ))}
          <Link
            to="/courses"
            className="text-sm text-[#273C46] hover:text-[#051A24] transition-colors font-mono uppercase tracking-wider text-[11px]"
          >
            Courses
          </Link>
          <Button variant="primary" href="#course" className="text-xs px-5 py-2.5">
            Join Waitlist
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-[#D8D4CB] text-[#051A24] hover:bg-[#F5F3EE] transition-colors"
          aria-label="Open menu"
        >
          <Menu size={18} />
        </button>
      </header>

      {/* MOBILE FULL-SCREEN OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[60] bg-[#051A24] flex flex-col"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-5 flex-shrink-0">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="font-mondwest text-lg text-white tracking-tight"
              >
                <em>Created</em> By Mohit
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:border-white/50 transition-colors"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Big staggered links */}
            <nav className="flex-1 flex flex-col justify-center px-6 gap-0 overflow-hidden">
              {MOBILE_NAV.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 56 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 28 }}
                  transition={{ delay: 0.06 + i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                  {item.type === 'link' ? (
                    <Link
                      to={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-mondwest block text-white/75 hover:text-white leading-none py-3 border-b border-white/10 transition-colors"
                      style={{ fontSize: 'clamp(54px, 14vw, 80px)' }}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-mondwest block text-white/75 hover:text-white leading-none py-3 border-b border-white/10 transition-colors"
                      style={{ fontSize: 'clamp(54px, 14vw, 80px)' }}
                    >
                      {item.label}
                    </a>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Overlay footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.34, duration: 0.4 }}
              className="px-6 py-7 border-t border-white/10 flex items-center justify-between"
            >
              <a
                href="mailto:hello@createdbymohit.com"
                className="font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white/70 transition-colors"
              >
                hello@createdbymohit.com
              </a>
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3A]" />
                Available · Q3 2026
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section className="min-h-[100svh] pt-28 pb-16 px-6 md:px-10">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-center">
          {/* LEFT */}
          <div>
            {/* Meta */}
            <motion.div
              {...fadeUp(0.1)}
              className="flex items-center gap-3 mb-10 font-mono text-[11px] uppercase tracking-widest text-[#8A8780]"
            >
              <span
                className="w-2 h-2 rounded-full bg-[#C41E3A]"
                style={{
                  boxShadow: '0 0 0 0 rgba(196,30,58,0.6)',
                  animation: 'heroPulse 2.2s infinite',
                }}
              />
              <span>Available · Q3 2026</span>
              <span className="w-px h-3 bg-[#D8D4CB]" />
              <span>Jaipur / Remote</span>
              <span className="w-px h-3 bg-[#D8D4CB]" />
              <span>UI · UX · Product</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              {...fadeUp(0.2)}
              className="text-[clamp(40px,7vw,88px)] leading-[0.92] tracking-tight text-[#051A24] mb-8"
            >
              <WordsPullUp
                segments={[
                  { text: 'Build the next wave,', className: '' },
                  { text: 'the Mohit', className: 'font-mondwest' },
                  { text: 'way.', className: 'font-mondwest text-[#C41E3A]' },
                ]}
                delayOffset={0.2}
              />
            </motion.h1>

            {/* Description */}
            <motion.div {...fadeUp(0.5)} className="flex flex-col gap-5 max-w-[480px] text-[#051A24]/75 text-sm md:text-base leading-relaxed">
              <p>
                I spent six years building digital products for clients across India and around the world. I founded{' '}
                <strong className="text-[#051A24] font-medium">Starting Core</strong> to bring that same level of thinking to the businesses shaping what comes next.
              </p>
              <p>
                The studio is deliberately focused. I guide the creative vision on every project, backed by a design crew that moves fast without cutting corners.
              </p>
              <p className="font-medium text-[#051A24]">Projects start at ₹50,000 per month.</p>
            </motion.div>

            {/* Buttons */}
            <motion.div {...fadeUp(0.65)} className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button variant="primary" href="mailto:hello@createdbymohit.com">
                Start a project
              </Button>
              <Button variant="secondary" href="#work">
                View work
              </Button>
            </motion.div>
          </div>

          {/* RIGHT - PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            {/* Glow */}
            <div className="absolute -inset-8 bg-[#C41E3A]/8 rounded-full blur-3xl" />
            <img
              src="/mohit-pareek.jpg"
              alt="Mohit Pareek — UI/UX Designer"
              className="relative w-full rounded-3xl object-cover shadow-2xl border border-[#D8D4CB]/50"
              style={{ aspectRatio: '3/4', objectPosition: 'center top' }}
            />
            {/* Floating tag */}
            <div
              className="absolute bottom-6 left-6 flex items-center gap-3 bg-white/90 backdrop-blur-xl rounded-2xl px-4 py-3 border border-[#D8D4CB]"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}
            >
              <div className="w-2 h-2 rounded-full bg-[#C41E3A] animate-pulse" />
              <span className="text-xs font-mono text-[#051A24] uppercase tracking-wider">
                Available for projects
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes heroPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(196,30,58,0.5); }
          50%       { box-shadow: 0 0 0 9px rgba(196,30,58,0); }
        }
      `}</style>
    </>
  )
}
