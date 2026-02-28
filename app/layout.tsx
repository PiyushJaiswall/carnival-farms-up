import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Carnival Farms | Luxury Resort, Patna Bihar',
    template: '%s | Carnival Farms',
  },
  description:
    'Carnival Farms is a luxury resort in Patna, Bihar with 48–50 premium cottages, grand banquet halls, all-day dining, swimming pool, gazebo, salon, and gym.',
  keywords: ['resort patna', 'carnival farms', 'luxury resort bihar', 'banquet hall patna'],
  openGraph: {
    title: 'Carnival Farms | Luxury Resort, Patna Bihar',
    description: 'Experience true luxury at Carnival Farms — premium cottages, fine dining, grand banquet halls in Patna.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  )
}
