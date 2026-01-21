/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        founderin: {
          dark: "#1a1a1a", // Deep charcoal (Keep for text)
          white: "#ffffff", // Clean white
          gray: "#f5f5f5", // Subtle gray (Keep for other uses)
          navy: "#2c3e50", // Professional navy
          silver: "#c0c0c0", // Accent silver
          mint: "#E6FFFE", // New Gray replacement
          purple: "#B01AFF", // New Black replacement
        },
      },
      backgroundImage: {
        'hero-gradient': "linear-gradient(90deg, #ECFFF8 0%, #E4D6FF 35%, #C05BFF 55%, #8A2CFF 70%, #2A0A3A 90%, #000000 100%)",
      },
      fontFamily: {
        sans: ["Acumin", "Inter", "sans-serif"],
        acumin: ["Acumin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
