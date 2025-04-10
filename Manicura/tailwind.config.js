/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      rale: ["Raleway"],
      playfair: ["Playfair Display", "serif"],
    },
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
        header: "rgba(255, 255, 255, 0.8)",
        title: "hsl(250, 8%, 15%)",
        nav: "hsl(250, 5%, 24%)",
        text: "hsl(250, 8%, 35%)",
        body: "hsl(250, 60%, 98%)",
        container: "#ddd",
        containerRgb: "rgba(255, 255, 255)",
        shadow: "hsla(0, 0%, 15%, 0.1)",
        scrollbar: "hsl(250, 12%, 90%)",
        scrollThumb: "hsl(250, 12%, 80%)",
        first: "hsl(0, 90%, 60%)",
        firstAlt: "hsl(0, 90%, 65%)",
        button: "rgba(32, 32, 32)",
        buttonHover: "rgb(58, 73, 77)",
        dark: {
          header: "rgba(32, 32, 32, 0.9)",
          title: "hsl(0, 0%, 90%)",
          nav: "hsl(0, 0%, 80%)",
          text: "hsl(0, 0%, 70%)",
          body: "hsl(0, 0%, 10%)",
          container: "hsl(0, 0%, 20%)",
          scrollbar: "hsl(0, 0%, 30%)",
          scrollThumb: "hsl(0, 0%, 25%)",
        },
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
      animation: {
        "fade-in": "fadeIn 0.7s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
