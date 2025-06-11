import { css } from "../../../../../styled-system/css";

export const styles = {
  imageContainer: css({
    width: "100%",
    maxWidth: "500px",
    margin: "0 auto",
    "& img": {
      width: "100%",
      height: "auto",
      borderRadius: "{radii.md}",
      boxShadow: "0 {borderWidths.sm} {spacing.md} rgba(0, 0, 0, 0.1)",
    },
  }),
  content: css({
    padding: "{spacing.md}",
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
