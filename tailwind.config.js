/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0ea5e9', // Sky 500
          dark: '#0284c7',    // Sky 600
          light: '#38bdf8',   // Sky 400
        },
        secondary: {
          DEFAULT: '#6366f1', // Indigo 500
        },
        dark: {
          DEFAULT: '#0f172a', // Slate 900
          lighter: '#1e293b', // Slate 800
        },
        light: {
          DEFAULT: '#f8fafc', // Slate 50
          darker: '#f1f5f9',  // Slate 100
        },
        accent: '#06b6d4',    // Cyan 500
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}