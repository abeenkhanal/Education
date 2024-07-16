/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#A3C6CD',
        customgreen: '#20B1A6'
      }
    },
  },
  plugins: [],
}
