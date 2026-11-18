import { useState } from 'react'
import RoughBox, { RED } from './sketch/RoughBox'
import { LeakCheckLink } from './CtaLinks'

const COLD_SHARE = 0.5

type Defaults = { enquiries: number; value: number; fast: number; close: number; valueLabel?: string; closeLabel?: string }

const inr = (n: number) => '₹' + Math.round(n).toLocaleString('en-IN')

function Field({ id, label, value, onChange, min, max, step, suffix, prefix }: {
  id: string; label: string; value: number; onChange: (v: number) => void
  min: number; max: number; step: number; suffix?: string; prefix?: string
}) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, marginBottom: 6 }}>
        <label htmlFor={id} style={{ fontSize: 15, fontWeight: 500, color: 'var(--ink)' }}>{label}</label>
        <span className="font-hand" style={{ fontSize: 26, color: RED, whiteSpace: 'nowrap' }}>
          {prefix}{prefix === '₹' ? value.toLocaleString('en-IN') : value}{suffix}
        </span>
      </div>
      <input id={id} type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))} className="leak-range" />
    </div>
  )
}

export default function LeakCalculator({ defaults, id = 'calculator' }: { defaults?: Defaults; id?: string }) {
  const d = defaults ?? { enquiries: 120, value: 40000, fast: 30, close: 20 }
  const [enquiries, setEnquiries] = useState(d.enquiries)
  const [value, setValue] = useState(d.value)
  const [fast, setFast] = useState(d.fast)
  const [close, setClose] = useState(d.close)

  const lostEnquiries = enquiries * (1 - fast / 100) * COLD_SHARE
  const monthly = lostEnquiries * (close / 100) * value

  return (
    <section id={id} style={{ padding: 'clamp(80px, 9vw, 140px) 0' }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        paddingLeft: 'max(20px, env(safe-area-inset-left, 0px))',
        paddingRight: 'max(20px, env(safe-area-inset-right, 0px))',
      }}>
        <p className="hand-label" style={{ marginBottom: 10 }}>leak calculator —</p>
        <h2 className="font-display" style={{ fontSize: 'clamp(44px, 6vw, 88px)', lineHeight: 0.95, letterSpacing: '-0.03em', maxWidth: '16ch', marginBottom: 'clamp(36px, 5vw, 64px)' }}>
          How much are slow replies <em style={{ color: RED }}>costing you?</em>
        </h2>

        <div className="leak-grid">
          <RoughBox fill="#FBF8F2" fillStyle="solid" strokeWidth={1.6} boilOnHover={false}>
            <div style={{ padding: 'clamp(24px, 3vw, 36px)', display: 'flex', flexDirection: 'column', gap: 26 }}>
              <Field id={`${id}-enq`} label="Enquiries a month" value={enquiries} onChange={setEnquiries} min={10} max={1000} step={10} />
              <Field id={`${id}-val`} label={d.valueLabel ?? 'Average customer value'} value={value} onChange={setValue} min={5000} max={500000} step={5000} prefix="₹" />
              <Field id={`${id}-fast`} label="Enquiries answered within 5 minutes" value={fast} onChange={setFast} min={0} max={100} step={5} suffix="%" />
              <Field id={`${id}-close`} label={d.closeLabel ?? 'Enquiries that become customers'} value={close} onChange={setClose} min={1} max={60} step={1} suffix="%" />
            </div>
          </RoughBox>

          <div style={{ position: 'relative', background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(28px, 3.5vw, 44px)', transform: 'rotate(0.8deg)', boxShadow: '0 20px 40px -18px rgba(27,26,23,0.6)' }}>
            <span className="tape" style={{ top: -12, left: '38%' }} />
            <p className="font-hand" style={{ fontSize: 26, color: '#F6D365' }}>estimated leak</p>
            <p className="font-display" aria-live="polite" style={{ fontSize: 'clamp(52px, 7vw, 92px)', lineHeight: 1, marginTop: 6 }}>
              {inr(monthly)}
            </p>
            <p style={{ fontSize: 16, color: 'rgba(244,239,230,0.7)', marginTop: 6 }}>a month · about <strong style={{ color: 'var(--paper)' }}>{inr(monthly * 12)}</strong> a year</p>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: 'rgba(244,239,230,0.65)', marginTop: 22, maxWidth: '44ch' }}>
              That is about <strong style={{ color: 'var(--paper)' }}>{Math.round(lostEnquiries)} enquiries a month</strong> going cold after waiting too long for a reply.
            </p>
            <LeakCheckLink className="bracket-link" style={{ marginTop: 28, color: '#1B1A17', background: '#F4EFE6', boxShadow: `3px 4px 0 0 ${RED}` }}>
              Measure my real number →
            </LeakCheckLink>
            <p className="eyebrow" style={{ fontSize: 10, marginTop: 22, color: 'rgba(244,239,230,0.45)', lineHeight: 1.8, textTransform: 'none', letterSpacing: '0.04em' }}>
              An estimate, not a promise. It assumes half of the enquiries that wait longer than 5 minutes go cold. A Leak Audit measures yours.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .leak-grid { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr); gap: clamp(28px, 4vw, 56px); align-items: center; }
        .leak-range { width: 100%; accent-color: ${RED}; height: 24px; cursor: pointer; }
        @media (max-width: 860px) { .leak-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
