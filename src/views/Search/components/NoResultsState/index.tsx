import { styles } from "./styles";

interface NoResultsStateProps {
  query: string;
}

export function NoResultsState({ query }: NoResultsStateProps) {
  return (
    <div
      role="status"
      aria-label={`No results found for ${query}`}
      className={styles.statusMessage}>
      <span aria-hidden="true">😔</span>
      <span>No movies found for "{query}"</span>
      <span className="sr-only">
        Try searching with different keywords or check your spelling.
      </span>
    </div>
  );
}
