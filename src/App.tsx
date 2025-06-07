import { useEffect, useState } from "react";

import "./App.css";
import { getMovies } from "@/api/movies";
import type { Movie } from "./types";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies({ query: "batman", page: "1" }).then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <>
      <h1>Movies App</h1>
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>
    </>
  );
}

export default App;
