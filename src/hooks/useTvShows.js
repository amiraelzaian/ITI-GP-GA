// useTvShows.js
import { useContext } from "react";
import { TvContext } from "../context/TvContext";

export function useTvShows() {
  const context = useContext(TvContext);
  if (!context) throw new Error("useTvShows must be used within TvProvider");
  return context;
}