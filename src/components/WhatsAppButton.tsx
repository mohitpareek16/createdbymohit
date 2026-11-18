import { whatsappLink } from '../data/offer'

export function WhatsAppGlyph({ size = 22, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 3.5 C 23 3.2, 28.6 8.6, 28.5 15.8 C 28.4 22.8, 22.6 28.2, 15.8 28 C 13.6 28, 11.6 27.4, 9.8 26.4 L 4 28 L 5.6 22.6 C 4.4 20.6, 3.6 18.4, 3.6 16 C 3.6 9, 9.2 3.6, 16.4 3.6" />
      <path d="M11.6 10.4 C 10.6 11.2, 10.4 12.6, 11.2 14.4 C 12.4 17, 14.8 19.6, 17.6 20.8 C 19.4 21.6, 20.8 21.2, 21.4 20 L 21.6 18.8 L 19 17.6 L 17.8 18.8 C 16 18, 14.2 16.2, 13.4 14.4 L 14.4 13.2 L 13.4 10.6 Z" fill={color} fillOpacity="0.15" />
    </svg>
  )
}

export default function WhatsAppButton() {
  return (
    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat with Starting Core on WhatsApp" className="wa-float">
      <WhatsAppGlyph size={24} />
      <span className="font-hand wa-label">WhatsApp us</span>
      <style>{`
        .wa-float {
          position: fixed; z-index: 80;
          right: max(16px, env(safe-area-inset-right, 0px));
          bottom: calc(16px + env(safe-area-inset-bottom, 0px));
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 18px 12px 14px;
          background: #1F8F4E; color: #FBF8F2;
          border: 1.8px solid #1B1A17;
          border-radius: 255px 18px 225px 18px / 18px 225px 18px 255px;
          box-shadow: 3px 4px 0 0 #1B1A17;
          transition: transform .18s ease, box-shadow .18s ease;
        }
        .wa-float:hover { transform: translate(2px, 3px) rotate(-1deg); box-shadow: 1px 1px 0 0 #1B1A17; }
        .wa-label { font-size: 22px; font-weight: 600; line-height: 1; }
        @media (min-width: 900px) { .wa-float { padding: 12px 20px 13px 16px; } }
      `}</style>
    </a>
  )
}
