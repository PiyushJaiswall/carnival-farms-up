'use client'
import FadeIn from './FadeIn'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <FadeIn className={`mb-20 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="eyebrow mb-5">{eyebrow}</p>
      )}
      <h2 className="heading-section text-white mb-6">{title}</h2>
      <div className={`gold-line mt-0 mb-0 ${center ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`body-text mt-8 max-w-xl ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </FadeIn>
  )
}
