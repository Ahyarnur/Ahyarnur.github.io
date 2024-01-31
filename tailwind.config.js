/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ['index.html'],
  theme: {
    extend: {
      screens:{
        'sm':'480px',
      },
      spacing:{
        'big':'24rem',
      }
    },
    fontFamily:{
      poppins:['Poppins', 'sans-serif;']
    }
  },
  plugins: [],
}

