module.exports = () => ({
  plugins: [
    require('postcss-import'),
    require('postcss-advanced-variables'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer'),
  ],
})
