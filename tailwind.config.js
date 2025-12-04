// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pipod: {
          primary: '#000000',
          secondary: '#1B1B1B',
          text: '#4C4C4C',
          emphasis: '#F2F2F2',
          custom1: '#2E2E2E',
          custom2: '#3A506B',
          dimGrey: '#6E6E6E',
          platinum: '#E0E0E0',
          whiteSmoke: '#F5F5F5',
          cultured: '#F5F7F9',
          accent: '#2ecc71',
        }
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
      }
    }
  },
  plugins: [],
};
