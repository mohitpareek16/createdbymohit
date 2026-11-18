import type { WebsiteProject } from '../../data/websites'

export default function ProjectVisual({ p, size = 'lg' }: { p: WebsiteProject & { image?: string }; size?: 'lg' | 'sm' }) {
  return (
    <div className="pv" style={{ borderRadius: size === 'lg' ? 14 : 10, overflow: 'hidden', border: '1px solid var(--rule)', background: 'var(--card)', boxShadow: '0 1px 0 rgba(18,18,18,0.04), 0 18px 40px -24px rgba(18,18,18,0.35)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: size === 'lg' ? '10px 14px' : '8px 10px', borderBottom: '1px solid var(--rule)' }}>
        {[0, 1, 2].map(i => <span key={i} style={{ width: 8, height: 8, borderRadius: 99, background: 'rgba(18,18,18,0.14)' }} />)}
        <span className="font-mono" style={{ marginLeft: 10, fontSize: 11, color: 'var(--ink-faint)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.domain}</span>
      </div>
      <div className="pv-body" style={{ aspectRatio: size === 'lg' ? '16 / 10' : '16 / 9', background: p.gradient, position: 'relative', overflow: 'hidden' }}>
        {p.image
          ? <img src={p.image} alt={`${p.title} website`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          : (
            <div style={{ position: 'absolute', inset: 0, padding: size === 'lg' ? 'clamp(20px, 3vw, 36px)' : 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#fff' }}>
              <span className="font-mono" style={{ fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.7 }}>{p.category}</span>
              <span className="font-display" style={{ fontSize: size === 'lg' ? 'clamp(36px, 4.6vw, 64px)' : 26, lineHeight: 0.95, letterSpacing: '-0.03em' }}>{p.title}</span>
            </div>
          )}
      </div>
      <style>{`.pv-body > * { transition: transform .6s cubic-bezier(.16,1,.3,1); } a:hover .pv-body > * { transform: scale(1.03); }`}</style>
    </div>
  )
}
