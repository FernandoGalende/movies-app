import { css } from "../../../styled-system/css";

export const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "{spacing.lg}",
    textAlign: "center",
    backgroundColor: "background",
  }),
  title: css({
    textStyle: "heading1",
    color: "error",
    marginBottom: "{spacing.sm}",
  }),
  message: css({
    textStyle: "body",
    color: "text",
    marginBottom: "{spacing.lg}",
    maxWidth: "600px",
  }),
};
