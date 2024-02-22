/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        white_opacity: 'rgba(241, 245, 249, 0)',
        gray_opacity: 'rgba(148, 163, 184, 0.7)'
      }
    },
  },
  plugins: [],
}

