import { Link } from 'react-router-dom'
import Button from './Button'

export default function BottomNav() {
  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-white rounded-full px-6 py-2.5"
      style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.12), 0 0 0 0.5px rgba(0,0,0,0.06)' }}
    >
      <Link to="/" className="font-mondwest text-2xl font-semibold text-[#051A24] leading-none">M</Link>
      <div className="w-px h-5 bg-[#D8D4CB]" />
      <Link
        to="/courses"
        className="font-mono text-[10px] uppercase tracking-widest text-[#273C46] hover:text-accent transition-colors"
      >
        Courses
      </Link>
      <div className="w-px h-5 bg-[#D8D4CB]" />
      <Button variant="primary" href="mailto:hello@createdbymohit.com" className="px-5 py-2 text-xs">
        Start a project
      </Button>
    </div>
  )
}
