import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Update YOUTUBE_URL with your actual channel URL
const YOUTUBE_URL = 'https://www.youtube.com/@createdbymohit'

const EPISODES = [
  {
    num: '01',
    title: 'How I Got My First Design Client Without a Portfolio',
    duration: 'Watch on YouTube',
  },
  {
    num: '02',
    title: 'The Truth About Freelance Design in India',
    duration: 'Watch on YouTube',
  },
  {
    num: '03',
    title: 'Design Systems for Startups: What Actually Works',
    duration: 'Watch on YouTube',
  },
  {
    num: '04',
    title: 'Stop Learning Design. Start Doing Design.',
    duration: 'Watch on YouTube',
  },
  {
    num: '05',
    title: 'How to Price Yourself as a Designer in 2024',
    duration: 'Watch on YouTube',
  },
  {
    num: '06',
    title: 'From Student to Studio: Building Starting Core',
    duration: 'Watch on YouTube',
  },
]

export default function PodcastSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const rowsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        }
      )

      const rows = rowsRef.current?.querySelectorAll('.ep-row')
      if (rows && rows.length > 0) {
        gsap.fromTo(
          rows,
          { opacity: 0, y: 16 },
          {
            opacity: 1, y: 0, duration: 0.55, ease: 'power3.out', stagger: 0.07,
            scrollTrigger: { trigger: rowsRef.current, start: 'top 85%', toggleActions: 'play none none none' },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="podcast"
      ref={sectionRef}
      className="py-20 md:py-28 px-6 md:px-10"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#0A0A0A' }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-12 opacity-0">
          <p
            className="font-mono uppercase tracking-widest text-white/40 mb-4"
            style={{ fontSize: '10px', letterSpacing: '0.18em' }}
          >
            YouTube · Podcast
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <h2
              className="uppercase font-bold tracking-tight text-white"
              style={{ fontSize: 'clamp(36px, 6vw, 80px)', lineHeight: 0.92, letterSpacing: '-0.02em' }}
            >
              ON THE<br />RECORD.
            </h2>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bracket-link self-start md:self-end"
            >
              [ YOUTUBE CHANNEL ]
            </a>
          </div>
          <p
            className="mt-5 text-white/40 max-w-[52ch] leading-relaxed"
            style={{ fontSize: 'clamp(14px, 1.5vw, 16px)' }}
          >
            Design conversations — real talk about the industry, careers, and building products that matter. 6 episodes and counting.
          </p>
        </div>

        {/* Episode list */}
        <div ref={rowsRef}>
          {EPISODES.map((ep) => (
            <a
              key={ep.num}
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ep-row work-row group flex items-center gap-6 py-5 px-2 -mx-2 opacity-0"
            >
              <span
                className="font-mono text-white/20 flex-shrink-0"
                style={{ fontSize: '11px', letterSpacing: '0.1em', minWidth: '28px' }}
              >
                {ep.num}
              </span>

              <div className="flex-1 min-w-0">
                <h3
                  className="text-white/75 group-hover:text-white transition-colors font-medium truncate"
                  style={{ fontSize: 'clamp(14px, 1.5vw, 17px)' }}
                >
                  {ep.title}
                </h3>
              </div>

              <span
                className="font-mono text-white/25 group-hover:text-white/50 transition-colors flex-shrink-0 hidden sm:block"
                style={{ fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase' }}
              >
                {ep.duration}
              </span>

              {/* Arrow */}
              <span
                className="row-arrow font-mono text-[#C41E3A] flex-shrink-0"
                style={{ fontSize: '12px' }}
              >
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
