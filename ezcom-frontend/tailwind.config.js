/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {    
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#ff6827',
        400: '#383838',
        300: '#5c5c5c',
        200: '#e7e7e7',
        100: '#ffffff',
        back: '#18181b',
      },
    },
  },
  plugins: [],
};
