import { css } from "@styled/css";

export const styles = {
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
