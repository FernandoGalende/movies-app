import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        sizes: {
          container: { value: "75rem" },
          searchContainer: { value: "50rem" },
        },
        colors: {
          primary: { value: "#dc3545" },
          primaryHover: { value: "#c82333" },
          border: { value: "#ddd" },
          text: { value: "#212529" },
          background: { value: "#f8f9fa" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  patterns: {
    extend: {
      container: {
        transform(props: { maxWidth?: string }) {
          return {
            maxWidth: props.maxWidth || "container",
            width: "100%",
            marginX: "auto",
            paddingX: "2rem",
          };
        },
      },

      visuallyHidden: {
        transform() {
          return {
            position: "absolute",
            width: "0.0625rem",
            height: "0.0625rem",
            padding: "0",
            margin: "-0.0625rem",
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            border: "0",
          };
        },
      },
    },
  },
});
