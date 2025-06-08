import { css } from "../../../../../styled-system/css";

export const styles = {
  headerContent: css({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "xs",
    padding: "md",
  }),
  title: css({
    textStyle: "heading1",
    background: "gradients.primary",
    backgroundClip: "text",
    color: "transparent",
  }),
  description: css({
    textStyle: "body",
    color: "secondary",
  }),
};
