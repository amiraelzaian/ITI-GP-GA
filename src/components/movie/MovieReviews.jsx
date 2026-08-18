import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { getMovieReviews } from "../../api/movieApi";

function getInitial(name) {
  return name?.trim()?.[0]?.toUpperCase() || "?";
}

function ReviewCard({ review }) {
  const rating = review.author_details?.rating;
  const authorName = review.author_details?.username || review.author;

  return (
    <div className="bg-surface border border-border rounded-lg p-4">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-accent text-accent-text flex items-center justify-center font-bold shrink-0">
          {getInitial(authorName)}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-text truncate">{authorName}</p>
          {rating != null && (
            <div className="flex items-center gap-1 text-xs text-text-muted">
              <Star size={12} className="fill-accent text-accent" />
              {rating}/10
            </div>
          )}
        </div>
      </div>

      <p className="mt-3 text-sm text-text-muted line-clamp-5">
        {review.content}
      </p>
    </div>
  );
}

export default function MovieReviews({ movieId }) {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setStatus("loading");
      try {
        const data = await getMovieReviews(movieId);
        if (!cancelled) {
          setReviews(data.results ?? []);
          setStatus("success");
        }
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [movieId]);

  if (status === "loading") return null;
  if (status === "error") return null;
  if (!reviews.length) return null;

  return (
    <section className="mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
        Reviews
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {reviews.slice(0, 6).map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
