import "./index.css";
import { ErrorBoundary } from "./views";
import { styles } from "./styles";
import { SearchProvider } from "@/context";
import { AppRouter } from "./router";

export function App() {
  return (
    <div className={styles.root}>
      <ErrorBoundary>
        <SearchProvider>
          <AppRouter />
        </SearchProvider>
      </ErrorBoundary>
    </div>
  );
}
