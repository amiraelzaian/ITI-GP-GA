import TvCard from "./TvCard";

function TvGrid({ shows }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {shows.map((show) => (
        <TvCard key={show.id} item={show} />
      ))}
    </div>
  );
}

export default TvGrid;