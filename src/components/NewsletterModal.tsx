import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Doodle from './sketch/Doodle'

const SESSION_KEY = 'cbm_newsletter_seen'

export default function NewsletterModal() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const triggered = useRef(false)

  const trigger = () => {
    let seen = false
    try { seen = !!sessionStorage.getItem(SESSION_KEY) } catch { seen = true }
    if (triggered.current || seen) return
    triggered.current = true
    setOpen(true)
    try { sessionStorage.setItem(SESSION_KEY, '1') } catch { /* private mode */ }
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
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[9000]"
            style={{ background: 'rgba(27,26,23,0.45)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          />
          <div className="fixed inset-0 z-[9001] grid place-items-center pointer-events-none" style={{ padding: 16 }}>
            <motion.div
              key="modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="nl-title"
              className="ruled pointer-events-auto"
              initial={{ opacity: 0, y: 40, rotate: 4 }}
              animate={{ opacity: 1, y: 0, rotate: -1.2 }}
              exit={{ opacity: 0, y: 24, rotate: 3 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative', width: 'min(100%, 460px)', background: 'var(--card)', padding: '40px 32px 28px 64px', boxShadow: '0 30px 60px -20px rgba(27,26,23,0.5)' }}>
              <span className="tape" style={{ top: -12, left: '42%', transform: 'rotate(-4deg)' }} />
              <button onClick={close} aria-label="Close"
                style={{ position: 'absolute', top: 14, right: 14, background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#C41E3A" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M3 3 C 7 7, 11 11, 15 15" /><path d="M15 3 C 11 7, 7 11, 3 15" />
                </svg>
              </button>
              <p className="hand-label" style={{ marginBottom: 8 }}>design for founders —</p>
              <h2 id="nl-title" className="font-display" style={{ fontSize: 'clamp(34px, 7vw, 44px)', lineHeight: 1, color: 'var(--ink)' }}>
                Get the weekly<br /><em style={{ color: 'var(--red)' }}>design drop.</em>
              </h2>
              {sent ? (
                <div style={{ marginTop: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Doodle name="check" size={34} color="#C41E3A" strokeWidth={3} />
                    <p className="font-hand" style={{ fontSize: 30 }}>You're in.</p>
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-soft)', marginTop: 8 }}>
                    Your email client should have opened — just hit send. I'll add you to the list manually.
                  </p>
                  <button onClick={close} className="font-hand" style={{ marginTop: 14, fontSize: 22, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink-soft)' }}>
                    close ×
                  </button>
                </div>
              ) : (
                <>
                  <p style={{ fontSize: 15, lineHeight: '32px', color: 'var(--ink-soft)', marginTop: 16 }}>
                    Every week: one design principle, one real case study, one thing worth stealing.
                    No fluff. Unsubscribe whenever.
                  </p>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 14 }}>
                    <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com"
                      aria-label="Email address"
                      style={{ background: 'transparent', border: 'none', borderBottom: '2px solid var(--ink)', outline: 'none', fontFamily: 'var(--font-hand)', fontSize: 26, padding: '4px 2px', color: 'var(--ink)' }} />
                    <button type="submit" className="bracket-link accent" style={{ alignSelf: 'flex-start' }}>Subscribe →</button>
                  </form>
                  <button onClick={close} className="font-hand" style={{ marginTop: 14, fontSize: 20, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink-faint)' }}>
                    no thanks
                  </button>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
