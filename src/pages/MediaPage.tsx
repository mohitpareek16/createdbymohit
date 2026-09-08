import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Mic, Radio, BookOpen, Award } from 'lucide-react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import BottomNav from '../components/BottomNav'

const PRESS = [
  {
    outlet: 'YourStory',
    headline: '"Mohit Pareek is redefining how Indian startups think about design"',
    date: 'June 2026',
    href: '#',
    type: 'Feature',
  },
  {
    outlet: 'Design+Code',
    headline: '“The portfolio review method that’s actually getting designers hired”',
    date: 'April 2026',
    href: '#',
    type: 'Interview',
  },
  {
    outlet: 'Product Hunt',
    headline: 'xPortfolio — #2 Product of the Day',
    date: 'February 2026',
    href: '#',
    type: 'Launch',
  },
  {
    outlet: 'Dribbble Blog',
    headline: '"6 designers on how they price their work in 2026"',
    date: 'January 2026',
    href: '#',
    type: 'Feature',
  },
  {
    outlet: 'Inc42',
    headline: '"Starting Core: the design studio behind some of India\'s fastest-growing startups"',
    date: 'November 2025',
    href: '#',
    type: 'Feature',
  },
]

const PODCASTS = [
  {
    show: 'The Product Minds Podcast',
    episode: 'Ep. 84 — Design as a competitive advantage for early-stage startups',
    host: 'Raghav Bahl',
    duration: '58 min',
    date: 'May 2026',
    href: '#',
  },
  {
    show: 'Design Better',
    episode: 'Ep. 201 — How to build a portfolio that actually converts',
    host: 'Aarron Walter',
    duration: '44 min',
    date: 'March 2026',
    href: '#',
  },
  {
    show: 'Freelance Forward',
    episode: 'Ep. 67 — Pricing frameworks for creative professionals',
    host: 'Sahil Lavingia',
    duration: '37 min',
    date: 'December 2025',
    href: '#',
  },
  {
    show: 'The Startup Design Show',
    episode: 'Ep. 23 — What design systems actually look like at seed stage',
    host: 'Yashica Khurana',
    duration: '51 min',
    date: 'October 2025',
    href: '#',
  },
]

const SPEAKING = [
  {
    event: 'Design Matters India 2026',
    talk: 'The Portfolio Review: What Hiring Managers Actually See',
    location: 'Bangalore, India',
    date: 'July 2026',
    type: 'Keynote',
  },
  {
    event: 'UX India Conference',
    talk: 'From Pixels to Products: Design Thinking for Startup Founders',
    location: 'Mumbai, India',
    date: 'April 2026',
    type: 'Workshop',
  },
  {
    event: 'Figma Config Community Event',
    talk: 'Building Design Systems That Survive Rapid Growth',
    location: 'Delhi, India',
    date: 'February 2026',
    type: 'Talk',
  },
  {
    event: 'ProductFest 2025',
    talk:"Design Sprints in the Real World: What Works, What Doesn't",
    location: 'Jaipur, India',
    date: 'November 2025',
    type: 'Talk',
  },
  {
    event: 'Dribbble Meetup Jaipur',
    talk: 'The Business of Freelance Design',
    location: 'Jaipur, India',
    date: 'August 2025',
    type: 'Panel',
  },
]

export default function MediaPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <main>
      <Nav />

      {/* ── HERO ── */}
      <section className="pt-40 pb-16 px-6 md:px-10 border-b border-[#D8D4CB]">
        <div className="max-w-[1320px] mx-auto" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780] mb-6"
          >
            Press & media
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(44px,7.5vw,96px)] leading-[0.9] tracking-tight text-[#051A24] mb-6"
          >
            In the{' '}
            <em className="font-mondwest text-[#C41E3A] not-italic">conversation.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base text-[#051A24]/60 max-w-[50ch] leading-relaxed"
          >
            Press, podcasts, and speaking engagements. For media requests, write to{' '}
            <a href="mailto:hello@createdbymohit.com" className="text-[#051A24] underline underline-offset-2 hover:text-[#C41E3A] transition-colors">
              hello@createdbymohit.com
            </a>
          </motion.p>
        </div>
      </section>

      {/* ── PRESS ── */}
      <section className="py-16 md:py-24 px-6 md:px-10 border-b border-[#D8D4CB]">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <BookOpen className="w-4 h-4 text-[#C41E3A]" strokeWidth={1.5} />
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780]">Press</div>
          </div>

          <div className="flex flex-col">
            {PRESS.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.06, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-start md:items-center justify-between gap-6 py-6 border-b border-[#D8D4CB] hover:bg-[#F5F3EE] -mx-4 px-4 rounded-xl transition-colors"
              >
                <div className="flex items-start md:items-center gap-5 flex-1 min-w-0">
                  <span className="flex-shrink-0 font-mono text-[10px] uppercase tracking-widest text-[#C41E3A] border border-[#C41E3A]/30 rounded-full px-2.5 py-1 whitespace-nowrap">
                    {item.type}
                  </span>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780] mb-1">{item.outlet} · {item.date}</div>
                    <p className="text-sm font-medium text-[#051A24] leading-snug group-hover:text-[#C41E3A] transition-colors truncate">
                      {item.headline}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#D8D4CB] group-hover:text-[#051A24] transition-colors flex-shrink-0" strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── PODCASTS ── */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-[#F5F3EE] border-b border-[#D8D4CB]">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <Radio className="w-4 h-4 text-[#C41E3A]" strokeWidth={1.5} />
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780]">Podcasts</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PODCASTS.map((ep, i) => (
              <motion.a
                key={i}
                href={ep.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white rounded-2xl border border-[#D8D4CB] p-6 hover:border-[#051A24] transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#051A24] flex items-center justify-center flex-shrink-0">
                    <Mic className="w-4 h-4 text-white" strokeWidth={1.5} />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#D8D4CB] group-hover:text-[#051A24] transition-colors flex-shrink-0 mt-1" strokeWidth={1.5} />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780] mb-1.5">
                  {ep.show} · {ep.date}
                </div>
                <h3 className="text-sm font-medium text-[#051A24] leading-snug mb-3 group-hover:text-[#C41E3A] transition-colors">
                  {ep.episode}
                </h3>
                <div className="flex items-center gap-3 font-mono text-[10px] text-[#8A8780]">
                  <span>with {ep.host}</span>
                  <span>·</span>
                  <span>{ep.duration}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPEAKING ── */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <Award className="w-4 h-4 text-[#C41E3A]" strokeWidth={1.5} />
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780]">Speaking</div>
          </div>

          <div className="flex flex-col">
            {SPEAKING.map((talk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.06, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-[140px_1fr_140px] gap-4 py-7 border-b border-[#D8D4CB] items-start md:items-center"
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780]">{talk.date}</div>
                  <span className="inline-block mt-1.5 font-mono text-[9px] uppercase tracking-widest text-[#C41E3A] border border-[#C41E3A]/30 rounded-full px-2 py-0.5">
                    {talk.type}
                  </span>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780] mb-1">{talk.event}</div>
                  <h3 className="text-sm font-medium text-[#051A24] leading-snug">{talk.talk}</h3>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780] md:text-right">
                  {talk.location}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-[#F5F3EE] border border-[#D8D4CB]">
            <h3 className="font-medium text-[#051A24] mb-2">Speaking enquiries</h3>
            <p className="text-sm text-[#051A24]/60 leading-relaxed mb-4 max-w-[52ch]">
              I speak on product design, design for startups, portfolio building, and the business of freelance design.
              Conferences, workshops, and university events welcome.
            </p>
            <a
              href="mailto:hello@createdbymohit.com?subject=Speaking%20inquiry"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#051A24] hover:text-[#C41E3A] transition-colors"
            >
              hello@createdbymohit.com
              <ArrowUpRight className="w-3 h-3" strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </main>
  )
}
