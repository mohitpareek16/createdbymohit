import { Link } from 'react-router-dom'

export default function BottomNav() {
  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4"
      style={{
        background: 'rgba(17,17,17,0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '9999px',
        padding: '10px 20px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
      }}
    >
      <Link
        to="/"
        className="font-mondwest text-white leading-none"
        style={{ fontSize: '18px', letterSpacing: '-0.01em' }}
      >
        M
      </Link>
      <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.12)' }} />
      <Link
        to="/about"
        className="font-mono text-white/50 hover:text-white transition-colors uppercase"
        style={{ fontSize: '10px', letterSpacing: '0.12em' }}
      >
        About
      </Link>
      <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.12)' }} />
      <Link
        to="/work"
        className="font-mono text-white/50 hover:text-white transition-colors uppercase"
        style={{ fontSize: '10px', letterSpacing: '0.12em' }}
      >
        Work
      </Link>
      <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.12)' }} />
      <a
        href="mailto:hello@createdbymohit.com"
        className="font-mono text-white uppercase transition-all"
        style={{
          fontSize: '9px',
          letterSpacing: '0.14em',
          background: '#C41E3A',
          borderRadius: '9999px',
          padding: '6px 14px',
        }}
      >
        Hire Me
      </a>
    </div>
  )
}
