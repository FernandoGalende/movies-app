import { useState } from "react";
import { useDebounce } from "react-use";

import { styles } from "./styles";

import { getMovies } from "@/api/movies";
import type { Movie } from "@/types";
import { SearchHeader, SearchForm, SearchResults } from "./components";
import { Paginator } from "@/components";

const MIN_SEARCH_LENGTH = 3;

export function Search() {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const isEmptySearch: boolean =
    query.length > MIN_SEARCH_LENGTH && !loading && movies.length === 0;
  const showPagination = totalPages > 1 && !loading && movies.length > 0;

  useDebounce(
    () => {
      if (query.length < MIN_SEARCH_LENGTH) return;

      setLoading(true);
      getMovies({ query, page })
        .then((data) => {
          setMovies(data.results);
          setTotalPages(data.total_pages);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    500,
    [query, page]
  );

  const handleClear = (): void => {
    setQuery("");
    setMovies([]);
  };

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <SearchHeader loading={loading} isEmptySearch={isEmptySearch} />
        <SearchForm
          query={query}
          onQueryChange={setQuery}
          onClear={handleClear}
          loading={loading}
        />
      </header>

      <main className={styles.main}>
        {showPagination && (
          <Paginator page={page} totalPages={totalPages} setPage={setPage} />
        )}
        <SearchResults movies={movies} />
      </main>
    </div>
  );
}
