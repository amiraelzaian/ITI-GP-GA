import { createContext, useState, useEffect, useCallback } from "react";
import { getPopularTvShows } from "../api/tvApi";

export const TvContext = createContext();

export function TvProvider({ children }) {
  const [tvShows, setTvShows] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTvShows = useCallback(async (pageNum) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getPopularTvShows(pageNum);
      setTvShows(data.results);
      setTotalPages(Math.min(data.total_pages, 500));
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTvShows(page);
  }, [page, fetchTvShows]);

  return (
    <TvContext.Provider
      value={{ tvShows, page, setPage, totalPages, loading, error }}
    >
      {children}
    </TvContext.Provider>
  );
}