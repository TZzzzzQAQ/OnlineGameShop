/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryColor: "#f0f5ff",
        SecondaryColor: "#85a5ff",
        DarkColor: "#1d39c4",
        ExtraDarkColor: "#030852",
      },
    },
  },
  plugins: [],
};
