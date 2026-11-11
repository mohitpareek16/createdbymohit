import { useEffect, useRef, type ReactNode } from 'react'
import { annotate } from 'rough-notation'
import type { RoughAnnotationType } from 'rough-notation/lib/model'
import { useInView } from './useInView'
import { RED, HIGHLIGHT } from './RoughBox'

type Props = {
  children: ReactNode
  type?: RoughAnnotationType
  color?: string
  strokeWidth?: number
  padding?: number | [number, number]
  iterations?: number
  delay?: number
  duration?: number
  multiline?: boolean
  brackets?: ('left' | 'right' | 'top' | 'bottom')[]
}

export default function Mark({
  children, type = 'underline', color, strokeWidth = 2, padding = 4,
  iterations = 2, delay = 250, duration = 800, multiline = true, brackets,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, '0px 0px -15% 0px')

  useEffect(() => {
    if (!inView || !ref.current) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const a = annotate(ref.current, {
      type,
      color: color ?? (type === 'highlight' ? HIGHLIGHT : RED),
      strokeWidth,
      padding,
      iterations,
      multiline,
      brackets,
      animate: !reduce,
      animationDuration: duration,
    })
    const t = window.setTimeout(() => a.show(), delay)
    return () => { window.clearTimeout(t); a.remove() }
  }, [inView, type, color, strokeWidth, padding, iterations, delay, duration, multiline, brackets])

  return <span ref={ref} style={{ position: 'relative', display: 'inline' }}>{children}</span>
}
