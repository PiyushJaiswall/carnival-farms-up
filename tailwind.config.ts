import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          dark: '#0F172A',
          card: '#1E293B',
          border: '#2A3A52',
          gold: '#C6A969',
          cream: '#F8F6F2',
          text: '#111827',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        poppins: ['var(--font-poppins)', 'Helvetica Neue', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
      },
    },
  },
  plugins: [],
}

export default config
