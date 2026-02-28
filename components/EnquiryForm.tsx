'use client'
import { useState } from 'react'
import SectionHeading from './SectionHeading'

interface FormState {
  name: string
  phone: string
  email: string
  checkin: string
  checkout: string
  guests: string
  purpose: string
  message: string
}

const EMPTY: FormState = {
  name: '', phone: '', email: '', checkin: '',
  checkout: '', guests: '', purpose: 'Leisure Stay', message: '',
}

export default function EnquiryForm({ standalone = true }: { standalone?: boolean }) {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className={standalone ? 'section-padding bg-luxury-dark' : ''}>
      <div className={standalone ? 'max-w-3xl mx-auto' : ''}>
        {standalone && (
          <SectionHeading
            eyebrow="Reservations"
            title="Make An Enquiry"
            subtitle="Share your details and our concierge team will respond within 24 hours."
          />
        )}

        {submitted ? (
          <div className="text-center py-16 border border-amber-500/20">
            <div className="w-14 h-14 border border-amber-500 flex items-center justify-center mx-auto mb-6">
              <span className="text-amber-400 text-xl font-cormorant italic">✓</span>
            </div>
            <p className="font-cormorant text-3xl font-light text-white mb-3">Thank You</p>
            <p className="body-text">We will be in touch within 24 hours.</p>
            <button
              onClick={() => { setSubmitted(false); setForm(EMPTY) }}
              className="btn-primary mt-8"
            >
              New Enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            <div>
              <label className="form-label">Full Name *</label>
              <input type="text" name="name" required value={form.name}
                onChange={handleChange} className="form-input" placeholder="Your full name" />
            </div>
            <div>
              <label className="form-label">Phone Number *</label>
              <input type="tel" name="phone" required value={form.phone}
                onChange={handleChange} className="form-input" placeholder="+91 XXXXX XXXXX" />
            </div>
            <div>
              <label className="form-label">Email Address</label>
              <input type="email" name="email" value={form.email}
                onChange={handleChange} className="form-input" placeholder="your@email.com" />
            </div>
            <div>
              <label className="form-label">Purpose of Visit</label>
              <select name="purpose" value={form.purpose} onChange={handleChange}
                className="form-input bg-transparent">
                <option className="bg-luxury-dark">Leisure Stay</option>
                <option className="bg-luxury-dark">Wedding / Reception</option>
                <option className="bg-luxury-dark">Corporate Event</option>
                <option className="bg-luxury-dark">Birthday / Celebration</option>
                <option className="bg-luxury-dark">Day Visit</option>
                <option className="bg-luxury-dark">Other</option>
              </select>
            </div>
            <div>
              <label className="form-label">Check-in Date</label>
              <input type="date" name="checkin" value={form.checkin}
                onChange={handleChange} className="form-input bg-transparent" />
            </div>
            <div>
              <label className="form-label">Check-out Date</label>
              <input type="date" name="checkout" value={form.checkout}
                onChange={handleChange} className="form-input bg-transparent" />
            </div>
            <div>
              <label className="form-label">Number of Guests</label>
              <input type="number" name="guests" min="1" value={form.guests}
                onChange={handleChange} className="form-input" placeholder="e.g. 2" />
            </div>
            <div>
              <label className="form-label">Special Requirements</label>
              <input type="text" name="message" value={form.message}
                onChange={handleChange} className="form-input" placeholder="Dietary needs, special requests..." />
            </div>
            <div className="md:col-span-2 pt-6 text-center">
              <button type="submit" disabled={loading}
                className="btn-primary disabled:opacity-40 min-w-[220px]">
                {loading ? 'Sending...' : 'Submit Enquiry'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
