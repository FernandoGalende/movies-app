import type { Movie } from "@/types";
import { styles } from "./styles";
import { Image } from "@/components";

export type MovieContentProps = {
  movie: Movie;
};

export const MovieContent = ({ movie }: MovieContentProps) => (
  <article
    data-testid="movie-detail"
    aria-labelledby="movie-title"
    className={styles.root}>
    <div className={styles.imageContainer}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}asdfasdfafdadasw`}
        alt={`Movie poster for ${movie.title}`}
        loading="lazy" // lazy loading is used to improve the performance of the page only load the image when it is visible
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
            {/* dt is description term */}
            <dt>Rating</dt>
            {/* dd is description details */}
            <dd>
              <span aria-label={`${movie.vote_average} out of 10`}>
                {movie.vote_average.toFixed(1)}
              </span>
              <span className={styles.votes}>({movie.vote_count} votes)</span>
            </dd>
          </div>

          <div>
            <dt>Popularity score</dt>
            <dd>{movie.popularity.toFixed(1)}</dd>
          </div>
        </dl>
      </section>
    </div>
  </article>
);
