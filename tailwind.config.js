/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#0e1425",
       user: "#222d51",
        secanod:"#e2e8f808",
        logo: "#feccef",
        auth:"#7e3a91",

      },
      fontFamily: {
        Garamond: [' EB Garamond'],
        charmonman: ['Charmonman'],
        onest: ['Onest']
      }

    },
  },
  plugins: [],
}