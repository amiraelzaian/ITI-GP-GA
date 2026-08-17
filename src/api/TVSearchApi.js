import tmdbFetch from "../hooks/temdbFetch";

export function searchTVs(query, page = 1) {
  return tmdbFetch("/search/tv", { query, page });
}
