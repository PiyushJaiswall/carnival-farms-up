interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
  dark?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="text-amber-400 text-xs tracking-[0.5em] uppercase mb-3">{eyebrow}</p>
      )}
      <h2
        className={`text-4xl md:text-5xl font-light tracking-widest uppercase ${
          dark ? 'text-gray-900' : 'text-white'
        }`}
      >
        {title}
      </h2>
      <div className={`w-16 h-px bg-amber-400 mt-6 ${center ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p
          className={`mt-6 text-sm leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${
            dark ? 'text-gray-600' : 'text-gray-400'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
