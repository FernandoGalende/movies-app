import { defineConfig, defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
  heading1: {
    description: "The heading 1 text style - used in h1 tags",
    value: {
      fontFamily: "Inter",
      fontWeight: "700",
      fontSize: "48px",
      lineHeight: "56px",
      letterSpacing: "0",
      textDecoration: "None",
      textTransform: "None",
    },
  },
  body: {
    description: "The body text style - used in p tags",
    value: {
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: "1rem",
      lineHeight: "1.5rem",
      letterSpacing: "0",
      textDecoration: "None",
      textTransform: "None",
    },
  },
  bodyBold: {
    description: "The body text style - used in p tags",
    value: {
      fontFamily: "Inter",
      fontWeight: "600",
      fontSize: "1rem",
      lineHeight: "1.5rem",
      letterSpacing: "0",
      textDecoration: "None",
      textTransform: "None",
    },
  },
  supporting: {
    description: "The supporting text style - used in p tags",
    value: {
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0",
      textDecoration: "None",
      textTransform: "None",
    },
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./views/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Global CSS
  globalCss: {
    ".sr-only": {
      position: "absolute",
      width: "1px",
      height: "1px",
      padding: "0",
      margin: "-1px",
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      border: "0",
    },
    "@keyframes spin": {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    },
  },

  // Useful for theme customization
  theme: {
    extend: {
      textStyles,
      tokens: {
        fonts: {
          body: {
            value:
              "'Inter Variable', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
          },
          heading: {
            value:
              "'Inter Variable', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
          },
        },
        colors: {
          primary: { value: "#2563eb" },
          primaryHover: { value: "#1d4ed8" },
          secondary: { value: "#6c757d" },
          error: { value: "#dc3545" },
          background: { value: "#f8f9fa" },
          backgroundError: { value: "#f8d7da" },
          text: { value: "#212529" },
          border: { value: "#dee2e6" },
          white: { value: "#ffffff" },
          gradients: {
            primary: {
              value:
                "-webkit-linear-gradient(135deg, #2563eb 0%,rgb(10, 0, 1) 100%)",
            },
          },
        },
        spacing: {
          xxs: { value: "0.125rem" }, // 2px
          xs: { value: "0.25rem" }, // 4px
          sm: { value: "0.5rem" }, // 8px
          md: { value: "1rem" }, // 16px
          lg: { value: "1.5rem" }, // 24px
          xl: { value: "2rem" }, // 32px
        },
        sizes: {
          sm: { value: "1rem" }, // 16px
          md: { value: "2rem" }, // 32px
          lg: { value: "3rem" }, // 48px
          xl: { value: "4rem" }, // 64px
        },
        radii: {
          sm: { value: "0.25rem" }, // 4px
          md: { value: "0.5rem" }, // 8px
          lg: { value: "1rem" }, // 16px
        },
        borderWidths: {
          sm: { value: "0.125rem" }, // 2px
          md: { value: "0.25rem" }, // 4px
          lg: { value: "0.5rem" }, // 8px
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
