/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        navbar: {
          bg: "#749BC2",
          text: "#ffffff",
          outline: "#4682A9",
        }
      }
    },
  },
  plugins: [],
}

