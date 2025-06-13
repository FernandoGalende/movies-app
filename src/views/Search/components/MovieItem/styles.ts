import { css } from "../../../../../styled-system/css";

export const styles = {
  movieItem: css({
    height: "auto",
  }),

  movieCard: css({
    backgroundColor: "white",
    borderRadius: "{radii.lg}",
    overflow: "hidden",
    boxShadow: "0 {borderWidths.sm} {spacing.md} rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    _hover: {
      transform: "scale(1.02)",
      boxShadow: "0 {spacing.md} {spacing.lg} rgba(0, 0, 0, 0.2)",
      zIndex: 10,
    },
    _focus: {
      outline: "{borderWidths.sm} solid",
      outlineColor: "primary",
      outlineOffset: "{borderWidths.sm}",
      transform: "scale(1.02)",
      boxShadow: "0 {spacing.md} {spacing.lg} rgba(0, 0, 0, 0.2)",
      zIndex: 10,
    },
    "&:focus:not(:focus-visible)": {
      outline: "none",
    },
  }),

  posterContainer: css({
    position: "relative",
    width: "100%",
    aspectRatio: "2/3",
    overflow: "hidden",
  }),

  poster: css({
    width: "100%",
    height: "100%",
    objectFit: "cover",
  }),

  rating: css({
    position: "absolute",
    top: "{spacing.sm}",
    right: "{spacing.sm}",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: "{radii.md}",
    padding: "{spacing.xs} {spacing.sm}",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "{spacing.xs}",
  }),

  star: css({
    color: "#FFD700", // only
    textStyle: "supporting",
  }),

  ratingValue: css({
    color: "white",
    textStyle: "bodyBold",
  }),

  content: css({
    padding: "{spacing.md}",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  }),

  title: css({
    margin: "0 0 {spacing.xs} 0",
    textStyle: "body",
    color: "text",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxHeight: "{sizes.md}",
  }),

  year: css({
    margin: "0 0 {spacing.sm} 0",
    textStyle: "supporting",
    color: "secondary",
  }),

  overview: css({
    margin: 0,
    textStyle: "supporting",
    color: "text",
    opacity: 0.7,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxHeight: "{sizes.md}",
    flex: 1,
  }),
};
