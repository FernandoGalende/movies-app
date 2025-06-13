import { styles } from "./styles";

export function PromptState() {
  return (
    <div data-testid="prompt-state" className={styles.statusMessage}>
      <span aria-hidden="true">🎬</span>
      <span>Start typing to search for movies</span>
      <span className="sr-only">
        Enter at least 3 characters to begin searching for movies.
      </span>
    </div>
  );
}
