/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // You can use https://uicolors.app/create to generate the range of colors.
        primary: {
          '50': '#faf8fc',
          '100': '#f2eef9',
          '200': '#e8e0f4',
          '300': '#d6c7eb',
          '400': '#bba3dd',
          '500': '#a07ece',
          '600': '#8962bb',
          '700': '#7851a9',
          '800': '#624386',
          '900': '#50376c',
          '950': '#341f4c',
        },
        stats: {
          'hp-light': '#ff5959',
          'hp-dark': '#ff0000',
          'atk-light': '#f5ac78',
          'atk-dark': '#f08030',
          'def-light': '#fae078',
          'def-dark': '#f7c80c',
          'spc-light': '#8ec7bc',
          'spc-dark': '#28917c',
          'spd-light': '#fa92b2',
          'spd-dark': '#e95380',
          'spcAtk-light': '#9db7f5',
          'spcAtk-dark': '#6890f0',
          'spcDef-light': '#a7db8d',
          'spcDef-dark': '#78c850',
        }
      },
      fontFamily: {
        primary: ['primary', 'sans-serif'],
        secondary: ['secondary', 'sans-serif'],
        mono: ['mono'],
      },
    }
  },
  plugins: [],
}
