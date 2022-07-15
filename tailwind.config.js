/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#f8f8ffff",
        grey: {
          primary: "#dbdbdb",
        },
        blue: {
          lbright: "#b0efebff",
          abright: "#9ed0e6ff",
          morning: "#82a7a6ff",
        },
        yellow: {
          bright: "#fce762ff",
          lime: "#edffa9ff",
        },
        pink: "#fdbaf8ff",
        melon: "#f7af9dff",
        crimson: "#d91e36ff",
        black: "#08090aff",
        background: "#fafafa    ",
        login_bg: "#2e2e2e",
      },
      
    },
  },
  plugins: [],
};
