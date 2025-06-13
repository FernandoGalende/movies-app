import { Button } from "@/components";

import {
  MovieContent,
  LoadingState,
  ErrorState,
  DetailContainer,
} from "./components";
import { useMovieDetail } from "./hooks/useMovieDetail";

export function Detail() {
  const { movie, isLoading, error, handleBack } = useMovieDetail();

  const navigation = (
    <Button
      onClick={handleBack}
      aria-label="Return to movie search"
      data-testid="back-to-search">
      ← Back to search
    </Button>
  );

  const content = (
    <>
      {isLoading && <LoadingState />}
      {error && <ErrorState message={error} />}
      {movie && <MovieContent movie={movie} />}
    </>
  );

  return <DetailContainer navigation={navigation} content={content} />;
}
