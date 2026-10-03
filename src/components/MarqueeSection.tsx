const BAND_1_TEXT = 'CUSTOM DEVELOPMENT ·· EVERY PROBLEM IS DIFFERENT ·· SO IS THE SOLUTION ·· '
const BAND_2_TEXT = 'BUSINESS AUDIT ·· AI INTEGRATION ·· STARTING CORE ·· MOHIT PAREEK ·· '
const BAND_3_TEXT = 'WE BUILD AI THAT FITS YOUR BUSINESS ·· JAIPUR · INDIA ·· OPEN FOR PROJECTS ·· '

function MarqueeBand({
  text, reverse = false, darkBg = false, skew = -1.5,
}: { text: string; reverse?: boolean; darkBg?: boolean; skew?: number }) {
  const repeated = Array.from({ length: 12 }, () => text).join('')
  return (
    <div className="overflow-hidden relative"
      style={{ transform: `skewY(${skew}deg)`,
               background: darkBg ? '#C41E3A' : '#0A0A0A',
               borderTop:    `1px solid ${darkBg ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.07)'}`,
               borderBottom: `1px solid ${darkBg ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.07)'}`,
               marginTop: '-4px', zIndex: darkBg ? 2 : 1, position: 'relative' }}>
      <div className={reverse ? 'marquee-track-reverse' : 'marquee-track'}
        style={{ padding: '14px 0', willChange: 'transform' }}>
        <span className="whitespace-nowrap font-mono uppercase"
          style={{ fontSize: 'clamp(11px, 1.4vw, 15px)', letterSpacing: '0.2em',
                   color: darkBg ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.55)' }}>
          {repeated}
        </span>
        <span className="whitespace-nowrap font-mono uppercase" aria-hidden
          style={{ fontSize: 'clamp(11px, 1.4vw, 15px)', letterSpacing: '0.2em',
                   color: darkBg ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.55)' }}>
          {repeated}
        </span>
      </div>
    </div>
  )
}

export default function MarqueeSection() {
  return (
    <div className="py-2 md:py-3" style={{ overflow: 'hidden' }}>
      <MarqueeBand text={BAND_1_TEXT} reverse={false} skew={-1.5} />
      <MarqueeBand text={BAND_2_TEXT} reverse darkBg    skew={-1.5} />
      <MarqueeBand text={BAND_3_TEXT} reverse={false}   skew={-1.5} />
    </div>
  )
}
