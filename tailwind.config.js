module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#FF6363",
      secondary: {
        100: "#FF9900",
        200: "#888883",
      },
      dark: "#0F0F11",
      footer: "#19191C",
      border: "#70369B",
      white: "#ffffff",
      gray: {
        100: "#e5e7eb",
        200: "#FBFBFB",
        400: "#cccccc",
        800: "#282828",
      },
    },
    fontFamily: {
      oswald: ["Oswald", "sans-serif"],
      jungle: ["Jungle Adventurer", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("flowbite/plugin")],
};
