import { useRef, useState, useCallback } from 'react'

const GIFS = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
]

interface TrailImage {
  id: number
  x: number
  y: number
  rotation: number
  src: string
  alive: boolean
}

let imgIndex = 0
let lastSpawn = 0

export default function PartnerSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [images, setImages] = useState<TrailImage[]>([])
  const idCounter = useRef(0)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now()
    if (now - lastSpawn < 80) return
    lastSpawn = now

    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotation = (Math.random() - 0.5) * 20
    const src = GIFS[imgIndex % GIFS.length]
    imgIndex++
    const id = idCounter.current++

    setImages(prev => [...prev, { id, x, y, rotation, src, alive: true }])

    setTimeout(() => {
      setImages(prev => prev.map(img => img.id === id ? { ...img, alive: false } : img))
    }, 50)

    setTimeout(() => {
      setImages(prev => prev.filter(img => img.id !== id))
    }, 1000)
  }, [])

  return (
    <section className="bg-[#051A24] py-16 px-6 md:px-10">
      <div className="max-w-[1320px] mx-auto">
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative bg-white rounded-[40px] py-32 md:py-48 px-8 overflow-hidden flex flex-col items-center justify-center text-center cursor-crosshair"
          style={{ boxShadow: '0 8px 48px rgba(0,0,0,0.12)' }}
        >
          {/* Trail images */}
          {images.map(img => (
            <div
              key={img.id}
              className="absolute pointer-events-none rounded-2xl overflow-hidden"
              style={{
                left: img.x - 72,
                top: img.y - 56,
                width: 144,
                height: 112,
                transform: `rotate(${img.rotation}deg) scale(${img.alive ? 1 : 0.85})`,
                opacity: img.alive ? 1 : 0,
                transition: 'opacity 0.7s ease, transform 0.7s ease',
                zIndex: 10,
              }}
            >
              <img src={img.src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center">
            <h2 className="font-mondwest text-[clamp(40px,6vw,88px)] text-[#0D212C] leading-tight mb-12">
              Partner with us
            </h2>

            <a
              href="mailto:hello@createdbymohit.com"
              className="inline-flex items-center gap-3 bg-[#051A24] text-white rounded-full pl-2 pr-7 py-2 text-sm font-medium hover:bg-[#C41E3A] transition-colors"
              style={{
                boxShadow: '0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), 0 9px 6px 0 rgba(5,26,36,0.05), inset 0 2px 8px 0 rgba(255,255,255,0.5)',
              }}
            >
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                alt="Mohit"
                className="w-10 h-10 rounded-full object-cover"
              />
              Start chat with Mohit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
