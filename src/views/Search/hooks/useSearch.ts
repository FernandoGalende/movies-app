import { useState } from "react";
import { useDebounce } from "react-use";
import { getMovies } from "@/api/movies";
import type { Movie } from "@/types";

export const MIN_SEARCH_LENGTH = 3;

interface UseSearchReturn {
  query: string;
  setQuery: (query: string) => void;
  movies: Movie[];
  loading: boolean;
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  handleClear: () => void;
  isEmptySearch: boolean;
  showPagination: boolean;
}

export function useSearch(): UseSearchReturn {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const isEmptySearch =
    query.length > MIN_SEARCH_LENGTH && !loading && movies.length === 0;
  const showPagination = totalPages > 1 && !loading && movies.length > 0;

  useDebounce(
    () => {
      if (query.length < MIN_SEARCH_LENGTH) {
        setMovies([]);
        setTotalPages(1);
        return;
      }

      setLoading(true);
      getMovies({ query, page })
        .then((data) => {
          setMovies(data.results);
          setTotalPages(data.total_pages);
        })
        .catch((error) => {
          console.error(error);
          setMovies([]);
          setTotalPages(1);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    500,
    [query, page]
  );

  const handleClear = () => {
    setQuery("");
    setMovies([]);
    setPage(1);
    setTotalPages(1);
  };

  return {
    query,
    setQuery,
    movies,
    loading,
    page,
    setPage,
    totalPages,
    handleClear,
    isEmptySearch,
    showPagination,
  };
}
