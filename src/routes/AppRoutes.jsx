// router/index.jsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import Home from "../pages/Home.jsx";
import MovieDetails from "../pages/MovieDetails.jsx";
import TvShows from "../pages/TvShows.jsx";
import TvShowDetails from "../pages/TvShowDetails.jsx";
import Wishlist from "../pages/Wishlist.jsx";
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
      { path: "wishlist", element: <Wishlist /> },
      { path: "search", element: <SearchResults /> },
      { path: "assistant", element: <AIAssistant /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
