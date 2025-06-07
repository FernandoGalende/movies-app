import { css } from "@styled/css";

export const styles = {
  searchContainer: css({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
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
};
