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

export function getNowPlayingMovies(page = 1) {
  return tmdbFetch("/movie/now_playing", { page });
}

export function getMovieDetails(id) {
  return tmdbFetch(`/movie/${id}`);
}

export function getMovieRecommendations(movieId, page = 1) {
  return tmdbFetch(`/movie/${movieId}/recommendations`, { page });
}

export function getMovieReviews(movieId, page = 1) {
  return tmdbFetch(`/movie/${movieId}/reviews`, { page });
}