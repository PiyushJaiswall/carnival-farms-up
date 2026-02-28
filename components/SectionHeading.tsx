'use client'
import FadeIn from './FadeIn'

interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <FadeIn className={`mb-16 ${center ? 'text-center' : ''}`}>
      {label && <p className="section-label mb-4">{label}</p>}
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
