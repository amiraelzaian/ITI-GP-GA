import WishlistCard from "./WishlistCard";

export default function WishlistGrid({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((item) => (
        <WishlistCard key={`${item.mediaType}-${item.id}`} item={item} />
      ))}
    </div>
  );
}
