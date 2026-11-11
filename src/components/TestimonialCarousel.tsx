import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Doodle from './sketch/Doodle'
import RoughBox, { RED, INK } from './sketch/RoughBox'

interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Mohit transformed our app from confusing to intuitive. Our user retention jumped 60% after his redesign. He has a rare ability to see the product from the user's eyes.",
    name: 'Rahul Mehta', role: 'CEO', company: 'FinVibe',
  },
  {
    quote: "Working with Mohit was a masterclass in design thinking. He doesn't just make things look good — he makes them work. Every decision has intent and business rationale.",
    name: 'Priya Singh', role: 'Founder', company: 'EduPath',
  },
  {
    quote: "We raised $2M after the rebrand. Mohit's design work was central to our fundraising story — investors kept asking about our product experience.",
    name: 'Sarah Chen', role: 'Co-founder', company: 'NexGate',
  },
]

function ArrowBtn({ dir, onClick }: { dir: 'prev' | 'next'; onClick: () => void }) {
  return (
    <button onClick={onClick} aria-label={dir === 'prev' ? 'Previous testimonial' : 'Next testimonial'}
      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
      <RoughBox shape="ellipse" strokeWidth={1.6} style={{ width: 54, height: 54 }}>
        <div style={{ height: '100%', display: 'grid', placeItems: 'center' }}>
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: dir === 'prev' ? 'scaleX(-1)' : 'none' }}>
            <path d="M2 7.5 C 8 6.5, 13 8, 19 7" /><path d="M14 2 C 16 4, 18 6, 20 7 C 18 8.5, 16 10.5, 14 12.5" />
          </svg>
        </div>
      </RoughBox>
    </button>
  )
}

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const total = TESTIMONIALS.length
  const t = TESTIMONIALS[current]

  return (
    <section id="testimonials" style={{ padding: 'clamp(80px, 9vw, 140px) 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        paddingLeft: 'max(20px, env(safe-area-inset-left, 0px))',
        paddingRight: 'max(20px, env(safe-area-inset-right, 0px))',
      }}>
        <p className="hand-label" style={{ marginBottom: 10 }}>testimonials —</p>
        <h2 className="font-display" style={{ fontSize: 'clamp(46px, 6.5vw, 96px)', lineHeight: 0.92, letterSpacing: '-0.03em', marginBottom: 'clamp(40px, 5vw, 72px)' }}>
          What builders <em>say.</em>
        </h2>

        <div style={{ position: 'relative' }}>
          <Doodle name="quote" size={110} color={RED} strokeWidth={3} style={{ position: 'absolute', left: -12, top: -24, opacity: 0.9 }} />
          <div style={{ minHeight: 'clamp(240px, 26vw, 300px)', paddingTop: 70 }}>
            <AnimatePresence mode="wait">
              <motion.figure key={current}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}>
                <blockquote className="font-display" style={{ fontSize: 'clamp(26px, 3.4vw, 46px)', lineHeight: 1.22, letterSpacing: '-0.015em', fontStyle: 'italic', maxWidth: '30ch' }}>
                  {t.quote}
                </blockquote>
                <figcaption style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 30 }}>
                  <Doodle name="squiggle" size={56} color={INK} strokeWidth={1.8} animate={false} />
                  <div>
                    <p className="font-hand" style={{ fontSize: 30, lineHeight: 1 }}>{t.name}</p>
                    <p className="eyebrow" style={{ fontSize: 11, marginTop: 4 }}>{t.role} · {t.company}</p>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 40 }}>
            <ArrowBtn dir="prev" onClick={() => setCurrent((current - 1 + total) % total)} />
            <ArrowBtn dir="next" onClick={() => setCurrent((current + 1) % total)} />
            <div style={{ display: 'flex', gap: 10, marginLeft: 10 }}>
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} aria-label={`Go to testimonial ${i + 1}`}
                  style={{ background: 'none', border: 'none', padding: 4, cursor: 'pointer' }}>
                  <svg width={i === current ? 30 : 12} height="12" viewBox={i === current ? '0 0 30 12' : '0 0 12 12'} style={{ transition: 'width .3s' }}>
                    {i === current
                      ? <path d="M2 6 C 10 4, 20 8, 28 5.5" stroke={RED} strokeWidth="3" strokeLinecap="round" fill="none" />
                      : <path d="M6 2 C 9 2, 10 4, 10 6 C 10 9, 8 10, 6 10 C 3 10, 2 8, 2 6 C 2 3.5, 4 2, 6.5 2.2" stroke={INK} strokeOpacity=".5" strokeWidth="1.4" fill="none" />}
                  </svg>
                </button>
              ))}
            </div>
            <span className="font-hand" style={{ marginLeft: 'auto', fontSize: 24, color: 'var(--ink-soft)' }}>
              {current + 1} of {total}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
