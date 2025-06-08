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
      fontSize: "16px",
      lineHeight: "24px",
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
          secondary: { value: "#6c757d" },
          error: { value: "#dc3545" },
          background: { value: "#f8f9fa" },
          text: { value: "#212529" },
          border: { value: "#dee2e6" },
          gradients: {
            primary: {
              value:
                "-webkit-linear-gradient(135deg, #2563eb 0%,rgb(10, 0, 1) 100%)",
            },
          },
        },
        spacing: {
          xs: { value: "0.25rem" },
          sm: { value: "0.5rem" },
          md: { value: "1rem" },
          lg: { value: "1.5rem" },
          xl: { value: "2rem" },
        },
        radii: {
          sm: { value: "0.25rem" },
          md: { value: "0.5rem" },
          lg: { value: "1rem" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
