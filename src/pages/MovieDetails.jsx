import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getMovieRecommendations } from "../api/movieApi.js";
import MovieInfo from "../components/movie/MovieInfo.jsx";
import MovieRecommendations from "../components/movie/MovieRecommendations.jsx";
import MovieReviews from "../components/movie/MovieReviews.jsx";
import Loader from "../components/common/Loader.jsx";
import ErrorMessage from "../components/common/ErrorMessage.jsx";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setStatus("loading");
      try {
        const [details, recs] = await Promise.all([
          getMovieDetails(id),
          getMovieRecommendations(id),
        ]);
        if (!cancelled) {
          setMovie(details);
          setRecommendations(recs.results ?? []);
          setStatus("success");
        }
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (status === "loading") return <Loader />;
  if (status === "error") return <ErrorMessage message="Failed to load movie." />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <MovieInfo movie={movie} />
      <MovieRecommendations movies={recommendations} />
      <MovieReviews movieId={id} />
    </div>
  );
}