/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primaryDark: 'rgb(36,36,36)',
        dark: '#434242',
      },
      borderColor: {
        clRed: '#A70100',
        clDark: '#242424',
      },
      backgroundImage: {
        gradient:
          'linear-gradient(90deg, #870101 25%, #870101d3 45%, #870101 65%)',
      },
    },
  },
  plugins: [],
};
