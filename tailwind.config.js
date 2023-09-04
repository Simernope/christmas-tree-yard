/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      },
      content: {
        sloganxl: "url('./assets/slogan-xl.svg')",
        sloganlg: "url('./assets/slogan-lg.svg')",
        sloganmd: "url('./assets/slogan-md.svg')",
      },
    },
  },
  plugins: [],
}