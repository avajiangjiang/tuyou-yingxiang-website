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
          50: "#fff8f3",
          100: "#ffedd9",
          200: "#ffd4b0",
          300: "#ffb680",
          400: "#ff9147",
          500: "#f37021",
          600: "#e85d0a",
          700: "#c44a08",
          800: "#9a3b0c",
          900: "#7c3210",
          950: "#431705",
        },
        hermes: {
          DEFAULT: "#f37021",
          light: "#ff9147",
          dark: "#c44a08",
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
      backgroundImage: {
        "hero-pattern":
          "radial-gradient(circle at 20% 50%, rgba(243,112,33,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(243,112,33,0.1) 0%, transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
