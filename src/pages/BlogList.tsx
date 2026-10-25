import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import { getAllPosts } from '../data/blog'

const POSTS = getAllPosts()

const CATEGORIES = ['All', ...Array.from(new Set(POSTS.map(p => p.category)))]

function PostCard({ post, index }: { post: typeof POSTS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/blog/${post.slug}`} className="group block">
        {/* Image */}
        <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-5 relative" style={{ background: 'var(--surface-2)' }}>
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]"
            style={{ backgroundImage: `linear-gradient(135deg, #0C0C0A 0%, #1A1A17 100%)` }}
          />
          <div className="absolute bottom-5 left-5">
            <span className="font-mono uppercase" style={{ display: 'inline-block', fontSize: '9px', letterSpacing: '0.15em', color: 'rgba(247,245,240,0.5)', border: '1px solid rgba(247,245,240,0.2)', borderRadius: '999px', padding: '3px 10px' }}>
              {post.category}
            </span>
          </div>
        </div>

        {/* Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <span className="font-mono uppercase" style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'var(--muted)' }}>{post.date}</span>
          <span style={{ width: '1px', height: '12px', background: 'var(--border-strong)', display: 'inline-block' }} />
          <span className="font-mono uppercase" style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'var(--muted)' }}>{post.readTime}</span>
        </div>

        {/* Title */}
        <h2 style={{ fontSize: '18px', fontWeight: 500, color: 'var(--text)', lineHeight: 1.3, marginBottom: '8px', transition: 'color 0.2s' }}
          className="group-hover:text-[color:var(--accent)]">
          {post.title}
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '16px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {post.subtitle}
        </p>

        <span className="font-mono uppercase" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '10px', letterSpacing: '0.15em', color: 'var(--accent)', transition: 'gap 0.2s' }}>
          Read
          <ArrowRight className="w-3 h-3" strokeWidth={2} />
        </span>
      </Link>
    </motion.div>
  )
}

export default function BlogList() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <main style={{ background: 'var(--bg)' }}>
      <SEO
        title="Blog — Building, AI & Design | Mohit Pareek · Starting Core"
        description="Articles on custom software, AI automation for businesses, design education, and building things that actually work — by Mohit Pareek, founder of Starting Core."
        canonical="/blog"
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
            <span style={{ color: 'var(--accent)', marginRight: '6px' }}>··</span>WRITING · BUILDING & CRAFT
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne uppercase"
            style={{ fontSize: 'clamp(44px,7.5vw,96px)', lineHeight: 0.9, letterSpacing: '-0.035em', fontWeight: 800, color: 'var(--text)', marginBottom: '24px' }}
          >
            THINGS WORTH{' '}
            <span style={{ color: 'var(--accent)' }}>WRITING DOWN.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ fontSize: 'clamp(14px,1.4vw,17px)', lineHeight: 1.7, color: 'var(--muted)', maxWidth: '52ch' }}
          >
            On building custom software, AI for small businesses, design education, and what actually works. No filler — just what I've learned building.
          </motion.p>
        </div>
      </section>

      {/* ── POSTS ── */}
      <section style={{ padding: 'clamp(56px,6vw,96px) 24px', background: 'var(--bg)' }}>
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {POSTS.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
