import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useInView } from 'framer-motion'
import WordsPullUp from './WordsPullUp'

const TESTIMONIALS = [
  {
    quote: "Mohit transformed our app from confusing to intuitive. Our user retention jumped 60% after his redesign. He has a rare ability to see the product from the user's eyes.",
    name: 'Rahul Mehta',
    role: 'CEO · FinVibe',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
  {
    quote: "Working with Mohit was a masterclass in design thinking. He doesn't just make things look good — he makes them work. Every decision has intent.",
    name: 'Priya Singh',
    role: 'Founder · EduPath',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
  {
    quote: "Every pixel has a purpose with Mohit. The attention to detail is unmatched. We shipped faster than ever and the quality didn't suffer one bit.",
    name: 'Arjun Kapoor',
    role: 'Head of Product · Taskly',
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
  {
    quote: "We raised $2M after the rebrand. Mohit's design work was central to our fundraising story — investors kept asking about our product experience.",
    name: 'Sarah Chen',
    role: 'Co-founder · NexGate',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
  {
    quote: "Mohit is the rare designer who understands both the craft and the business. He elevated our product and our team's thinking simultaneously.",
    name: 'David Park',
    role: 'VP Design · Paradigm',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const total = TESTIMONIALS.length

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setCurrent(c => (c + 1) % total), 3500)
    return () => clearInterval(t)
  }, [paused, total])

  const prev = () => setCurrent(c => (c - 1 + total) % total)
  const next = () => setCurrent(c => (c + 1) % total)

  return (
    <section
      ref={ref}
      className="py-20 px-6 md:px-10 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Header */}
      <div className="max-w-[1320px] mx-auto mb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="text-[clamp(32px,5vw,72px)] leading-[0.95] tracking-tight text-[#051A24]">
            <WordsPullUp
              segments={[
                { text: 'What' },
                { text: 'builders', className: 'font-mondwest text-[#C41E3A]' },
                { text: 'say' },
              ]}
            />
          </h2>
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-black text-black" strokeWidth={0} />
              ))}
            </div>
            <span className="font-mono text-sm text-[#273C46]">Clutch 5/5</span>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="max-w-[1320px] mx-auto">
        <div className="relative overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-[800ms]"
            style={{
              transform: `translateX(calc(-${current} * (427.5px + 24px)))`,
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div
                key={i}
                className="flex-none bg-white rounded-[32px] md:rounded-[40px] px-6 md:pl-10 md:pr-16 py-8 flex flex-col gap-5"
                style={{
                  width: 'min(427.5px, calc(100vw - 48px))',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                }}
              >
                <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
                  <path
                    d="M0 22V13.4C0 9.73 0.9 6.7 2.7 4.3C4.53 1.87 7.13 0.3 10.5 0L11.6 2.3C9.53 2.83 7.87 3.9 6.6 5.5C5.33 7.07 4.7 8.87 4.7 10.9H9V22H0ZM16.4 22V13.4C16.4 9.73 17.3 6.7 19.1 4.3C20.93 1.87 23.53 0.3 26.9 0L28 2.3C25.93 2.83 24.27 3.9 23 5.5C21.73 7.07 21.1 8.87 21.1 10.9H25.4V22H16.4Z"
                    fill="#051A24"
                    fillOpacity="0.1"
                  />
                </svg>
                <p className="text-base text-[#0D212C] leading-relaxed flex-1">{t.quote}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#D8D4CB]">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover flex-none" />
                  <div>
                    <div className="text-sm font-semibold text-[#051A24]">{t.name}</div>
                    <div className="text-xs text-[#8A8780]">→ {t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 mt-8">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-[#051A24] hover:text-white hover:border-[#051A24] transition-all"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-[#051A24] hover:text-white hover:border-[#051A24] transition-all"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <div className="flex gap-1.5 ml-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 rounded-full transition-all duration-300 ${
                  i === current % total ? 'bg-[#051A24] h-4' : 'bg-[#D8D4CB] h-1.5'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
