import { css } from "../../../../../styled-system/css";

export const styles = {
  searchContainer: css({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "{spacing.sm}",
  }),
  searchInputWrapper: css({
    width: "100%",
    maxWidth: "600px",
  }),
};
