/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      rale: ["Raleway"],
      playfair: ["Playfair Display", "serif"],
    },
    extend: {
      colors: {
        mycolor: "#212121",
        beige: "#E5DCBC",
      },
      textShadow: {
        lg: "4px 4px 8px rgba(0, 0, 0, 0.4)", // Puedes modificar este valor
        xl: "6px 6px 12px rgba(0, 0, 0, 0.5)", // Otro sombreado más fuerte
      },
      height: {
        120: "30rem", // 120 píxeles
        140: "35rem",
        150: "37.5rem", // 150 píxeles
        // Puedes agregar más alturas personalizadas según sea necesario
      },
      width: {
        ancho: "28rem",
      },
    },
  },
  plugins: [],
};
