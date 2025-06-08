import type { Movie } from "@/types";
import fetcher from "./fetcher";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export interface GetMoviesParams {
  query: string;
  page: number;
}

interface GetMoviesResponse {
  page: string;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

// cache for movies to avoid multiple requests
const cacheMovies = new Map<string, GetMoviesResponse>();

export const getMovies = async ({
  query,
  page,
}: GetMoviesParams): Promise<GetMoviesResponse> => {
  const queryParams = new URLSearchParams({
    api_key: API_KEY,
    query,
    page: page.toString(),
    include_adult: "false",
  });
  const cacheKey = `${queryParams.toString()}`;
  const url = `${BASE_URL}/search/movie?${queryParams.toString()}`;

  if (cacheMovies.has(cacheKey)) {
    return cacheMovies.get(cacheKey)!;
  }

  const data = await fetcher(url);
  cacheMovies.set(cacheKey, data);

  return data;
};

// cache for movie details to avoid multiple requests
const cacheMovie = new Map<string, Movie>();

export const getMovie = async (id: string): Promise<Movie> => {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;

  if (cacheMovie.has(id)) {
    return cacheMovie.get(id)!;
  }

  const data = await fetcher(url);
  cacheMovie.set(id, data);

  return data;
};
