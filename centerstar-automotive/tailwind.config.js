/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '820px',   // Small screens and up
      'md': '825px',   // Medium screens and up
      'lg': '1024px',  // Large screens and up
      'xl': '1280px',  // Extra large screens and up
      '2xl': '1536px', // 2x Extra large screens and up
    },
    extend: {
      width: {
        '100': '24.25rem', 
        '120': '30rem', 
      },
      backgroundImage: {
        'main-bkg': "url('../img/background.png')",
        'end-bkg': "url('../img/background-end.png')",
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

