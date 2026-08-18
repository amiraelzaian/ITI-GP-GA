import { Star } from "lucide-react";

export default function Rating({ voteAverage = 0, voteCount = 0, size = 18 }) {
  const starsOutOfFive = (voteAverage || 0) / 2;

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={size}
            className={
              i < Math.round(starsOutOfFive)
                ? "fill-accent text-accent"
                : "text-border"
            }
          />
        ))}
      </div>
      <span className="text-sm text-text-muted">
        {(voteCount ?? 0).toLocaleString()}
      </span>
    </div>
  );
}
