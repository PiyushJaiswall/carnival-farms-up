import HeroSection from '@/components/HeroSection'
import AmenitiesStrip from '@/components/AmenitiesStrip'
import RoomsPreview from '@/components/RoomsPreview'
import DiningSection from '@/components/DiningSection'
import BanquetPreview from '@/components/BanquetPreview'
import TestimonialsSection from '@/components/TestimonialsSection'
import EnquiryForm from '@/components/EnquiryForm'
import QuoteSection from '@/components/QuoteSection'

export default function HomePage() {
  return (
    <>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&auto=format&fit=crop&q=80"
        eyebrow="Patna, Bihar"
        title="Carnival"
        highlight="Farms"
        subtitle="An escape into luxury — where nature meets elegance"
        primaryCta={{ label: 'Explore Stays', href: '/accommodations' }}
        secondaryCta={{ label: 'Enquire Now', href: '/contact' }}
        fullScreen={true}
      />
      <AmenitiesStrip />
      <RoomsPreview />
      <QuoteSection />
      <DiningSection />
      <BanquetPreview />
      <TestimonialsSection />
      <EnquiryForm />
    </>
  )
}
