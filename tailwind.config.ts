import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-primary": '#1E201E',
        "dark-secondary": '#3C3D37',
        "dark-tertiary": '#697565',
        "dark-creame": '#ECDFCC',
        "light-primary": '#102C57',
        "light-secondary": '#DAC0A3',
        "light-teriary": '#EADBC8',
        "light-creame": '#FEFAF6',
      }
    },
  },
  plugins: [],
};
export default config;
