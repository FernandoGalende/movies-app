import type { Movie } from "@/types";

import { List } from "../List";
import { PromptState } from "../PromptState";
import { NoResultsState } from "../NoResultsState";
import { ResultsHeader } from "../ResultsHeader";
import { LoadingState } from "../LoadingState";

import { styles } from "./styles";

interface SearchResultsProps {
  movies: Movie[];
  count: number;
  query: string;
  page: number;
  totalPages: number;
  children?: React.ReactNode;
  loading: boolean;
  debouncingQuery: boolean;
}

export function SearchResults({
  movies,
  count,
  page,
  totalPages,
  query,
  loading,
  debouncingQuery,
  children,
}: SearchResultsProps) {
  if (query === "" && !loading && !debouncingQuery) {
    return <PromptState />;
  }

  if (loading) {
    return <LoadingState />;
  }

  if (movies.length === 0 && !debouncingQuery) {
    return <NoResultsState query={query} />;
  }

  return (
    <section data-testid="search-results" className={styles.results}>
      <ResultsHeader
        count={count}
        query={query}
        page={page}
        totalPages={totalPages}
      />
      <List movies={movies} />
      {children}
    </section>
  );
}
