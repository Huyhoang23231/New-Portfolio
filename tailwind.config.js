/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px", // Thay đổi 'sm' thành 576px
      md: "960px", // Thay đổi 'md' thành 960px
      lg: "1440px", // Thay đổi 'lg' thành 1440px
      xl: "1920px", // Thay đổi 'xl' thành 1920px
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
