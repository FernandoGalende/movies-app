import { styles } from "./styles";
import type { ReactNode } from "react";

interface SearchContainerProps {
  header: ReactNode;
  main: ReactNode;
}

export function SearchContainer({ header, main }: SearchContainerProps) {
  return (
    <div className={styles.root}>
      <header className={styles.header} role="banner">
        {header}
      </header>
      <main
        className={styles.main}
        id="main-content"
        role="main"
        aria-label="Movie search and results">
        {main}
      </main>
    </div>
  );
}
