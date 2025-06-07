import { useState } from "react";
import { useDebounce } from "react-use";
import { visuallyHidden } from "../styled-system/patterns";
import { styles } from "./styles";

import { getMovies } from "@/api/movies";
import type { Movie } from "@/types";

const MIN_SEARCH_LENGTH = 3;

export function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const shouldShowClearButton = query.length > 2 && !loading;
  const isEmptySearch =
    query.length > MIN_SEARCH_LENGTH && !loading && movies.length === 0;

  useDebounce(
    () => {
      if (query.length < MIN_SEARCH_LENGTH) return;

      setLoading(true);
      getMovies({ query: query, page: "1" })
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

  const handleClear = () => {
    setQuery("");
    setMovies([]);
  };

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Movies App</h1>

          <form role="search" onSubmit={(e) => e.preventDefault()}>
            <div className={styles.searchContainer}>
              <label htmlFor="movie-search" className={styles.label}>
                Search movies
                <input
                  id="movie-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type to search movies..."
                  aria-label="Search movies"
                  aria-describedby="search-description"
                  autoComplete="off"
                  className={styles.input}
                />
              </label>
              {shouldShowClearButton && (
                <button
                  onClick={handleClear}
                  type="button"
                  aria-label="Clear search"
                  className={styles.button}>
                  Clear
                </button>
              )}
              <p id="search-description" className={visuallyHidden()}>
                Start typing to search. Results will appear after{" "}
                {MIN_SEARCH_LENGTH} characters.
              </p>
            </div>
          </form>

          <div role="status" aria-live="polite" className={styles.status}>
            {loading && <p>Searching movies...</p>}
            {isEmptySearch && <p>No movies found</p>}
          </div>
        </div>
      </header>

      <main className={styles.main}>
        {movies.length > 0 && (
          <section aria-label="Search results" className={styles.results}>
            <h2 className={visuallyHidden()}>Search Results</h2>
            <ul className={styles.moviesList}>
              {movies.map((movie) => (
                <li key={movie.id} className={styles.movieItem}>
                  <article className={styles.movieArticle}>
                    <h3 className={styles.movieTitle}>{movie.title}</h3>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
}
