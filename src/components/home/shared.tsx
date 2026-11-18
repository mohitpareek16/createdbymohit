import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

export function Reveal({ children, delay = 0, y = 24, className, style }: { children: ReactNode; delay?: number; y?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
      style={style}>
      {children}
    </motion.div>
  )
}

export function SectionHead({ num, label, title, intro, light = false, aside }: {
  num: string; label: string; title: ReactNode; intro?: ReactNode; light?: boolean; aside?: ReactNode
}) {
  return (
    <div className="sec-head">
      <Reveal>
        <p className="label" style={light ? { color: 'rgba(246,245,241,0.6)' } : undefined}>
          <span className="label-num">{num}</span>{label}
        </p>
        <h2 className="font-display" style={{
          fontSize: 'clamp(40px, 5.6vw, 80px)', lineHeight: 1, letterSpacing: '-0.03em',
          marginTop: 18, maxWidth: '16ch', color: light ? 'var(--paper)' : 'var(--ink)',
        }}>
          {title}
        </h2>
        {intro && (
          <p style={{ fontSize: 'clamp(16px, 1.4vw, 18px)', lineHeight: 1.65, maxWidth: '54ch', marginTop: 20, color: light ? 'rgba(246,245,241,0.66)' : 'var(--ink-soft)' }}>
            {intro}
          </p>
        )}
      </Reveal>
      {aside && <Reveal delay={0.1}>{aside}</Reveal>}
      <style>{`
        .sec-head { display: flex; justify-content: space-between; align-items: flex-end; gap: 32px; flex-wrap: wrap; margin-bottom: clamp(44px, 6vw, 80px); }
      `}</style>
    </div>
  )
}
