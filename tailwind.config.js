/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
        'roboto': ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'item-shadow': '2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)',
      },
      colors: {
        'dark': '#3A4562',
        'secondary': '#9FA4B1',
        'employment-text': '#55699E',
        'employment-btn': 'rgba(161, 177, 219, 0.317343)',
        'employment-btn-border': '#55699E4D',
        'benefits-text': '#988B49',
        'benefits-btn': 'rgba(255, 207, 0, 0.15)',
        'benefits-btn-border': '#FFCF00',
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }

        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }

        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }

        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }

        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
      listStyleType: {
        square: 'square',
      },


    },
  },
  plugins: [],
}


