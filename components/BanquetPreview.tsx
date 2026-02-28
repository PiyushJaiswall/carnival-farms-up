import Link from 'next/link'
import Image from 'next/image'
import SectionHeading from './SectionHeading'
import FadeIn from './FadeIn'

const halls = [
  {
    name: 'Grand Pavilion',
    size: '8,000 sq. ft.',
    capacity: 'Up to 600 Guests',
    desc: 'Our flagship event space — ideal for grand weddings, corporate galas, and large celebrations.',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80',
  },
  {
    name: 'Garden Marquee',
    size: '3,200 sq. ft.',
    capacity: 'Up to 250 Guests',
    desc: 'An intimate venue perfect for private celebrations, corporate meetings, and family functions.',
    img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&auto=format&fit=crop&q=80',
  },
]

export default function BanquetPreview() {
  return (
    <section className="section-padding bg-luxury-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Celebrate in Style"
          title="Banquet & Events"
          subtitle="Two world-class venues for every milestone — from intimate gatherings to grand celebrations."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {halls.map((hall, i) => (
            <FadeIn key={hall.name} delay={i * 0.2}>
              <div className="card-luxury group h-full">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={hall.img}
                    alt={hall.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/80 to-transparent" />
                  <div className="absolute bottom-5 left-6">
                    <p className="section-label text-xs mb-1">{hall.size}</p>
                    <h3 className="font-playfair text-2xl font-semibold text-white">{hall.name}</h3>
                  </div>
                </div>
                <div className="p-7">
                  <p className="section-label text-xs mb-3">{hall.capacity}</p>
                  <p className="body-text text-sm mb-5">{hall.desc}</p>
                  <Link
                    href="/banquet"
                    className="font-poppins text-xs tracking-[0.2em] uppercase text-[#C6A969] hover:text-white transition-colors border-b border-[#C6A969]/40 pb-1"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link href="/banquet" className="btn-outline">Enquire for Events</Link>
        </div>
      </div>
    </section>
  )
}
