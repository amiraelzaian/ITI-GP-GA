// pages/SearchResults.jsx
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SearchBar from "../components/common/SearchBar.jsx";
import MovieCard from "../components/movie/MovieCard.jsx";
import { searchMovies } from "../api/moviesSearchApi.js";
import { searchTVs } from "../api/TVSearchApi.js";
const TABS = {
  MOVIES: "movie",
  TV: "tv",
};

function SearchResults() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const [activeTab, setActiveTab] = useState(TABS.MOVIES);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setError(null);

    const fetchResults =
      activeTab === TABS.MOVIES ? searchMovies(query) : searchTVs(query);

    fetchResults
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
  }, [query, activeTab, t]);

  const handleSearch = (newQuery) => {
    setSearchParams({ query: newQuery });
  };

  return (
    <div className="bg-bg text-text min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar initialValue={query} onSearch={handleSearch} />

        <h1 className="text-lg font-semibold text-text-muted mt-6 mb-4">
          {t("search.resultsFor")} : <span className="text-text">{query}</span>
        </h1>

        <div className="flex gap-4 mb-6 border-b border-border">
          <button
            className={`pb-2 px-1 font-medium transition-colors ${
              activeTab === TABS.MOVIES
                ? "text-accent-primary border-b-2 border-accent-primary"
                : "text-text-muted hover:text-text"
            }`}
            onClick={() => setActiveTab(TABS.MOVIES)}
          >
            {t("search.movies")}
          </button>
          <button
            className={`pb-2 px-1 font-medium transition-colors ${
              activeTab === TABS.TV
                ? "text-accent-primary border-b-2 border-accent-primary"
                : "text-text-muted hover:text-text"
            }`}
            onClick={() => setActiveTab(TABS.TV)}
          >
            {t("search.tvShows")}
          </button>
        </div>

        {loading && <p className="text-text-muted">{t("common.loading")}</p>}
        {error && <p className="text-accent-secondary">{error}</p>}

        {!loading && !error && results.length === 0 && query && (
          <p className="text-text-muted">{t("search.noResults")}</p>
        )}

        {!loading && !error && results.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {results.map((item) => (
              <MovieCard key={item.id} item={item} mediaType={activeTab} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
