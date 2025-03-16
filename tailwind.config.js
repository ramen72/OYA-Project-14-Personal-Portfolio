/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': `"Montserrat", sans-serif;`
      },
      colors:{
        'navlink' : "#838383",
        'secondary' : "#8671FC"
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

