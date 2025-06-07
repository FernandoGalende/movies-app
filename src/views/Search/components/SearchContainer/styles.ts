import { css } from "@styled/css";

export const styles = {
  root: css({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "background",
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
    backgroundColor: "background",
  }),
};
