// hooks/useWishlist.js
import { useWishlistContext } from "../context/WishlistContext";

export function useWishlist() {
  const ctx = useWishlistContext();
  if (!ctx) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return ctx;
}
