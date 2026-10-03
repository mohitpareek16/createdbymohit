import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const rafRef  = useRef<number>(0)

  const mouse   = useRef({ x: 0, y: 0 })
  const ring    = useRef({ x: 0, y: 0 })
  const hovered = useRef(false)

  useEffect(() => {
    // Only on devices with a fine pointer (not mobile)
    if (!window.matchMedia('(pointer: fine)').matches) return

    const style = document.createElement('style')
    style.textContent = '* { cursor: none !important; }'
    document.head.appendChild(style)

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      }
    }

    const onOver = (e: MouseEvent) => {
      const el = e.target as Element
      const isInteractive = !!el.closest('a, button, [role="button"], input, select, label')
      hovered.current = isInteractive
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)

    // Lerp ring toward mouse
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.10)
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.10)

      if (ringRef.current) {
        const scale = hovered.current ? 1.8 : 1
        ringRef.current.style.transform =
          `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%) scale(${scale})`
        ringRef.current.style.borderColor = hovered.current
          ? '#C41E3A'
          : 'rgba(255,255,255,0.5)'
        ringRef.current.style.backgroundColor = hovered.current
          ? 'rgba(196,30,58,0.08)'
          : 'transparent'
      }

      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      style.remove()
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  return (
    <>
      {/* Inner dot — follows exactly */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: '5px', height: '5px', borderRadius: '50%',
          background: '#ffffff', willChange: 'transform',
        }}
      />
      {/* Outer ring — follows with lag */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          width: '38px', height: '38px', borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.5)',
          background: 'transparent',
          willChange: 'transform',
          transition: 'border-color 0.25s ease, background-color 0.25s ease, transform 0.15s ease',
        }}
      />
    </>
  )
}
