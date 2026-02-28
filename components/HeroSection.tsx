import Link from 'next/link'

interface HeroSectionProps {
  backgroundImage?: string
  eyebrow?: string
  title: string
  highlight?: string
  subtitle?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  fullScreen?: boolean
}

export default function HeroSection({
  backgroundImage = 'https://images.unsplash.com/photo-1566073771259-470de1bed605?w=1920&auto=format&fit=crop&q=80',
  eyebrow = 'Patna, Bihar',
  title = 'Carnival',
  highlight = 'Farms',
  subtitle = 'An escape into luxury — where nature meets elegance',
  primaryCta = { label: 'Explore Stays', href: '/accommodations' },
  secondaryCta = { label: 'Enquire Now', href: '/contact' },
  fullScreen = true,
}: HeroSectionProps) {
  return (
    <section className={`relative w-full overflow-hidden ${fullScreen ? 'h-screen' : 'h-[60vh] md:h-[70vh]'}`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/75 z-10" />

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-amber-400 text-xs tracking-[0.6em] uppercase mb-5">{eyebrow}</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.15em] uppercase text-white mb-6 leading-tight">
          {title}
          {highlight && (
            <>
              <br />
              <span className="text-amber-400">{highlight}</span>
            </>
          )}
        </h1>
        {subtitle && (
          <p className="text-gray-300 text-sm md:text-base tracking-widest max-w-xl mb-10 font-light leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="flex gap-4 flex-wrap justify-center">
          {primaryCta && (
            <Link href={primaryCta.href} className="btn-primary">
              {primaryCta.label}
            </Link>
          )}
          {secondaryCta && (
            <Link href={secondaryCta.href} className="btn-solid">
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>

      {fullScreen && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest text-gray-400 uppercase">Scroll</span>
          <div className="w-px h-12 bg-amber-400/60" />
        </div>
      )}
    </section>
  )
}

