import { styles } from "./styles";
import { Input } from "@/components";

interface SearchFormProps {
  query: string;
  onQueryChange: (query: string) => void;
}

export function SearchForm({ query, onQueryChange }: SearchFormProps) {
  return (
    <form role="search" onSubmit={(e) => e.preventDefault()}>
      <div className={styles.searchContainer}>
        <div className={styles.searchInputWrapper}>
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
        </div>
        <p id="search-description" className="sr-only">
          Start typing to search.
        </p>
      </div>
    </form>
  );
}
