import { css } from "../../../../../styled-system/css";

export const styles = {
  root: css({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  }),
  header: css({
    padding: "2rem",
    backgroundColor: "white",
    borderBottom: "1px solid",
    borderColor: "border",
  }),
  main: css({
    flex: 1,
    padding: "2rem",
  }),
};
