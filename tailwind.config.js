/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '18': '18deg',
        '24': '24deg',
        '30': '30deg',
      }
    }
  },
  plugins: [],
}