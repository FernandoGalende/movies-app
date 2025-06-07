import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App.tsx";
import { resetStyles } from "./main.styles.ts";

// Apply reset styles to root
const root = document.getElementById("root")!;
root.className = resetStyles;

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
