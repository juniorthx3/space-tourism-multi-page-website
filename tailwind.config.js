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
        specialBlue:"#D0D6F9",
        specialBlk:"#0B0D17"
      },
      fontSize:{
        defaultSize:"16px",
        headerSize:"calc(10px + 2vmin)",
        15:"15px",
        18:"18px",
        heading5:"28px",
        32:"32px",
        80:"80px",
        150:"150px"
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
        customWidth:'min(100% - 4rem, 80em)',
        150:"150px",
        274:"274px",
        473:"473px"
      },
      height:{
        80:"80%",
        96:"96px",
        150:"150px",
        274:"274px"
      },
      letterSpacing:{
        One25:"1.25px",
        2:"2px",
        two3:"2.3625px",
        two7:"2.7px",
        three38:"3.38px",
        head5space:"4.725px"
      },
      lineHeight:{
        17:"17px",
        19:"19.2px",
        23:"23px",
        25:"25px",
        32:"32px",
        34:"34px",
        37:"37px",
        100:"100px",
        150:"150px",
        172:"172px"
      },
      borderWidth:{
        3:"3px"
      }
    },
  },
  plugins: [],
}
