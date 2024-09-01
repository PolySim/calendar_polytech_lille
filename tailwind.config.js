/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: "'Rubik', sans-serif",
        bebas: '"Bebas Neue", sans-serif',
        m2: '"Helvetica, M PLUS 2", sans-serif',
      },
    },
  },
  plugins: [],
};
