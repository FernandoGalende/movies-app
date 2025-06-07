import { css } from "@styled/css";

export const styles = {
  headerContent: css({
    width: "100%",
    maxWidth: "searchContainer",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),

  title: css({
    fontSize: "2rem",
    marginBottom: "2rem",
    color: "text",
    textAlign: "center",
    width: "100%",
  }),

  status: css({
    padding: "0.5rem",
    color: "text",
    fontSize: "0.875rem",
  }),
};
