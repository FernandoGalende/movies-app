import { css } from "../../../../../styled-system/css";

export const styles = {
  navigation: css({
    padding: "1rem",
    position: "sticky",
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(5px)",
    zIndex: 1,
  }),
  backButton: css({
    padding: "0.5rem 1rem",
    backgroundColor: "transparent",
    border: "1px solid currentColor",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
    },
  }),
};
