// context/WishlistContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext(null);
const STORAGE_KEY = "wishlist";

export function WishlistProvider({ children }) {
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

  const isInWishlist = (id, mediaType = "movie") =>
    items.some((item) => item.id === id && item.mediaType === mediaType);

  const addToWishlist = (item, mediaType = "movie") => {
    setItems((prev) => {
      if (prev.some((i) => i.id === item.id && i.mediaType === mediaType)) {
        return prev;
      }
      return [...prev, { ...item, mediaType }];
    });
  };

  const removeFromWishlist = (id, mediaType = "movie") => {
    setItems((prev) =>
      prev.filter((item) => !(item.id === id && item.mediaType === mediaType)),
    );
  };

  const toggleWishlist = (item, mediaType = "movie") => {
    if (isInWishlist(item.id, mediaType)) {
      removeFromWishlist(item.id, mediaType);
    } else {
      addToWishlist(item, mediaType);
    }
  };

  const value = {
    items,
    count: items.length,
    isInWishlist,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlistContext = () => useContext(WishlistContext);
