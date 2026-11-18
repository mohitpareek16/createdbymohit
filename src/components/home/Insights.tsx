import { Link } from 'react-router-dom'
import { Reveal, SectionHead } from './shared'
import ArticleCover from './ArticleCover'
import { getAllPosts } from '../../data/blog'
import { ARTICLE_CATEGORIES } from '../../data/studio'

export function ArticleCard({ post }: { post: ReturnType<typeof getAllPosts>[number] }) {
  return (
    <Link to={`/blog/${post.slug}`} className="art-card" style={{ display: 'block' }}>
      <ArticleCover post={post} />
      <p className="label" style={{ marginTop: 16, fontSize: 10.5 }}>{post.category} · {post.readTime}</p>
      <h3 className="font-display art-title" style={{ fontSize: 26, lineHeight: 1.1, marginTop: 8 }}>{post.title}</h3>
      <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-soft)', marginTop: 8 }}>{post.subtitle}</p>
      <p className="label" style={{ marginTop: 12, fontSize: 10.5, color: 'var(--ink-faint)' }}>{post.date}</p>
      <style>{`.art-card:hover .art-title { font-style: italic; }`}</style>
    </Link>
  )
}

export default function Insights() {
  const posts = getAllPosts()
  const latest = ARTICLE_CATEGORIES.map(c => posts.find(p => p.category === c)).filter((p): p is NonNullable<typeof p> => !!p)
  return (
    <section className="section rule-top" id="insights">
      <div className="wrap">
        <SectionHead num="07" label="Insights"
          title={<>Thoughts, ideas and <em>practical solutions.</em></>}
          intro="Notes on AI, design and the operational problems founders actually run into. Written from the work, not from a content calendar."
          aside={<Link to="/blog" className="btn">All articles <span className="arrow">↗</span></Link>} />
        <div className="ins-grid">
          {latest.map((p, i) => <Reveal key={p.slug} delay={i * 0.08}><ArticleCard post={p} /></Reveal>)}
        </div>
      </div>
      <style>{`
        .ins-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(24px, 3vw, 40px); }
        @media (max-width: 860px) { .ins-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
