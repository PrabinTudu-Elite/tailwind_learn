/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./build/*.html', './build/js/*.js'],
  theme: {
    extend: {
      colors: {
        papayawhip: {
          light: '#fef4e4',
          DEFAULT: '#ffefd5',
          dark: '#fee5bc'
        }
      },
      screens: {
        'widescreen': { 'raw': '(min-aspect-ration: 3/2)' },
        'tallscreen': { 'raw': '(max-aspect-ration: 13/20)' },
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.3)' },
          '100%': { transform: 'scaleY(1)' }
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}

