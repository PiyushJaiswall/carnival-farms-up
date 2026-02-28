import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import GalleryGrid from '@/components/GalleryGrid'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Explore the beauty of Carnival Farms through our photo gallery — cottages, dining, banquet halls, pool, and resort exterior.',
}

export default function GalleryPage() {
  return (
    <>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1566073771259-470de1bed605?w=1920&auto=format&fit=crop&q=80"
        eyebrow="Visual Journey"
        title="Our"
        highlight="Gallery"
        subtitle="A glimpse into the world of Carnival Farms"
        primaryCta={{ label: 'Book a Stay', href: '/contact' }}
        secondaryCta={undefined}
        fullScreen={false}
      />

      <section className="section-padding bg-luxury-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-400 text-xs tracking-[0.5em] uppercase mb-3">Browse by Category</p>
            <h2 className="text-4xl font-light tracking-widest uppercase text-white">Moments at Carnival Farms</h2>
            <div className="w-16 h-px bg-amber-400 mx-auto mt-6" />
          </div>
          <GalleryGrid />
        </div>
      </section>
    </>
  )
}

