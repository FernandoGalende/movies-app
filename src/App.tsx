import { Search, Detail } from "@/views";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { ErrorBoundary } from "./views";
import { styles } from "./styles";
import { SearchProvider } from "@/context";

export function App() {
  return (
    <div className={styles.root}>
      <ErrorBoundary>
        <SearchProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Search />} />
              <Route path="/detail/:id" element={<Detail />} />
            </Routes>
          </BrowserRouter>
        </SearchProvider>
      </ErrorBoundary>
    </div>
  );
}
