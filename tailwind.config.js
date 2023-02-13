/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'darkBlack': '#121212',
      'darkWhite': 'rgba(255, 255, 255, 0.87)',
      'white': '#ffffff',
      'yellow': '#ffee58',
      'green': '#66bb6a',
      'blue': '#42a5f5',
    },
  },
  plugins: [],
  darkMode: 'class',
}
