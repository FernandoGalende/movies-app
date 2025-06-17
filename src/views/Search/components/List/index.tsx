import type { Movie } from "@/types";
import { styles } from "./styles";
import { MovieItem } from "../MovieItem";
import { useKeyboardNavigation } from "@/hooks";

interface ListProps {
  movies: Movie[];
}

export function List({ movies }: ListProps) {
  const { itemRefs } = useKeyboardNavigation<HTMLAnchorElement>(movies);

  return (
    <ul
      className={styles.moviesList}
      role="listbox"
      aria-label="Search results">
      {movies.map((movie, index) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
        />
      ))}
    </ul>
  );
}
