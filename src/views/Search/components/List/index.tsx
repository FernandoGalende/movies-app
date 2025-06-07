import type { Movie } from "@/types";
import { styles } from "./styles";
import { MovieItem } from "../MovieItem";

interface ListProps {
  movies: Movie[];
}

export function List({ movies }: ListProps) {
  return (
    <ul className={styles.moviesList}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
