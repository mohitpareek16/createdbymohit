import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const SESSION_KEY = 'cbm_intro_seen'

function seen() {
  try { return !!sessionStorage.getItem(SESSION_KEY) } catch { return true }
}

export default function IntroScreen() {
  const [phase, setPhase] = useState<'write' | 'out' | 'done'>(() => (seen() ? 'done' : 'write'))

  useEffect(() => {
    if (phase === 'done') return
    const out = setTimeout(() => setPhase('out'), 2100)
    const done = setTimeout(() => {
      setPhase('done')
      try { sessionStorage.setItem(SESSION_KEY, '1') } catch { /* private mode */ }
    }, 2900)
    return () => { clearTimeout(out); clearTimeout(done) }
  }, [])

  if (phase === 'done') return null

  return (
    <motion.div
      className="ruled"
      initial={{ y: 0 }}
      animate={phase === 'out' ? { y: '-100%', rotate: -2 } : { y: 0 }}
      transition={phase === 'out' ? { duration: 0.8, ease: [0.76, 0, 0.24, 1] } : { duration: 0 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 99999, background: 'var(--card)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        transformOrigin: 'top left', boxShadow: '0 30px 60px rgba(0,0,0,0.25)',
      }}>
      <motion.div
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: 'inset(0 0% 0 0)' }}
        transition={{ duration: 1.3, ease: [0.45, 0, 0.25, 1], delay: 0.15 }}
        className="font-hand"
        style={{ fontSize: 'clamp(56px, 12vw, 128px)', lineHeight: 1, color: 'var(--ink)', fontWeight: 600, padding: '0 12px' }}>
        created by <span style={{ color: 'var(--red)' }}>mohit</span>
      </motion.div>
      <svg width="min(70vw, 520px)" height="20" viewBox="0 0 520 20" preserveAspectRatio="none" aria-hidden style={{ marginTop: 6 }}>
        <motion.path d="M6 12 C 120 4, 300 4, 514 10" stroke="#C41E3A" strokeWidth="4" strokeLinecap="round" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 1.35, ease: 'easeOut' }} />
      </svg>
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 0.4 }}
        className="eyebrow" style={{ marginTop: 22 }}>
        Design · Software · AI — Jaipur, India
      </motion.p>
    </motion.div>
  )
}
