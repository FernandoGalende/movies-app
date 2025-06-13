import { List } from "../List";
import type { Movie } from "@/types";
import { styles } from "./styles";

import { PromptState } from "../PromptState";
import { NoResultsState } from "../NoResultsState";
import { ResultsHeader } from "../ResultsHeader";
import { LoadingState } from "../LoadingState";

interface SearchResultsProps {
  movies: Movie[];
  count: number;
  query: string;
  page: number;
  totalPages: number;
  children?: React.ReactNode;
  loading: boolean;
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
  if (query === "" || query.length < 3) {
    return <PromptState />;
  }

  if (loading) {
    return <LoadingState />;
  }

  if (movies.length === 0) {
    return <NoResultsState query={query} />;
  }

  return (
    <section aria-label="Search results" className={styles.results}>
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
