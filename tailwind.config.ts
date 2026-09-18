import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C1917",
        "on-primary": "#FFFFFF",
        secondary: "#44403C",
        accent: "#C9A24B",
        background: "#0C0A09",
        foreground: "#FAFAF9",
        muted: "#78716C",
        border: "rgba(250, 250, 249, 0.12)",
        "visa-navy": "#021E4C",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
    },
  },
  plugins: [],
};

export default config;
