import { ArrowLeft, Heart, Link2, ArrowRight } from "lucide-react";
import { IMAGE_BASE_URL } from "../../api/searchApi";
import Rating from "../common/Rating";
import { useWatchlist } from "../../hooks/useWatchlist";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function MovieInfo({ movie }) {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const { isInWatchlist, toggleWatchlist } = useWatchlist();

  if (!movie) return null;

  const isWatchlisted = isInWatchlist(movie.id, "movie");

  const languages =
    movie.spoken_languages?.map((l) => l.english_name).join(", ") ||
    movie.original_language?.toUpperCase();

  const studio = movie.production_companies?.find((c) => c.logo_path);

  const handleToggleWatchlist = () => {
    toggleWatchlist(movie, "movie");
  };

  return (
    <section className="flex flex-col bg-surface p-2 rounded-2xl">
      <button
        dir="ltr"
        className="flex items-center gap-2 p-1 mb-2 self-start"
        onClick={() => navigate(-1)}
      >
        {i18n.dir() === "ltr" && <ArrowLeft />}
        <span>{t("Backbtn.title")}</span>
        {i18n.dir() === "rtl" && <ArrowRight />}
      </button>
      <div className="flex flex-col md:flex-row gap-8 relative bg-card">
        {movie.poster_path ? (
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            className="w-full md:w-80 rounded-2xl object-cover shrink-0 shadow-md"
          />
        ) : (
          <div className="w-full md:w-80 aspect-2/3 bg-border rounded-2xl flex items-center justify-center text-text-muted text-sm shrink-0">
            No image
          </div>
        )}

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-text">{movie.title}</h1>
              {movie.release_date && (
                <p className="text-sm text-text-muted mt-1">
                  {movie.release_date}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={handleToggleWatchlist}
              aria-label="Toggle Watchlist"
              className="shrink-0 p-1 rounded-md hover:bg-surface"
            >
              <Heart
                size={28}
                className={
                  isWatchlisted ? "fill-accent text-accent" : "text-text-muted"
                }
              />
            </button>
          </div>

          <div className="mt-3">
            <Rating
              voteAverage={movie.vote_average}
              voteCount={movie.vote_count}
              size={20}
            />
          </div>

          <p className="mt-4 leading-relaxed text-text">{movie.overview}</p>

          {movie.genres?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="px-4 py-1.5 rounded-full bg-accent text-text text-sm font-medium"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-8 mt-5 text-sm">
            {movie.runtime > 0 && (
              <p>
                <span className="font-semibold text-text">Duration: </span>
                <span className="text-text-muted">{movie.runtime} Min.</span>
              </p>
            )}
            {languages && (
              <p>
                <span className="font-semibold text-text">Languages: </span>
                <span className="text-text-muted">{languages}</span>
              </p>
            )}
          </div>

          {studio && (
            <img
              src={`${IMAGE_BASE_URL}${studio.logo_path}`}
              alt={studio.name}
              className="h-10 mt-5 object-contain"
            />
          )}

          {movie.homepage && (
            <a
              href={movie.homepage}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full border border-border text-sm text-text hover:bg-surface"
            >
              Website <Link2 size={14} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
