import { cva } from "../../../styled-system/css";

export const buttonStyles = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "md",
    border: "none",
    cursor: "pointer",
    fontWeight: "medium",
    transition: "all 0.2s",
    textDecoration: "none",
    fontSize: "md",
    padding: "{spacing.sm} {spacing.md}",
    minHeight: "10",
    backgroundColor: "primary",
    color: "white",
    minWidth: "10",
    _hover: {
      backgroundColor: "blue.600",
    },
    _focus: {
      outline: "2px solid",
      outlineColor: "primary",
      outlineOffset: "2px",
    },
    _disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "primary",
        color: "white",
      },
      secondary: {
        backgroundColor: "secondary",
        color: "white",
      },
    },
    size: {
      sm: {
        padding: "{spacing.sm} {spacing.sm}",
      },
      md: {
        padding: "{spacing.sm} {spacing.md}",
      },
      lg: {
        padding: "{spacing.md} {spacing.lg}",
      },
    },
  },
  defaultVariants: {},
});
