import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Sparkles } from 'lucide-react'

const SESSION_KEY = 'cbm_newsletter_seen'

export default function NewsletterModal() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const triggered = useRef(false)

  const trigger = () => {
    if (triggered.current || sessionStorage.getItem(SESSION_KEY)) return
    triggered.current = true
    setOpen(true)
    sessionStorage.setItem(SESSION_KEY, '1')
  }

  useEffect(() => {
    // Trigger at 70% scroll depth
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      if (scrolled / total >= 0.7) trigger()
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Trigger after 60s as fallback
    const timer = setTimeout(trigger, 60_000)

    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
    }
  }, [])

  const close = () => setOpen(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    window.open(
      `mailto:hello@createdbymohit.com?subject=${encodeURIComponent('Newsletter signup')}&body=${encodeURIComponent(`Please add me to your newsletter.\n\nEmail: ${email}`)}`,
      '_blank',
    )
    setSent(true)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[9000] bg-[#051A24]/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          />

          {/* Card */}
          <motion.div
            key="modal"
            className="fixed z-[9001] bottom-0 left-0 right-0 sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-[480px]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl">
              {/* Red header strip */}
              <div className="bg-[#C41E3A] px-8 pt-8 pb-6 relative">
                <button
                  onClick={close}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/25 transition-colors"
                  aria-label="Close"
                >
                  <X size={14} />
                </button>

                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-white/60" strokeWidth={1.5} />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">
                    Design for Founders
                  </span>
                </div>

                <h2 className="font-mondwest text-[clamp(28px,6vw,38px)] text-white leading-tight">
                  Get the weekly<br />
                  <em>design drop.</em>
                </h2>
              </div>

              {/* Body */}
              <div className="px-8 py-7">
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-3 py-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#C41E3A] flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" strokeWidth={1.5} />
                    </div>
                    <p className="text-[#051A24] font-medium">You're in.</p>
                    <p className="text-sm text-[#051A24]/60 leading-relaxed">
                      Your email client should have opened — just hit send. I'll add you to the list manually.
                    </p>
                    <button
                      onClick={close}
                      className="mt-2 font-mono text-[10px] uppercase tracking-widest text-[#8A8780] hover:text-[#051A24] transition-colors"
                    >
                      Close ×
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <p className="text-sm text-[#051A24]/65 leading-relaxed mb-6">
                      Every week: one design principle, one real case study, one thing worth stealing.
                      No fluff. Unsubscribe whenever.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-[#D8D4CB] bg-[#F7F5F2] text-[#051A24] text-sm placeholder:text-[#C8C4BC] focus:outline-none focus:border-[#051A24] transition-colors"
                      />
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#051A24] text-white rounded-xl px-6 py-3.5 text-sm font-medium hover:bg-[#C41E3A] transition-colors"
                      >
                        Subscribe
                        <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                      </button>
                    </form>

                    <button
                      onClick={close}
                      className="mt-4 w-full text-center font-mono text-[10px] uppercase tracking-widest text-[#C8C4BC] hover:text-[#8A8780] transition-colors"
                    >
                      No thanks
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
