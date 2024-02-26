/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#ff6827",
        400: "#121212",
        300: "#ffffff10",
        200: "#ffffffb3",
        100: "#ffffff",
      },
    },
  },
  plugins: [],
};
