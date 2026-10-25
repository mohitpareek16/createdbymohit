import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Mic, Radio, BookOpen, Award } from 'lucide-react'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import Footer from '../components/Footer'

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
    <main style={{ background: 'var(--bg)' }}>
      <SEO
        title="Press & Media | Mohit Pareek"
        description="Press coverage, podcast appearances, and speaking engagements by Mohit Pareek — founder of Starting Core and design lead at createdbymohit.com."
        canonical="/media"
      />
      <Nav />

      {/* ── HERO ── */}
      <section style={{ paddingTop: 'clamp(120px,15vw,180px)', paddingBottom: 'clamp(48px,5vw,80px)', paddingInline: '24px', borderBottom: '1px solid var(--border)', background: 'var(--bg)' }}>
        <div className="max-w-[1320px] mx-auto" ref={heroRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="font-mono uppercase"
            style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '20px' }}
          >
            <span style={{ color: 'var(--accent)', marginRight: '6px' }}>··</span>PRESS · PODCASTS · SPEAKING
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne uppercase"
            style={{ fontSize: 'clamp(44px,7.5vw,96px)', lineHeight: 0.9, letterSpacing: '-0.035em', fontWeight: 800, color: 'var(--text)', marginBottom: '24px' }}
          >
            IN THE{' '}
            <span style={{ color: 'var(--accent)' }}>CONVERSATION.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ fontSize: 'clamp(14px,1.4vw,17px)', lineHeight: 1.7, color: 'var(--muted)', maxWidth: '50ch' }}
          >
            Press, podcasts, and speaking engagements. For media requests, write to{' '}
            <a href="mailto:hello@createdbymohit.com" style={{ color: 'var(--text)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              hello@createdbymohit.com
            </a>
          </motion.p>
        </div>
      </section>

      {/* ── PRESS ── */}
      <section style={{ padding: 'clamp(56px,6vw,96px) 24px', borderBottom: '1px solid var(--border)', background: 'var(--bg)' }}>
        <div className="max-w-[1320px] mx-auto">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
            <BookOpen style={{ width: '16px', height: '16px', color: 'var(--accent)' }} strokeWidth={1.5} />
            <span className="font-mono uppercase" style={{ fontSize: '11px', letterSpacing: '0.16em', color: 'var(--muted)' }}>Press</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {PRESS.map((item, i) => (
              <motion.a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.06, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="group"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  gap: '24px', padding: '20px 16px', margin: '0 -16px',
                  borderBottom: '1px solid var(--border)', borderRadius: '12px',
                  textDecoration: 'none', transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1, minWidth: 0 }}>
                  <span className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.14em', color: 'var(--accent)', border: '1px solid rgba(196,30,58,0.3)', borderRadius: '999px', padding: '3px 10px', flexShrink: 0 }}>
                    {item.type}
                  </span>
                  <div style={{ minWidth: 0 }}>
                    <div className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.14em', color: 'var(--muted)', marginBottom: '4px' }}>{item.outlet} · {item.date}</div>
                    <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)', lineHeight: 1.35, transition: 'color 0.2s' }}
                      className="group-hover:text-[color:var(--accent)]">{item.headline}</p>
                  </div>
                </div>
                <ArrowUpRight style={{ width: '16px', height: '16px', color: 'var(--border-strong)', flexShrink: 0, transition: 'color 0.2s' }}
                  className="group-hover:text-[color:var(--text)]" strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── PODCASTS ── */}
      <section style={{ padding: 'clamp(56px,6vw,96px) 24px', background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[1320px] mx-auto">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
            <Radio style={{ width: '16px', height: '16px', color: 'var(--accent)' }} strokeWidth={1.5} />
            <span className="font-mono uppercase" style={{ fontSize: '11px', letterSpacing: '0.16em', color: 'var(--muted)' }}>Podcasts</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PODCASTS.map((ep, i) => (
              <motion.a key={i} href={ep.href} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group"
                style={{
                  background: 'var(--bg)', borderRadius: '16px',
                  border: '1px solid var(--border)', padding: '24px',
                  textDecoration: 'none', transition: 'border-color 0.2s', display: 'block',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-strong)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mic style={{ width: '16px', height: '16px', color: 'var(--accent)' }} strokeWidth={1.5} />
                  </div>
                  <ArrowUpRight style={{ width: '16px', height: '16px', color: 'var(--muted)', flexShrink: 0, marginTop: '4px', transition: 'color 0.2s' }}
                    className="group-hover:text-[color:var(--text)]" strokeWidth={1.5} />
                </div>
                <div className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.14em', color: 'var(--muted)', marginBottom: '6px' }}>
                  {ep.show} · {ep.date}
                </div>
                <h3 style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)', lineHeight: 1.4, marginBottom: '12px', transition: 'color 0.2s' }}
                  className="group-hover:text-[color:var(--accent)]">
                  {ep.episode}
                </h3>
                <div className="font-mono" style={{ fontSize: '10px', color: 'var(--muted)', display: 'flex', gap: '12px' }}>
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
      <section style={{ padding: 'clamp(56px,6vw,96px) 24px', background: 'var(--bg)' }}>
        <div className="max-w-[1320px] mx-auto">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
            <Award style={{ width: '16px', height: '16px', color: 'var(--accent)' }} strokeWidth={1.5} />
            <span className="font-mono uppercase" style={{ fontSize: '11px', letterSpacing: '0.16em', color: 'var(--muted)' }}>Speaking</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {SPEAKING.map((talk, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.06, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-[140px_1fr_140px] gap-4 items-start md:items-center"
                style={{ padding: '28px 0', borderBottom: '1px solid var(--border)' }}
              >
                <div>
                  <div className="font-mono uppercase" style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'var(--muted)' }}>{talk.date}</div>
                  <span className="font-mono uppercase" style={{ display: 'inline-block', marginTop: '6px', fontSize: '9px', letterSpacing: '0.14em', color: 'var(--accent)', border: '1px solid rgba(196,30,58,0.3)', borderRadius: '999px', padding: '2px 8px' }}>
                    {talk.type}
                  </span>
                </div>
                <div>
                  <div className="font-mono uppercase" style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'var(--muted)', marginBottom: '4px' }}>{talk.event}</div>
                  <h3 style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)', lineHeight: 1.4 }}>{talk.talk}</h3>
                </div>
                <div className="font-mono uppercase" style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'var(--muted)', textAlign: 'right' }}>
                  {talk.location}
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ marginTop: '48px', padding: '32px', borderRadius: '20px', background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <h3 style={{ fontWeight: 500, color: 'var(--text)', marginBottom: '8px', fontSize: '16px' }}>Speaking enquiries</h3>
            <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '16px', maxWidth: '52ch' }}>
              I speak on product design, design for startups, portfolio building, and the business of freelance design.
              Conferences, workshops, and university events welcome.
            </p>
            <a href="mailto:hello@createdbymohit.com?subject=Speaking%20inquiry"
              className="font-mono uppercase"
              style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'var(--accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              hello@createdbymohit.com
              <ArrowUpRight style={{ width: '12px', height: '12px' }} strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
