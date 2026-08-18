import MovieCard from "../movie/MovieCard";
import EmptyState from "../common/EmptyState";

export default function TvRecommendations({ shows = [] }) {
  if (shows.length === 0) {
    return <EmptyState title="No recommendations found." />;
  }

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-text mb-4">Recommendations</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {shows.map((show) => (
          <MovieCard key={show.id} item={show} mediaType="tv" />
        ))}
      </div>
    </section>
  );
}
