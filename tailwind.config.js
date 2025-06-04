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
        // Body
        body: "hsl(250, 60%, 98%)",
        header: "rgba(255, 255, 255, 0.8)",
        container: "hsl(0, 0%, 20%)",
        containerRgb: "rgba(255, 255, 255)",
        // Textos
        title: "hsl(250, 8%, 15%)",
        text: "hsl(250, 8%, 35%)",
        textHover: "#fb7185",
        // Botones
        button: "#fecdd3",
        buttonHover2: "#fb7185",
        buttonHover: "rgb(58, 73, 77)",
        newBorderColor: "#fb7185",
        mycolor: "#212121",
        beige: "#E5DCBC",
        nav: "hsl(250, 5%, 24%)",
        shadow: "hsla(0, 0%, 15%, 0.1)",
        scrollbar: "hsl(250, 12%, 90%)",
        scrollThumb: "hsl(250, 12%, 80%)",
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
