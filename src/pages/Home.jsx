import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SearchBar from "../components/common/SearchBar.jsx";
import MovieGrid from "../components/movie/MovieGrid.jsx";
import Pagination from "../components/common/Pagination.jsx";
import Loader from "../components/common/Loader.jsx";
import ErrorMessage from "../components/common/ErrorMessage.jsx";
import EmptyState from "../components/common/EmptyState.jsx";
import { useMovies } from "../hooks/useMovies.js";

function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { movies, page, setPage, totalPages, loading, error } = useMovies();

  const handleSearch = (query) => {
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <div className="bg-bg text-text min-h-screen">
      <section className="max-w-7xl mx-4 my-4 bg-surface px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-start gap-4 border-0 rounded-2xl shadow-md">
        <h1 className="text-2xl sm:text-3xl font-extrabold">{t("home.welcome")}</h1>
        <p className="text-text-muted">{t("home.subtitle")}</p>
        <SearchBar onSearch={handleSearch} />
      </section>

      <section className="max-w-7xl mx-4 my-4">
        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && movies.length === 0 && <EmptyState />}
        {!loading && !error && movies.length > 0 && (
          <>
            <MovieGrid movies={movies} />
            <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
          </>
        )}
      </section>
    </div>
  );
}

export default Home;
