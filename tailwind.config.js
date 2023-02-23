/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'black': '#121212',
      'white': '#FFFFFF',
      'dark': {
        'white': '#F8F9FA',
      }
    },
    extend: {
      width: {
        '104': '26rem',
        '112': '28rem',
      },
      height: {
        '104': '26rem',
        '160': '40rem',
      },
      boxShadow: {
        'startButton': '0 3px 0 #121212',
        'startButtonHover': '0 7px 0 #121212',
        'inner': 'inset 0 1px 2px 0 rgb(0 0 0 / 0.07)',
        'inner-small': 'inset 0 1px 2px 0 rgb(0 0 0 / 0.05)',
      }
    },
    fontFamily: {
      'GothicA1': 'Gothic A1',
    }
  },
  plugins: [
  ],
  darkMode: 'class',
}
