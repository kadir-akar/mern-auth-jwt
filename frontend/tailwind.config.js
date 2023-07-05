/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fecaca",
          secondary: "#9af4ed",
          accent: "#b5fc4b",
          neutral: "#272631",
          "base-100": "#4b4351",
          info: "#9bc2f3",
          success: "#16bb79",
          warning: "#f7d85f",
          error: "#e7836f",
        },
      },
    ],
  },

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
