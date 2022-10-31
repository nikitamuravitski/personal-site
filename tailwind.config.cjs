/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        '2screen': '200vh'
      }
    },
    backgroundSize: {
      '200%': '200%',
    }
    
  },
  
  plugins: [],
};
