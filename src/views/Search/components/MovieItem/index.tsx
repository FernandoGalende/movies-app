import type { Movie } from "@/types";
import { styles } from "./styles";
import { useNavigate } from "react-router";

interface MovieItemProps {
  movie: Movie;
}

export function MovieItem({ movie }: MovieItemProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${movie.id}`);
  };

  return (
    <li key={movie.id} className={styles.movieItem}>
      <article className={styles.movieArticle}>
        <h3 className={styles.movieTitle}>{movie.title}</h3>
        <button onClick={handleClick}>View details</button>
      </article>
    </li>
  );
}
