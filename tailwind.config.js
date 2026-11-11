/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          teal: '#123D40',
          green: '#247C70',
          mint: '#DFF2EA',
        },
        secondary: {
          offwhite: '#F8F8F3',
          grey: '#F0F2EF',
          charcoal: '#222B2B',
        },
        accent: {
          lime: '#C8E6A0',
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'Manrope', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'clinical': '0 4px 20px -2px rgba(18, 61, 64, 0.06), 0 1px 3px -1px rgba(18, 61, 64, 0.04)',
        'clinical-lg': '0 20px 45px -10px rgba(18, 61, 64, 0.12), 0 4px 12px -2px rgba(18, 61, 64, 0.05)',
        'clinical-dark': '0 25px 50px -12px rgba(0, 0, 0, 0.45)',
      }
    },
  },
  plugins: [],
}

