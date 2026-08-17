import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SearchBar from "../components/common/SearchBar.jsx";
<<<<<<< HEAD
=======
import TvGrid from "../components/tv/TvGrid.jsx";
import Pagination from "../components/common/Pagination.jsx";
import Loader from "../components/common/Loader.jsx";
import ErrorMessage from "../components/common/ErrorMessage.jsx";
import EmptyState from "../components/common/EmptyState.jsx";
import { useTvShows } from "../hooks/useTvShows.js";
>>>>>>> eeaa0f7e36a4f4f239eff22462ec7d59b9c076cd

function TvShows() {
  const { t } = useTranslation();
  const navigate = useNavigate();
<<<<<<< HEAD

  const handleSearch = (query) => {
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };
  return (
    <div className="bg-bg text-text min-h-screen ">
      <section className="max-w-7xl mx-4 my-4  bg-surface px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-start gap-4 border-0 rounded-2xl shadow-md ">
        <h1 className="text-2xl sm:text-3xl font-extrabold">
          {t("TV.welcome")}
        </h1>
        <p className="text-text-muted">{t("TV.subtitle")}</p>
        <SearchBar onSearch={handleSearch} />
      </section>
=======
  const { tvShows, page, setPage, totalPages, loading, error } = useTvShows();

  const handleSearch = (query) => {
    navigate(`/tv/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <div className="bg-bg text-text min-h-screen">
      <section className="max-w-7xl mx-4 my-4">
        <SearchBar onSearch={handleSearch} />
      </section>

      <section className="max-w-7xl mx-4 my-4">
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
>>>>>>> eeaa0f7e36a4f4f239eff22462ec7d59b9c076cd
    </div>
  );
}

export default TvShows;