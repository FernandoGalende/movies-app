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
    minHeight: "10",
    backgroundColor: "primary",
    color: "white",
    minWidth: "10",
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
      color: "white",
    }),
    secondary: css({
      backgroundColor: "secondary",
      color: "white",
    }),
    error: css({
      backgroundColor: "error",
      color: "white",
    }),
    sm: css({
      padding: "{spacing.sm} {spacing.sm}",
    }),
    md: css({
      padding: "{spacing.sm} {spacing.md}",
    }),
    lg: css({
      padding: "{spacing.md} {spacing.lg}",
    }),
  },
};
