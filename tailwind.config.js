module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      barlow: ['Barlow Condensed'],
      bellefair: ['Bellefair'],
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '380px',
      md: '620px',
      lg: '880px',
      xl: '1100px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      animation: {
        'spin-slow': 'spin 9000ms linear infinite',
       },
      backgroundImage: {
        bgMobile: "url('./assets/home/background-home-mobile.jpg')",
        bgTab: "url('./assets/home/background-home-tablet.jpg')",
        bgDesktop: "url('./assets/home/background-home-desktop.jpg')",
        bgDestMobile: "url('./assets/destination/background-destination-mobile.jpg')",
        bgDestTab: "url('./assets/destination/background-destination-tablet.jpg')",
        bgDestDesktop: "url('./assets/destination/background-destination-desktop.jpg')",
        bgCrewMobile: "url('./assets/crew/background-crew-mobile.jpg')",
        bgCrewTablet: "url('./assets/crew/background-crew-tablet.jpg')",
        bgCrewDesktop: "url('./assets/crew/background-crew-desktop.jpg')",
        bgTechMobile: "url('./assets/technology/background-technology-mobile.jpg')",
        bgTechTablet: "url('./assets/technology/background-technology-tablet.jpg')",
        bgTechDesktop: "url('./assets/technology/background-technology-desktop.jpg')",
        imgMobile: "url('/Users/pikachu/Downloads/multi-step-form-main/multi-step-form/src/assets/images/bg-sidebar-mobile.svg')",
        imgDesktop: "url('/Users/pikachu/Downloads/multi-step-form-main/multi-step-form/src/assets/images/bg-sidebar-desktop.svg')",

      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
