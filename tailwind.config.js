module.exports = {
  node: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      textOpacity: ['dark'],
      colors: {
        'dark-gray': '#242526',
        'dark-gray-search': '#3A3B3C',
        'dark-gray-background': '#18191A',
        'dark-gray-hover': '#2F3031',
        'dark-icon': '#3A3B3C'
      }
    },
  
  },
  variants: {
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
