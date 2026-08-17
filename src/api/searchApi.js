import tmdbFetch from "../hooks/temdbFetch";

export function searchMovies(query, page = 1) {
  return tmdbFetch("/search/movie", { query, page });
}

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
