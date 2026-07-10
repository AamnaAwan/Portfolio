export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A78BFA",
        "primary-dark": "#7C3AED",
        "primary-bright": "#C4B5FD",
        darkBg: "#0F0F0F",
        lightBg: "#FFFFFF",
      },
      backgroundColor: {
        dark: "#0F0F0F",
        light: "#FFFFFF",
      },
    },
  },
  plugins: [],
};