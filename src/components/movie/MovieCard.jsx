import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { IMAGE_BASE_URL } from "../../api/searchApi";
import RatingCircle from "../common/RatingCircle";
import { useWishlist } from "../../hooks/useWishlist";

export default function MovieCard({ item, mediaType = "movie" }) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isWishlisted = isInWishlist(item.id, mediaType);

  const title = item.title || item.name;
  const date = item.release_date || item.first_air_date;
  const score = Math.round((item.vote_average || 0) * 10);
  const detailPath =
    mediaType === "tv" ? `/tv/${item.id}` : `/movie/${item.id}`;

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(item, mediaType);
  };

  return (
    <div className="bg-surface border border-border rounded-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-md">
      {/* Poster */}
      <Link to={detailPath} className="block relative">
        {item.poster_path ? (
          <img
            src={`${IMAGE_BASE_URL}${item.poster_path}`}
            alt={title}
            className="w-full aspect-2/3 object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full aspect-2/3 bg-border flex items-center justify-center text-text-muted text-sm">
            No image
          </div>
        )}
      </Link>

      {/* Rating ring — straddles the poster/content boundary */}
      <div className="relative">
        <div className="absolute -top-4 left-3">
          <RatingCircle score={score} size={32} />
        </div>
      </div>

      {/* Text content */}
      <div className="px-3 pt-5 pb-3">
        <Link
          to={detailPath}
          className="block truncate font-semibold text-text hover:underline"
        >
          {title}
        </Link>

        <div className="flex items-center justify-between mt-1">
          <p className="text-xs text-text-muted">{date}</p>

          <button
            type="button"
            onClick={handleToggleWishlist}
            aria-label="Toggle wishlist"
            className="shrink-0 p-1 -m-1 rounded-md hover:bg-bg"
          >
            <Heart
              size={18}
              className={
                isWishlisted ? "fill-accent text-accent" : "text-text-muted"
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
}
