/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ["Marianne", "Arial", "sans-serif"],
      serif: ["Spectral", "Georgia", "serif"],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Système de Design de l'État colors
        "fr-blue": {
          DEFAULT: "#000091", // Blue France
          hover: "#1212ff",
          active: "#2323ff",
          light: "#e3e3fd",
        },
        "fr-red": {
          DEFAULT: "#e1000f", // Marianne Red
          hover: "#ff2a2a",
          active: "#ff5555",
          light: "#ffe9e9",
        },
        "fr-info": {
          DEFAULT: "#0063cb", // Info blue
          hover: "#3b82f6",
          active: "#60a5fa",
          light: "#e8edff",
        },
        "fr-success": {
          DEFAULT: "#18753c", // Success green
          hover: "#22c55e",
          active: "#4ade80",
          light: "#e5f7ed",
        },
        "fr-warning": {
          DEFAULT: "#b34000", // Warning orange
          hover: "#f59e0b",
          active: "#fbbf24",
          light: "#fff4e5",
        },
        "fr-error": {
          DEFAULT: "#ce0500", // Error red
          hover: "#ef4444",
          active: "#f87171",
          light: "#fee2e2",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
