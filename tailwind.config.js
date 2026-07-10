export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium purple accent
        accent: {
          50: "#FAF7FF",
          100: "#F3ECFF",
          200: "#E9D9FF",
          300: "#D4B5FF",
          400: "#B794F6",
          500: "#9D6EE8",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#3F0F83",
        },
        slate: {
          50: "#F9FAFB",
          900: "#0F172A",
        },
      },
      fontSize: {
        display: ["3.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        "display-md": ["2.5rem", { lineHeight: "1.2", fontWeight: "700" }],
      },
    },
  },
  plugins: [],
};