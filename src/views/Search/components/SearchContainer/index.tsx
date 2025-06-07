import { styles } from "./styles";
import type { ReactNode } from "react";

interface SearchContainerProps {
  header: ReactNode;
  main: ReactNode;
}

export function SearchContainer({ header, main }: SearchContainerProps) {
  return (
    <div className={styles.root}>
      <header className={styles.header}>{header}</header>
      <main className={styles.main}>{main}</main>
    </div>
  );
}
