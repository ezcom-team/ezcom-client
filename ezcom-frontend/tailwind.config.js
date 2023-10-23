/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {    
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#ff6827',
        400: '#181818',
        300: '#1e1e1e',
        200: '#e7e7e7',
        100: '#ffffff',
        back: '#18181b',
      },
      animation: {
        spin: "spin 0.4s linear(0, 0.1)",
        ease: "ease-in 0.4s",
      },
    },
  },
  plugins: [],
};
