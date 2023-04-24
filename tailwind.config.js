/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Josefin: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
        Poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'bg-colors': '#14141F',
        'btn-blue': '#5142FC',
        'card-gray': '#343444',
        'clr-purple': '#C847F0',
        'clr-blue': '#3D58E3',
      },
      screens: {
        '3xl': '1600px',
        '4xl': '1800px',
      },
      backgroundImage: {
        'Hero-bg': "url('/assets/images/hero.jpg')",
      },
    },
  },
  plugins: [],
};
