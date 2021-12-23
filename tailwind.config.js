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
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Renogare", "sans-serif"],
        serif: ["Libre Caslon Text", "serif"],
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
      pink: "#CB296C",
      white: "#FFFFFF",
      black: "#1D1D1B",
      beige: "#FAF9F7",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
