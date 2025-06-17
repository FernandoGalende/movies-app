import { useEffect, useState } from "react";
import { styles } from "./styles";
import { getFavMovies } from "@/api/movies";
import type { Movie } from "@/types";
import { MovieItem } from "../MovieItem";

export function PromptState() {
  const [favMovies, setFavMovies] = useState<Movie[]>([]);
  useEffect(() => {
    getFavMovies().then((data) => {
      setFavMovies(data.results);
    });
  }, []);

  return (
    <div data-testid="prompt-state" className={styles.statusMessage}>
      <span>Favorites movies</span>
      <div className={styles.favMovies}>
        {favMovies.slice(0, 4).map((movie) => (
          <MovieItem key={movie.id} movie={movie}></MovieItem>
        ))}
      </div>
    </div>
  );
}
