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
    extend: {
      colors: {
        'pgray': "#5c645c",
        'light-pink': "#efbbd9",
        'lightin-pink': "#e2afc2",
        'blackier': "#2f2027",
        'purpink': "#2f2027"
      },
      backgroundImage: {
        'bg': "url('/bg.png')"
      },
      dropShadow: {
        'pinkShadow' : "0 4px 3px rgba(226, 175, 194, 0.5)"
      }
    },
  },
  plugins: [],
}
