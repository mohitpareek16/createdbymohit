import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const CURRICULUM = [
  'Visual hierarchy & design psychology',
  'Six principles of design',
  'Design systems & component libraries',
  'The business of being a designer in India',
  'Real-world client work & case studies',
]

export default function CourseSection() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const children = contentRef.current?.children
      if (children && children.length > 0) {
        gsap.fromTo(
          Array.from(children),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="course"
      ref={sectionRef}
      className="relative py-20 md:py-28 px-6 md:px-10 overflow-hidden"
      style={{
        background: '#0D0D0D',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Glow */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          background: 'rgba(196,30,58,0.12)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          transform: 'translate(30%, -30%)',
        }}
      />

      <div ref={contentRef} className="max-w-[1200px] mx-auto relative">
        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 font-mono uppercase text-[#C41E3A] mb-8 opacity-0"
          style={{ fontSize: '10px', letterSpacing: '0.18em' }}
        >
          <span style={{ width: '24px', height: '1px', background: '#C41E3A', display: 'inline-block' }} />
          LAUNCHING SOON · 2026
        </div>

        {/* Heading */}
        <h2
          className="text-white font-bold uppercase tracking-tight mb-10 max-w-[15ch] opacity-0"
          style={{
            fontSize: 'clamp(36px, 6vw, 88px)',
            lineHeight: 0.92,
            letterSpacing: '-0.02em',
          }}
        >
          THE UI/UX MASTERCLASS I WISH I HAD.
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-start opacity-0">
          {/* Left */}
          <div>
            <p
              className="text-white/55 leading-relaxed mb-8"
              style={{ fontSize: 'clamp(15px, 1.6vw, 18px)', lineHeight: 1.75 }}
            >
              A complete UI/UX course built from six years of shipping products and 5,000+ designs. No fluff — just the{' '}
              <strong className="text-white font-medium">psychology, principles and process</strong>{' '}
              that separate designers who get hired from designers who get scrolled past.
            </p>
            <div className="flex flex-col gap-4">
              {CURRICULUM.map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/65 text-sm">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-none"
                    style={{ background: 'rgba(196,30,58,0.18)' }}
                  >
                    <Check className="w-3 h-3 text-[#C41E3A]" strokeWidth={2.5} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right - waitlist form */}
          <div
            style={{
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '32px',
              background: 'rgba(255,255,255,0.03)',
            }}
          >
            <label
              className="block font-mono uppercase text-white/35 mb-4"
              style={{ fontSize: '9px', letterSpacing: '0.2em' }}
            >
              Be first on the waitlist
            </label>
            <div className="flex gap-2 mb-4">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-transparent text-white text-sm placeholder-white/25 outline-none focus:border-[#C41E3A] transition-colors"
                style={{
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '9999px',
                  padding: '10px 18px',
                }}
              />
              <button
                onClick={() => { if (email) setJoined(true) }}
                disabled={joined}
                className="text-white text-sm font-medium transition-colors"
                style={{
                  background: joined ? 'rgba(196,30,58,0.5)' : '#C41E3A',
                  borderRadius: '9999px',
                  padding: '10px 22px',
                  border: 'none',
                  cursor: joined ? 'default' : 'pointer',
                  whiteSpace: 'nowrap',
                  opacity: joined ? 0.7 : 1,
                }}
              >
                {joined ? "You're in ✓" : 'Join'}
              </button>
            </div>
            <p
              className="font-mono text-white/30 leading-relaxed"
              style={{ fontSize: '9px', letterSpacing: '0.1em', lineHeight: 1.7 }}
            >
              Early access · Founding-member pricing · One email a week, never spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
