'use client'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface HeroSectionProps {
  backgroundImage?: string
  eyebrow?: string
  title?: string
  highlight?: string
  subtitle?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  fullScreen?: boolean
}

export default function HeroSection({
  backgroundImage = 'https://images.unsplash.com/photo-1566073771259-470de1bed605?w=1920&auto=format&fit=crop&q=80',
  eyebrow = 'Patna, Bihar',
  title = 'Carnival',
  highlight = 'Farms',
  subtitle = 'An escape into luxury — where nature meets elegance',
  primaryCta = { label: 'Explore Stays', href: '/accommodations' },
  secondaryCta = { label: 'Enquire Now', href: '/contact' },
  fullScreen = true,
}: HeroSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.6], ['0%', '8%'])

  return (
    <section ref={ref}
      className={`relative w-full overflow-hidden ${fullScreen ? 'h-screen' : 'h-[60vh] md:h-[70vh]'}`}>

      {/* Parallax BG */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url('${backgroundImage}')`, y: bgY, scale: 1.12 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/60 via-luxury-dark/20 to-luxury-dark/80 z-10" />

      {/* Content */}
      <motion.div style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="section-label mb-6">
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="heading-hero text-white mb-6">
          {title}{' '}
          {highlight && <span className="text-[#C6A969]">{highlight}</span>}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="body-text-lg max-w-xl mb-10 text-gray-300">
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0 }}
          className="flex gap-4 flex-wrap justify-center">
          {primaryCta && <Link href={primaryCta.href} className="btn-primary">{primaryCta.label}</Link>}
          {secondaryCta && <Link href={secondaryCta.href} className="btn-outline">{secondaryCta.label}</Link>}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      {fullScreen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="font-poppins text-[10px] tracking-[0.3em] text-gray-400 uppercase">Scroll</span>
          <motion.div
            animate={{ scaleY: [1, 1.6, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-px h-12 bg-[#C6A969] origin-top"
          />
        </motion.div>
      )}
    </section>
  )
}
