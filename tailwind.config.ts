import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'levioso-dark': '#0e0f1b',
        'levioso-deep': '#090e2a',
        'levioso-purple': '#5e5adb',
        'levioso-blue': '#1c1131',
        'levioso-gold': '#f6b73c',
        'levioso-glow': '#ffe78c',
        'text-glow': '#ffffff',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 15px rgba(255, 215, 0, 0.5)',
        neon: '0 0 12px rgba(255,255,255,0.2)',
      },
      backgroundImage: {
        'starfield': "radial-gradient(circle at 20% 30%, #1c1131, #0e0f1b)",
      },
      animation: {
        pulseGlow: 'pulseGlow 2s infinite ease-in-out',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(255, 215, 0, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
