/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': `"Montserrat", sans-serif;`,
        'raleway': `"Raleway", sans-serif;`
      },
      colors:{
        'gray' : "#838383",
        'secondary' : "#8671FC",
        'radish' : "#F05D7B",
        'lightBlack' : "#222222"
      },
      maxWidth: {
        'containerWith': '1170px',
      },
      padding: {
        '50': '50px',
      }
    },
  },
  plugins: [],
}

