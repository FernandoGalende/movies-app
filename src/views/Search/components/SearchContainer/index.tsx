import type { ReactNode } from "react";
import { Footer } from "@/components";
import { styles } from "./styles";

interface SearchContainerProps {
  header: ReactNode;
  main: ReactNode;
}

export function SearchContainer({ header, main }: SearchContainerProps) {
  return (
    <div className={styles.root}>
      <header className={styles.header}>{header}</header>
      <main
        className={styles.main}
        id="main-content"
        aria-label="Movie search and results">
        {main}
      </main>
      <Footer />
    </div>
  );
}
