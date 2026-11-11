import { motion } from 'framer-motion'
import Doodle from './sketch/Doodle'
import { RED } from './sketch/RoughBox'

const YOUTUBE_URL = 'https://www.youtube.com/@createdbymohit'

const EPISODES = [
  { num: '01', title: 'How I Got My First Design Client Without a Portfolio' },
  { num: '02', title: 'The Truth About Freelance Design in India' },
  { num: '03', title: 'Design Systems for Startups: What Actually Works' },
  { num: '04', title: 'Stop Learning Design. Start Doing Design.' },
  { num: '05', title: 'How to Price Yourself as a Designer in 2024' },
  { num: '06', title: 'From Student to Studio: Building Starting Core' },
]

const PAPER = '#F4EFE6'

export default function PodcastSection() {
  return (
    <section id="podcast" className="ink-section" style={{ padding: 'clamp(80px, 9vw, 140px) 0', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{
        position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(244,239,230,0.07) 1px, transparent 1px)', backgroundSize: '22px 22px',
      }} />
      <div style={{
        maxWidth: 1180, margin: '0 auto', position: 'relative',
        paddingLeft: 'max(20px, env(safe-area-inset-left, 0px))',
        paddingRight: 'max(20px, env(safe-area-inset-right, 0px))',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20 }}>
            <div>
              <p className="hand-label" style={{ marginBottom: 10, color: '#F6D365' }}>youtube · podcast —</p>
              <h2 className="font-display" style={{ fontSize: 'clamp(50px, 7vw, 108px)', lineHeight: 0.9, letterSpacing: '-0.03em', color: PAPER }}>
                On the <em>record.</em>
              </h2>
            </div>
            <Doodle name="mic" size={56} color={PAPER} strokeWidth={2.2} style={{ marginBottom: 10 }} />
          </div>
          <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="bracket-link"
            style={{ color: '#1B1A17', background: PAPER, boxShadow: `3px 4px 0 0 ${RED}` }}>
            YouTube channel ↗
          </a>
        </div>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(244,239,230,0.6)', maxWidth: '58ch', marginBottom: 'clamp(40px, 5vw, 64px)' }}>
          Design conversations — real talk about the industry, careers, and building products that matter. 6 episodes and counting.
        </p>

        <div>
          {EPISODES.map((ep, i) => (
            <motion.a key={ep.num} href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="ep-row">
              <span className="font-hand" style={{ fontSize: 26, color: RED, minWidth: 40 }}>{ep.num}</span>
              <span className="font-display ep-title" style={{ flex: 1, minWidth: 0, fontSize: 'clamp(22px, 2.6vw, 34px)', lineHeight: 1.15, color: PAPER }}>{ep.title}</span>
              <span className="eyebrow hidden sm:inline" style={{ fontSize: 10, color: 'rgba(244,239,230,0.45)' }}>Watch on YouTube</span>
              <span className="ep-play" aria-hidden>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke={PAPER} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 2.5 C 26 2, 31.5 8, 31.5 17 C 31.5 26, 25 31.5, 17 31.5 C 8 31.5, 2.5 25.5, 2.5 17 C 2.5 9, 8 2.8, 18 3" />
                  <path d="M13.5 11 L 23.5 17 L 13.5 23 Z" fill={RED} stroke={RED} />
                </svg>
              </span>
              <svg aria-hidden width="100%" height="6" preserveAspectRatio="none" viewBox="0 0 1000 6" style={{ position: 'absolute', left: 0, bottom: -3 }}>
                <path d={i % 2 ? 'M0 3 C 200 5, 400 1, 600 3 C 800 5, 900 2, 1000 3' : 'M0 3 C 150 1, 350 5, 550 3 C 750 1, 900 4, 1000 2'}
                  stroke={PAPER} strokeOpacity="0.22" strokeWidth="1.2" fill="none" vectorEffect="non-scaling-stroke" />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        .ep-row { position: relative; display: flex; align-items: center; gap: clamp(14px, 2vw, 28px); padding: 22px 0; transition: padding .3s ease; }
        .ep-row:hover { padding-left: 14px; }
        .ep-row:hover .ep-title { font-style: italic; }
        .ep-play { transition: transform .3s ease; flex-shrink: 0; }
        .ep-row:hover .ep-play { transform: rotate(-12deg) scale(1.1); }
      `}</style>
    </section>
  )
}
