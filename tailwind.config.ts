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
          50: "#fdf6f0",
          100: "#f9e8d9",
          200: "#f2cfa8",
          300: "#e8a96a",
          400: "#de8438",
          500: "#d47b30",
          600: "#b86520",
          700: "#944f18",
          800: "#6e3a12",
          900: "#4a260c",
          950: "#2d1607",
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
