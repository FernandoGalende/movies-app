import type { Movie } from "@/types";
import fetcher from "./fetcher";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export interface GetMoviesParams {
  query: string;
  page: string;
}

interface GetMoviesResponse {
  page: number;
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
    page,
    include_adult: "false",
  });
  const url = `${BASE_URL}/search/movie?${queryParams.toString()}`;

  return fetcher(url);
};
