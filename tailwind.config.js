/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#9398bf',
      'secondary': '#ADADAD',
      'tertiary': '#0C8CE9',
      'navback': '#000000',
      'text-primary': '#ffffff'
    },
    screens: {
      'sm': '320px',
      'md': '764px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}