/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4677e2",

          secondary: "#ab9dea",

          accent: "#b5d7fc",

          neutral: "#2b293d",

          "base-100": "#232f4d",

          info: "#7ca2d5",

          success: "#22916a",

          warning: "#d7a314",

          error: "#f74c40",
        },
      },
    ],
  },

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
