function Star({ fillPercent }) {
  return (
    <span className="relative inline-block w-5 h-5">
      <svg viewBox="0 0 24 24" className="absolute inset-0 w-5 h-5 fill-none stroke-text-muted stroke-[1.5]">
        <polygon points="12,2 15,9 22,9 16.5,13.5 18.5,21 12,16.5 5.5,21 7.5,13.5 2,9 9,9" />
      </svg>
      <span
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${fillPercent}%` }}
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-accent stroke-accent">
          <polygon points="12,2 15,9 22,9 16.5,13.5 18.5,21 12,16.5 5.5,21 7.5,13.5 2,9 9,9" />
        </svg>
      </span>
    </span>
  );
}

export default function Rating({ voteAverage = 0, voteCount = 0 }) {
  const starsOutOfFive = Math.max(0, Math.min(5, (voteAverage / 10) * 5));

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => {
          const fillPercent = Math.max(0, Math.min(100, (starsOutOfFive - i) * 100));
          return <Star key={i} fillPercent={fillPercent} />;
        })}
      </div>
      <span className="text-sm text-text-muted">{voteCount.toLocaleString()}</span>
    </div>
  );
}
