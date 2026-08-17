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
    </div>
  );
}

export default TvShows;
