import { css } from "../../../../../styled-system/css";

export const styles = {
  main: css({
    padding: "{spacing.xl}",
    gap: "{spacing.xl}",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    minHeight: "100vh",
  }),
  wrapper: css({
    display: "flex",
    alignSelf: "flex-start",
  }),
};
