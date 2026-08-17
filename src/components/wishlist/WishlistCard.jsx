import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { IMAGE_BASE_URL } from "../../api/searchApi";
import { useWishlist } from "../../hooks/useWishlist";

export default function WishlistCard({ item }) {
  const { removeFromWishlist } = useWishlist();
  const title = item.title || item.name;
  const date = item.release_date || item.first_air_date;
  const rating = (item.vote_average || 0) / 2; // TMDB بتديها من 10، هنا هنحولها من 5
  const detailPath =
    item.mediaType === "tv" ? `/tv/${item.id}` : `/movie/${item.id}`;

  const handleRemove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    removeFromWishlist(item.id, item.mediaType);
  };

  return (
    <div className="flex gap-4 bg-surface border border-border rounded-xl p-3">
      <Link to={detailPath} className="shrink-0">
        {item.poster_path ? (
          <img
            src={`${IMAGE_BASE_URL}${item.poster_path}`}
            alt={title}
            className="w-28 h-40 object-cover rounded-lg"
            loading="lazy"
          />
        ) : (
          <div className="w-28 h-40 bg-border rounded-lg flex items-center justify-center text-text-muted text-xs">
            No image
          </div>
        )}
      </Link>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <Link
            to={detailPath}
            className="font-bold text-lg text-text hover:underline"
          >
            {title}
          </Link>
          <button
            type="button"
            onClick={handleRemove}
            aria-label="Remove from wishlist"
            className="shrink-0 p-1 -m-1 rounded-md hover:bg-bg"
          >
            <Heart size={20} className="fill-accent text-accent" />
          </button>
        </div>

        <p className="text-xs text-text-muted mt-0.5">{date}</p>

        <div className="flex items-center gap-1.5 mt-1.5">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={15}
                className={
                  i < Math.round(rating)
                    ? "fill-accent text-accent"
                    : "text-border"
                }
              />
            ))}
          </div>
          <span className="text-xs text-text-muted">
            {item.vote_count ?? 0}
          </span>
        </div>

        {item.overview && (
          <p className="text-sm text-text-muted mt-2 line-clamp-3">
            {item.overview}
          </p>
        )}
      </div>
    </div>
  );
}
