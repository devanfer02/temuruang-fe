/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blacked: '#171717'
      }
    },
  },
  prefix: 'tw-',
  plugins: [],
}

