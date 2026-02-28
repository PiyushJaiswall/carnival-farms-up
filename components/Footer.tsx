import Link from 'next/link'
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'
import { PHONE, EMAIL, ADDRESS, NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-[#080C14] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="font-playfair text-2xl font-semibold text-white mb-2">
            Carnival <span className="text-[#C6A969]">Farms</span>
          </h3>
          <p className="font-poppins text-sm text-gray-400 font-light leading-relaxed mb-6">
            A luxury resort experience in the heart of Patna, Bihar.
          </p>
          <div className="flex gap-3">
            {[
              { href: 'https://instagram.com', Icon: Instagram, label: 'Instagram' },
              { href: 'https://facebook.com', Icon: Facebook, label: 'Facebook' },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#C6A969] hover:border-[#C6A969] transition-colors">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-poppins text-xs tracking-[0.2em] uppercase text-white mb-6 border-b border-white/10 pb-3">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}
                  className="font-poppins text-sm text-gray-400 hover:text-[#C6A969] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-poppins text-xs tracking-[0.2em] uppercase text-white mb-6 border-b border-white/10 pb-3">
            Experiences
          </h4>
          <ul className="space-y-3">
            {['Cottage Stay', 'Private Dining', 'Wedding Packages', 'Corporate Events', 'Pool Experience', 'Salon & Gym'].map((item) => (
              <li key={item}>
                <span className="font-poppins text-sm text-gray-400">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-poppins text-xs tracking-[0.2em] uppercase text-white mb-6 border-b border-white/10 pb-3">
            Contact
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={15} className="text-[#C6A969] mt-0.5 shrink-0" />
              <span className="font-poppins text-sm text-gray-400 font-light">{ADDRESS}</span>
            </li>
            <li>
              <a href={`tel:${PHONE}`} className="flex items-center gap-3 font-poppins text-sm text-gray-400 hover:text-[#C6A969] transition-colors">
                <Phone size={15} className="text-[#C6A969] shrink-0" />{PHONE}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 font-poppins text-sm text-gray-400 hover:text-[#C6A969] transition-colors">
                <Mail size={15} className="text-[#C6A969] shrink-0" />{EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-poppins text-xs text-gray-600">
            © {new Date().getFullYear()} Carnival Farms Resort. All rights reserved.
          </p>
          <p className="font-poppins text-xs text-gray-700">Patna, Bihar, India</p>
        </div>
      </div>
    </footer>
  )
}
