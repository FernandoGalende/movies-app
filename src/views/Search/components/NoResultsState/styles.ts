import { css } from "../../../../../styled-system/css";

export const styles = {
  statusMessage: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "{spacing.xl}",
    textAlign: "center",
    color: "secondary",
    gap: "{spacing.sm}",
    minHeight: "200px",

    "& > span:first-child": {
      fontSize: "2rem",
      marginBottom: "{spacing.sm}",
    },

    "& > span:nth-child(2)": {
      textStyle: "body",
      fontWeight: "500",
    },
  }),
};
