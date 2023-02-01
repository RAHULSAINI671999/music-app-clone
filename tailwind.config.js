module.exports = {
  content: ["./src/**/*.{jsx,ts,tsx,js}"],
  theme: {
    extend: {
      colors:{
        primary:"#02b875",
        secondary:"#2121212"
      },
      screens:{
        sm:{ max: "639px"},
        md:"800px",
      },
    },
  },
  plugins: [],
}