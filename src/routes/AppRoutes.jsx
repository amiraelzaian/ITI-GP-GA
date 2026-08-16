import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import MovieDetails from '../pages/MovieDetails.jsx';
import TvShows from '../pages/TvShows.jsx';
import TvShowDetails from '../pages/TvShowDetails.jsx';
import Wishlist from '../pages/Wishlist.jsx';
import SearchResults from '../pages/SearchResults.jsx';
import AIAssistant from '../pages/AIAssistant.jsx';
import NotFound from '../pages/NotFound.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/tv" element={<TvShows />} />
      <Route path="/tv/:id" element={<TvShowDetails />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/assistant" element={<AIAssistant />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
