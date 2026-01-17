/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./doc/**/*.html",
    "./showcases/**/*.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        neon: '#22d3ee',
        bgDark: '#0f172a'
      }
    }
  },
  plugins: [],
}
