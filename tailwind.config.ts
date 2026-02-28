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
          dark: '#080808',
          card: '#0e0e0e',
          border: '#1e1e1e',
          gold: '#c9a84c',
          cream: '#e8e0d5',
        },
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
