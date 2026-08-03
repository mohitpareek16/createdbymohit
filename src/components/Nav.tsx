import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Button from './Button'

const navLinkClass =
  'text-[#273C46] hover:text-[#051A24] transition-colors font-mono uppercase tracking-wider text-[11px]'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

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

  const mobileLinks = [
    { label: 'Work',    href: '/work',                            type: 'link' },
    { label: 'Content', href: isHome ? '#content' : '/#content', type: 'a' },
    { label: 'About',   href: '/about',                           type: 'link' },
    { label: 'Courses', href: '/courses',                         type: 'link' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-[#D8D4CB]' : 'bg-transparent'
        }`}
      >
        <Link to="/" className="font-mondwest text-lg font-semibold text-[#051A24] tracking-tight">
          <em>Created</em> By Mohit
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/work" className={navLinkClass}>Work</Link>
          <a href={isHome ? '#content' : '/#content'} className={navLinkClass}>Content</a>
          <Link to="/about" className={navLinkClass}>About</Link>
          <Link to="/courses" className={navLinkClass}>Courses</Link>
          <Button variant="primary" href="mailto:hello@createdbymohit.com" className="text-xs px-5 py-2.5">
            Start a project
          </Button>
        </nav>

        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-[#D8D4CB] text-[#051A24] hover:bg-[#F5F3EE] transition-colors"
          aria-label="Open menu"
        >
          <Menu size={18} />
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[60] bg-[#051A24] flex flex-col"
          >
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

            <nav className="flex-1 flex flex-col justify-center px-6 overflow-hidden">
              {mobileLinks.map((item, i) => (
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
    </>
  )
}
