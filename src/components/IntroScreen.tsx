import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SESSION_KEY = 'cbm_intro_seen'

export default function IntroScreen() {
  const [phase, setPhase] = useState<'idle' | 'in' | 'hold' | 'out' | 'done'>('idle')

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      setPhase('done')
      return
    }
    setPhase('in')

    const holdTimer = setTimeout(() => setPhase('hold'), 200)
    const outTimer  = setTimeout(() => setPhase('out'),  2000)
    const doneTimer = setTimeout(() => {
      setPhase('done')
      sessionStorage.setItem(SESSION_KEY, '1')
    }, 2750)

    return () => { clearTimeout(holdTimer); clearTimeout(outTimer); clearTimeout(doneTimer) }
  }, [])

  if (phase === 'done') return null

  return (
    <AnimatePresence>
      {(
        <motion.div
          key="intro"
          className="fixed inset-0 z-[99999] bg-[#C41E3A] flex flex-col items-center justify-center overflow-hidden"
          initial={{ y: 0 }}
          animate={phase === 'out' ? { y: '-100%' } : { y: 0 }}
          transition={
            phase === 'out'
              ? { duration: 0.72, ease: [0.76, 0, 0.24, 1] }
              : { duration: 0 }
          }
        >
          {/* Wordmark */}
          <motion.div
            className="relative select-none"
            initial={{ opacity: 0, y: 32 }}
            animate={phase === 'in' || phase === 'hold' || phase === 'out' ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <span
              className="font-mondwest text-[#F7F5F2] block leading-none tracking-tight"
              style={{ fontSize: 'clamp(42px, 10vw, 88px)' }}
            >
              <em>Created</em> By Mohit
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.div
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F7F5F2]/50 mt-5"
            initial={{ opacity: 0 }}
            animate={phase === 'hold' || phase === 'out' ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Design that earns attention
          </motion.div>

          {/* Corner mark */}
          <div className="absolute bottom-8 right-8 font-mono text-[9px] uppercase tracking-widest text-[#F7F5F2]/25">
            © 2026
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
