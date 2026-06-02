import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Segment {
  text: string
  className?: string
}

interface WordsPullUpProps {
  segments: Segment[]
  className?: string
  delayOffset?: number
}

export default function WordsPullUp({ segments, className = '', delayOffset = 0 }: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  // Build flat word list preserving per-word className
  const words: { word: string; className: string }[] = []
  segments.forEach(seg => {
    seg.text.split(' ').filter(Boolean).forEach(w => {
      words.push({ word: w, className: seg.className ?? '' })
    })
  })

  return (
    <span ref={ref} className={`inline-flex flex-wrap gap-x-[0.25em] gap-y-1 ${className}`}>
      {words.map((item, i) => (
        <span key={i} style={{ overflow: 'hidden', display: 'inline-block', lineHeight: 'inherit' }}>
          <motion.span
            className={item.className}
            style={{ display: 'inline-block' }}
            initial={{ y: '110%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              delay: delayOffset + i * 0.07,
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
