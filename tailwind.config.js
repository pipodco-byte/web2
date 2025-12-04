// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const { heroui } = require('@heroui/react');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pipod: {
          black: '#000000',
          charcoal: '#121212',
          'dark-slate': '#1B1B1B',
          white: '#FFFFFF',
          'off-white': '#F9FAFB',
          'light-gray': '#F3F4F6',
          'dark-gray': '#1F2937',
          'cool-gray': '#4B5563',
          'soft-gray': '#9CA3AF',
          'dim-gray': '#6E6E6E',
          silver: '#D1D5DB',
          platinum: '#E0E0E0',
          'blue-primary': '#3B82F6',
          cyan: '#06B6D4',
          'mint-green': '#86EFAC'
        }
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
      }
    }
  },
  darkMode: "class",
  plugins: [heroui()],
};
