/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  safelist: [
    'glass',
    'glass-card',
    'text-gradient',
    'bg-light',
    'bg-dark',
    'dark:bg-dark',
    'dark:bg-slate-900',
    'dark:text-slate-100',
    'bg-white/70',
    'bg-white/80',
    'dark:bg-slate-900/70',
    'dark:bg-slate-800/50',
    'backdrop-blur-lg',
    'backdrop-blur-md',
    'border',
    'shadow-xl',
    'shadow-lg'
  ],

  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0ea5e9',
          dark: '#0284c7',
          light: '#38bdf8',
        },
        secondary: {
          DEFAULT: '#6366f1',
        },
        dark: {
          DEFAULT: '#0f172a',
          lighter: '#1e293b',
        },
        light: {
          DEFAULT: '#f8fafc',
          darker: '#f1f5f9',
        },
        accent: '#06b6d4',
      },
    },
  },
  plugins: [],
}
