/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'bellefair':'Bellefair',
      'barlowCondensed':'Barlow Condensed',
      'barlow':'Barlow'
    },
    screens:{
      xs: '375px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        specialBlue:"#D0D6F9"
      }
    },
  },
  plugins: [],
}
