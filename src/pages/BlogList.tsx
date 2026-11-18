import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import { getAllPosts } from '../data/blog'
import { ARTICLE_CATEGORIES } from '../data/studio'
import { ArticleCard } from '../components/home/Insights'
import { Reveal } from '../components/home/shared'

const ALL = 'All'

export default function BlogList() {
  const posts = getAllPosts()
  const [cat, setCat] = useState<string>(ALL)
  const shown = cat === ALL ? posts : posts.filter(p => p.category === cat)

  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <SEO
        title="Insights: AI, design and business problem solving | CreatedByMohit"
        description="Practical articles on AI automation, digital product design and fixing the operational problems that slow growing businesses down."
        canonical="/blog"
      />
      <Nav />
      <section style={{ paddingTop: 'clamp(130px, 15vw, 180px)', paddingBottom: 'clamp(80px, 10vw, 140px)' }}>
        <div className="wrap">
          <p className="label"><span className="label-num">—</span>Insights</p>
          <h1 className="font-display" style={{ fontSize: 'clamp(52px, 8vw, 120px)', lineHeight: 0.95, letterSpacing: '-0.035em', marginTop: 20, maxWidth: '12ch' }}>
            Ideas worth putting <em>into practice.</em>
          </h1>
          <p style={{ fontSize: 'clamp(16px, 1.5vw, 19px)', lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: '52ch', marginTop: 24 }}>
            Notes on AI, design and the operational problems founders actually run into.
          </p>

          <div role="tablist" aria-label="Filter by category" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 44, paddingBottom: 28, borderBottom: '1px solid var(--rule)' }}>
            {[ALL, ...ARTICLE_CATEGORIES].map(c => {
              const active = c === cat
              const count = c === ALL ? posts.length : posts.filter(p => p.category === c).length
              return (
                <button key={c} role="tab" aria-selected={active} onClick={() => setCat(c)} className="chip"
                  style={{ cursor: 'pointer', background: active ? 'var(--ink)' : undefined, color: active ? 'var(--paper)' : undefined, borderColor: active ? 'var(--ink)' : undefined, font: 'inherit', fontSize: 13.5 }}>
                  {c} <span style={{ opacity: 0.55, marginLeft: 6 }}>{count}</span>
                </button>
              )
            })}
          </div>

          <div className="bl-grid">
            {shown.map((p, i) => <Reveal key={p.slug} delay={(i % 3) * 0.06}><ArticleCard post={p} /></Reveal>)}
          </div>
        </div>
      </section>
      <Footer />
      <style>{`
        .bl-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(40px, 5vw, 64px) clamp(24px, 3vw, 40px); margin-top: 48px; }
        @media (max-width: 960px) { .bl-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 620px) { .bl-grid { grid-template-columns: 1fr; } }
      `}</style>
    </main>
  )
}
