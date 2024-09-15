/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      screens: {
        'sm': '460px',
      },
      colors: {
        lightPink: '#faf6ef',
        themeGray: '#212121',
      }
    },
  },
  plugins: [],
}