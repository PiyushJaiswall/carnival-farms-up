import { Star } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { TESTIMONIALS } from '@/lib/constants'

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-luxury-card">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Guest Stories"
          title="Testimonials"
          subtitle="The warmth of our guests' words is our greatest reward."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="border border-luxury-border p-8 hover:border-amber-400/40 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 italic">"{t.text}"</p>
              <div className="border-t border-luxury-border pt-6">
                <p className="text-white text-sm font-light tracking-wide">{t.name}</p>
                <p className="text-gray-500 text-xs tracking-widest uppercase mt-1">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

