/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {    
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#ff6827',
        black: '#000000',
        400: '#181818',
        300: '#1e1e1e',
        200: '#e7e7e7',
        100: '#ffffff',
        back: '#18181b',
      },
    },
  },
  plugins: [],
};
