import { Reveal, SectionHead } from './shared'
import { APPROACH } from '../../data/studio'

export default function Approach() {
  return (
    <section className="section" id="approach" style={{ background: 'var(--paper-2)' }}>
      <div className="wrap">
        <SectionHead num="04" label="Our approach"
          title={<>We don't start with tools. <em>We start with problems.</em></>}
          intro="Five steps, in this order, every time. Skipping the first two is how most software ends up unused." />
        <ol style={{ listStyle: 'none', borderTop: '1px solid var(--ink)' }}>
          {APPROACH.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <li className="step">
                <span className="label" style={{ color: 'var(--red)' }}>{s.n}</span>
                <h3 className="font-display" style={{ fontSize: 'clamp(38px, 4.6vw, 64px)', lineHeight: 1, letterSpacing: '-0.03em' }}>{s.title}</h3>
                <p style={{ fontSize: 17, fontWeight: 500, lineHeight: 1.4 }}>{s.line}</p>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)' }}>{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
      <style>{`
        .step { display: grid; grid-template-columns: 60px minmax(0, 1.1fr) minmax(0, 0.8fr) minmax(0, 1.2fr); gap: clamp(16px, 3vw, 40px); align-items: baseline; padding: clamp(22px, 3vw, 32px) 0; border-bottom: 1px solid var(--rule); }
        @media (max-width: 860px) { .step { grid-template-columns: 44px minmax(0, 1fr); row-gap: 10px; } .step > p { grid-column: 2; } }
      `}</style>
    </section>
  )
}
