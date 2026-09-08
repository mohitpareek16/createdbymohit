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
        <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-[#F5F3EE] mb-5 relative">
          <div
            className="absolute inset-0 bg-[#051A24] transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-[1.03]"
            style={{ backgroundImage: `linear-gradient(135deg, #0D2234 0%, #1A3A5C 100%)` }}
          />
          <div className="absolute bottom-5 left-5">
            <span className="inline-block font-mono text-[9px] uppercase tracking-widest text-white/50 border border-white/20 rounded-full px-3 py-1">
              {post.category}
            </span>
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780]">{post.date}</span>
          <span className="w-px h-3 bg-[#D8D4CB]" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780]">{post.readTime}</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-medium text-[#051A24] leading-snug mb-2 group-hover:text-[#C41E3A] transition-colors">
          {post.title}
        </h2>
        <p className="text-sm text-[#051A24]/60 leading-relaxed mb-4 line-clamp-2">
          {post.subtitle}
        </p>

        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-[#C41E3A] group-hover:gap-3 transition-all duration-200">
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
    <main>
      <SEO
        title="Blog — Design, AI & Automation | Mohit Pareek"
        description="Articles on product design, AI automation for businesses, and building brands that work — by Mohit Pareek, founder of Starting Core."
        canonical="/blog"
      />
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
            Writing · Design & craft
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(44px,7.5vw,96px)] leading-[0.9] tracking-tight text-[#051A24] mb-6"
          >
            Things worth{' '}
            <em className="font-mondwest text-[#C41E3A] not-italic">writing down.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base text-[#051A24]/60 max-w-[52ch] leading-relaxed"
          >
            On product design, freelancing, building things that work, and everything in between.
            No filler, no listicles — just what I've actually learned.
          </motion.p>
        </div>
      </section>

      {/* ── POSTS ── */}
      <section className="py-16 md:py-24 px-6 md:px-10">
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
