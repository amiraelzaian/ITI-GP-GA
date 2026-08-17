import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SearchBar from "../components/common/SearchBar.jsx";
import TvGrid from "../components/tv/TvGrid.jsx";
import Pagination from "../components/common/Pagination.jsx";
import Loader from "../components/common/Loader.jsx";
import ErrorMessage from "../components/common/ErrorMessage.jsx";
import EmptyState from "../components/common/EmptyState.jsx";
import { useTvShows } from "../hooks/useTvShows.js";

function TvShows() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { tvShows, page, setPage, totalPages, loading, error } = useTvShows();

  const handleSearch = (query) => {
    navigate(`/tv/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <div className="bg-bg text-text min-h-screen p-4">
      <section className="w-full  my-4 bg-surface px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-start gap-4 border-0 rounded-2xl shadow-md">
        <h1 className="text-2xl sm:text-3xl font-extrabold">
          {t("TV.welcome")}
        </h1>
        <p className="text-text-muted">{t("home.subtitle")}</p>
        <SearchBar onSearch={handleSearch} />
      </section>

      <section className="w-ful   my-4">
        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && tvShows.length === 0 && <EmptyState />}
        {!loading && !error && tvShows.length > 0 && (
          <>
            <TvGrid shows={tvShows} />
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </>
        )}
      </section>
    </div>
  );
}

export default TvShows;
