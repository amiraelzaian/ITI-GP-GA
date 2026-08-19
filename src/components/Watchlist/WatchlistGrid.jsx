import WatchlistCard from "./WatchlistCard";

export default function WatchlistGrid({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((item) => (
        <WatchlistCard key={`${item.mediaType}-${item.id}`} item={item} />
      ))}
    </div>
  );
}
