import { css } from "../styled-system/css";

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

  searchContainer: css({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
  }),

  label: css({
    fontWeight: "500",
    width: "100%",
    textAlign: "left",
  }),

  input: css({
    padding: "0.5rem 2.75rem 0.5rem 0.75rem",
    fontSize: "1rem",
    border: "0.125rem solid token(colors.border)",
    borderRadius: "0.25rem",
    width: "100%",
    minHeight: "2.75rem",
    _focus: {
      outline: "none",
      borderColor: "primary",
      boxShadow: "0 0 0 0.125rem rgba(220, 53, 69, 0.5)",
    },
  }),

  button: css({
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    backgroundColor: "primary",
    color: "white",
    border: "none",
    borderRadius: "0.25rem",
    cursor: "pointer",
    minHeight: "2.75rem",
    minWidth: "2.75rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    _hover: {
      backgroundColor: "primaryHover",
    },
    _focus: {
      outline: "none",
      boxShadow: "0 0 0 0.125rem rgba(220, 53, 69, 0.5)",
    },
  }),

  status: css({
    padding: "0.5rem",
    color: "text",
    fontSize: "0.875rem",
  }),

  main: css({
    flex: 1,
    overflow: "hidden",
    padding: "1rem",
    backgroundColor: "background",
  }),

  results: css({
    height: "100%",
    width: "100%",
    maxWidth: "searchContainer",
    margin: "0 auto",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  }),

  moviesList: css({
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "repeat(auto-fill, minmax(15.625rem, 1fr))",
    overflow: "auto",
    flex: 1,
  }),

  movieItem: css({
    height: "6.25rem",
  }),

  movieArticle: css({
    padding: "1rem",
    border: "0.0625rem solid token(colors.border)",
    borderRadius: "0.25rem",
    backgroundColor: "white",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }),

  movieTitle: css({
    margin: 0,
    color: "text",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    lineClamp: "2",
    WebkitLineClamp: "2",
  }),
};
