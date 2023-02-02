/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'title': ['Patua One', 'ui-sans-serif'],
      'text': ['Poppins', 'ui-sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
