import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import type { Movie } from "@/types";
import { getMovie } from "@/api/movies";
import {
  BackButton,
  MovieContent,
  LoadingState,
  ErrorState,
} from "./components";

interface MovieDetailState {
  movie: Movie | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: MovieDetailState = {
  movie: null,
  isLoading: true,
  error: null,
};

export function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState<MovieDetailState>(initialState);
  const { movie, isLoading, error } = state;

  useEffect(() => {
    if (!id) return;

    const fetchMovieDetails = async () => {
      try {
        setState((prev) => ({ ...prev, isLoading: true, error: null }));
        const movieData = await getMovie(id);
        setState((prev) => ({ ...prev, movie: movieData, isLoading: false }));
      } catch (error) {
        console.error(error);
        setState((prev) => ({
          ...prev,
          error: "Failed to load movie details",
          isLoading: false,
        }));
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <main>
      <BackButton onBack={() => navigate("/")} />
      {isLoading && <LoadingState />}
      {error && <ErrorState message={error} />}
      {movie && <MovieContent movie={movie} />}
    </main>
  );
}
