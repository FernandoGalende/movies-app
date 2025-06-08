import { styles } from "./styles";
import { Input } from "@/components";

interface SearchFormProps {
  query: string;
  onQueryChange: (query: string) => void;
  onClear: () => void;
  loading: boolean;
}

const MIN_SEARCH_LENGTH = 3;

export function SearchForm({
  query,
  onQueryChange,
  onClear,
  loading,
}: SearchFormProps) {
  const shouldShowClearButton = query.length > 2 && !loading;

  return (
    <form role="search" onSubmit={(e) => e.preventDefault()}>
      <div className={styles.searchContainer}>
        <Input
          query={query}
          onChange={(e) => onQueryChange(e.target.value)}
          label="Search movies"
          id="movie-search"
          placeholder="Type to search movies..."
          ariaLabel="Search movies"
          ariaDescribedby="search-description"
          autoComplete="off"
          type="search"
        />
        {shouldShowClearButton && (
          <button
            onClick={onClear}
            type="button"
            aria-label="Clear search"
            className={styles.button}>
            Clear
          </button>
        )}
        <p id="search-description">
          Start typing to search. Results will appear after {MIN_SEARCH_LENGTH}{" "}
          characters.
        </p>
      </div>
    </form>
  );
}
