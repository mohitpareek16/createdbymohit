import { whatsappLink } from '../data/studio'

export default function WhatsAppButton() {
  return (
    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="wa-float">
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M16 3.5c7 0 12.5 5.4 12.5 12.4S23 28.4 16 28.4c-2.2 0-4.3-.6-6.1-1.6L4 28.4l1.6-5.6A12.3 12.3 0 0 1 3.5 16C3.5 9 9 3.5 16 3.5Z" />
        <path d="M11.8 10.6c-.9.8-1.1 2.1-.4 3.8 1.2 2.6 3.6 5.1 6.3 6.3 1.8.8 3.1.4 3.7-.8l.2-1.2-2.6-1.2-1.2 1.2c-1.8-.8-3.6-2.6-4.4-4.4l1-1.2-1-2.6Z" fill="currentColor" stroke="none" />
      </svg>
      <style>{`
        .wa-float {
          position: fixed; z-index: 80;
          right: max(18px, env(safe-area-inset-right, 0px));
          bottom: calc(18px + env(safe-area-inset-bottom, 0px));
          width: 54px; height: 54px; border-radius: 999px;
          display: grid; place-items: center;
          background: #1F8F4E; color: #fff;
          box-shadow: 0 10px 30px -10px rgba(18,18,18,0.45);
          transition: transform .25s ease;
        }
        .wa-float:hover { transform: translateY(-3px); }
      `}</style>
    </a>
  )
}
