import { useCallback, useEffect, useRef, type CSSProperties, type ReactNode } from 'react'
import rough from 'roughjs'
import { useInView } from './useInView'

export const INK = '#1B1A17'
export const RED = '#C41E3A'
export const PAPER = '#F4EFE6'
export const CARD = '#FBF8F2'
export const HIGHLIGHT = '#F6D365'

type Props = {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  shape?: 'rect' | 'ellipse'
  stroke?: string
  strokeWidth?: number
  roughness?: number
  bowing?: number
  fill?: string
  fillStyle?: 'hachure' | 'solid' | 'zigzag' | 'cross-hatch' | 'dots' | 'dashed'
  hachureGap?: number
  fillWeight?: number
  inset?: number
  seed?: number
  boilOnHover?: boolean
  drawIn?: boolean
  doubleStroke?: boolean
}

export default function RoughBox({
  children, className, style,
  shape = 'rect',
  stroke = INK, strokeWidth = 1.4, roughness = 1.4, bowing = 1,
  fill, fillStyle = 'hachure', hachureGap = 6, fillWeight = 1,
  inset = 2, seed, boilOnHover = true, drawIn = true, doubleStroke = false,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const seedRef = useRef(seed ?? Math.floor(Math.random() * 10000) + 1)
  const drawnOnce = useRef(false)
  const boilTimer = useRef<number>()
  const inView = useInView(wrapRef, '0px 0px -6% 0px')

  const draw = useCallback((animate: boolean) => {
    const wrap = wrapRef.current
    const svg = svgRef.current
    if (!wrap || !svg) return
    const w = wrap.offsetWidth
    const h = wrap.offsetHeight
    if (!w || !h) return
    svg.setAttribute('width', String(w))
    svg.setAttribute('height', String(h))
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`)
    while (svg.firstChild) svg.removeChild(svg.firstChild)
    const rc = rough.svg(svg)
    const opts = {
      stroke, strokeWidth, roughness, bowing, seed: seedRef.current,
      fill, fillStyle, hachureGap, fillWeight,
      disableMultiStroke: !doubleStroke,
      preserveVertices: false,
    }
    const node = shape === 'ellipse'
      ? rc.ellipse(w / 2, h / 2, w - inset * 2, h - inset * 2, opts)
      : rc.rectangle(inset, inset, w - inset * 2, h - inset * 2, opts)
    svg.appendChild(node)

    if (animate) {
      const paths = Array.from(node.querySelectorAll('path'))
      paths.forEach((p, i) => {
        const len = p.getTotalLength()
        p.style.strokeDasharray = `${len}`
        p.style.strokeDashoffset = `${len}`
        p.getBoundingClientRect()
        p.style.transition = `stroke-dashoffset ${fill && i === 0 ? 0.9 : 0.75}s cubic-bezier(.65,0,.35,1) ${i * 0.04}s`
        p.style.strokeDashoffset = '0'
      })
    }
  }, [shape, stroke, strokeWidth, roughness, bowing, fill, fillStyle, hachureGap, fillWeight, inset, doubleStroke])

  useEffect(() => {
    if (!inView) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    draw(drawIn && !reduce && !drawnOnce.current)
    drawnOnce.current = true
    const wrap = wrapRef.current
    if (!wrap) return
    let last = `${wrap.offsetWidth}x${wrap.offsetHeight}`
    const ro = new ResizeObserver(() => {
      const now = `${wrap.offsetWidth}x${wrap.offsetHeight}`
      if (now !== last) { last = now; draw(false) }
    })
    ro.observe(wrap)
    return () => ro.disconnect()
  }, [inView, draw, drawIn])

  const startBoil = () => {
    if (!boilOnHover) return
    window.clearInterval(boilTimer.current)
    boilTimer.current = window.setInterval(() => {
      seedRef.current = Math.floor(Math.random() * 10000) + 1
      draw(false)
    }, 140)
  }
  const stopBoil = () => window.clearInterval(boilTimer.current)

  useEffect(() => () => window.clearInterval(boilTimer.current), [])

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{ position: 'relative', ...style }}
      onMouseEnter={startBoil}
      onMouseLeave={stopBoil}
      onFocus={startBoil}
      onBlur={stopBoil}
    >
      <svg
        ref={svgRef}
        aria-hidden
        style={{ position: 'absolute', inset: 0, overflow: 'visible', pointerEvents: 'none', zIndex: 0 }}
      />
      <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>{children}</div>
    </div>
  )
}
