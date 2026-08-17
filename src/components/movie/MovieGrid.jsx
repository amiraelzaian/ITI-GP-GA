import MovieCard from "./MovieCard";

function MovieGrid({ movies }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} item={movie} mediaType="movie" />
      ))}
    </div>
  );
}

export default MovieGrid;