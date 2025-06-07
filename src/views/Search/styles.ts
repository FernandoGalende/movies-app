import { css } from "@styled/css";

export const styles = {
  root: css({
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center",
  }),
  header: css({
    width: "100%",
    borderBottom: "0.0625rem solid token(colors.border)",
    backgroundColor: "white",
    padding: "2rem 1rem",
    flexShrink: 0,
  }),
  main: css({
    flex: 1,
    overflow: "hidden",
    padding: "1rem",
    backgroundColor: "background",
    width: "100%",
  }),
};
