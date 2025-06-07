import {
  BackButton,
  MovieContent,
  LoadingState,
  ErrorState,
  DetailContainer,
} from "./components";
import { useMovieDetail } from "./hooks/useMovieDetail";

export function Detail() {
  const { movie, isLoading, error, handleBack } = useMovieDetail();

  const navigation = <BackButton onBack={handleBack} />;

  const content = (
    <>
      {isLoading && <LoadingState />}
      {error && <ErrorState message={error} />}
      {movie && <MovieContent movie={movie} />}
    </>
  );

  return <DetailContainer navigation={navigation} content={content} />;
}
