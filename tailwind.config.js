/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New Brand Color Palette
        primaryTeal: '#36757F',
        lotusGold: '#E1C16E',
        warmWhite: '#FFF4EC',
        deepForestTeal: '#294B53',
        
        // Teal shades for versatility
        teal: {
          50: '#f0fafa',
          100: '#d9f0f2',
          200: '#b3e1e5',
          300: '#8dd2d8',
          400: '#67c3cb',
          500: '#36757F', // Primary Teal
          600: '#2e626a',
          700: '#294B53', // Deep Forest Teal
          800: '#1f383e',
          900: '#152529',
        },
        
        // Legacy colors for backwards compatibility
        medicalTeal: '#36757F',
        deepCharcoal: '#333333',
        champagneGold: '#E1C16E',
        softGrey: '#FFF4EC',
      },
      fontFamily: {
        sans: ['Gotham', 'Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Cinzel', 'Georgia', 'serif'],
        heading: ['Cinzel', 'Georgia', 'serif'],
        body: ['Gotham', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
