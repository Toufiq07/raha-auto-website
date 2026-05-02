/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zoox: {
          mint: '#e6ede6',
          forest: '#2d4a3e',
          taupe: '#d4cec4',
          dark: '#121212',
        }
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
      }
    },
  },
  plugins: [],
}