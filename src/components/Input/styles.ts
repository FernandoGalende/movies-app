import { css } from "../../../styled-system/css";

export const styles = {
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
};
