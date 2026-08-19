// context/WatchlistContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const WatchlistContext = createContext(null);
const STORAGE_KEY = "watchlist";

export function WatchlistProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const isInWatchlist = (id, mediaType = "movie") =>
    items.some((item) => item.id === id && item.mediaType === mediaType);

  const addToWatchlist = (item, mediaType = "movie") => {
    setItems((prev) => {
      if (prev.some((i) => i.id === item.id && i.mediaType === mediaType)) {
        return prev;
      }
      return [...prev, { ...item, mediaType }];
    });
  };

  const removeFromWatchlist = (id, mediaType = "movie") => {
    setItems((prev) =>
      prev.filter((item) => !(item.id === id && item.mediaType === mediaType)),
    );
  };

  const toggleWatchlist = (item, mediaType = "movie") => {
    if (isInWatchlist(item.id, mediaType)) {
      removeFromWatchlist(item.id, mediaType);
    } else {
      addToWatchlist(item, mediaType);
    }
  };

  const value = {
    items,
    count: items.length,
    isInWatchlist,
    addToWatchlist,
    removeFromWatchlist,
    toggleWatchlist,
  };

  return (
    <WatchlistContext.Provider value={value}>
      {children}
    </WatchlistContext.Provider>
  );
}

export const useWatchlistContext = () => useContext(WatchlistContext);
