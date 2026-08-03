import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const x = useSpring(mouseX, { stiffness: 600, damping: 45, mass: 0.2 })
  const y = useSpring(mouseY, { stiffness: 600, damping: 45, mass: 0.2 })

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    // Inject cursor:none so native cursor disappears
    const style = document.createElement('style')
    style.textContent = '* { cursor: none !important; }'
    document.head.appendChild(style)

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setVisible(true)
    }
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)
    const onOver = (e: MouseEvent) => {
      const el = e.target as Element
      setHovering(!!el.closest('a, button, [role="button"], input, select, textarea, label'))
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseover', onOver)

    return () => {
      style.remove()
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseover', onOver)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none select-none"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      animate={{ opacity: visible ? 1 : 0, scale: hovering ? 1.55 : 1 }}
      transition={{
        opacity: { duration: 0.15 },
        scale: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
      }}
    >
      <div
        className="w-7 h-7 rounded-full bg-[#051A24] flex items-center justify-center"
        style={{ boxShadow: '0 2px 12px rgba(5,26,36,0.3)' }}
      >
        <span
          style={{
            fontFamily: '"PP Mondwest", Georgia, serif',
            fontSize: 10,
            color: '#fff',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          M
        </span>
      </div>
    </motion.div>
  )
}
