import { Reveal, SectionHead } from './shared'
import { PILLARS } from '../../data/studio'

export default function Belief() {
  return (
    <section className="section rule-top" id="belief">
      <div className="wrap">
        <SectionHead num="02" label="What we believe"
          title={<>Good solutions start with <em>asking better questions.</em></>}
          intro="A business doesn't always need another tool. Sometimes it needs a better process, a connected system, an easier experience or a few hours of work that run themselves. We find out which one before we build anything." />
        <div className="pillars">
          {PILLARS.map((p, i) => (
            <Reveal key={p.key} delay={i * 0.08} className="pillar">
              <p className="label"><span className="label-num">0{i + 1}</span>{p.key}</p>
              <h3 className="font-display" style={{ fontSize: 'clamp(30px, 2.8vw, 40px)', lineHeight: 1.05, marginTop: 22 }}>{p.title}</h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.65, color: 'var(--ink-soft)', marginTop: 14 }}>{p.body}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 22 }}>
                {p.items.map(it => <li key={it} className="chip">{it}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        .pillars { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--ink); }
        .pillar { padding: 28px clamp(18px, 2.4vw, 32px) 8px 0; }
        .pillar + .pillar { padding-left: clamp(18px, 2.4vw, 32px); border-left: 1px solid var(--rule); }
        @media (max-width: 860px) {
          .pillars { grid-template-columns: 1fr; }
          .pillar + .pillar { padding-left: 0; border-left: none; border-top: 1px solid var(--rule); }
          .pillar { padding-bottom: 28px; }
        }
      `}</style>
    </section>
  )
}
