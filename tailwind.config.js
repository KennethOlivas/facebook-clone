module.exports = {
  node: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ['focus','hover','active','responsive'],
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
