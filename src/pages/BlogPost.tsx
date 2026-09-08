import { useRef } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, useScroll, useSpring, useInView } from 'framer-motion'
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import { getPost, getNextPost } from '../data/blog'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 40 })
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-[#C41E3A] origin-left z-[100]"
      style={{ scaleX }}
    />
  )
}

function BodyMarkdown({ text }: { text: string }) {
  const paragraphs = text.trim().split('\n\n')
  return (
    <div className="flex flex-col gap-6">
      {paragraphs.map((block, i) => {
        if (block.startsWith('## ')) {
          return (
            <h2 key={i} className="font-medium text-[#051A24] text-lg mt-4 mb-0">
              {block.replace('## ', '')}
            </h2>
          )
        }
        if (block.startsWith('**') && block.endsWith('**')) {
          return (
            <p key={i} className="font-medium text-[#051A24] text-sm leading-relaxed">
              {block.replace(/\*\*/g, '')}
            </p>
          )
        }
        const withBold = block.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>')
        return (
          <p
            key={i}
            className="text-[#051A24]/70 text-base leading-[1.75]"
            dangerouslySetInnerHTML={{ __html: withBold }}
          />
        )
      })}
    </div>
  )
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = getPost(slug ?? '')
  const next = post ? getNextPost(post.slug) : undefined
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })

  if (!post) return <Navigate to="/blog" replace />

  return (
    <main>
      <SEO
        title={`${post.title} | Mohit Pareek Blog`}
        description={post.subtitle}
        canonical={`/blog/${post.slug}`}
        type="article"
      />
      <ScrollProgress />
      <Nav />

      {/* ── HERO ── */}
      <section className="pt-40 pb-14 px-6 md:px-10 border-b border-[#D8D4CB]">
        <div className="max-w-[760px] mx-auto" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-[#8A8780] hover:text-[#051A24] transition-colors"
            >
              <ArrowLeft className="w-3 h-3" strokeWidth={2} />
              All writing
            </Link>
            <span className="w-px h-3 bg-[#D8D4CB]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#C41E3A]">
              {post.category}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(30px,5vw,56px)] leading-[1.05] tracking-tight text-[#051A24] mb-5"
          >
            {post.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base text-[#051A24]/60 leading-relaxed mb-8"
          >
            {post.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <div className="w-8 h-8 rounded-full bg-[#051A24] flex items-center justify-center flex-shrink-0">
              <span className="font-mondwest text-white text-[10px]">M</span>
            </div>
            <div>
              <div className="text-sm font-medium text-[#051A24]">Mohit Pareek</div>
              <div className="flex items-center gap-2 font-mono text-[10px] text-[#8A8780]">
                <span>{post.date}</span>
                <span>·</span>
                <Clock className="w-3 h-3" strokeWidth={1.5} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BODY ── */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-[760px] mx-auto">
          <BodyMarkdown text={post.body} />
        </div>
      </section>

      {/* ── NEXT POST ── */}
      {next && (
        <section className="border-t border-[#D8D4CB] py-16 px-6 md:px-10 bg-[#F5F3EE]">
          <div className="max-w-[760px] mx-auto">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780] mb-5">
              Next article
            </div>
            <Link to={`/blog/${next.slug}`} className="group flex items-start justify-between gap-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#C41E3A] mb-2">
                  {next.category}
                </div>
                <h3 className="text-xl font-medium text-[#051A24] group-hover:text-[#C41E3A] transition-colors leading-snug">
                  {next.title}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full border border-[#D8D4CB] flex items-center justify-center flex-shrink-0 group-hover:bg-[#051A24] group-hover:border-[#051A24] transition-colors mt-1">
                <ArrowRight className="w-4 h-4 text-[#051A24] group-hover:text-white transition-colors" strokeWidth={1.5} />
              </div>
            </Link>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
