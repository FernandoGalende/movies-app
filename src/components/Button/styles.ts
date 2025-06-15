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
    padding: "{spacing.sm} {spacing.lg}",
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
      color: "primary",
      _hover: {
        color: "contrastText",
      },
    }),
    error: css({
      backgroundColor: "error",
      color: "contrastText",
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
