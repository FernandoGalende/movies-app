import { styles } from "./styles";
import { Input } from "@/components";

interface SearchFormProps {
  query: string;
  onQueryChange: (query: string) => void;
}

const MIN_SEARCH_LENGTH = 3;

export function SearchForm({ query, onQueryChange }: SearchFormProps) {
  return (
    <form role="search" onSubmit={(e) => e.preventDefault()}>
      <div className={styles.searchContainer}>
        <Input
          query={query}
          onChange={(e) => onQueryChange(e.target.value)}
          label="Search movies"
          id="movie-search"
          placeholder="Type to search movies..."
          ariaDescribedby="search-description"
          autoComplete="off"
          type="search"
          hideLabel={true}
        />
        <p id="search-description" className="sr-only">
          Start typing to search. Results will appear after {MIN_SEARCH_LENGTH}{" "}
          characters.
        </p>
      </div>
    </form>
  );
}
