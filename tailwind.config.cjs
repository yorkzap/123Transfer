module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.tsx',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'navy': {
          '600': '#001F3F'
        },
        'royal': {
          '300': '#0074D9',
          '600': '#0047AB',
        }
      },
    },
  },
  variants: {},
  plugins: [],
}
