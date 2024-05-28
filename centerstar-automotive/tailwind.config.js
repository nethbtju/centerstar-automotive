/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'main-bkg': "url('../img/background.png')",
      },
      colors: {
        "nav-color": "#0E0D0E",
        "bg-back-color": "#000000",
        'highlight-color': "#D9D9D9",
        'card-grey-color': "#383838",
        'bg-grey-color': '#1C1C1C',
      },
      fontFamily: {
        'inria': ['"Inria Serif"', 'serif'],
      },
    },
  },
  plugins: [],
}

