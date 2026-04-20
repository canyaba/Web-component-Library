/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#8aa6c7',
        ink: '#08090c',
        graphite: '#111317',
        mist: '#d8dbe2',
        muted: '#8f96a3',
        accent: {
          DEFAULT: '#8aa6c7',
          soft: '#bcc9d8',
          deep: '#283548',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        frame: '0 28px 120px rgba(2, 6, 23, 0.42)',
        panel: '0 24px 70px rgba(3, 7, 18, 0.34)',
      },
    },
  },
  plugins: [],
};
