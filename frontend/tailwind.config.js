/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fcc4ce",

          secondary: "#f75472",

          accent: "#9ff799",

          neutral: "#231825",

          "base-100": "#242b42",

          info: "#3395e1",

          success: "#2be390",

          warning: "#f0b760",

          error: "#f32c16",
        },
      },
    ],
  },

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
