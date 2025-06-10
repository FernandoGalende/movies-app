import type { Movie } from "@/types";
import { styles } from "./styles";
import { useNavigate } from "react-router";
import { MOVIE_DETAIL } from "@/router/paths";

interface MovieItemProps {
  movie: Movie;
}

export function MovieItem({ movie }: MovieItemProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(MOVIE_DETAIL.replace(":id", movie.id.toString()));
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  // Extract year from release_date (YYYY-MM-DD format)
  const year = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : null;

  return (
    <li className={styles.movieItem}>
      <article
        className={styles.movieCard}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`View details for ${movie.title}${year ? ` (${year})` : ""}`}>
        <div className={styles.posterContainer}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className={styles.poster}
          />
          <Rating rating={movie.vote_average} />
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{movie.title}</h3>
          {year && <p className={styles.year}>{year}</p>}
          <p className={styles.overview}>{movie.overview}</p>
        </div>
      </article>
    </li>
  );
}

function Rating({ rating }: { rating: number }) {
  return (
    <div className={styles.rating}>
      <span className={styles.star}>★</span>
      <span className={styles.ratingValue}>{rating.toFixed(1)}</span>
    </div>
  );
}
