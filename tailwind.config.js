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
      },
      fontSize:{
        defaultSize:"16px",
        headerSize:"calc(10px + 2vmin)"
      },
      backgroundImage:{
        'homeDesktop':"url('../src/assets/home/background-home-desktop.jpg')",
        "homeTablet":"url('../src/assets/home/background-home-tablet.jpg')",
        "homeMobile":"url('../src/assets/home/background-home-mobile.jpg')",
        'destinationDesktop':"url('../src/assets/destination/background-destination-desktop.jpg')",
        "destinationTablet":"url('../src/assets/destination/background-destination-tablet.jpg')",
        "destinationMobile":"url('../src/assets/destination/background-destination-mobile.jpg')",
        "crewDesktop":"url('../src/assets/crew/background-crew-desktop.jpg')",
        "crewTablet":"url('../src/assets/crew/background-crew-tablet.jpg')",
        "crewMobile":"url('../src/assets/crew/background-crew-mobile.jpg')",
        "technologyDesktop":"url('../src/assets/technology/background-technology-desktop.jpg')",
        "technologyTablet":"url('../src/assets/technology/background-technology-tablet.jpg')",
        "technologyMobile":"url('../src/assets/technology/background-technology-mobile.jpg')",
        "bgHeader":"linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.233))",
        "bgMobile":"rgba(255, 255, 255, 0.04)"
      },
      backdropBlur:{
        new: "blur(5px)"
      },
      width:{
        customWidth:'min(100% - 4rem, 80em)'
      },
      height:{
        80:"80%"
      },
    },
  },
  plugins: [],
}
