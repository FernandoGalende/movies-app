import { styles } from "./styles";

export function PromptState() {
  return (
    <div data-testid="prompt-state" className={styles.statusMessage}>
      <span aria-hidden="true">🎬</span>
      <span>Start typing to search for movies</span>
      <span className="sr-only">Enter a movie title to start your search</span>
    </div>
  );
}
