import { css } from "../../../styled-system/css";

export const styles = {
  wrapper: css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "{spacing.md}",
  }),
  paginationContainer: css({
    display: "flex",
    alignItems: "center",
    gap: "{spacing.sm}",
  }),
  pageNumbers: css({
    display: "flex",
    alignItems: "center",
    gap: "{spacing.xs}",
  }),
};
