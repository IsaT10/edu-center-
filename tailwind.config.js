/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/Asset/hero-1.jpg')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#20AD96",

          secondary: "#630cce",

          accent: "#00a4d6",

          neutral: "#1B1D32",

          "base-100": "#F5F4F5",

          info: "#3251CD",

          success: "#51ECCA",

          warning: "#ECAA36",

          error: "#E95D7E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
