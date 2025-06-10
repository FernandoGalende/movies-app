import { css } from "../../../../../styled-system/css";

export const styles = {
  moviesList: css({
    listStyle: "none",
    padding: "{spacing.md} {spacing.md}",
    margin: 0,
    display: "grid",
    gap: "{spacing.md}",
    gridTemplateColumns: "repeat(auto-fill, minmax(15.625rem, 1fr))",
    overflow: "auto",
    flex: 1,
  }),
};
