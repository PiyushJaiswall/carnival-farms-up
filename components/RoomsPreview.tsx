import Link from 'next/link'
import Image from 'next/image'
import SectionHeading from './SectionHeading'
import FadeIn from './FadeIn'
import { COTTAGES } from '@/lib/constants'

export default function RoomsPreview() {
  const preview = COTTAGES.slice(0, 3)
  return (
    <section className="section-padding bg-luxury-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Where You Stay"
          title="Our Accommodations"
          subtitle="48 to 50 elegantly designed cottages, each crafted to offer the perfect balance of comfort and luxury."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {preview.map((cottage, i) => (
            <FadeIn key={cottage.name} delay={i * 0.15}>
              <div className="card-luxury group h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image src={cottage.img} alt={cottage.name} fill
                    className="object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute top-4 left-4 bg-[#C6A969] text-white font-poppins text-[10px] tracking-[0.2em] uppercase px-3 py-1.5">
                    {cottage.category}
                  </div>
                </div>
                <div className="p-7">
                  <p className="section-label text-xs mb-2">{cottage.size} · {cottage.occupancy}</p>
                  <h3 className="heading-card text-white mb-3">{cottage.name}</h3>
                  <p className="body-text text-sm line-clamp-2 mb-5">{cottage.description}</p>
                  <Link href="/accommodations"
                    className="font-poppins text-xs tracking-[0.2em] uppercase text-[#C6A969] hover:text-white transition-colors border-b border-[#C6A969]/40 pb-1">
                    Learn More →
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link href="/accommodations" className="btn-outline">View All Cottages</Link>
        </div>
      </div>
    </section>
  )
}
