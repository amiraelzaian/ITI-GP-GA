// useMovies.js
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

export function useMovies() {
  const context = useContext(MovieContext);
  if (!context) throw new Error("useMovies must be used within MovieProvider");
  return context;
}