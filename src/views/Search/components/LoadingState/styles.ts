import { css } from "../../../../../styled-system/css";

export const styles = {
  overlay: css({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  }),
  content: css({
    backgroundColor: "background",
    padding: "{spacing.xl}",
    borderRadius: "{radii.lg}",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "{spacing.md}",
  }),
  spinner: css({
    width: "50px",
    height: "50px",
    border: "4px solid rgba(0, 0, 0, 0.1)",
    borderLeftColor: "primary",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  }),
  text: css({
    textStyle: "body",
    color: "text",
    fontWeight: "500",
  }),
};
