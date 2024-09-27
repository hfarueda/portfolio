import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], // Enables dark mode with the 'class' strategy
  content: [
    './src/**/*.{ts,tsx}', // Scans these files for Tailwind CSS classes
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Custom animations for infinite scroll and accordion
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite', // Infinite horizontal scroll
        "accordion-down": "accordion-down 0.2s ease-out", // Accordion down animation
        "accordion-up": "accordion-up 0.2s ease-out", // Accordion up animation
      },
      // Keyframes for custom animations
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      // Custom colors based on HSL values
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
      },
      // Custom border radius values
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // Custom spacing (padding, margin, width, etc.)
      spacing: {
        '72': '18rem', // Adds 18rem to spacing utilities (e.g., mt-72, p-72)
        '84': '21rem',
        '96': '24rem',
        '128': '32rem', // Adds a new large spacing utility
      },
      // Custom fonts
      fontFamily: {
        custom: ['CustomFont', 'sans-serif'], // Define a custom font family
      },
      // Custom breakpoints
      screens: {
        xs: '475px', // Add an extra small breakpoint at 475px
        '3xl': '1600px', // Add a 3xl breakpoint at 1600px
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Plugin for animations
    require('@tailwindcss/typography'), // Adds typography plugin
  ],
} satisfies Config;

export default config;
