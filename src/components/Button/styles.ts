import { css } from "../../../styled-system/css";

export const buttonStyles = {
  base: css({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "md",
    border: "none",
    cursor: "pointer",
    fontWeight: "medium",
    transition: "all 0.2s",
    textDecoration: "none",
    textStyle: "body",
    padding: "{spacing.sm} {spacing.md}",
    minHeight: "{spacing.md}",
    color: "contrastText",
    minWidth: "{spacing.md}",
    _hover: {
      backgroundColor: "primaryHover",
    },
    _disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  }),
  variants: {
    primary: css({
      backgroundColor: "primary",
      color: "contrastText",
    }),
    ghost: css({
      borderColor: "primary",
      border: "none",
      backgroundColor: "transparent",
      color: "text",
      _hover: {
        backgroundColor: "ghostHover",
      },
    }),
    error: css({
      backgroundColor: "error",
      color: "contrastText",
    }),
    md: css({
      padding: "{spacing.sm} {spacing.lg}",
    }),
    lg: css({
      padding: "{spacing.lg} {spacing.xl}",
    }),
  },
};
