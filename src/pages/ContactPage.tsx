import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

type InquiryType = 'project' | 'review' | 'consultation' | 'other'

const INQUIRY_TYPES: { id: InquiryType; label: string; desc: string }[] = [
  { id: 'project',      label: 'New Project',     desc: 'UI/UX design for a product, feature, or rebrand' },
  { id: 'review',       label: 'Design Review',   desc: 'Expert feedback on your existing product or work' },
  { id: 'consultation', label: 'Consultation',    desc: 'Strategic design advice for your team or startup' },
  { id: 'other',        label: 'Something else',  desc: 'Press, partnerships, collaborations, anything else' },
]

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
        className="w-full px-4 py-3.5 rounded-xl border border-[#D8D4CB] bg-white text-[#051A24] text-sm placeholder:text-[#C8C4BC] focus:outline-none focus:border-[#051A24] transition-colors"
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
        className="w-full px-4 py-3.5 rounded-xl border border-[#D8D4CB] bg-white text-[#051A24] text-sm focus:outline-none focus:border-[#051A24] transition-colors appearance-none"
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
        className="w-full px-4 py-3.5 rounded-xl border border-[#D8D4CB] bg-white text-[#051A24] text-sm placeholder:text-[#C8C4BC] focus:outline-none focus:border-[#051A24] transition-colors resize-none"
      />
    </div>
  )
}

export default function ContactPage() {
  const [type, setType] = useState<InquiryType>('project')
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
      data.get('company')  ? `Company: ${data.get('company')}` : '',
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
            className="text-[clamp(44px,7.5vw,96px)] leading-[0.9] tracking-tight text-[#051A24] mb-6"
          >
            Let's build something{' '}
            <em className="font-mondwest text-[#C41E3A] not-italic">worth remembering.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base text-[#051A24]/60 max-w-[50ch] leading-relaxed"
          >
            I take on a limited number of projects each quarter so every client gets the full Mohit.
            Projects start at ₹50,000/month.
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
                        className={`text-left p-5 rounded-2xl border transition-all duration-200 ${
                          type === t.id
                            ? 'border-[#051A24] bg-[#051A24] text-white'
                            : 'border-[#D8D4CB] bg-white text-[#051A24] hover:border-[#051A24]/50'
                        }`}
                      >
                        <div className={`font-medium text-sm mb-1.5 ${type === t.id ? 'text-white' : 'text-[#051A24]'}`}>
                          {t.label}
                        </div>
                        <div className={`text-xs leading-relaxed ${type === t.id ? 'text-white/55' : 'text-[#051A24]/45'}`}>
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

                  {type === 'project' && (
                    <>
                      <Input label="Company / Product" name="company" placeholder="Your startup or product name" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Select label="Monthly budget" name="budget" options={['₹50k – ₹1L', '₹1L – ₹2L', '₹2L – ₹5L', '₹5L+', 'Not sure yet']} />
                        <Select label="Start date" name="timeline" options={['ASAP', 'Within 1 month', '1–3 months', 'Just exploring']} />
                      </div>
                    </>
                  )}

                  {type === 'review' && (
                    <Input label="Product URL" name="url" type="url" placeholder="https://yourproduct.com" />
                  )}

                  <Textarea
                    label={type === 'project' ? 'Tell me about your project' : 'Your message'}
                    name="message"
                    placeholder={
                      type === 'project'
                        ? "What are you building? Who is it for? What's the biggest design challenge right now?"
                        : type === 'review'
                        ? "What do you want me to focus on? What's not working as well as you'd like?"
                        : "Tell me what's on your mind."
                    }
                    required
                  />

                  <div className="flex items-center gap-4 pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-[#051A24] text-white rounded-full px-7 py-4 text-sm font-medium hover:bg-[#C41E3A] transition-colors"
                      style={{ boxShadow: '0 1px 2px rgba(5,26,36,0.1), 0 4px 4px rgba(5,26,36,0.09), inset 0 2px 8px rgba(255,255,255,0.05)' }}
                    >
                      Send message
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
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
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C41E3A]">
                  Available Q3 2026
                </span>
              </div>
              <p className="text-sm text-[#051A24]/65 leading-relaxed">
                Currently accepting new projects starting July 2026. I typically respond to all inquiries within 24 hours.
              </p>
            </div>

            {/* Direct */}
            <div className="p-6 rounded-2xl border border-[#D8D4CB]">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A8780] mb-4">
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
