import type { BlogPost } from '../../data/blog'

const TINT: Record<string, { bg: string; fg: string }> = {
  'AI & Automation':           { bg: '#1D2433', fg: '#F6F5F1' },
  'Design & Digital Products': { bg: '#E9E4DA', fg: '#121212' },
  'Business Problem Solving':  { bg: '#C41E3A', fg: '#F6F5F1' },
}

export default function ArticleCover({ post, large = false }: { post: BlogPost; large?: boolean }) {
  const t = TINT[post.category] ?? TINT['Design & Digital Products']
  return (
    <div aria-hidden style={{ aspectRatio: large ? '21 / 9' : '16 / 10', background: t.bg, color: t.fg, borderRadius: large ? 16 : 12, position: 'relative', overflow: 'hidden', maxWidth: '100%' }}>
      <svg viewBox="0 0 400 250" preserveAspectRatio="xMaxYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.22 }}
        fill="none" stroke="currentColor" strokeWidth="1">
        {[0, 1, 2, 3, 4].map(i => <path key={i} d={`M${-40 + i * 6} ${40 + i * 40} C 120 ${10 + i * 50}, 180 ${200 - i * 30}, 260 125 L 440 ${85 + i * 20}`} />)}
        <circle cx="260" cy="125" r="14" />
      </svg>
      <div style={{ position: 'absolute', inset: 0, padding: large ? 'clamp(24px, 4vw, 48px)' : 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <span className="font-mono" style={{ fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.75 }}>{post.category}</span>
        <span className="font-display" style={{ fontSize: large ? 'clamp(30px, 4vw, 56px)' : 'clamp(22px, 2vw, 28px)', lineHeight: 1.02, letterSpacing: '-0.02em', maxWidth: '18ch' }}>{post.title}</span>
      </div>
    </div>
  )
}
