import { visuallyHidden } from "@styled/patterns";
import { styles } from "./styles";
import { List } from "../List";
import type { Movie } from "@/types";

interface SearchResultsProps {
  movies: Movie[];
}

export function SearchResults({ movies }: SearchResultsProps) {
  if (movies.length === 0) return null;

  return (
    <section aria-label="Search results" className={styles.results}>
      <h2 className={visuallyHidden()}>Search Results</h2>
      <List movies={movies} />
    </section>
  );
}
