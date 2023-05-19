/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/@develing1991/design/**/*.vue',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   roboto: ['Roboto'],
      //   play: ['Play'],
      //   noto: ['Noto Sans Nandinagari'],
      // },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
