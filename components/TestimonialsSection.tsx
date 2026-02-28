import { Star } from 'lucide-react'
import SectionHeading from './SectionHeading'
import FadeIn from './FadeIn'
import { TESTIMONIALS } from '@/lib/constants'

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-luxury-card">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Guest Stories"
          title="What Our Guests Say"
          subtitle="The warmth of our guests words is our greatest reward."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.15}>
              <div className="card-luxury p-8 h-full hover:border-[#C6A969]/40 transition-colors duration-500">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-[#C6A969] fill-[#C6A969]" />
                  ))}
                </div>
                <p className="font-poppins text-sm leading-relaxed text-gray-300 mb-8 font-light italic">
                  "{t.text}"
                </p>
                <div className="border-t border-white/10 pt-6">
                  <p className="font-playfair text-base font-semibold text-white">{t.name}</p>
                  <p className="font-poppins text-xs tracking-[0.15em] uppercase text-gray-500 mt-1">
                    {t.location}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
