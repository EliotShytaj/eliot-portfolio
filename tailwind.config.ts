import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./providers/**/*.{ts,tsx}", "./config/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        bg: {
          DEFAULT: "hsl(0 0% 100%)",
          dark: "hsl(222 47% 7%)"
        },
        fg: {
          DEFAULT: "hsl(222 47% 11%)",
          dark: "hsl(210 40% 98%)"
        },
        accent: {
          DEFAULT: "hsl(221 83% 53%)",
          dark: "hsl(217 91% 60%)"
        }
      },
      boxShadow: {
        soft: "0 6px 24px -12px rgba(0,0,0,0.25)",
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      keyframes: {
        fadeUp: { '0%': { opacity: "0", transform: 'translateY(8px)' }, '100%': { opacity: "1", transform: 'translateY(0)' } },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.4s ease-out both',
        spotlight: "spotlight 2s ease .75s 1 forwards",
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
    plugin(function({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus-visible'])
    })
  ]
} satisfies Config
