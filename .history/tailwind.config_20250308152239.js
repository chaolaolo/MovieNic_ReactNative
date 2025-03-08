/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        accent: "#AB8BFF",
        secondary: "#00FF00",
        tertiary: "#0000FF",
        quaternary: "#FFFF00",
        quinary: "#00FFFF",
        senary: "#FF00FF",
        septenary: "#C0C0C0",
        octonary: "#800000",
        nonary: "#808080",
        decenary: "#008000",
        undecenary: "#000080",
        duodecenary: "#800080",
        tredecenary: "#808000",
        quattuordecenary: "#0000FF",
      },
    },
  },
  plugins: [],
}