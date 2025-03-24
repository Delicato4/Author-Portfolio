module.exports = {
  purge: ['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
      },
    },
  },
  screens:{
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl:' 1280px',
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
