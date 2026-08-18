import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTvShowDetails, getTvShowRecommendations } from "../api/tvApi.js";
import TvInfo from "../components/tv/TvInfo.jsx";
import TvRecommendations from "../components/tv/TvRecommendations.jsx";
import Loader from "../components/common/Loader.jsx";
import ErrorMessage from "../components/common/ErrorMessage.jsx";

export default function TvShowDetails() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setStatus("loading");
      try {
        const [details, recs] = await Promise.all([
          getTvShowDetails(id),
          getTvShowRecommendations(id),
        ]);
        if (!cancelled) {
          setShow(details);
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
  if (status === "error") return <ErrorMessage message="Failed to load TV show." />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <TvInfo show={show} />
      <TvRecommendations shows={recommendations} />
    </div>
  );
}