/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mycolor: "#1c1c1e",
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
