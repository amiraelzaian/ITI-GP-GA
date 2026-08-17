import { createContext, useState, useEffect, useCallback } from "react";
import { getNowPlayingMovies } from "../api/movieApi";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = useCallback(async (pageNum) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getNowPlayingMovies(pageNum);
      setMovies(data.results);
      setTotalPages(Math.min(data.total_pages, 500)); // TMDB بيوقف عند 500
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies(page);
  }, [page, fetchMovies]);

  return (
    <MovieContext.Provider
      value={{ movies, page, setPage, totalPages, loading, error }}
    >
      {children}
    </MovieContext.Provider>
  );
}