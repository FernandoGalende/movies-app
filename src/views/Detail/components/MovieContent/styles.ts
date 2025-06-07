import { css } from "@styled/css";

export const styles = {
  imageContainer: css({
    width: "100%",
    maxWidth: "500px",
    margin: "0 auto",
    img: {
      width: "100%",
      height: "auto",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
  }),
  content: css({
    padding: "2rem",
    h1: {
      fontSize: "2rem",
      marginBottom: "1rem",
    },
  }),
  overview: css({
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "2rem",
  }),
  metadata: css({
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    div: {
      padding: "1rem",
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      borderRadius: "4px",
    },
    dt: {
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
  }),
  votes: css({
    fontSize: "0.9rem",
    color: "gray",
    marginLeft: "0.5rem",
  }),
};
