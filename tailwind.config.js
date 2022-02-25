module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      "bg-red-300",
      "bg-blue-300",
      "bg-yellow-300",
      "bg-green-300",
      "text-white",
      "text-msg-confirm",
      "text-msg-err",
      "transform",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      md: "1.125rem",
      lg: "1.2rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.5rem",
      "5xl": "3rem",
      "6xl": "4.1rem",
      "7xl": "5rem",
      "8xl": "6.25rem",
      "9xl": "8.25rem",
      "10xl": "11.25rem",
      "11xl": "12.5rem",
    },
    extend: {
      zIndex: {
        "-10": "-10",
      },
      fontFamily: {
        sans: ["Renogare", "sans-serif"],
        serif: ["Libre Caslon Text", "serif"],
      },
      spacing: {
        13: "3.125rem",
        14: "3.5rem",
        15: "3.75rem",
        18: "4rem",
        19: "4.8rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        52: "13rem",
        60: "17rem",
        84: "21rem",
        quarter: "25%",
        third: "33%",
        half: "50%",
        "4/3": "75%",
        "16/9": "56.25%",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1280px",
        "2xl": "1440px",
      },
      backgroundImage: {
        panel1: "url('/img/panel-1.png')",
        panel2: "url('/img/panel-2.png')",
        panel3: "url('/img/panel-3.png')",
      },
      backgroundOpacity: {
        85: "0.85",
      },
    },
    colors: {
      "deep-blue": "#253063",
      "light-blue": "#5F6EBB",
      pink: "#CB296C",
      white: "#FFFFFF",
      black: "#1D1D1B",
      gray: "rgba(0, 0, 0, 0.3)",
      beige: "#FAF9F7",
      "dark-beige": "#F5F4F0",
      "msg-confirm": "#3CBA96",
      "msg-err": "#D96D6D",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
