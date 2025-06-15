import { Search, Detail } from "./views";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { ErrorBoundary } from "./views";
import { styles } from "./styles";

export function App() {
  return (
    <div className={styles.root}>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}
