import { useRef, type CSSProperties } from 'react'
import { useInView } from './useInView'
import { INK } from './RoughBox'

const PATHS = {
  arrowCurve: {
    vb: '0 0 120 90',
    d: [
      'M8 14 C 30 6, 70 4, 92 30 C 104 44, 106 58, 100 74',
      'M86 62 C 92 68, 97 72, 100 76 C 104 70, 108 64, 113 58',
    ],
  },
  arrowLoop: {
    vb: '0 0 160 110',
    d: [
      'M6 20 C 40 10, 70 18, 78 44 C 84 66, 60 78, 52 62 C 44 46, 74 36, 98 50 C 120 62, 132 80, 140 96',
      'M126 90 C 132 93, 137 96, 141 98 C 142 92, 143 85, 146 78',
    ],
  },
  arrowDown: {
    vb: '0 0 60 120',
    d: [
      'M30 6 C 26 34, 36 62, 30 104',
      'M16 88 C 22 96, 27 102, 30 108 C 34 100, 40 94, 46 88',
    ],
  },
  arrowRight: {
    vb: '0 0 140 40',
    d: [
      'M4 22 C 40 16, 84 26, 128 18',
      'M112 6 C 118 11, 124 15, 130 18 C 124 22, 118 28, 112 34',
    ],
  },
  star: {
    vb: '0 0 100 100',
    d: ['M50 8 L 61 38 L 93 40 L 67 60 L 77 92 L 50 73 L 23 92 L 33 60 L 7 40 L 39 38 Z'],
  },
  spark: {
    vb: '0 0 100 100',
    d: [
      'M50 6 C 52 30, 56 44, 94 50 C 58 54, 52 68, 50 94 C 47 68, 42 55, 6 50 C 42 45, 48 32, 50 6 Z',
    ],
  },
  asterisk: {
    vb: '0 0 100 100',
    d: ['M50 8 L 50 92', 'M14 28 L 86 72', 'M86 28 L 14 72'],
  },
  squiggle: {
    vb: '0 0 220 30',
    d: ['M4 18 C 18 4, 30 4, 40 16 C 50 28, 62 28, 72 16 C 82 4, 94 4, 104 16 C 114 28, 126 28, 136 16 C 146 4, 158 4, 168 16 C 178 28, 190 28, 200 16 C 206 9, 211 8, 216 10'],
  },
  underline: {
    vb: '0 0 300 24',
    d: ['M4 16 C 60 8, 160 6, 296 12', 'M30 20 C 100 14, 200 13, 270 17'],
  },
  circle: {
    vb: '0 0 200 100',
    d: ['M110 8 C 50 4, 8 22, 10 50 C 12 82, 70 96, 120 92 C 170 88, 196 66, 190 42 C 184 16, 140 6, 90 12 C 72 14, 60 18, 52 22'],
  },
  check: {
    vb: '0 0 60 60',
    d: ['M8 32 C 14 38, 20 44, 24 50 C 32 34, 42 20, 54 8'],
  },
  heart: {
    vb: '0 0 100 90',
    d: ['M50 84 C 20 62, 4 44, 8 26 C 12 8, 38 4, 50 26 C 62 4, 88 8, 92 26 C 96 44, 80 62, 50 84 Z'],
  },
  bulb: {
    vb: '0 0 80 110',
    d: [
      'M40 8 C 18 8, 8 26, 12 42 C 16 58, 28 62, 28 78 L 52 78 C 52 62, 64 58, 68 42 C 72 26, 62 8, 40 8 Z',
      'M30 88 L 50 88', 'M32 98 L 48 98',
      'M40 78 L 40 50 M 32 46 C 36 52, 44 52, 48 46',
    ],
  },
  mic: {
    vb: '0 0 80 120',
    d: [
      'M40 8 C 28 8, 26 18, 26 28 L 26 54 C 26 66, 32 72, 40 72 C 48 72, 54 66, 54 54 L 54 28 C 54 18, 52 8, 40 8 Z',
      'M16 50 C 16 74, 28 86, 40 86 C 52 86, 64 74, 64 50',
      'M40 86 L 40 106 M 24 108 L 56 108',
    ],
  },
  sun: {
    vb: '0 0 100 100',
    d: [
      'M50 32 C 38 32, 32 40, 32 50 C 32 62, 40 68, 50 68 C 62 68, 68 60, 68 50 C 68 38, 60 32, 50 32 Z',
      'M50 6 L 50 20 M 50 80 L 50 94 M 6 50 L 20 50 M 80 50 L 94 50 M 19 19 L 29 29 M 71 71 L 81 81 M 81 19 L 71 29 M 29 71 L 19 81',
    ],
  },
  pencil: {
    vb: '0 0 120 40',
    d: [
      'M10 20 L 22 10 L 104 10 L 104 30 L 22 30 Z',
      'M22 10 L 22 30 M 92 10 L 92 30 M 10 20 L 16 20',
    ],
  },
  scribble: {
    vb: '0 0 120 60',
    d: ['M6 40 C 20 10, 34 50, 44 24 C 54 0, 62 52, 74 26 C 84 6, 92 46, 104 22 C 108 14, 112 12, 116 14'],
  },
  quote: {
    vb: '0 0 100 80',
    d: [
      'M40 12 C 20 18, 10 32, 12 52 C 14 64, 24 70, 32 66 C 42 62, 42 48, 32 44 C 24 41, 18 46, 16 50',
      'M88 12 C 68 18, 58 32, 60 52 C 62 64, 72 70, 80 66 C 90 62, 90 48, 80 44 C 72 41, 66 46, 64 50',
    ],
  },
  plus: {
    vb: '0 0 40 40',
    d: ['M20 6 C 21 16, 19 26, 20 34', 'M6 21 C 16 19, 26 21, 34 20'],
  },
  minus: {
    vb: '0 0 40 40',
    d: ['M6 21 C 16 19, 26 21, 34 20'],
  },
} as const

export type DoodleName = keyof typeof PATHS

type Props = {
  name: DoodleName
  size?: number | string
  color?: string
  strokeWidth?: number
  className?: string
  style?: CSSProperties
  delay?: number
  duration?: number
  fill?: string
  animate?: boolean
  stretch?: boolean
}

export default function Doodle({
  name, size = 80, color = INK, strokeWidth = 2.6, className, style,
  delay = 0, duration = 1.1, fill = 'none', animate = true, stretch = false,
}: Props) {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref as unknown as React.RefObject<Element>, '0px 0px -8% 0px')
  const p = PATHS[name]
  const drawn = !animate || inView

  return (
    <svg
      ref={ref}
      viewBox={p.vb}
      width={size}
      preserveAspectRatio={stretch ? 'none' : undefined}
      aria-hidden
      className={className}
      style={{ overflow: 'visible', height: stretch ? undefined : 'auto', ...style }}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {p.d.map((d, i) => (
        <path
          key={i}
          d={d}
          pathLength={1}
          fill={i === 0 ? fill : 'none'}
          vectorEffect="non-scaling-stroke"
          style={{
            strokeDasharray: 1,
            strokeDashoffset: drawn ? 0 : 1,
            fillOpacity: drawn ? 1 : 0,
            transition: `stroke-dashoffset ${duration}s cubic-bezier(.65,0,.35,1) ${delay + i * (duration * 0.55)}s, fill-opacity .4s ease ${delay + duration}s`,
          }}
        />
      ))}
    </svg>
  )
}
