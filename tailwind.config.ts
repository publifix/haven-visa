import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#010D36",
        white: "#FFFFFF",
        "copper-1": "#FFB59C",
        "copper-2": "#B46D40",
        "copper-3": "#7C360A",
        "gray-light": "#F5F5F7",
        "gray-medium": "#828693",
        "gray-ink": "#303A51",
        // The Grand Lounge Elite + Sala HAVEN's own gold accent (separate
        // from the Visa Infinite palette, used only on GLE-branded chrome,
        // never mixed with Visa lockups per brand guideline sec. 2.5).
        "gle-gold": "#C9A24B",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "copper-gradient": "var(--visa-copper-gradient)",
      },
      letterSpacing: {
        eyebrow: "0.12em",
      },
      spacing: {
        grid: "var(--grid-margin)",
      },
    },
  },
  plugins: [],
};

export default config;
