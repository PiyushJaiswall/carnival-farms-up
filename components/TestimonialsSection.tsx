import { Star } from 'lucide-react'
import SectionHeading from './SectionHeading'
import FadeIn from './FadeIn'
import { TESTIMONIALS } from '@/lib/constants'

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Guest Stories"
          title="Testimonials"
          subtitle="The warmth of our guests' words is our greatest reward."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.15}>
              <div className="border border-stone-200 p-8 bg-white hover:border-stone-400 transition-colors duration-300 h-full">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-8 italic">"{t.text}"</p>
                <div className="border-t border-stone-100 pt-6">
                  <p className="text-stone-800 text-sm font-light tracking-wide">{t.name}</p>
                  <p className="text-stone-400 text-xs tracking-widest uppercase mt-1">{t.location}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
