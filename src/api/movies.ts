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
  const url = `${BASE_URL}/search/movie?${queryParams.toString()}`;

  return fetcher(url);
};

export const getMovie = async (id: string): Promise<Movie> => {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
  return fetcher(url);
};
