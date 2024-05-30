/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        customBlue: '#969696',
        buttonColor: '#4F7DF3',
        searchcolor: '#c2d3ff',
        textcolor: '#969696'
      },

      width: {
        searchWidth: '24rem',
      }
    },
  },
  plugins: [],
}