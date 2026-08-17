import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SearchBar from "../components/common/SearchBar.jsx";
import MovieCard from "../components/movie/MovieCard.jsx";
import TvCard from "../components/tv/TvCard.jsx";
import { searchMovies } from "../api/searchApi.js";
import { searchTvShows } from "../api/tvApi.js";

function SearchResults({ mediaType = "movie" }) {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchFn = mediaType === "tv" ? searchTvShows : searchMovies;

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setError(null);

    searchFn(query)
      .then((data) => {
        if (!ignore) setResults(data.results || []);
      })
      .catch(() => {
        if (!ignore) setError(t("common.loadError"));
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [query, mediaType, t]);

  const handleSearch = (newQuery) => {
    setSearchParams({ query: newQuery });
  };

  return (
    <div className="bg-bg text-text min-h-screen">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar initialValue={query} onSearch={handleSearch} />

        <h1 className="text-lg font-semibold text-text-muted mt-6 mb-4">
          {t("search.resultsFor")} : <span className="text-text">{query}</span>
        </h1>

        {loading && <p className="text-text-muted">{t("common.loading")}</p>}
        {error && <p className="text-accent-secondary">{error}</p>}

        {!loading && !error && results.length === 0 && query && (
          <p className="text-text-muted">{t("search.noResults")}</p>
        )}

        {!loading && !error && results.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {results.map((item) =>
              mediaType === "tv" ? (
                <TvCard key={item.id} item={item} />
              ) : (
                <MovieCard key={item.id} item={item} mediaType="movie" />
              ),
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
