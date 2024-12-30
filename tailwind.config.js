/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      height:{
        mdh: "70vh",
        vdo: "60vh",
        abt: "50vh",
        mobh: "30vh",
        small: "20vh"
      },
      margin:{
        w:"90%",
        nav:"15%",
        pp:"25%",
        large:"86",
        half: "50%",
        footer: "85%",
      },
      width:{
        w:"90%",
        nav:"15%",
        pp:"25%",
        large:"86",
        half: "50%",
        footer: "85%",
      },
      colors :{
        primary : "#291a5b",
      },
        fontFamily :{
          heading : ["comorant"],
          paragraph : ["comorant"]
         },
         fontSize :{
          mobilefont : "16px",
         },
         margin :{
          left : "15%",
         }
    },
  },
  plugins: [],
}

