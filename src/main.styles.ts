import { css } from "../styled-system/css";
// Add CSS reset
export const resetStyles = css({
  "& *": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  "& html, & body": {
    height: "100%",
    width: "100%",
  },
  "& body": {
    fontFamily: "system-ui, sans-serif",
    fontSmoothing: "antialiased",
    textRendering: "optimizeLegibility",
  },
});
