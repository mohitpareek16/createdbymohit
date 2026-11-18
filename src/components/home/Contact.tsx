import { useState, type FormEvent } from 'react'
import { Reveal } from './shared'
import { EMAIL, WEB3FORMS_KEY, whatsappLink } from '../../data/studio'

type Status = 'idle' | 'sending' | 'sent' | 'mailto' | 'error'

const BUDGETS = ['Not sure yet', 'Under ₹50,000', '₹50,000 – ₹1,50,000', '₹1,50,000 – ₹5,00,000', '₹5,00,000+']

function Field({ label, name, type = 'text', required, placeholder, autoComplete }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; autoComplete?: string }) {
  return (
    <label className="fld">
      <span className="label" style={{ fontSize: 10.5 }}>{label}{required ? '' : ' · optional'}</span>
      <input name={name} type={type} required={required} placeholder={placeholder} autoComplete={autoComplete} />
    </label>
  )
}

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (!WEB3FORMS_KEY) {
      const body = [
        `Name: ${data.get('name')}`,
        `Email: ${data.get('email')}`,
        `Company: ${data.get('company') || '-'}`,
        `Budget: ${data.get('budget') || '-'}`,
        '',
        'What I want to solve:',
        `${data.get('problem')}`,
        '',
        `${data.get('details') || ''}`,
      ].join('\n')
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Problem to solve: ${data.get('company') || data.get('name')}`)}&body=${encodeURIComponent(body)}`
      setStatus('mailto')
      return
    }
    setStatus('sending')
    data.append('access_key', WEB3FORMS_KEY)
    data.append('subject', `New enquiry from ${data.get('name')} — createdbymohit.com`)
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json()
      if (json.success) { setStatus('sent'); form.reset() } else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section" id="contact" style={{ background: 'var(--paper-2)' }}>
      <div className="wrap ct-grid">
        <Reveal>
          <p className="label"><span className="label-num">08</span>Let's talk</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(46px, 6.6vw, 104px)', lineHeight: 0.96, letterSpacing: '-0.035em', marginTop: 18 }}>
            What's slowing your business <em>down?</em>
          </h2>
          <p style={{ fontSize: 'clamp(16px, 1.4vw, 19px)', lineHeight: 1.65, color: 'var(--ink-soft)', marginTop: 22, maxWidth: '40ch' }}>
            Tell us what's not working. We'll figure out a better way to make it work, and tell you honestly if it isn't worth building.
          </p>
          <div style={{ display: 'grid', gap: 12, marginTop: 36 }}>
            <a href={`mailto:${EMAIL}`} className="link-u" style={{ fontSize: 17, justifySelf: 'start' }}>{EMAIL}</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="link-u" style={{ fontSize: 17, justifySelf: 'start' }}>WhatsApp +91 63506 66858 ↗</a>
            <p className="label" style={{ marginTop: 6, textTransform: 'none', letterSpacing: 0, fontSize: 13.5 }}>Replies within one working day · Jaipur, UTC +5:30</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {status === 'sent' ? (
            <div className="ct-card" role="status">
              <p className="font-display" style={{ fontSize: 40, lineHeight: 1 }}>Thank you.</p>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-soft)', marginTop: 14 }}>Your message is in. Mohit will reply within one working day.</p>
              <button className="btn" style={{ marginTop: 24 }} onClick={() => setStatus('idle')}>Send another</button>
            </div>
          ) : (
            <form onSubmit={submit} className="ct-card">
              <div className="ct-two">
                <Field label="Name" name="name" required autoComplete="name" />
                <Field label="Email" name="email" type="email" required autoComplete="email" />
              </div>
              <Field label="Company or brand" name="company" autoComplete="organization" />
              <label className="fld">
                <span className="label" style={{ fontSize: 10.5 }}>What problem are you trying to solve?</span>
                <textarea name="problem" required rows={3} placeholder="e.g. Our team spends hours every day moving orders between three tools." />
              </label>
              <label className="fld">
                <span className="label" style={{ fontSize: 10.5 }}>Budget · optional</span>
                <select name="budget" defaultValue="">
                  <option value="" disabled>Select a range</option>
                  {BUDGETS.map(b => <option key={b}>{b}</option>)}
                </select>
              </label>
              <label className="fld">
                <span className="label" style={{ fontSize: 10.5 }}>Anything else · optional</span>
                <textarea name="details" rows={3} placeholder="Tools you use, timelines, links…" />
              </label>
              <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16, marginTop: 6 }}>
                <button type="submit" className="btn btn-solid" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : <>Discuss your problem <span className="arrow">↗</span></>}
                </button>
                {status === 'mailto' && <span style={{ fontSize: 14, color: 'var(--ink-soft)' }}>Your email app should have opened with the message ready to send.</span>}
                {status === 'error' && <span style={{ fontSize: 14, color: 'var(--red)' }}>That didn't go through. Please email {EMAIL}.</span>}
              </div>
            </form>
          )}
        </Reveal>
      </div>
      <style>{`
        .ct-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: clamp(40px, 6vw, 96px); align-items: start; }
        .ct-card { background: var(--card); border: 1px solid var(--rule); border-radius: 16px; padding: clamp(22px, 3vw, 36px); display: grid; gap: 20px; }
        .ct-two { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .fld { display: grid; gap: 8px; }
        .fld input, .fld textarea, .fld select {
          font: inherit; font-size: 16px; color: var(--ink); background: transparent;
          border: none; border-bottom: 1px solid var(--border-strong); border-radius: 0;
          padding: 8px 0 10px; outline: none; resize: vertical; transition: border-color .2s ease; width: 100%;
        }
        .fld input:focus, .fld textarea:focus, .fld select:focus { border-color: var(--ink); }
        .fld ::placeholder { color: var(--ink-faint); }
        @media (max-width: 860px) { .ct-grid { grid-template-columns: 1fr; } }
        @media (max-width: 520px) { .ct-two { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
