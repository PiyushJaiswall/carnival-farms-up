'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function QuoteSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="relative h-[70vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&auto=format&fit=crop&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/65" />

      {/* Quote */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="block w-12 h-px bg-amber-500/60 mx-auto mb-10"
        />

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.2] italic mb-8"
        >
          "Not just a stay — a feeling you carry home forever."
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="eyebrow text-amber-400/80"
        >
          Carnival Farms — Patna, Bihar
        </motion.p>

        <motion.span
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="block w-12 h-px bg-amber-500/60 mx-auto mt-10"
        />
      </div>
    </section>
  )
}
