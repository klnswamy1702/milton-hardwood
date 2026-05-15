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
        primary: {
          DEFAULT: "#8B6914",
          light: "#D4A853",
          dark: "#6B4F10",
        },
        accent: "#C9956B",
        surface: {
          DEFAULT: "#FAF7F2",
          dark: "#1A1A1A",
        },
        muted: "#6B7280",
        border: "#E5E1D8",
        foreground: "#1A1A1A",
        background: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
