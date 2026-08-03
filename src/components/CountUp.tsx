import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'

interface Props {
  value: string
  className?: string
  duration?: number
}

function parse(raw: string): { target: number; prefix: string; suffix: string } {
  const prefix = raw.match(/^[^0-9]*/)?.[0] ?? ''
  const suffix = raw.match(/[^0-9]+$/)?.[0] ?? ''
  const num    = parseFloat(raw.replace(/[^0-9.]/g, ''))
  return { target: isNaN(num) ? 0 : num, prefix, suffix }
}

export default function CountUp({ value, className = '', duration = 1.8 }: Props) {
  const { target, prefix, suffix } = parse(value)
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const hasRun = useRef(false)

  useEffect(() => {
    if (!inView || hasRun.current) return
    hasRun.current = true
    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: v => setDisplay(v),
    })
    return () => controls.stop()
  }, [inView, target, duration])

  const formatted = target >= 1000
    ? Math.round(display).toLocaleString()
    : Number.isInteger(target)
    ? Math.round(display).toString()
    : display.toFixed(1)

  return (
    <span ref={ref} className={className}>
      {prefix}{formatted}{suffix}
    </span>
  )
}
