import { useState } from "react";
import { useDebounce } from "react-use";

import { styles } from "./styles";

import { getMovies } from "@/api/movies";
import type { Movie } from "@/types";
import { SearchHeader, SearchForm, SearchResults } from "./components";

const MIN_SEARCH_LENGTH = 3;

export function Search() {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const isEmptySearch: boolean =
    query.length > MIN_SEARCH_LENGTH && !loading && movies.length === 0;

  useDebounce(
    () => {
      if (query.length < MIN_SEARCH_LENGTH) return;

      setLoading(true);
      getMovies({ query, page: "1" })
        .then((data) => {
          setMovies(data.results);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    500,
    [query]
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
        <SearchResults movies={movies} />
      </main>
    </div>
  );
}
