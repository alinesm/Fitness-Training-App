import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        custom: '2fr 2fr 2fr 1fr 2fr 1.5fr 1fr 2fr 0.25fr',
      },
    },
  },
  plugins: [],
};
