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
        // WCG Brand — Deep forest green + warm bronze + charcoal
        forest: {
          50: "#f0faf4",
          100: "#d9f2e3",
          200: "#b5e4c9",
          300: "#83d0a5",
          400: "#4fb67e",
          500: "#2d9a62",
          600: "#1e7d4e",
          700: "#1a6541",
          800: "#175036",
          900: "#14422d",
          950: "#0a2519",
        },
        bronze: {
          50: "#fdf8f0",
          100: "#f9edda",
          200: "#f2d8b4",
          300: "#e9bd83",
          400: "#dfa050",
          500: "#d4863a",
          600: "#c06d2e",
          700: "#a05428",
          800: "#824426",
          900: "#6a3922",
          950: "#391c10",
        },
        charcoal: {
          50: "#f5f6f8",
          100: "#e8eaef",
          200: "#d4d8e1",
          300: "#b5bcc9",
          400: "#909aad",
          500: "#727e94",
          600: "#5e687e",
          700: "#4d5567",
          800: "#434957",
          900: "#3a3f4a",
          950: "#0e1018",
        },
        ivory: "#FAFAF5",
        cream: "#F5F2EB",
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
