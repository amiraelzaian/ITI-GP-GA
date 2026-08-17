// api/searchApi.js — trimmed to just what's used right now
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

async function tmdbFetch(path, params = {}) {
  const url = new URL(`${BASE_URL}${path}`);
  url.searchParams.set("api_key", API_KEY);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, value);
    }
  });

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`TMDB request failed: ${res.status}`);
  }
  return res.json();
}

export function searchMovies(query, page = 1) {
  return tmdbFetch("/search/movie", { query, page });
}

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
