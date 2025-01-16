const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'first': '#36CDCA',
        'second': '#F6BC47',
        'second-shadow': '#CE8E14',
        'pale-grey': '#B6CAD3',
        'pale-grey-shadow': '#7D9AA7',
        'medium-grey': '#284551',
        'medium-grey-shadow': '#132C36',
        'dark-grey': '#203741'
      }
    },
  },
  plugins: [flowbite.plugin(),],
}

