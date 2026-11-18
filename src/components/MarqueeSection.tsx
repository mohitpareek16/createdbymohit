const BANDS = [
  { items: ['Reply in under 60 seconds', 'Five follow-ups, every time', 'Bookings, not chats'], reverse: false, tilt: -1.6, bg: 'var(--ink)', fg: 'var(--paper)' },
  { items: ['Leak Audit', 'Lead Recovery System', 'Growth Ops', 'Starting Core'], reverse: true, tilt: 1.2, bg: 'var(--red)', fg: '#FBF8F2' },
  { items: ['A monthly rupee report', 'You own every account', 'Clinics · Real estate', 'Jaipur · India'], reverse: false, tilt: -0.6, bg: 'var(--card)', fg: 'var(--ink)' },
]

export default function MarqueeSection() {
  return (
    <div aria-label="Reply in under 60 seconds, five follow-ups, a monthly rupee report — Starting Core, Jaipur"
      style={{ padding: 'clamp(40px, 6vw, 72px) 0', overflow: 'hidden' }}>
      {BANDS.map((band, i) => (
        <div key={i} className="paper-shadow" style={{
          background: band.bg, color: band.fg,
          transform: `rotate(${band.tilt}deg)`,
          margin: i === 0 ? '0 -40px' : '-6px -40px 0',
          padding: '14px 0 16px',
          position: 'relative', zIndex: 3 - i,
          border: band.bg === 'var(--card)' ? '1.4px solid var(--ink)' : 'none',
        }}>
          <div className={band.reverse ? 'marquee-track-reverse' : 'marquee-track'} aria-hidden>
            {[0, 1].map(j => (
              <span key={j} style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                {Array.from({ length: 4 }).flatMap((_, k) => band.items.map((t, n) => (
                  <span key={`${k}-${n}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <span className={n % 2 ? 'font-hand' : 'font-display'}
                      style={{
                        fontSize: n % 2 ? 'clamp(26px, 3vw, 36px)' : 'clamp(24px, 2.8vw, 34px)',
                        fontStyle: n % 2 ? 'normal' : 'italic',
                        padding: '0 22px', lineHeight: 1,
                      }}>
                      {t}
                    </span>
                    <span style={{ fontSize: 22, opacity: 0.7 }}>✶</span>
                  </span>
                )))}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
