import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import SectionHeading from '@/components/SectionHeading'
import EnquiryForm from '@/components/EnquiryForm'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Banquet & Events',
  description:
    'Host unforgettable events at Carnival Farms — two premium banquet halls in Patna, Bihar. Grand Pavilion (8,000 sq ft) and Garden Marquee (3,200 sq ft).',
}

const halls = [
  {
    name: 'Grand Pavilion',
    size: '8,000 sq. ft.',
    capacity: 'Up to 600 Guests',
    img: 'https://images.unsplash.com/photo-1519167758481-83f550bb8a2e?w=1200&auto=format&fit=crop&q=80',
    description:
      'Our flagship venue — the Grand Pavilion is the crown jewel of Carnival Farms. With 8,000 square feet of elegant space, it is designed for grand weddings, large corporate galas, and celebrations that demand nothing but the best.',
    features: [
      'Capacity: up to 600 guests',
      'Full AV & sound system',
      'LED stage lighting',
      'Air-conditioned interiors',
      'Dedicated bridal/VIP suite',
      'In-house catering team',
      'Customisable décor',
      'Ample parking',
    ],
    setups: [
      { name: 'Wedding Banquet', capacity: '600 pax' },
      { name: 'Theatre Style', capacity: '800 pax' },
      { name: 'Cocktail/Standing', capacity: '1,000 pax' },
    ],
  },
  {
    name: 'Garden Marquee',
    size: '3,200 sq. ft.',
    capacity: 'Up to 250 Guests',
    img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&auto=format&fit=crop&q=80',
    description:
      'The Garden Marquee is an intimate yet sophisticated venue — perfect for private celebrations, corporate offsites, family functions, and milestone events. Elegant, warm, and entirely yours.',
    features: [
      'Capacity: up to 250 guests',
      'Natural garden views',
      'AV & projection setup',
      'Air-conditioned interiors',
      'Private entrance',
      'In-house catering team',
      'Flexible seating layouts',
      'Dedicated event coordinator',
    ],
    setups: [
      { name: 'Banquet Style', capacity: '250 pax' },
      { name: 'Conference Style', capacity: '180 pax' },
      { name: 'Cocktail/Standing', capacity: '350 pax' },
    ],
  },
]

export default function BanquetPage() {
  return (
    <>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1519167758481-83f550bb8a2e?w=1920&auto=format&fit=crop&q=80"
        eyebrow="Celebrate in Style"
        title="Banquet &"
        highlight="Events"
        subtitle="Two world-class venues for every milestone — weddings, corporate events, and private celebrations"
        primaryCta={{ label: 'Enquire for Events', href: '/contact' }}
        secondaryCta={undefined}
        fullScreen={false}
      />

      <section className="section-padding bg-luxury-dark">
        <div className="max-w-7xl mx-auto space-y-24">
          {halls.map((hall, index) => (
            <div key={hall.name}>
              <div
                className={`grid lg:grid-cols-2 gap-16 items-start ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`relative h-[450px] overflow-hidden ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={hall.img}
                    alt={hall.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-xs tracking-widest text-amber-400 uppercase">{hall.size}</p>
                    <h3 className="text-2xl font-light text-white">{hall.name}</h3>
                  </div>
                </div>
                <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                  <p className="text-amber-400 text-xs tracking-[0.5em] uppercase mb-2">{hall.capacity}</p>
                  <h2 className="text-3xl font-light text-white mb-4">{hall.name}</h2>
                  <div className="w-12 h-px bg-amber-400 mb-6" />
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm">{hall.description}</p>

                  <h4 className="text-xs tracking-widest uppercase text-white mb-3">Features</h4>
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {hall.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                        <Check size={13} className="text-amber-400 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-xs tracking-widest uppercase text-white mb-3">Setup Options</h4>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {hall.setups.map((s) => (
                      <div key={s.name} className="border border-luxury-border px-4 py-2 text-center">
                        <p className="text-xs text-gray-400 tracking-wide">{s.name}</p>
                        <p className="text-amber-400 text-sm font-light">{s.capacity}</p>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="btn-primary">
                    Enquire for {hall.name}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-luxury-card">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            eyebrow="Planning an Event?"
            title="Let's Create Magic"
            subtitle="Share your vision with us and our dedicated events team will craft the perfect experience — every detail taken care of."
          />
          <Link href="/contact" className="btn-solid">
            Get in Touch
          </Link>
        </div>
      </section>

      <EnquiryForm />
    </>
  )
}

