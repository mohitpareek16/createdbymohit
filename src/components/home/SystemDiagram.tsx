import { motion } from 'framer-motion'

const IN = [
  'M0 40 C 60 10, 90 120, 150 70 C 200 30, 230 170, 300 150',
  'M0 110 C 50 160, 120 20, 170 110 C 210 180, 250 90, 300 150',
  'M0 190 C 70 230, 100 120, 160 190 C 210 250, 260 130, 300 150',
  'M0 260 C 40 200, 140 290, 180 220 C 220 160, 260 200, 300 150',
]
const NODES = [
  { x: 300, label: 'Think' },
  { x: 430, label: 'Design' },
  { x: 560, label: 'Build' },
]
const OUT_Y = [96, 132, 168, 204]

export default function SystemDiagram() {
  const draw = (delay: number, duration = 1.4) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: { pathLength: { duration, ease: [0.65, 0, 0.35, 1] as const, delay }, opacity: { duration: 0.2, delay } },
  })

  return (
    <svg viewBox="0 0 800 300" role="img" aria-label="Tangled business problems pass through Think, Design and Build and come out as clean, parallel solutions"
      style={{ width: '100%', height: 'auto', overflow: 'visible' }} fill="none" strokeLinecap="round">
      {IN.map((d, i) => (
        <motion.path key={d} d={d} stroke="#121212" strokeOpacity={0.35} strokeWidth={1.3} {...draw(0.3 + i * 0.12)} />
      ))}
      <motion.path d="M300 150 L 560 150" stroke="#121212" strokeWidth={1.3} {...draw(1.3, 0.9)} />
      {OUT_Y.map((y, i) => (
        <motion.path key={y} d={`M560 150 C 610 150, 620 ${y}, 670 ${y} L 800 ${y}`} stroke={i === 1 ? '#C41E3A' : '#121212'} strokeWidth={1.4} {...draw(2 + i * 0.08, 0.9)} />
      ))}
      {NODES.map((n, i) => (
        <motion.g key={n.label} initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 + i * 0.22, ease: [0.2, 1.3, 0.4, 1] }} style={{ transformOrigin: `${n.x}px 150px` }}>
          <circle cx={n.x} cy={150} r={22} fill="#F6F5F1" stroke="#121212" strokeWidth={1.3} />
          <circle cx={n.x} cy={150} r={4} fill={i === 2 ? '#C41E3A' : '#121212'} />
          <text x={n.x} y={196} textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize={12} letterSpacing="1.4" fill="#121212">{n.label.toUpperCase()}</text>
        </motion.g>
      ))}
      <text x={0} y={292} fontFamily="IBM Plex Mono, monospace" fontSize={11} letterSpacing="1.3" fill="rgba(18,18,18,0.5)">PROBLEMS</text>
      <text x={800} y={292} textAnchor="end" fontFamily="IBM Plex Mono, monospace" fontSize={11} letterSpacing="1.3" fill="rgba(18,18,18,0.5)">SOLUTIONS</text>
      <circle r={3.5} fill="#C41E3A" opacity={0}>
        <animate attributeName="opacity" from="0" to="1" begin="2.6s" dur="0.3s" fill="freeze" />
        <animateMotion dur="5s" repeatCount="indefinite" begin="2.6s" path="M0 110 C 50 160, 120 20, 170 110 C 210 180, 250 90, 300 150 L 560 150 C 610 150, 620 132, 670 132 L 800 132" />
      </circle>
    </svg>
  )
}
