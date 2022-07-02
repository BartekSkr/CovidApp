/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'navbar-background': 'rgb(95, 95, 95)',
        background: 'rgb(41, 40, 40)',
      },
      transitionDuration: {
        0.4: '0.4s',
        0.5: '0.5',
      },
      scale: {
        1.2: '1.2',
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    letterSpacing: {
      widest: '0.12rem',
    },
    minWidth: {
      'rem-9': '9rem',
    },
    maxWidth: {
      450: '450px',
    },
    width: {
      100: '100px',
      500: '500px',
      700: '700px',
      'rem-1.2': '1.2rem',
      'rem-6': '6rem',
      'percent-48': '48%',
    },
    height: {
      200: '200px',
      300: '300px',
      'rem-2': '2rem',
      'rem-1.4': '1.4rem',
      'rem-1.2': '1.2rem',
    },
    transformOrigin: {
      'top-left-40-40': '40px40px',
    },
  },
  plugins: [],
};
