'use client'
import FadeIn from './FadeIn'

interface SectionHeadingProps {
  label?: string
  eyebrow?: string   // ← keep this for backward compatibility
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeading({
  label,
  eyebrow,
  title,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  const topLabel = label || eyebrow  // use whichever is passed

  return (
    <FadeIn className={`mb-16 ${center ? 'text-center' : ''}`}>
      {topLabel && <p className="section-label mb-4">{topLabel}</p>}
      <h2 className="heading-section text-white mb-5">{title}</h2>
      <span className={`gold-line mb-0 ${center ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`body-text mt-6 max-w-2xl ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </FadeIn>
  )
}
