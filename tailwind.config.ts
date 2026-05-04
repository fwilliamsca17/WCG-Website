import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // WCG Brand — Deep navy + metallic silver + slate neutrals
        navy: {
          50: "#eef3f8",
          100: "#d6e2ed",
          200: "#adc4d9",
          300: "#7ea1bf",
          400: "#4f7ca0",
          500: "#2f5d83",
          600: "#1f4566",
          700: "#1b3a5c",
          800: "#142d49",
          900: "#102339",
          950: "#081623",
        },
        silver: {
          50: "#f7f8f9",
          100: "#eceef0",
          200: "#d6dadf",
          300: "#b6bcc3",
          400: "#8e939a",
          500: "#727880",
          600: "#5c6168",
          700: "#4a4f55",
          800: "#3e4248",
          900: "#34373c",
          950: "#1f2125",
        },
        slate: {
          50: "#f5f7f9",
          100: "#e8ecf0",
          200: "#d2d8e0",
          300: "#b0b9c6",
          400: "#8a95a7",
          500: "#6b7689",
          600: "#566173",
          700: "#464f5e",
          800: "#3b424f",
          900: "#343944",
          950: "#0d1219",
        },
        ivory: "#FAFBFC",
        cream: "#F2F4F7",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "heading-lg": ["2rem", { lineHeight: "1.25" }],
        "heading": ["1.5rem", { lineHeight: "1.3" }],
        "heading-sm": ["1.25rem", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "label": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.08em" }],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "slide-in": "slideIn 0.5s ease-out forwards",
        "counter": "counter 2s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
