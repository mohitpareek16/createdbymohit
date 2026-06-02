export default function Footer() {
  const links: Record<string, Array<{ label: string; href: string; external?: boolean }>> = {
    Navigate: [
      { label: 'Work', href: '#work' },
      { label: 'Content', href: '#content' },
      { label: 'Course', href: '#course' },
      { label: 'About', href: '#about' },
    ],
    Social: [
      { label: 'Instagram', href: 'https://www.instagram.com/createdbymohit/', external: true },
      { label: 'YouTube', href: 'https://www.youtube.com/@createdbymohit', external: true },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohit-pareek-b8a676204', external: true },
      { label: 'Dribbble', href: 'https://dribbble.com/mohit_pareek16', external: true },
    ],
    Contact: [
      { label: 'hello@createdbymohit.com', href: 'mailto:hello@createdbymohit.com' },
      { label: 'Course Waitlist', href: '#course' },
      { label: 'Hire Mohit', href: 'mailto:hello@createdbymohit.com' },
    ],
  }

  return (
    <footer className="bg-[#F5F3EE] border-t border-[#D8D4CB] pt-16 pb-8 px-6 md:px-10">
      <div className="max-w-[1320px] mx-auto">
        {/* Big CTA */}
        <h2 className="text-[clamp(32px,5.5vw,80px)] leading-[1] tracking-tight text-[#051A24] mb-16 max-w-[16ch]">
          Got a product worth{' '}
          <em className="font-mondwest text-[#C41E3A] not-italic">designing right?</em>{' '}
          <a href="mailto:hello@createdbymohit.com" className="border-b-2 border-[#051A24] hover:text-[#C41E3A] hover:border-[#C41E3A] transition-colors">
            Let's talk →
          </a>
        </h2>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-[#D8D4CB]">
          <div>
            <h5 className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780] mb-4">Created By Mohit</h5>
            <p className="text-sm text-[#273C46] leading-relaxed max-w-[30ch]">
              UI/UX designer and educator from India. Founder of Starting Core. Helping products feel obvious.
            </p>
          </div>
          {Object.entries(links).map(([col, items]) => (
            <div key={col}>
              <h5 className="font-mono text-[11px] uppercase tracking-widest text-[#8A8780] mb-4">{col}</h5>
              <ul className="flex flex-col gap-3">
                {items.map(item => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-[#273C46] hover:text-[#C41E3A] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-8 font-mono text-[11px] text-[#8A8780]">
          <span>© 2026 Mohit Pareek · Created By Mohit · Starting Core</span>
          <span>Designed & built in India 🇮🇳</span>
        </div>
      </div>
    </footer>
  )
}
