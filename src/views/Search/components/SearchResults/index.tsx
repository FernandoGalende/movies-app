import { useLayoutEffect, useRef } from "react";
import { styles } from "./styles";
import { List } from "../List";
import type { Movie } from "@/types";

interface SearchResultsProps {
  movies: Movie[];
  count: number;
  query: string;
  page: number;
  totalPages: number;
}

export function SearchResults({
  movies,
  count,
  page,
  totalPages,
  query,
}: SearchResultsProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [page]);

  if (movies.length === 0) return <div>No results found</div>;

  return (
    <section aria-label="Search results" className={styles.results}>
      <div className={styles.resultsHeader} ref={ref}>
        {/* 
          aria-live="polite": Announces changes to screen readers without interrupting current speech
          aria-atomic="true": Reads the entire content when changed, not just the part that changed
        */}
        <p aria-live="polite" aria-atomic="true">
          Found {count} results for "{query}"
        </p>
        <p aria-live="polite" aria-atomic="true">
          Page {page} of {totalPages}
        </p>
      </div>
      <List movies={movies} />
    </section>
  );
}
