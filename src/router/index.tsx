import { BrowserRouter, Routes, Route } from "react-router";

import routes from "./routes";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {routes.map(({ Component, path }) => (
        <Route element={<Component />} path={path} key={path} />
      ))}
    </Routes>
  </BrowserRouter>
);
