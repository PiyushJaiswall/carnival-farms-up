import Link from 'next/link'
import Image from 'next/image'
import SectionHeading from './SectionHeading'
import FadeIn from './FadeIn'

export default function DiningSection() {
  return (
    <section className="section-padding bg-luxury-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <SectionHeading
              label="Flavours of Bihar & Beyond"
              title="Dining Experience"
              center={false}
              subtitle="Our all-day dining restaurant offers an immersive culinary journey — from rich Indian classics to continental delights."
            />
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { number: '60', label: 'Indoor Covers' },
                { number: '60', label: 'Outdoor Covers' },
                { number: 'All Day', label: 'Open Hours' },
                { number: '∞', label: 'Culinary Memories' },
              ].map(({ number, label }) => (
                <div key={label} className="stat-box">
                  <p className="font-playfair text-3xl font-semibold text-[#C6A969]">{number}</p>
                  <p className="font-poppins text-xs tracking-[0.15em] text-gray-400 uppercase mt-1">{label}</p>
                </div>
              ))}
            </div>
            <Link href="/dining" className="btn-primary">Explore Dining</Link>
          </FadeIn>

          <FadeIn direction="right">
            <div className="relative h-96 lg:h-[520px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&auto=format&fit=crop&q=80"
                alt="Carnival Farms Dining" fill
                className="object-cover hover:scale-105 transition-transform duration-[1200ms] ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/40 to-transparent" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
