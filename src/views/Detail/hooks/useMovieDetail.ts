import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import type { Movie } from "@/types";
import { getMovie } from "@/api/movies";

interface UseMovieDetailReturn {
  movie: Movie | null;
  isLoading: boolean;
  error: string | null;
  handleBack: () => void;
}

export function useMovieDetail(): UseMovieDetailReturn {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState<{
    movie: Movie | null;
    isLoading: boolean;
    error: string | null;
  }>({
    movie: null,
    isLoading: true,
    error: null,
  });

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

  const handleBack = () => navigate("/");

  return {
    ...state,
    handleBack,
  };
}
