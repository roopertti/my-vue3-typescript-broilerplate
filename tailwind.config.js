module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: "'Open Sans', sans-serif",
        serif: "'Merriweather', serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
