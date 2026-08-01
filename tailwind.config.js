/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        surface: "#0b0b0c",
        gold: {
          DEFAULT: "#F5B400",
          soft: "#FFD866",
          dim: "#8A6300",
        },
      },
      fontFamily: {
        display: ["'Bricolage Grotesque'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "gold-radial": "radial-gradient(circle at center, rgba(245,180,0,0.25) 0%, rgba(245,180,0,0) 70%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.45)",
        gold: "0 0 40px rgba(245,180,0,0.25)",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out infinite 2s",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
      },
    },
  },
  plugins: [],
};
