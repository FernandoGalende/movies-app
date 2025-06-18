import { css } from "../../../../../styled-system/css";

export const styles = {
  root: css({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  }),
  header: css({
    padding: "{spacing.md}",
    backgroundColor: "background",
  }),
  main: css({
    flex: 1,
    padding: "{spacing.md}",
    backgroundColor: "background",
  }),
};
