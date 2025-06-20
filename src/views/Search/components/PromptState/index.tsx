import { useEffect, useState } from "react";
import { styles } from "./styles";
import { getFavMovies } from "@/api/movies";
import type { Movie } from "@/types";
import { MovieItem } from "../MovieItem";
import { useKeyboardNavigation } from "@/hooks";

export function PromptState() {
  const [favMovies, setFavMovies] = useState<Movie[]>([]);

  const { itemRefs } = useKeyboardNavigation<HTMLAnchorElement, Movie>(
    favMovies
  );

  useEffect(() => {
    getFavMovies().then((data) => {
      setFavMovies(data.results.slice(0, 4));
    });
  }, []);

  return (
    <div data-testid="prompt-state" className={styles.statusMessage}>
      <h2 className={styles.title}>Trending Now</h2>
      <ul className={styles.favMovies}>
        {favMovies.map((movie, index) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
          />
        ))}
      </ul>
    </div>
  );
}
