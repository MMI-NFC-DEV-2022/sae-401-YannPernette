/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {

    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      openSans: ['Open Sans', 'sans-serif'],
      sora: ['Sora', 'sans-serif'],
  },

    extend: {}
  },
  // plugins: [require("daisyui")]
}
