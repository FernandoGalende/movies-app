import type { Movie } from "@/types";
import { styles } from "./styles";
import { Link } from "react-router";
import { MOVIE_DETAIL } from "@/router/paths";
import { Image } from "@/components";
import { forwardRef } from "react";

interface MovieItemProps {
  movie: Movie;
}

export const MovieItem = forwardRef<HTMLAnchorElement, MovieItemProps>(
  ({ movie }, ref) => {
    const movieImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const path = MOVIE_DETAIL.replace(":id", movie.id.toString());

    const year = movie.release_date
      ? new Date(movie.release_date).getFullYear()
      : null;

    const imageAlt = movie.poster_path
      ? `Movie poster for ${movie.title}${year ? ` released in ${year}` : ""}`
      : `No poster available for ${movie.title}`;

    return (
      <li className={styles.movieItem}>
        <Link
          ref={ref}
          to={path}
          className={styles.movieCard}
          aria-label={`View details for ${movie.title}${year ? ` (${year})` : ""}. Rating: ${movie.vote_average.toFixed(1)} out of 10.`}
          aria-describedby={`movie-${movie.id}-overview`}>
          <div className={styles.posterContainer}>
            <Image src={movieImage} alt={imageAlt} loading="lazy" />
            <Rating rating={movie.vote_average} />
          </div>

          <div className={styles.content}>
            <h2 className={styles.title}>{movie.title}</h2>
            {year && (
              <p className={styles.year} aria-label={`Released in ${year}`}>
                {year}
              </p>
            )}
          </div>
        </Link>
      </li>
    );
  }
);

function Rating({ rating }: { rating: number }) {
  const formattedRating = rating.toFixed(1);

  return (
    <div
      className={styles.rating}
      aria-label={`Rating: ${formattedRating} out of 10 stars`}>
      <span aria-hidden="true">★</span>
      <span className={styles.ratingValue} aria-hidden="true">
        {formattedRating}
      </span>
      <span className="sr-only">Rated {formattedRating} out of 10 stars</span>
    </div>
  );
}
