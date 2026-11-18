import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Hero from '../components/home/Hero'
import Belief from '../components/home/Belief'
import Work from '../components/home/Work'
import Approach from '../components/home/Approach'
import About from '../components/home/About'
import Community from '../components/home/Community'
import Insights from '../components/home/Insights'
import Contact from '../components/home/Contact'
import { EMAIL, SOCIALS } from '../data/studio'
import { lenis } from '../lib/lenis'

const TITLE = 'CreatedByMohit — We solve business problems with design, technology and AI'
const DESC = 'An independent problem-solving studio in Jaipur. We help founders and growing businesses simplify operations, improve digital products and build intelligent systems with design, technology and AI.'
const URL = 'https://createdbymohit.com/'

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${URL}#studio`,
      name: 'CreatedByMohit',
      url: URL,
      email: EMAIL,
      description: DESC,
      founder: { '@id': `${URL}#mohit` },
      address: { '@type': 'PostalAddress', addressLocality: 'Jaipur', addressRegion: 'Rajasthan', addressCountry: 'IN' },
      knowsAbout: ['Business process automation', 'AI automation', 'Product design', 'UI/UX design', 'Custom software development', 'Workflow automation'],
      sameAs: SOCIALS.map(s => s.href),
    },
    {
      '@type': 'Person',
      '@id': `${URL}#mohit`,
      name: 'Mohit Pareek',
      jobTitle: 'Founder, designer and problem solver',
      worksFor: { '@id': `${URL}#studio` },
      image: `${URL}mohit-pareek.jpg`,
      address: { '@type': 'PostalAddress', addressLocality: 'Jaipur', addressCountry: 'IN' },
      sameAs: SOCIALS.map(s => s.href),
    },
  ],
}

export default function HomePage() {
  const { hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    const t = window.setTimeout(() => {
      const el = document.querySelector<HTMLElement>(hash)
      if (el) lenis.scrollTo(el, { offset: -72 })
    }, 150)
    return () => window.clearTimeout(t)
  }, [hash])

  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <link rel="canonical" href={URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:url" content={URL} />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>
      <Nav />
      <Hero />
      <Belief />
      <Work />
      <Approach />
      <About />
      <Community />
      <Insights />
      <Contact />
      <Footer />
    </main>
  )
}
