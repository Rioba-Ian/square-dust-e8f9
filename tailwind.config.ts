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
 },
 plugins: [],
} satisfies Config;
