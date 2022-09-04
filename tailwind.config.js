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
        specialBlk:"#0B0D17",
        borderBlk:"#383B4B"
      },
      fontSize:{
        defaultSize:"16px",
        headerSize:"calc(10px + 2vmin)",
        15:"15px",
        18:"18px",
        20:"20px",
        26:"26px",
        heading5:"28px",
        32:"32px",
        40:"40px",
        56:"56px",
        80:"80px",
        100:"100px",
        150:"150px",
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
        170:"170px",
        200:"200px",
        242:"242px",
        274:"274px",
        300:"300px",
        360:"360px",
        444:"444px",
        445:"445px",
        473:"473px",
        573:"573px",
        177:"177.12px",
        327:"327px",
        400:"400px",
        458:"458px",
        456:"456.37px",
        568:"568.07px",
        729:"729px",
        690:"690px",
        830:"830px"
      },
      height:{
        80:"80%",
        150:"150px",
        242:"242px",
        200:"200px",
        274:"274px",
        712:"712px",
        444:"444px"
      },
      letterSpacing:{
        One25:"1.25px",
        2:"2px",
        two3:"2.3625px",
        two7:"2.7px",
        three38:"3.38px",
        four5:"4.0525px",
        four38:"4.38px",
        head5space:"4.725px",
        17:"17px"
      },
      lineHeight:{
        17:"17px",
        18:"18px",
        19:"19.2px",
        23:"23px",
        25:"25px",
        28:"28px",
        29:"29px",
        32:"32px",
        34:"34px",
        37:"37px",
        54:"54px",
        64:"64px",
        92:"92px",
        100:"100px",
        115:"115px",
        150:"150px",
        172:"172px"
      },
      borderWidth:{
        3:"3px"
      },
      margin:{
        38:"38.5px",
        88:"88px",
        136:"136px",
        150:"150px",
        158:"158px",
        170:"170px",
        180:"180px",
        190:"190px",
        200:"200px",
        220:"240px",
        300:"300px",
        387:"387px"
      }
    },
  },
  plugins: [],
}
