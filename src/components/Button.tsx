import React from 'react'

type Variant = 'primary' | 'secondary' | 'tertiary'

interface ButtonProps {
  variant?: Variant
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  target?: string
}

const shadows: Record<Variant, string> = {
  primary: '0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), 0 9px 6px 0 rgba(5,26,36,0.05), inset 0 2px 8px 0 rgba(255,255,255,0.5)',
  secondary: '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 30px rgba(0,0,0,0.08)',
  tertiary: '0 0 0 0.5px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.06)',
}

const bases: Record<Variant, string> = {
  primary: 'bg-[#051A24] text-white hover:bg-[#C41E3A]',
  secondary: 'bg-white text-[#051A24] hover:bg-gray-50',
  tertiary: 'bg-white text-[#051A24] hover:bg-gray-50',
}

export default function Button({ variant = 'primary', children, href, onClick, className = '', target }: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-all duration-200 cursor-pointer ${bases[variant]} ${className}`
  const style = { boxShadow: shadows[variant] }

  if (href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={cls} style={style}>
        {children}
      </a>
    )
  }
  return (
    <button onClick={onClick} className={cls} style={style}>
      {children}
    </button>
  )
}
