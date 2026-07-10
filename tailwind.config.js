export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#F7F2FF",
          100: "#EDE4FF",
          200: "#D8C7FF",
          300: "#BDA0FF",
          400: "#A07BFF",
          500: "#8B5CF6",
          600: "#6D3FE3",
          700: "#5430B5",
          800: "#37206B",
          900: "#1D1238",
        },
        warm: {
          50: "#FFFBEF",
          100: "#FDF1C8",
          200: "#F5DF97",
          300: "#E8C468",
          400: "#D4AF37",
          500: "#B08B24",
          600: "#85631B",
          700: "#5F4516",
          800: "#3C2D11",
          900: "#24180C",
        },
        slate: {
          50: "#F5F3F7",
          900: "#120E1E",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Fraunces", "serif"],
      },
      fontSize: {
        display: ["3.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        "display-md": ["2.5rem", { lineHeight: "1.2", fontWeight: "700" }],
      },
    },
  },
  plugins: [],
};