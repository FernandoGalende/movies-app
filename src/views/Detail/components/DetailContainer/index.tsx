import type { ReactNode } from "react";

interface DetailContainerProps {
  navigation: ReactNode;
  content: ReactNode;
}

export function DetailContainer({ navigation, content }: DetailContainerProps) {
  return (
    <main>
      {navigation}
      {content}
    </main>
  );
}
