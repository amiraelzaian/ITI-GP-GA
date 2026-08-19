import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import Home from "../pages/Home.jsx";
import MovieDetails from "../pages/MovieDetails.jsx";
import TvShows from "../pages/TvShows.jsx";
import TvShowDetails from "../pages/TvShowDetails.jsx";
import Watchlist from "../pages/Watchlist.jsx";
import SearchResults from "../pages/SearchResults.jsx";
import AIAssistant from "../pages/AIAssistant.jsx";
import NotFound from "../pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "movie/:id", element: <MovieDetails /> },
      { path: "tv", element: <TvShows /> },
      { path: "tv/:id", element: <TvShowDetails /> },
      { path: "watchlist", element: <Watchlist /> },
      { path: "search", element: <SearchResults mediaType="movie" /> },
      { path: "tv/search", element: <SearchResults mediaType="tv" /> },
      { path: "assistant", element: <AIAssistant /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
