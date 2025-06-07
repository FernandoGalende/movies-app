import { css } from "@styled/css";

export const styles = {
  moviesList: css({
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "repeat(auto-fill, minmax(15.625rem, 1fr))",
    overflow: "auto",
    flex: 1,
  }),
};
