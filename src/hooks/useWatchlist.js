// hooks/useWatchlist.js
import { useWatchlistContext } from "../context/WatchlistContext";

export function useWatchlist() {
  const ctx = useWatchlistContext();
  if (!ctx) {
    throw new Error("useWatchlist must be used within a WatchlistProvider");
  }
  return ctx;
}
