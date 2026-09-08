import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors text-[#051A24] dark:text-white/70 hover:bg-[#F5F3EE] dark:hover:bg-white/10 ${className}`}
    >
      {theme === 'dark'
        ? <Sun size={15} strokeWidth={1.5} />
        : <Moon size={15} strokeWidth={1.5} />
      }
    </button>
  )
}
