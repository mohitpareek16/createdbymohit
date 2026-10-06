export default function MarqueeSection() {
  const bands = [
    { text: 'CUSTOM DEVELOPMENT ·· EVERY PROBLEM IS DIFFERENT ·· SO IS THE SOLUTION ·· ', reverse: false },
    { text: 'BUSINESS AUDIT ·· AI INTEGRATION ·· STARTING CORE ·· MOHIT PAREEK ·· ', reverse: true },
    { text: 'WE BUILD AI THAT FITS YOUR BUSINESS ·· JAIPUR · INDIA ·· OPEN FOR PROJECTS ·· ', reverse: false },
  ]

  return (
    <div style={{
      background: 'var(--text)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden',
      padding: '0',
    }}>
      {bands.map((band, i) => (
        <div key={i} style={{
          overflow: 'hidden',
          borderBottom: i < bands.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
          padding: '14px 0',
        }}>
          <div className={band.reverse ? 'marquee-track-reverse' : 'marquee-track'}>
            {[0, 1].map(j => (
              <span key={j} className="font-mono uppercase whitespace-nowrap"
                style={{
                  fontSize: i === 1 ? '11px' : '10px',
                  letterSpacing: '0.16em',
                  paddingRight: '0',
                  color: i === 1 ? '#C41E3A' : 'rgba(255,255,255,0.5)',
                }}>
                {band.text.repeat(8)}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
