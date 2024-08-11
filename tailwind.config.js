/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./animations/*.css"],
  theme: {
    extend: {
      fontFamily: {
        amulya: ["Amulya", "sans-serif"],
        synonym: ["Synonym", "serif"],
        calibre: ["Calibre", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        title: ["Montserrat", "sans-serif"],
      },
      colors: {
        lightBg: "#ffffff",
        darkBg: "#171c28",
        lightText: "#000000",
        darkText: "#ffffff",
        lightBlue: "#afc2fe",
        darkBlue: "#3658c1",
      },
      screens: {
        "sm-max": { max: "640px" },
        "md-max": { max: "768px" },
        "lg-max": { max: "1024px" },
        "xl-max": { max: "1280px" },
        "2xl-max": { max: "1536px" },
        "3xl-max": { max: "1920px" },
        "4xl-max": { max: "2560px" },
        "2xl": { min: "1536px" },
        "3xl": { min: "1920px" },
        "4xl": { min: "2560px" },
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(220.55deg, #afc2fe 0%, #3658c1 100%)",
        "custom-gradient2":
          "linear-gradient(220.55deg, #7CF7FF 0%, #4B73FF 100%);",
        "custom-gradient3":
          "linear-gradient(220.55deg,#4B73FF 0%,  #7CF7FF 100%);",
        "custom-gradient4":
          "linear-gradient(to right, #ffffff 20%, #afc2fe 50%, #ffffff 80%)",
      },
    },
  },
  plugins: [],
};
