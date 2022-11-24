/** @type {import('tailwindcss').Config} */

const nativewind = require('nativewind/tailwind');

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './{app,components}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily:{
      inter:'Inter_900Black'
    },
    extend: {},
  },
  plugins: [],
  presets: [nativewind],
};
