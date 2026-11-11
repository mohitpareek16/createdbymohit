import type { CSSProperties } from 'react'
import RoughBox, { INK } from './RoughBox'

const WIREFRAMES = [
  // hero + 3 cards
  ['M8 10 L 30 10', 'M70 10 L 78 10 M 82 10 L 90 10', 'M8 26 C 30 25, 50 27, 64 26', 'M8 34 C 24 33, 36 35, 48 34', 'M8 44 L 26 44 L 26 50 L 8 50 Z', 'M8 60 L 34 60 L 34 82 L 8 82 Z', 'M38 60 L 62 60 L 62 82 L 38 82 Z', 'M66 60 L 92 60 L 92 82 L 66 82 Z'],
  // split hero with image
  ['M8 10 L 26 10', 'M74 10 L 92 10', 'M8 28 C 22 27, 34 29, 46 28', 'M8 36 C 20 35, 30 37, 40 36', 'M8 46 L 22 46 L 22 52 L 8 52 Z', 'M54 22 L 92 22 L 92 58 L 54 58 Z', 'M54 22 L 92 58 M 92 22 L 54 58', 'M8 70 C 40 69, 60 71, 92 70', 'M8 78 C 30 77, 50 79, 70 78'],
  // centered headline + grid
  ['M44 10 L 56 10', 'M24 26 C 40 25, 60 27, 76 26', 'M32 34 C 44 33, 56 35, 68 34', 'M42 42 L 58 42 L 58 48 L 42 48 Z', 'M8 58 L 28 58 L 28 72 L 8 72 Z', 'M30 58 L 50 58 L 50 72 L 30 72 Z', 'M52 58 L 72 58 L 72 72 L 52 72 Z', 'M74 58 L 92 58 L 92 72 L 74 72 Z', 'M8 80 L 50 80'],
]

type Props = {
  domain: string
  gradient: string
  variant?: number
  aspect?: string
  style?: CSSProperties
}

export default function SketchBrowser({ domain, gradient, variant = 0, aspect = '16 / 10', style }: Props) {
  const wf = WIREFRAMES[variant % WIREFRAMES.length]
  return (
    <RoughBox fill="#FBF8F2" fillStyle="solid" roughness={1.1} strokeWidth={1.5} style={style}>
      <div style={{ padding: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '2px 4px 10px' }}>
          {['#C41E3A', '#F6D365', '#7FB685'].map(c => (
            <svg key={c} width="11" height="11" viewBox="0 0 12 12" aria-hidden>
              <path d="M6 1.5 C 9 1.2, 10.8 3.2, 10.6 6 C 10.4 9, 8.4 10.8, 6 10.6 C 3 10.4, 1.3 8.6, 1.5 6 C 1.6 3.4, 3.4 1.6, 6.5 1.6"
                fill={c} stroke={INK} strokeWidth="1" />
            </svg>
          ))}
          <div className="sketch-border" style={{
            flex: 1, minWidth: 0, marginLeft: 6, padding: '2px 10px', borderWidth: 1.2,
            fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-soft)',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            {domain}
          </div>
        </div>
        <div className="sketch-thumb" style={{ aspectRatio: aspect, background: gradient, position: 'relative', overflow: 'hidden', borderRadius: 2 }}>
          <svg viewBox="0 0 100 92" preserveAspectRatio="none" aria-hidden
            style={{ position: 'absolute', inset: '8%', width: '84%', height: '84%' }}
            fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            {wf.map((d, i) => <path key={i} d={d} vectorEffect="non-scaling-stroke" />)}
          </svg>
          <div aria-hidden style={{
            position: 'absolute', inset: 0, mixBlendMode: 'multiply', opacity: 0.35,
            backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }} />
        </div>
      </div>
    </RoughBox>
  )
}
