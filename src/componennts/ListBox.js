import { useState } from "react";
import MoviesList from "./MoviesList";


export default function ListBox() {
  const [isOpenMovies, setIsOpenMovies] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpenMovies((open) => !open)}
      >
        {isOpenMovies ? "–" : "+"}
      </button>
      {isOpenMovies && <MoviesList />}
    </div>
  );
}
