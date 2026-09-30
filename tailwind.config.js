import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      public: ["var(--font-sans)", ...fontFamily.sans],
    },
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      grey: {
        1: "#191A1F",
        2: "#333333",
        3: "#4F4F4F",
        4: "#F5F5F5",
        5: "#828282",
        6: "#E0E0E0",
      },
      blue: {
        1: "#2D2E7E",
        2: "#00549F",
        3: "#0075B2",
        4: "#4D4DFF",
        5: "#2F80ED",
        6: "#00B3B6",
      },
      green: {
        1: "#219653",
        2: "#65CEB3",
      },
      orange: {
        1: "#F2994A",
        2: "#F8C35D",
      },
      purple: {
        1: "#6F3485",
        2: "#9B51E0",
      },
      red: {
        1: "#EB5757",
      },
      yellow: {
        1: "#F2C94C",
      },
      pink: {
        1: "#F3659C",
      },
    },
    backgroundImage: {
      "gradient-1": "linear-gradient(90deg, #FF4066 3.99%, #FFF16A 95.74%)",
      "gradient-2": "linear-gradient(90deg, #103CE7 3.99%, #64E9FF 95.74%)",
      "gradient-3": "linear-gradient(90deg, #001177 3.99%, #E44AFD 95.74%)",

      "button-blue":
        "linear-gradient(90deg, #4D4DFF 0%, #4D4DFF 50%, #F3659C 50%, #F3659C 100%)",
      "button-pink":
        "linear-gradient(90deg, #F3659C 0%, #F3659C 50%, #4D4DFF 49.82%, #4D4DFF 100%)",
    },
    boxShadow: {
      card: "0px 2px 8px 0px #00000040",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: "0", transform: "scale(0.95)" },
        "100%": { opacity: "1", transform: "scale(1)" },
      },
    },
    animation: {
      fadeIn: "fadeIn 0.2s ease-out",
    },
  },
  plugins: [],
};
