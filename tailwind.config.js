/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0e27',
          surface: '#1a1f3a',
          border: '#2a3055',
        },
        accent: {
          cyan: '#00d9ff',
          purple: '#9d4edd',
          pink: '#ff006e',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(0, 217, 255, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(0, 217, 255, 1)' },
        }
      }
    },
  },
  plugins: [],
}
