import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Carnival Farms | Luxury Resort, Patna Bihar',
    template: '%s | Carnival Farms',
  },
  description:
    'Carnival Farms is a luxury resort in Patna, Bihar with 48–50 premium cottages, grand banquet halls, all-day dining, swimming pool, gazebo, salon, and gym.',
  keywords: [
    'resort patna',
    'carnival farms patna',
    'luxury resort bihar',
    'banquet hall patna',
    'cottages patna',
    'resort near patna',
  ],
  openGraph: {
    title: 'Carnival Farms | Luxury Resort, Patna Bihar',
    description:
      'Experience true luxury at Carnival Farms — premium cottages, fine dining, grand banquet halls and more in Patna.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  )
}
