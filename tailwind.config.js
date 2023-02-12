/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-brown': '#DDA6B9',
        'coffee': '#AD794B',
        'tagline': '#8892b0'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
