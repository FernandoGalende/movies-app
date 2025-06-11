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
  loading: boolean;
  children?: React.ReactNode;
}

export function SearchResults({
  movies,
  count,
  page,
  totalPages,
  query,
  loading,
  children,
}: SearchResultsProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [page]);

  // Loading state with proper ARIA announcements
  if (loading) {
    return (
      <div
        role="status"
        aria-live="polite"
        aria-label="Loading search results"
        className={styles.statusMessage}>
        <span aria-hidden="true">🔍</span>
        <span>Searching for movies...</span>
        <span className="sr-only">Please wait while we search for movies.</span>
      </div>
    );
  }

  // Prompt state when no query or query too short
  if (query === "" || query.length < 3) {
    return (
      <div role="status" aria-live="polite" className={styles.statusMessage}>
        <span aria-hidden="true">🎬</span>
        <span>Start typing to search for movies</span>
        <span className="sr-only">
          Enter at least 3 characters to begin searching for movies.
        </span>
      </div>
    );
  }

  // No results state
  if (movies.length === 0) {
    return (
      <div
        role="status"
        aria-live="assertive"
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

  return (
    <section
      aria-label="Search results"
      className={styles.results}
      role="region">
      <div className={styles.resultsHeader} ref={ref}>
        {/* sr-only class is used to hide the heading from the screen reader */}
        <h2 className="sr-only">Search Results</h2>

        {/* 
          aria-live="polite": Announces changes to screen readers without interrupting current speech
          aria-atomic="true": Reads the entire content when changed, not just the part that changed
        */}
        <p aria-live="polite" aria-atomic="true" role="status">
          Found {count} results for "{query}"
        </p>
        <p aria-live="polite" aria-atomic="true" role="status">
          Page {page} of {totalPages}
        </p>
      </div>
      <List movies={movies} />
      {children}
    </section>
  );
}
