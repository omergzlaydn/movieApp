/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'burgundy-700': '#800020', // Burgundy rengi
        'black-900': '#0a0a0a',    // Siyah renk
      },
    },
  },
  plugins: [],
};
