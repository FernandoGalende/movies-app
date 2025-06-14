import { Search, Detail } from "./views";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { ErrorBoundary } from "./views";

export function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
