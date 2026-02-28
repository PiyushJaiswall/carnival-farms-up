'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  const isHome = pathname === '/'
  const navBg = isHome && !scrolled
    ? 'bg-transparent py-6'
    : 'bg-luxury-dark/95 backdrop-blur-md py-4 border-b border-white/10 shadow-lg'

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/"
          className="font-playfair text-xl md:text-2xl font-semibold text-white tracking-wide">
          Carnival <span className="text-[#C6A969]">Farms</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden xl:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href}
                className={`font-poppins text-sm font-medium tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-[#C6A969]'
                    : 'text-gray-300 hover:text-[#C6A969]'
                }`}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link href="/contact" className="hidden xl:inline-block btn-primary !py-2.5 !px-6 text-xs">
          Book Now
        </Link>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden text-white p-1" aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-luxury-dark border-t border-white/10 px-6 py-8 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}
              className={`font-poppins text-sm font-medium tracking-wide transition-colors ${
                pathname === link.href ? 'text-[#C6A969]' : 'text-gray-300 hover:text-[#C6A969]'
              }`}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-center mt-2">Book Now</Link>
        </div>
      )}
    </nav>
  )
}
