/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#151312",
        light: {
          100: '#D6C6FF',
          200: '#A8B5DB',
          300: '#9CA4AB',
        },
        dark: {
          100: '#221f3d',
          200: '#0f0d23',
        },
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
        accent: "#AB8BFF",
      },
    },
  },
  plugins: [],
}