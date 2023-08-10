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
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    }
  },
  plugins: [],
}