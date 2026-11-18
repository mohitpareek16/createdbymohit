import { Reveal } from './shared'
import { CREDIBILITY, SOCIALS } from '../../data/studio'

export default function About() {
  return (
    <section className="section rule-top" id="about">
      <div className="wrap about-grid">
        <Reveal style={{ position: 'relative' }}>
          <div style={{ aspectRatio: '4 / 5', overflow: 'hidden', borderRadius: 14, background: 'var(--paper-2)' }}>
            <img src="/mohit-pareek.jpg" alt="Mohit Pareek, founder of CreatedByMohit, in Jaipur" loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
          <p className="label" style={{ marginTop: 14, fontSize: 10.5 }}>Mohit Pareek · Founder · Jaipur, India</p>
        </Reveal>

        <div style={{ minWidth: 0 }}>
          <Reveal>
            <p className="label"><span className="label-num">05</span>About Mohit</p>
            <h2 className="font-display" style={{ fontSize: 'clamp(40px, 5.2vw, 74px)', lineHeight: 1, letterSpacing: '-0.03em', marginTop: 18 }}>
              Curiosity led me to design. <em>Problem-solving took me further.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} style={{ display: 'grid', gap: 18, marginTop: 30, maxWidth: '58ch' }}>
            <p style={{ fontSize: 18, lineHeight: 1.65 }}>I'm Mohit Pareek, a designer and independent problem solver based in Jaipur, India.</p>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)' }}>
              Over the years I've worked with brands, startups and creators, helping turn ideas into visual identities, digital products and meaningful experiences. But I was always more interested in what sits behind how things look.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)' }}>
              Why does this process take so long? Why is this product so hard to use? Why does the founder have to manage every little thing? Those questions led me to product thinking, technology, AI and automation.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)' }}>
              Today I bring those disciplines together to build solutions that make businesses work better. CreatedByMohit is the studio. I'm the person behind its thinking, and the one you'll talk to.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <dl className="cred">
              {CREDIBILITY.map(c => (
                <div key={c.l}>
                  <dt className="font-display" style={{ fontSize: 'clamp(34px, 3.4vw, 46px)', lineHeight: 1 }}>{c.v}</dt>
                  <dd style={{ fontSize: 13.5, lineHeight: 1.4, color: 'var(--ink-soft)', marginTop: 8 }}>{c.l}</dd>
                </div>
              ))}
            </dl>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 24px', marginTop: 28 }}>
              {SOCIALS.map(s => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="link-u" style={{ fontSize: 14.5 }}>{s.label} ↗</a>)}
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`
        .about-grid { display: grid; grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr); gap: clamp(36px, 6vw, 96px); align-items: start; }
        .cred { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 20px; margin-top: 40px; padding-top: 26px; border-top: 1px solid var(--rule); }
        @media (max-width: 860px) { .about-grid { grid-template-columns: 1fr; } .about-grid > div:first-child { max-width: 420px; } }
        @media (max-width: 560px) { .cred { grid-template-columns: 1fr 1fr; row-gap: 26px; } }
      `}</style>
    </section>
  )
}
