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
    // Connect to Formspree: replace action URL below
    // await fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: JSON.stringify(form) })
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className={standalone ? 'section-padding bg-luxury-dark' : ''}>
      <div className={standalone ? 'max-w-3xl mx-auto' : ''}>
        {standalone && (
          <SectionHeading
            eyebrow="Get In Touch"
            title="Make An Enquiry"
            subtitle="Share your details and our team will get back to you within 24 hours."
          />
        )}

        {submitted ? (
          <div className="text-center border border-amber-400/30 p-12 bg-amber-400/5">
            <div className="w-16 h-16 border border-amber-400 flex items-center justify-center mx-auto mb-6">
              <span className="text-amber-400 text-2xl">✓</span>
            </div>
            <p className="text-amber-400 text-xl tracking-widest font-light">Thank You!</p>
            <p className="text-gray-400 mt-3 text-sm">
              We have received your enquiry and will reach out within 24 hours.
            </p>
            <button onClick={() => { setSubmitted(false); setForm(EMPTY) }} className="btn-primary mt-6">
              New Enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="form-label">Full Name *</label>
              <input type="text" name="name" required value={form.name} onChange={handleChange}
                className="form-input" placeholder="Your full name" />
            </div>
            <div>
              <label className="form-label">Phone Number *</label>
              <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                className="form-input" placeholder="+91 XXXXX XXXXX" />
            </div>
            <div>
              <label className="form-label">Email Address</label>
              <input type="email" name="email" value={form.email} onChange={handleChange}
                className="form-input" placeholder="your@email.com" />
            </div>
            <div>
              <label className="form-label">Purpose of Visit *</label>
              <select name="purpose" required value={form.purpose} onChange={handleChange}
                className="form-input bg-luxury-card">
                <option>Leisure Stay</option>
                <option>Wedding / Reception</option>
                <option>Corporate Event</option>
                <option>Birthday / Celebration</option>
                <option>Day Visit</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="form-label">Check-in Date</label>
              <input type="date" name="checkin" value={form.checkin} onChange={handleChange}
                className="form-input bg-luxury-card" />
            </div>
            <div>
              <label className="form-label">Check-out Date</label>
              <input type="date" name="checkout" value={form.checkout} onChange={handleChange}
                className="form-input bg-luxury-card" />
            </div>
            <div>
              <label className="form-label">Number of Guests</label>
              <input type="number" name="guests" min="1" value={form.guests} onChange={handleChange}
                className="form-input" placeholder="e.g. 2" />
            </div>
            <div className="md:col-span-2">
              <label className="form-label">Message / Special Requirements</label>
              <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                className="form-input resize-none"
                placeholder="Any special requests, dietary requirements, or questions..." />
            </div>
            <div className="md:col-span-2 text-center pt-2">
              <button type="submit" disabled={loading}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]">
                {loading ? 'Sending...' : 'Submit Enquiry'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

