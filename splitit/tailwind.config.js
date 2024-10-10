/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#4F46E5',
          dark: '#6366F1',
        },
        secondary: {
          light: '#8B5CF6',
          dark: '#EC4899',
        },
        accent: '#F43F5E',
      },
    },
  },
  plugins: [],
}