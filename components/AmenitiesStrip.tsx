'use client'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Home, Utensils, Waves, Building2, Flower2, Dumbbell, Scissors } from 'lucide-react'

const amenities = [
  { icon: Home, label: '48–50 Cottages', href: '/accommodations' },
  { icon: Building2, label: 'Banquet Halls', href: '/banquet' },
  { icon: Utensils, label: 'All-Day Dining', href: '/dining' },
  { icon: Waves, label: 'Swimming Pool', href: '/amenities' },
  { icon: Flower2, label: 'Gazebo', href: '/amenities' },
  { icon: Dumbbell, label: 'Gym', href: '/amenities' },
  { icon: Scissors, label: 'Salon', href: '/amenities' },
]

export default function AmenitiesStrip() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="bg-luxury-card border-y border-white/10 py-14" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
          {amenities.map(({ icon: Icon, label, href }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}>
              <Link href={href} className="flex flex-col items-center gap-3 group py-4 px-2">
                <div className="w-12 h-12 border border-[#C6A969]/30 flex items-center justify-center group-hover:border-[#C6A969] group-hover:bg-[#C6A969]/10 transition-all duration-300">
                  <Icon size={20} className="text-[#C6A969]" />
                </div>
                <p className="font-poppins text-[11px] tracking-[0.15em] uppercase text-gray-400 group-hover:text-[#C6A969] transition-colors leading-tight">
                  {label}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
