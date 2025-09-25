import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        system: ["system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config
