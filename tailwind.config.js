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
          white: '#FFFFFF',
          'light-gray': '#F5F5F7',
          'gray-100': '#F3F4F6',
          'gray-200': '#E5E5E7',
          'gray-400': '#6E6E6E',
          'gray-600': '#4B5563',
          'gray-800': '#1D1D1F',
          'blue-primary': '#0066CC',
          'blue-secondary': '#3B82F6',
          cyan: '#06B6D4',
          'whatsapp-green': '#25D366'
        }
      },
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
      }
    }
  },
  darkMode: "class",
  plugins: [heroui()],
};
