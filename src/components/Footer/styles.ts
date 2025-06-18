import { css } from "../../../styled-system/css";

export const styles = {
  footer: css({
    backgroundColor: "backgroundSecondary",
    padding: "{spacing.md}",
    textAlign: "center",
    color: "text",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "{spacing.sm}",
    borderRadius: "{radii.md} {radii.md} 0 0",
  }),
  link: css({
    color: "text",
    textDecoration: "underline",
  }),
  title: css({
    textStyle: "bodyBold",
    background: "gradients.primary",
    backgroundClip: "text",
    color: "transparent",
  }),
  text: css({
    textStyle: "body",
    color: "text",
  }),
};
