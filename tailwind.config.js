/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#ff69b4',
          red:  '#ff1493',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #ff69b4, #ff1493)',
        'shimmer':        'linear-gradient(90deg, #ff69b4, #ffffff, #ff1493, #ffffff, #ff69b4)',
        'particle':       'linear-gradient(135deg, #ff69b4, #a78bfa)',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':       { backgroundPosition: '100% 50%' },
        },
        'marquee-scroll': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% / 4))' },
        },
        'orbit-infinity': {
          to: { marginLeft: '0' },   /* placeholder – animation driven by RAF now */
        },
        'grai-token-pulse': {
          '0%, 100%': { opacity: '0.28', transform: 'scale(0.72)' },
          '50%':      { opacity: '1', transform: 'scale(1.18)' },
        },
        'grai-token-glow': {
          '0%, 100%': { opacity: '0.32' },
          '50%':      { opacity: '1' },
        },
      },
      animation: {
        shimmer:              'shimmer 8s ease-in-out infinite',
        'marquee-scroll':     'marquee-scroll 30s linear infinite',
        'orbit-infinity':     'orbit-infinity 0s linear',  /* driven by RAF, not CSS */
        'grai-token-pulse':   'grai-token-pulse 4.5s ease-in-out infinite',
        'grai-token-glow':    'grai-token-glow 3.4s ease-in-out infinite',
      },
      minHeight: {
        '70vh': '70vh',
      },
    },
  },
  plugins: [],
}
