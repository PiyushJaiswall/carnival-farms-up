import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import SectionHeading from '@/components/SectionHeading'
import EnquiryForm from '@/components/EnquiryForm'

export const metadata: Metadata = {
  title: 'Dining',
  description:
    'Experience all-day dining at Carnival Farms with 60-cover indoor and 60-cover outdoor seating. Private dining under the stars available.',
}

const diningPackages = [
  {
    title: 'Private Dining — Dinner',
    rows: [
      { sitting: 'First Sitting', time: '7:30 PM – 9:00 PM', price: '₹2,950/- per person' },
      { sitting: 'Second Sitting', time: '9:30 PM – 11:00 PM', price: '₹3,450/- per person' },
    ],
  },
  {
    title: 'Private Dining — Lunch',
    rows: [
      { sitting: 'First Sitting', time: '12:00 PM – 1:30 PM', price: '₹2,950/- per person' },
      { sitting: 'Second Sitting', time: '2:00 PM – 3:30 PM', price: '₹3,450/- per person' },
    ],
  },
  {
    title: 'Private High Tea',
    rows: [
      { sitting: 'Exclusive Session', time: '4:30 PM – 6:00 PM', price: '₹2,150/- per person' },
    ],
  },
]

export default function DiningPage() {
  return (
    <>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&auto=format&fit=crop&q=80"
        eyebrow="All-Day Dining"
        title="Dining"
        highlight="Experience"
        subtitle="A culinary journey from breakfast to dinner under the open Bihar sky"
        primaryCta={{ label: 'Reserve a Table', href: '/contact' }}
        secondaryCta={undefined}
        fullScreen={false}
      />

      {/* Overview */}
      <section className="section-padding bg-luxury-dark">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="The Restaurant"
              title="Our Dining Space"
              center={false}
              subtitle="Our all-day restaurant is designed for those who appreciate great food, elegant surroundings, and genuine hospitality."
            />
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { n: '60', l: 'Indoor Covers' },
                { n: '60', l: 'Outdoor Covers' },
                { n: 'All Day', l: 'Breakfast to Dinner' },
                { n: 'Live', l: "Chef's Specials" },
              ].map(({ n, l }) => (
                <div key={l} className="border border-luxury-border p-5">
                  <p className="text-2xl font-light text-amber-400">{n}</p>
                  <p className="text-xs tracking-widest text-gray-400 uppercase mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[420px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&auto=format&fit=crop&q=80"
              alt="Outdoor Dining"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Private Dining Pricing — Like Amanzi */}
      <section className="section-padding bg-luxury-card">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Dining Under the Stars"
            title="Private Dining"
            subtitle="Whisk away your partner to a candlelit dinner under a blanket of stars. Every package includes a private butler, tailor-made chef's menu, and personalised service."
          />

          <div className="space-y-8 mb-12">
            {diningPackages.map((pkg) => (
              <div key={pkg.title} className="border border-luxury-border overflow-hidden">
                <div className="bg-amber-400/10 border-b border-luxury-border px-6 py-4">
                  <h3 className="text-sm tracking-widest uppercase text-amber-400 font-light">
                    {pkg.title}
                  </h3>
                </div>
                <table className="w-full">
                  <tbody>
                    {pkg.rows.map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-luxury-border last:border-b-0 hover:bg-white/5 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm text-white font-light">{row.sitting}</td>
                        <td className="px-6 py-4 text-sm text-gray-400 text-center">{row.time}</td>
                        <td className="px-6 py-4 text-sm text-amber-400 text-right tracking-wide">
                          {row.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          <div className="border border-amber-400/20 bg-amber-400/5 p-6 text-center mb-8">
            <p className="text-gray-400 text-xs leading-relaxed tracking-wide">
              ★ All packages include a private butler &nbsp;·&nbsp; Rates are per person including taxes &nbsp;·&nbsp; Limited seating available
            </p>
            <p className="text-amber-400 text-xs mt-3 tracking-widest uppercase">
              Use Code <span className="font-medium">CARNIVAL20</span> for 20% off your dining booking
            </p>
          </div>

          <div className="text-center">
            <Link href="/contact" className="btn-solid">
              Reserve Your Table
            </Link>
          </div>
        </div>
      </section>

      <EnquiryForm />
    </>
  )
}

