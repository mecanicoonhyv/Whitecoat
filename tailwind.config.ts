import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0E7490',
          accent: '#F59E0B',
          dark: '#111827',
        },
      },
    },
  },
  plugins: [],
}
export default config
