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

  // Better image alt text
  const imageAlt = movie.poster_path
    ? `Movie poster for ${movie.title}${year ? ` released in ${year}` : ""}`
    : `No poster available for ${movie.title}`;

  // Truncate overview for better screen reader experience
  const truncatedOverview =
    movie.overview.length > 150
      ? movie.overview.substring(0, 150) + "..."
      : movie.overview;

  return (
    <li className={styles.movieItem}>
      <article
        className={styles.movieCard}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`View details for ${movie.title}${year ? ` (${year})` : ""}. Rating: ${movie.vote_average.toFixed(1)} out of 10.`}
        aria-describedby={`movie-${movie.id}-overview`}>
        <div className={styles.posterContainer}>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={imageAlt}
              className={styles.poster}
              loading="lazy"
            />
          ) : (
            <div
              className={styles.posterContainer}
              aria-label={imageAlt}
              role="img">
              <span aria-hidden="true">🎬</span>
              <span className="sr-only">{imageAlt}</span>
            </div>
          )}
          <Rating rating={movie.vote_average} />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>{movie.title}</h2>
          {year && (
            <p className={styles.year} aria-label={`Released in ${year}`}>
              {year}
            </p>
          )}
          <p
            className={styles.overview}
            id={`movie-${movie.id}-overview`}
            aria-label={`Plot summary: ${truncatedOverview}`}>
            {truncatedOverview}
          </p>
        </div>
      </article>
    </li>
  );
}

function Rating({ rating }: { rating: number }) {
  const formattedRating = rating.toFixed(1);

  return (
    <div
      className={styles.rating}
      aria-label={`Rating: ${formattedRating} out of 10 stars`}
      role="img">
      <span aria-hidden="true">★</span>
      <span className={styles.ratingValue} aria-hidden="true">
        {formattedRating}
      </span>
      <span className="sr-only">Rated {formattedRating} out of 10 stars</span>
    </div>
  );
}
