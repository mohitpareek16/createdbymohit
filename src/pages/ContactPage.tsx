import { useState, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { whatsappLink } from '../data/offer'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import Footer from '../components/Footer'

type InquiryType = 'leak-check' | 'audit' | 'build' | 'other'

const INQUIRY_TYPES: { id: InquiryType; label: string; desc: string }[] = [
  { id: 'leak-check', label: 'Free Leak Check',       desc: '20 minutes on how your enquiries are handled today' },
  { id: 'audit',      label: 'Leak Audit · ₹15,000',  desc: '5 days, a rupee leak estimate and a 30-day fix plan' },
  { id: 'build',      label: 'Lead Recovery System',  desc: '₹75,000–1,25,000 · live in 2–3 weeks' },
  { id: 'other',      label: 'Something else',        desc: 'Website design, courses, press, partnerships' },
]

const isType = (t: string | null): t is InquiryType => !!t && INQUIRY_TYPES.some(x => x.id === t)

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780] block mb-2">
      {children}
    </label>
  )
}

function Input({
  label, name, type = 'text', placeholder, required,
}: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean
}) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <input
        type={type} name={name} placeholder={placeholder} required={required}
        style={{
          width: '100%', padding: '14px 16px', borderRadius: '12px',
          border: '1px solid var(--border-strong)', background: 'var(--surface)',
          color: 'var(--text)', fontSize: '14px', outline: 'none', transition: 'border-color 0.2s',
        }}
        onFocus={e => (e.currentTarget.style.borderColor = 'var(--text)')}
        onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-strong)')}
      />
    </div>
  )
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <select
        name={name}
        style={{
          width: '100%', padding: '14px 16px', borderRadius: '12px',
          border: '1px solid var(--border-strong)', background: 'var(--surface)',
          color: 'var(--text)', fontSize: '14px', outline: 'none', appearance: 'none',
        }}
      >
        <option value="">Select…</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}

function Textarea({ label, name, placeholder, required }: {
  label: string; name: string; placeholder?: string; required?: boolean
}) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <textarea
        name={name} placeholder={placeholder} required={required} rows={5}
        style={{
          width: '100%', padding: '14px 16px', borderRadius: '12px',
          border: '1px solid var(--border-strong)', background: 'var(--surface)',
          color: 'var(--text)', fontSize: '14px', outline: 'none', resize: 'none', transition: 'border-color 0.2s',
        }}
        onFocus={e => (e.currentTarget.style.borderColor = 'var(--text)')}
        onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-strong)')}
      />
    </div>
  )
}

export default function ContactPage() {
  const [params] = useSearchParams()
  const initial = params.get('type')
  const [type, setType] = useState<InquiryType>(isType(initial) ? initial : 'leak-check')
  const [submitted, setSubmitted] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const lines = [
      `Inquiry type: ${type}`,
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      data.get('company')  ? `Business: ${data.get('company')}` : '',
      data.get('url')      ? `Website / Instagram: ${data.get('url')}` : '',
      data.get('volume')   ? `Enquiries a month: ${data.get('volume')}` : '',
      data.get('budget')   ? `Budget: ${data.get('budget')}` : '',
      data.get('timeline') ? `Timeline: ${data.get('timeline')}` : '',
      '',
      `Message:`,
      `${data.get('message')}`,
    ].filter(Boolean).join('\n')

    const subject = `${INQUIRY_TYPES.find(t => t.id === type)?.label ?? 'Inquiry'} from ${data.get('name')}`
    window.open(
      `mailto:hello@createdbymohit.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`,
      '_blank',
    )
    setSubmitted(true)
  }

  return (
    <main>
      <SEO
        title="Get a free Leak Check | Starting Core"
        description="Book a free 20-minute Leak Check. We look at how your WhatsApp and enquiry flow loses leads and tell you honestly whether it is worth fixing. Starting Core, Jaipur."
        canonical="/contact"
      />
      <Nav />

      {/* ── HERO ── */}
      <section className="pt-40 pb-16 px-6 md:px-10 border-b border-[#D8D4CB]">
        <div className="max-w-[1320px] mx-auto" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780] mb-6 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3A]" style={{ animation: 'pulse 2.2s infinite' }} />
            Get in touch
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne uppercase mb-6"
            style={{ fontSize: 'clamp(40px,6.5vw,88px)', lineHeight: 0.9, letterSpacing: '-0.035em', fontWeight: 800, color: 'var(--text)' }}
          >
            LET'S FIND{' '}
            <span style={{ color: 'var(--accent)' }}>YOUR LEAK.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ fontSize: 'clamp(14px,1.4vw,17px)', lineHeight: 1.7, color: 'var(--muted)', maxWidth: '50ch' }}
          >
            Twenty minutes, free. We look at how your enquiries are handled today and tell you honestly whether it is worth fixing. Leak Audit ₹15,000. Lead Recovery System from ₹75,000. Prefer WhatsApp? Use the green button.
          </motion.p>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 xl:gap-24">

          {/* Form */}
          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-start gap-5 py-12"
              >
                <div className="w-12 h-12 rounded-full bg-[#051A24] flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <h2 className="font-mondwest text-3xl text-[#051A24]">Message opened.</h2>
                <p className="text-sm text-[#051A24]/65 leading-relaxed max-w-[42ch]">
                  Your email client should have opened with the message ready. Hit send whenever you're ready.
                  I'll reply within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780] hover:text-[#051A24] transition-colors"
                >
                  ← Send another
                </button>
              </motion.div>
            ) : (
              <>
                {/* Inquiry type selector */}
                <div className="mb-10">
                  <FieldLabel>What can I help with?</FieldLabel>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    {INQUIRY_TYPES.map(t => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setType(t.id)}
                        style={{
                          textAlign: 'left', padding: '20px', borderRadius: '16px',
                          border: type === t.id ? '1px solid var(--accent)' : '1px solid var(--border-strong)',
                          background: type === t.id ? 'var(--accent)' : 'var(--surface)',
                          cursor: 'pointer', transition: 'all 0.2s',
                        }}
                      >
                        <div style={{ fontWeight: 500, fontSize: '14px', marginBottom: '6px', color: type === t.id ? '#fff' : 'var(--text)' }}>
                          {t.label}
                        </div>
                        <div style={{ fontSize: '12px', lineHeight: 1.5, color: type === t.id ? 'rgba(255,255,255,0.65)' : 'var(--muted)' }}>
                          {t.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <input type="hidden" name="inquiry_type" value={type} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input label="Your name" name="name" placeholder="Rahul Sharma" required />
                    <Input label="Email" name="email" type="email" placeholder="rahul@startup.com" required />
                  </div>

                  {type !== 'other' && (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Input label="Business name" name="company" placeholder="Your clinic, brokerage or company" />
                        <Input label="Website or Instagram" name="url" placeholder="instagram.com/yourbusiness" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Select label="Enquiries a month" name="volume" options={['Under 20', '20 – 50', '50 – 150', '150 – 500', '500+']} />
                        {type === 'build'
                          ? <Select label="Budget" name="budget" options={['₹75k – ₹1L', '₹1L – ₹1.25L', '₹1.25L+', 'Not sure yet']} />
                          : <Select label="Start date" name="timeline" options={['ASAP', 'Within 1 month', '1–3 months', 'Just exploring']} />}
                      </div>
                    </>
                  )}

                  <Textarea
                    label={type === 'other' ? 'Your message' : 'How do enquiries reach you today?'}
                    name="message"
                    placeholder={
                      type === 'other'
                        ? "Tell me what's on your mind."
                        : 'Where do leads come from (ads, portals, Instagram)? Who replies, and how fast? What happens after 8pm?'
                    }
                    required
                  />

                  <div className="flex items-center gap-4 pt-2">
                    <button
                      type="submit"
                      className="bracket-link accent"
                    >
                      [ Send Message ]
                    </button>
                    <span className="text-xs text-[#8A8780]">Opens in your email client</span>
                  </div>
                </form>
              </>
            )}
          </div>

          {/* Info panel */}
          <div className="flex flex-col gap-6">
            {/* Availability */}
            <div className="p-6 rounded-2xl bg-[#F5F3EE] border border-[#D8D4CB]">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3A] animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
                  Open Q4 2026
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                Taking 2–3 new clients this quarter. Audits start within a week. I reply to every enquiry the same working day.
              </p>
            </div>

            {/* Direct */}
            <div className="p-6 rounded-2xl" style={{ border: '1px solid var(--border)' }}>
              <div className="font-mono text-[10px] uppercase tracking-widest mb-4" style={{ color: 'var(--muted)' }}>
                Direct contact
              </div>
              <a
                href="mailto:hello@createdbymohit.com"
                className="text-sm font-medium text-[#051A24] hover:text-[#C41E3A] transition-colors block mb-4"
              >
                hello@createdbymohit.com
              </a>
              <div className="flex flex-col gap-2">
                {[
                  { label: 'WhatsApp', href: whatsappLink() },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohit-pareek-b8a676204' },
                  { label: 'Instagram', href: 'https://www.instagram.com/createdbymohit/' },
                  { label: 'Dribbble', href: 'https://dribbble.com/mohit_pareek16' },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780] hover:text-[#051A24] transition-colors"
                  >
                    {s.label} →
                  </a>
                ))}
              </div>
            </div>

            {/* Book a call */}
            <Link
              to="/book"
              className="p-6 rounded-2xl bg-[#051A24] hover:bg-[#0D2830] transition-colors group block"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-3">
                Rather talk first?
              </div>
              <p className="text-white text-sm leading-relaxed mb-4">
                Book a 30–90 min call for a portfolio review, career guidance, or product audit.
              </p>
              <span className="inline-flex items-center gap-2 text-white border border-white/20 rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider group-hover:border-white/50 transition-colors">
                Book a call
                <ArrowRight className="w-3 h-3" strokeWidth={2} />
              </span>
            </Link>

            {/* Location */}
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780] leading-relaxed">
              Jaipur, Rajasthan, India<br />
              IST · UTC +5:30
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
