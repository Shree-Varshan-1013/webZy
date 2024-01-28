/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        caramel: '#F7F4F3',
        caramel2:'#D5D5D5',
        purple: '#AC61BD',
        purple2: '#743681',
        dblue:'#0D3B66',
        dblue2:'#155EA2',
        dyellow:'#F4D35E',
        dyellow2:'#F7E08D',
        charcoal:'#2D4654'
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



