import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        plaster: ["Plaster", "sans-serif"],
        hobo: ["Heebo", "sans-serif"],
      },
      screens: {
        "3xl": "1800xp",
      },
      colors: {
        "ub-primary": "#5F00DA",
        "ub-secondary": "#1B1D28",
        "ub-gray": "#777777",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
