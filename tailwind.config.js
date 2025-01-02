/** @type {import('tailwindcss').Config} */
const poppinsFont = '../assets/fonts/Poppins-Bold.ttf'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        'gradient': {
          to: { 'background-position': '200% center' },
        }
      },
      fontFamily: {
        poppingFontBold: [poppinsFont]
      }
    },
  },
  plugins: [],
}