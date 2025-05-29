import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        serif: ['var(--font-noto-serif)'],
        sans: ['var(--font-noto-sans)'],
        inter: ['var(--font-inter)'],
      },
      colors: {
        primary: '#1A365D',
        secondary: '#D4AF37',
        background: '#FDFBF7',
      },
    },
  },
  plugins: [],
}
export default config 