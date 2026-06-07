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
        brand: {
          50: "#fff9f5",
          100: "#fff2e8",
          200: "#ffe4cf",
          300: "#ffd0a8",
          400: "#ffb87a",
          500: "#ffa04d",
          600: "#ff8f35",
          700: "#e87828",
          800: "#c46220",
          900: "#9a4e1a",
          950: "#5a2e10",
        },
        dark: {
          DEFAULT: "#1c1b19",
          light: "#2a2826",
          muted: "#3d3a37",
        },
        cream: {
          DEFAULT: "#f5f5f0",
          dark: "#ebe8e0",
        },
      },
      fontFamily: {
        sans: [
          "PingFang SC",
          "Microsoft YaHei",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
