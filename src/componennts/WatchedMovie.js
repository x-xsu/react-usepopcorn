
export default function WatchedMovie({ movie }) {
  return (
    <li>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button className="btn-delete">X</button>
      </div>
    </li>
  );
}
