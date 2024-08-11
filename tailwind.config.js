/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        nunito: "Nunito",
        inter: "Inter Tight",
        roboto: "Roboto",
        lora: "Lora"
      }
    },
  },
  plugins: [],
}

