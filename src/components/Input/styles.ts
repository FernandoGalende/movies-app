import { css } from "../../../styled-system/css";

export const styles = {
  inputContainer: css({
    display: "flex",
    flexDirection: "column",
    gap: "{spacing.xs}",
    width: "100%",
  }),

  label: css({
    textStyle: "body",
    width: "100%",
    textAlign: "left",
  }),

  input: css({
    padding: "{spacing.sm} {spacing.md}",
    textStyle: "body ",
    border: "{borderWidths.sm} solid token(colors.border)",
    borderRadius: "md",
    width: "100%",
    minHeight: "{spacing.md}",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",

    "&::-webkit-search-cancel-button": {
      appearance: "auto",
      cursor: "pointer",
      minWidth: "{sizes.sm}",
      minHeight: "{sizes.sm}",
      padding: "{spacing.sm}",
    },
  }),
};
