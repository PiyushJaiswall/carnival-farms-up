import Link from 'next/link'
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
  return (
    <section className="bg-luxury-card border-y border-luxury-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
          {amenities.map(({ icon: Icon, label, href }) => (
            <Link key={label} href={href} className="flex flex-col items-center gap-3 group py-4 px-2">
              <div className="w-12 h-12 border border-amber-400/30 flex items-center justify-center group-hover:border-amber-400 group-hover:bg-amber-400/10 transition-all duration-300">
                <Icon size={20} className="text-amber-400" />
              </div>
              <p className="text-xs tracking-widest uppercase text-gray-400 group-hover:text-amber-400 transition-colors leading-tight">
                {label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

