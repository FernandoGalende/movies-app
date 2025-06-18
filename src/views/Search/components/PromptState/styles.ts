import { css } from "../../../../../styled-system/css";

export const styles = {
  statusMessage: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "{spacing.xl}",
    textAlign: "center",
    color: "secondary",
    gap: "{spacing.sm}",
    minHeight: "200px",

    "& > span:first-child": {
      fontSize: "2rem",
      marginBottom: "{spacing.sm}",
    },

    "& > span:nth-child(2)": {
      textStyle: "body",
    },
  }),
  favMovies: css({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 15.625rem), 1fr))",
    maxWidth: "calc(15.625rem * 4 + 1.5rem * 3)",
    gap: "{spacing.lg}",
    margin: "0 auto",
    justifyContent: "center",
    justifyItems: "center",
    alignItems: "center",
    width: "100%",
  }),
  title: css({
    textStyle: "heading2",
    color: "secondary",
    margin: "0",
    textAlign: "left",
    width: "100%",
    marginBottom: "{spacing.lg}",
  }),
};
