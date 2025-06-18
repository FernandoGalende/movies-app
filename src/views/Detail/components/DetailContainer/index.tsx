import type { ReactNode } from "react";

import { styles } from "./styles";

interface DetailContainerProps {
  navigation: ReactNode;
  content: ReactNode;
}

export function DetailContainer({ navigation, content }: DetailContainerProps) {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>{navigation}</div>
      {content}
    </main>
  );
}
