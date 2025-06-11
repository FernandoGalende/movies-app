import { css } from "../../../../../styled-system/css";

export const styles = {
  results: css({
    height: "100%",
    width: "100%",
    maxWidth: "searchContainer",
    margin: "0 auto",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  }),
  resultsHeader: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "{spacing.md}",
    textStyle: "supporting",
    color: "secondary",
  }),
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
      fontWeight: "500",
    },
  }),
};
