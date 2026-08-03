import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Clock, ArrowRight, Mail } from 'lucide-react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import BottomNav from '../components/BottomNav'

const CALL_TYPES = [
  {
    id: 'portfolio',
    title: 'Portfolio Review',
    duration: '30 min',
    price: '₹999',
    tagline: 'Get honest, actionable feedback on your design portfolio.',
    description:
      'We go through your portfolio together — what's working, what's holding you back, and how to position yourself for the roles or clients you actually want.',
    includes: [
      'Portfolio structure & narrative review',
      'Visual quality & craft assessment',
      'Case study depth & clarity',
      'Specific improvement roadmap',
    ],
    accent: '#051A24',
    featured: false,
  },
  {
    id: 'career',
    title: 'Career Guidance',
    duration: '45 min',
    price: '₹1,499',
    tagline: 'Figure out where to go next and how to get there.',
    description:
      'Whether you're stuck, switching, or scaling, we'll talk through your path — skills to build, opportunities to pursue, how to price your work, and how to stop undercharging.',
    includes: [
      'Career path & positioning strategy',
      'Skill gap analysis',
      'Pricing & rates guidance',
      'Client acquisition advice',
    ],
    accent: '#1A3A5C',
    featured: false,
  },
  {
    id: 'startup',
    title: 'Startup Design Review',
    duration: '60 min',
    price: '₹2,499',
    tagline: 'Find what's hurting your product and what to fix first.',
    description:
      'A focused review of your product's current design. We identify UX bottlenecks, conversion killers, and the highest-ROI changes you can make without a full redesign.',
    includes: [
      'Core user flow review',
      'Conversion bottleneck identification',
      'Visual consistency audit',
      'Prioritised action list',
    ],
    accent: '#2D1B8B',
    featured: false,
  },
  {
    id: 'audit',
    title: 'Product Audit',
    duration: '90 min',
    price: '₹4,999',
    tagline: 'The deep version. UX, IA, design system, everything.',
    description:
      'A thorough analysis of your product from multiple angles — usability, information architecture, visual design system, and competitive positioning. You get a written report after.',
    includes: [
      'Full UX & usability audit',
      'Information architecture analysis',
      'Design system review',
      'Competitive positioning assessment',
      'Written report delivered post-call',
    ],
    accent: '#0C4A2E',
    featured: true,
  },
]

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Pick your call type',
    desc: 'Choose the session that matches what you need. If you're not sure, go with Portfolio Review or Career Guidance.',
  },
  {
    step: '02',
    title: 'Send a booking request',
    desc: 'Email me with your preferred time and a short note about what you want to cover. I'll confirm within 24 hours.',
  },
  {
    step: '03',
    title: 'Prepare your materials',
    desc: 'I'll send a short prep guide before the call. The more context you bring, the more useful the session will be.',
  },
  {
    step: '04',
    title: 'The call',
    desc: 'We meet over Google Meet or Zoom. I take notes throughout and share them with you after the call.',
  },
]

function CallCard({ call, index }: { call: typeof CALL_TYPES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const bookSubject = `Book: ${call.title} (${call.duration} — ${call.price})`
  const bookBody = `Hi Mohit,\n\nI'd like to book a ${call.title} call (${call.duration}, ${call.price}).\n\nMy preferred time: \nWhat I want to cover: `

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-3xl border p-8 flex flex-col ${
        call.featured
          ? 'border-[#051A24] bg-[#051A24] text-white'
          : 'border-[#D8D4CB] bg-white text-[#051A24]'
      }`}
    >
      {call.featured && (
        <div className="absolute top-6 right-6 font-mono text-[9px] uppercase tracking-widest text-[#C41E3A] border border-[#C41E3A]/40 rounded-full px-3 py-1">
          Most comprehensive
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className={`flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest ${call.featured ? 'text-white/40' : 'text-[#8A8780]'}`}>
            <Clock className="w-3 h-3" strokeWidth={1.5} />
            {call.duration}
          </span>
          <span className={`w-px h-3 ${call.featured ? 'bg-white/20' : 'bg-[#D8D4CB]'}`} />
          <span className={`font-mono text-[10px] uppercase tracking-widest ${call.featured ? 'text-white/40' : 'text-[#8A8780]'}`}>
            {call.price}
          </span>
        </div>
        <h3 className={`font-mondwest text-2xl md:text-3xl leading-tight mb-2 ${call.featured ? 'text-white' : 'text-[#051A24]'}`}>
          {call.title}
        </h3>
        <p className={`text-xs font-medium ${call.featured ? 'text-[#C41E3A]' : 'text-[#C41E3A]'}`}>
          {call.tagline}
        </p>
      </div>

      {/* Description */}
      <p className={`text-sm leading-relaxed mb-6 ${call.featured ? 'text-white/65' : 'text-[#051A24]/65'}`}>
        {call.description}
      </p>

      {/* Includes */}
      <div className="flex flex-col gap-2.5 mb-8 flex-1">
        {call.includes.map(item => (
          <div key={item} className="flex items-start gap-3">
            <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
              call.featured ? 'bg-[#C41E3A]/20' : 'bg-[#F5F3EE]'
            }`}>
              <Check className={`w-2.5 h-2.5 ${call.featured ? 'text-[#C41E3A]' : 'text-[#051A24]'}`} strokeWidth={2.5} />
            </div>
            <span className={`text-xs leading-relaxed ${call.featured ? 'text-white/70' : 'text-[#051A24]/70'}`}>
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <a
        href={`mailto:hello@createdbymohit.com?subject=${encodeURIComponent(bookSubject)}&body=${encodeURIComponent(bookBody)}`}
        className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-colors ${
          call.featured
            ? 'bg-[#C41E3A] text-white hover:bg-[#a8192f]'
            : 'bg-[#051A24] text-white hover:bg-[#C41E3A]'
        }`}
      >
        <Mail className="w-4 h-4" strokeWidth={1.5} />
        Book this call
        <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
      </a>
    </motion.div>
  )
}

export default function BookPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })

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
            className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780] mb-6"
          >
            Book a call · Paid consultations
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(44px,7.5vw,96px)] leading-[0.9] tracking-tight text-[#051A24] mb-6"
          >
            30 minutes with{' '}
            <em className="font-mondwest text-[#C41E3A] not-italic">Mohit.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base text-[#051A24]/60 max-w-[52ch] leading-relaxed"
          >
            Four types of consultation calls — from portfolio feedback to full product audits.
            Pick the one that matches what you need, book via email, and get real answers.
          </motion.p>
        </div>
      </section>

      {/* ── CALL TYPES ── */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CALL_TYPES.map((call, i) => (
              <CallCard key={call.id} call={call} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-[#F5F3EE] border-t border-[#D8D4CB]">
        <div className="max-w-[1320px] mx-auto">
          <div className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780] mb-4">How it works</div>
          <h2 className="text-[clamp(28px,4vw,52px)] leading-[1.05] tracking-tight text-[#051A24] mb-12">
            Simple as it{' '}
            <em className="font-mondwest text-[#C41E3A] not-italic">should be.</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="font-mono text-[11px] tracking-widest text-[#C41E3A] mb-4">{step.step}</div>
                <h4 className="font-medium text-[#051A24] mb-2 text-sm">{step.title}</h4>
                <p className="text-xs text-[#051A24]/55 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-24 px-6 md:px-10 border-t border-[#D8D4CB]">
        <div className="max-w-[720px] mx-auto">
          <div className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780] mb-8">Common questions</div>
          {[
            {
              q: 'What should I prepare?',
              a: "I'll send a short prep guide after booking. In general: have your portfolio, product, or questions ready. The more context you bring, the more useful the session will be.",
            },
            {
              q: 'What platform do we use?',
              a: 'Google Meet or Zoom — your choice. I'll send a link with the calendar invite.',
            },
            {
              q: 'Can I record the call?',
              a: "Yes. I'll share my notes after the call as well, so you don't have to worry about taking notes during.",
            },
            {
              q: 'What if I need to reschedule?',
              a: 'Just email me at least 24 hours before. I'll find another time that works.',
            },
            {
              q: 'Do you offer refunds?',
              a: 'If you need to cancel with less than 12 hours notice, the session is forfeited. Otherwise I'm happy to reschedule or refund.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="py-6 border-b border-[#D8D4CB]"
            >
              <h4 className="font-medium text-[#051A24] text-sm mb-2">{item.q}</h4>
              <p className="text-sm text-[#051A24]/60 leading-relaxed">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
      <BottomNav />
    </main>
  )
}
