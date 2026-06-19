/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
          DEFAULT: "#0d9488",
        },
        cta: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#1e40af",
          700: "#1e3a8a",
          800: "#1e3a8a",
          900: "#1e3a8a",
          DEFAULT: "#1e40af",
        },
        gold: {
          50: "#fefdf3",
          100: "#fdf9d7",
          200: "#fbf1ae",
          300: "#f7e47b",
          400: "#f2d24a",
          500: "#d4a843",
          600: "#c49132",
          700: "#a06c28",
          800: "#845626",
          900: "#6e4723",
          DEFAULT: "#d4a843",
        },
        dark: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
          DEFAULT: "#0f172a",
        },
        cream: {
          50: "#fefdfb",
          100: "#f8fafc",
          200: "#f1f5f9",
          300: "#e2e8f0",
          DEFAULT: "#f8fafc",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        accent: ["var(--font-cormorant)", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-down": "fadeDown 0.6s ease-out forwards",
        "slide-left": "slideLeft 0.8s ease-out forwards",
        "slide-right": "slideRight 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        shimmer: "shimmer 2s linear infinite",
        pulse_glow: "pulseGlow 2s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        blob: "blob 7s infinite",
        gradient: "gradient 8s ease infinite",
        marquee: "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(13, 148, 136, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(13, 148, 136, 0.6)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gold-gradient":
          "linear-gradient(135deg, #d4a843 0%, #f7e47b 50%, #d4a843 100%)",
        "primary-gradient":
          "linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #0d9488 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #1e40af 100%)",
        "dark-gradient":
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
      },
      boxShadow: {
        premium: "0 25px 60px -12px rgba(0, 0, 0, 0.12)",
        "premium-lg": "0 35px 80px -15px rgba(0, 0, 0, 0.15)",
        gold: "0 10px 40px -10px rgba(212, 168, 67, 0.3)",
        primary: "0 10px 40px -10px rgba(13, 148, 136, 0.3)",
        cta: "0 10px 40px -10px rgba(30, 64, 175, 0.3)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

module.exports = config;