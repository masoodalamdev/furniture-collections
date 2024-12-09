import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pink: "#FB2E86",
        secondary: "#101750"
      },
      fontFamily: {
        josefin : ["var(--font-josefin-sans)"],
        lato : ["var(--font-lato)"]
      }
    },
  },
  plugins: [],
} satisfies Config;