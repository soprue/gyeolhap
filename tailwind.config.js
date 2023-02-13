/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'black': '#121212',
      'white': 'rgba(255, 255, 255, 1)',
      'yellow': 'rgba(255, 238, 88, 1)',
      'green': 'rgba(102, 187, 106, 1)',
      'blue': 'rgba(66, 165, 245, 1)',
      'darkWhite': 'rgba(255, 255, 255, 0.87)',
      'darkYellow': 'rgba(255, 238, 88, 0.87)',
      'darkGreen': 'rgba(102, 187, 106, 0.87)',
      'darkBlue': 'rgba(66, 165, 245, 0.87)',
    },
  },
  plugins: [],
  darkMode: 'class',
}
