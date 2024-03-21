export default function NumResults({ movies }) {
  return (
    <div className="num-results">
      Found <strong>{movies.length}</strong> results
    </div>
  );
}
