module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        oliva: "#eeee7c",
        olivaHover: "#d4d41c",
        beige: "#e2d08d",
        beigeHover: "#efc62e",
        sfondo: "#f4efdc",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],

  reactStrictMode: true,
  images: {
    domains: ["spoonacular.com"],
  },
};
