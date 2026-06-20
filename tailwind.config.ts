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
        navy: {
          DEFAULT: "#0B1F4D",
          2: "#1E3A8A",
          dark: "#06143A",
        },
        saffron: {
          DEFAULT: "#E8930E",
          2: "#FBBF24",
          50: "#FEF3DC",
        },
        cream: "#FAF7F0",
        ink: "#1F2937",
        hairline: "#CBD5E1",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        voice: ["var(--font-lora)", "Georgia", "serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        card: "0 1px 0 rgba(11,31,77,0.02), 0 12px 28px -16px rgba(11,31,77,0.08)",
        saffron: "0 4px 12px rgba(232,147,14,0.25)",
        "saffron-lg": "0 8px 20px rgba(232,147,14,0.32)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
