/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {

    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      openSans: ['Open Sans', 'sans-serif'],
      sora: ['Sora', 'sans-serif'],
    },

    screens: {
      'xl': { 'max': '2039px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '424px' },
    },

    extend: {}
  },
  // plugins: [require("daisyui")]
}
