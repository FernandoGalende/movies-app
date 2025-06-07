import type { Movie } from "@/types";
import { styles } from "./styles";

interface MovieItemProps {
  movie: Movie;
}

export function MovieItem({ movie }: MovieItemProps) {
  return (
    <li key={movie.id} className={styles.movieItem}>
      <article className={styles.movieArticle}>
        <h3 className={styles.movieTitle}>{movie.title}</h3>
      </article>
    </li>
  );
}
