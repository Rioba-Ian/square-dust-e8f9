import type { Config } from "tailwindcss";

export default {
 content: ["./app/**/*.{js,jsx,ts,tsx}"],
 theme: {
  extend: {
   colors: {
    beige: "#E3E1DC",
    "dark-text": "#291507",
    "neutral-beige": "#544439",
   },
  },
  container: {
   padding: {
    DEFAULT: "1rem",
    sm: "2rem",
    lg: "4rem",
    xl: "5rem",
    "2xl": "6rem",
   },
  },
 },
 plugins: [],
} satisfies Config;
