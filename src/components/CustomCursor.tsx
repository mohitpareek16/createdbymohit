import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = -100, my = -100
    let rx = -100, ry = -100
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const tick = () => {
      dot.style.transform  = `translate(${mx - 3}px, ${my - 3}px)`
      rx = lerp(rx, mx, 0.1)
      ry = lerp(ry, my, 0.1)
      ring.style.transform = `translate(${rx - 19}px, ${ry - 19}px)`
      raf = requestAnimationFrame(tick)
    }

    const onEnter = () => {
      ring.style.transform = ring.style.transform
      ring.style.width  = '56px'
      ring.style.height = '56px'
      ring.style.marginLeft  = '-28px'
      ring.style.marginTop   = '-28px'
      ring.style.borderColor = '#C41E3A'
      ring.style.opacity     = '0.6'
    }

    const onLeave = () => {
      ring.style.width  = '38px'
      ring.style.height = '38px'
      ring.style.marginLeft  = '0'
      ring.style.marginTop   = '0'
      ring.style.borderColor = 'rgba(12,12,10,0.4)'
      ring.style.opacity     = '1'
    }

    const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, [tabindex]'

    const style = document.createElement('style')
    style.textContent = '* { cursor: none !important; }'
    document.head.appendChild(style)

    document.addEventListener('mousemove', onMove)

    document.addEventListener('mouseover', e => {
      if ((e.target as Element)?.closest(INTERACTIVE)) onEnter()
    })
    document.addEventListener('mouseout', e => {
      if ((e.target as Element)?.closest(INTERACTIVE)) onLeave()
    })

    raf = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      style.remove()
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div ref={dotRef} aria-hidden style={{
        position: 'fixed', top: 0, left: 0, width: '6px', height: '6px',
        background: '#C41E3A', borderRadius: '50%',
        pointerEvents: 'none', zIndex: 99999,
        transition: 'none',
        willChange: 'transform',
      }} />
      {/* Ring */}
      <div ref={ringRef} aria-hidden style={{
        position: 'fixed', top: 0, left: 0, width: '38px', height: '38px',
        borderRadius: '50%',
        border: '1px solid rgba(12,12,10,0.4)',
        pointerEvents: 'none', zIndex: 99998,
        willChange: 'transform',
        transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease, opacity 0.3s ease',
      }} />
    </>
  )
}
