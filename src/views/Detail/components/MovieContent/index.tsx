import type { Movie } from "@/types";
import { styles } from "./styles";

export type MovieContentProps = {
  movie: Movie;
};

export const MovieContent = ({ movie }: MovieContentProps) => (
  <article aria-labelledby="movie-title">
    <div className={styles.imageContainer}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`Movie poster for ${movie.title}`}
        loading="lazy"
      />
    </div>

    <div className={styles.content}>
      <h1 id="movie-title" tabIndex={-1}>
        {movie.title}
      </h1>

      <section aria-label="Movie details">
        <p className={styles.overview}>{movie.overview}</p>

        <dl className={styles.metadata}>
          <div>
            <dt>Release date</dt>
            <dd>{movie.release_date}</dd>
          </div>

          <div>
            <dt>Rating</dt>
            <dd>
              <span aria-label={`${movie.vote_average} out of 10`}>
                {movie.vote_average}
              </span>
              <span className={styles.votes}>({movie.vote_count} votes)</span>
            </dd>
          </div>

          <div>
            <dt>Popularity score</dt>
            <dd>{movie.popularity}</dd>
          </div>
        </dl>
      </section>
    </div>
  </article>
);
