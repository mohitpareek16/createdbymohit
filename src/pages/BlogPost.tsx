import { Fragment, type ReactNode } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, useScroll, useSpring } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import ArticleCover from '../components/home/ArticleCover'
import { ArticleCard } from '../components/home/Insights'
import { getPost, getAllPosts } from '../data/blog'

function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i} style={{ color: 'var(--ink)', fontWeight: 600 }}>{part.slice(2, -2)}</strong>
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>
    return <Fragment key={i}>{part}</Fragment>
  })
}

function Body({ text }: { text: string }) {
  return (
    <div className="prose">
      {text.trim().split('\n\n').map((block, i) => {
        if (block.startsWith('## ')) return <h2 key={i}>{block.slice(3)}</h2>
        const lines = block.split('\n')
        if (lines.every(l => l.startsWith('- '))) return <ul key={i}>{lines.map((l, j) => <li key={j}>{inline(l.slice(2))}</li>)}</ul>
        if (lines.every(l => /^\d+\.\s/.test(l))) return <ol key={i}>{lines.map((l, j) => <li key={j}>{inline(l.replace(/^\d+\.\s/, ''))}</li>)}</ol>
        return <p key={i}>{inline(block)}</p>
      })}
    </div>
  )
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = getPost(slug ?? '')
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 40 })

  if (!post) return <Navigate to="/blog" replace />

  const all = getAllPosts()
  const related = [...all.filter(p => p.slug !== post.slug && p.category === post.category), ...all.filter(p => p.slug !== post.slug && p.category !== post.category)].slice(0, 3)
  const url = `https://createdbymohit.com/blog/${post.slug}`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.subtitle,
    articleSection: post.category,
    author: { '@type': 'Person', name: 'Mohit Pareek', url: 'https://createdbymohit.com/#about' },
    publisher: { '@type': 'Organization', name: 'CreatedByMohit', url: 'https://createdbymohit.com/' },
    mainEntityOfPage: url,
    datePublished: post.date,
    image: 'https://createdbymohit.com/mohit-pareek.jpg',
  }

  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <SEO title={`${post.title} | CreatedByMohit`} description={post.subtitle} canonical={`/blog/${post.slug}`} type="article" />
      <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>
      <motion.div aria-hidden style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 2, background: 'var(--red)', transformOrigin: '0 50%', zIndex: 60, scaleX }} />
      <Nav />

      <article style={{ paddingTop: 'clamp(120px, 14vw, 160px)' }}>
        <header className="wrap" style={{ maxWidth: 900 }}>
          <Link to="/blog" className="label link-u">← Insights</Link>
          <p className="label" style={{ marginTop: 28 }}><span className="label-num">{post.category}</span>{post.readTime} · {post.date}</p>
          <h1 className="font-display" style={{ fontSize: 'clamp(42px, 6vw, 84px)', lineHeight: 1, letterSpacing: '-0.03em', marginTop: 18 }}>{post.title}</h1>
          <p style={{ fontSize: 'clamp(18px, 1.8vw, 22px)', lineHeight: 1.55, color: 'var(--ink-soft)', marginTop: 20, maxWidth: '46ch' }}>{post.subtitle}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 28 }}>
            <img src="/mohit-pareek.jpg" alt="" width={40} height={40} style={{ width: 40, height: 40, borderRadius: 99, objectFit: 'cover', objectPosition: 'top' }} />
            <div>
              <p style={{ fontSize: 14.5, fontWeight: 500 }}>Mohit Pareek</p>
              <p style={{ fontSize: 13, color: 'var(--ink-soft)' }}>Founder, CreatedByMohit</p>
            </div>
          </div>
        </header>

        <div className="wrap" style={{ marginTop: 'clamp(36px, 5vw, 56px)' }}><ArticleCover post={post} large /></div>

        <div className="wrap" style={{ maxWidth: 760, marginTop: 'clamp(40px, 6vw, 72px)' }}>
          <Body text={post.body} />

          <aside style={{ marginTop: 56, padding: 'clamp(24px, 3vw, 36px)', background: 'var(--ink)', color: 'var(--paper)', borderRadius: 16 }}>
            <p className="label" style={{ color: 'rgba(246,245,241,0.6)' }}>Have a problem like this?</p>
            <p className="font-display" style={{ fontSize: 'clamp(28px, 3vw, 38px)', lineHeight: 1.1, marginTop: 12 }}>Tell us what's slowing your business down.</p>
            <Link to="/#contact" className="btn btn-light" style={{ marginTop: 22 }}>Discuss your problem <span className="arrow">↗</span></Link>
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section">
          <div className="wrap">
            <p className="label" style={{ marginBottom: 28 }}>Keep reading</p>
            <div className="rel-grid">{related.map(p => <ArticleCard key={p.slug} post={p} />)}</div>
          </div>
        </section>
      )}
      <Footer />

      <style>{`
        .prose { display: grid; gap: 22px; font-size: 18px; line-height: 1.75; color: rgba(18,18,18,0.8); }
        .prose h2 { font-family: var(--font-display); font-weight: 400; font-size: clamp(28px, 3vw, 36px); line-height: 1.12; letter-spacing: -0.02em; color: var(--ink); margin-top: 22px; }
        .prose ul, .prose ol { padding-left: 1.2em; display: grid; gap: 10px; }
        .prose li::marker { color: var(--red); }
        .rel-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(24px, 3vw, 40px); }
        @media (max-width: 860px) { .rel-grid { grid-template-columns: 1fr; } }
      `}</style>
    </main>
  )
}
