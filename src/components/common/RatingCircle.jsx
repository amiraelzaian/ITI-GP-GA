function ratingColor(score) {
  if (score >= 70) return "#16a34a"; // green-600
  if (score >= 40) return "#eab308"; // yellow-500
  return "#dc2626"; // red-600
}

export default function RatingCircle({ score = 0, size = 32 }) {
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.max(0, Math.min(100, score));
  const offset = circumference - (progress / 100) * circumference;
  const color = ratingColor(progress);

  return (
    <div
      className="relative flex items-center justify-center rounded-full bg-surface ring-4 ring-surface"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90">
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="#111827"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth={strokeWidth}
        />
        {/* Progress */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute text-[10px] font-bold text-white">
        {progress}
        <span className="text-[7px] align-top">%</span>
      </span>
    </div>
  );
}
