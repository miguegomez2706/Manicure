/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rale: ["Raleway"],
        playfair: ["Playfair Display", "serif"],
        numeros: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        mycolor: "#212121",
        beige: "#E5DCBC",
      },
      textShadow: {
        lg: "4px 4px 8px rgba(0, 0, 0, 0.4)",
        xl: "6px 6px 12px rgba(0, 0, 0, 0.5)",
      },
      height: {
        120: "30rem",
        140: "35rem",
        150: "37.5rem",
      },
      width: {
        ancho: "28rem",
      },
    },
  },
  plugins: [],
};
