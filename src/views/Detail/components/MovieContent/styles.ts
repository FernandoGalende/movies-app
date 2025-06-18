import { css } from "../../../../../styled-system/css";

export const styles = {
  root: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "{spacing.lg}",
    width: "100%",
  }),
  imageContainer: css({
    width: "300px",
    height: "auto",
    maxWidth: "100%",
    margin: "0 auto",
    "& img": {
      width: "100%",
      height: "auto",
      borderRadius: "{radii.md}",
      boxShadow: "0 {borderWidths.sm} {spacing.md} rgba(0, 0, 0, 0.1)",
    },
  }),
  content: css({
    marginTop: "{spacing.xl}",
    padding: "{spacing.md}",
    display: "flex",
    flexDirection: "column",
    gap: "{spacing.xl}",
    width: "100%",
    "& h1": {
      textStyle: "heading1",
      marginBottom: "{spacing.md}",
    },
  }),
  overview: css({
    textStyle: "body",
    marginBottom: "{spacing.md}",
  }),
  metadata: css({
    display: "grid",
    gap: "{spacing.md}",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    "& div": {
      padding: "{spacing.md}",
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      borderRadius: "{radii.md}",
    },
    "& dt": {
      textStyle: "bodyBold",
      marginBottom: "{spacing.sm}",
    },
  }),
  votes: css({
    textStyle: "body",
    color: "text",
    marginLeft: "{spacing.sm}",
  }),
};
