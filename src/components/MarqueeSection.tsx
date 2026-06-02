const GIFS = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
]

export default function MarqueeSection() {
  const all = [...GIFS, ...GIFS]
  return (
    <div className="mt-16 md:mt-20 mb-16 border-y border-[#D8D4CB] py-6 overflow-hidden">
      <div className="marquee-track">
        {all.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Design work ${(i % 8) + 1}`}
            className="h-[260px] md:h-[460px] w-auto object-cover mx-3 rounded-2xl shadow-lg flex-none"
          />
        ))}
      </div>
    </div>
  )
}
