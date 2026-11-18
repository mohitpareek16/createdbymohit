import type { CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { LEAK_CHECK_HREF, whatsappLink } from '../data/offer'
import { WhatsAppGlyph } from './WhatsAppButton'

type Props = { children?: ReactNode; className?: string; style?: CSSProperties }

export function LeakCheckLink({ children = 'Get a free Leak Check →', className = 'bracket-link accent', style }: Props) {
  if (/^https?:/.test(LEAK_CHECK_HREF)) {
    return <a href={LEAK_CHECK_HREF} target="_blank" rel="noopener noreferrer" className={className} style={style}>{children}</a>
  }
  return <Link to={LEAK_CHECK_HREF} className={className} style={style}>{children}</Link>
}

export function WhatsAppLink({ message, children = 'WhatsApp us', className = 'bracket-link', style }: Props & { message?: string }) {
  return (
    <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className={className} style={style}>
      <WhatsAppGlyph size={20} />
      {children}
    </a>
  )
}
