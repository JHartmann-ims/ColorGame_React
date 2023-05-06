/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        'color-game': '#2C8E99',
        'color-game-dark': '#232323',
      },
    },
  },
  plugins: [],
}

