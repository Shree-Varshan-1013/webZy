/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        caramel: '#FFDBC3',
        purple: '#9F91CC',
        purple2: '#5C4B99',
        purple3: '#3D246C',
      },
      fontFamily:{
        alfa: ["Alfa Slab One", "serif"],
        anuphan: ["Anuphan", "sans-serif"],
        arvo: ["Arvo", "serif"],
        basker: ["Baskervville", "serif"],
        poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [
  ],
}



