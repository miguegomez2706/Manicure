/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height:{
        120: "30rem",
        150: "37.5rem",
      },
      colors: {
        mycolor: "#1c1c1e",
      },
    },
  },
  plugins: [],
};
