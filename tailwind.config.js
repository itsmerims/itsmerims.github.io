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
        'data-bg': '#0f172a',
        'data-card': '#1a1f35',
        'data-border': '#334155',
        'data-text-secondary': '#94a3b8',
        'cyber-blue': '#0ea5e9',
        'electric-purple': '#a78bfa',
        'accent-glow': '#06b6d4',
      },
      animation: {
        fadeIn: "fadeIn 1.5s",
        slideInUp: "slideInUp 0.8s ease-out",
        glow: "glow 3s ease-in-out infinite",
      },
      animationDelay: {
        0: "0s",
        2: "0.2s",
        4: "0.4s",
        6: "0.6s",
        8: "0.8s",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideInUp: {
          from: {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(14, 165, 233, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(14, 165, 233, 0.8)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
