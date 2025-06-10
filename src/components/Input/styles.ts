import { css } from "../../../styled-system/css";

export const styles = {
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
    "&::-webkit-search-cancel-button": {
      appearance: "auto",
      cursor: "pointer",
      minWidth: "{sizes.sm}",
      minHeight: "{sizes.sm}",
      padding: "{spacing.sm}",
    },
  }),
};
