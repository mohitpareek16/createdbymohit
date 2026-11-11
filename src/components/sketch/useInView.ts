import { useEffect, useState, type RefObject } from 'react'

export function useInView(ref: RefObject<Element>, margin = '0px 0px -12% 0px') {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || inView) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect() }
    }, { rootMargin: margin })
    io.observe(el)
    return () => io.disconnect()
  }, [ref, margin, inView])
  return inView
}
